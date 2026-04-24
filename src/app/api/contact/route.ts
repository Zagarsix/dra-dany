// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { resend } from "@/lib/resend";
import { ContactFormData } from "@/types";

// ── HELPER: Enviar notificación por WhatsApp via CallMeBot ──
async function sendWhatsApp(data: ContactFormData): Promise<void> {
  const apiKey = process.env.CALLMEBOT_API_KEY;
  const phone  = process.env.CALLMEBOT_PHONE;   // ej: "56912345678" (sin +)

  // Si no están configuradas las vars de entorno, solo logueamos y seguimos
  // El email igual se enviará, el WhatsApp es bonus
  if (!apiKey || !phone) {
    console.warn("CallMeBot no configurado — saltando WhatsApp");
    return;
  }

  // Armamos el mensaje con formato simple. CallMeBot lo mostrará tal cual en WhatsApp.
  const message = encodeURIComponent(
    `📅 *Nueva cita agendada*\n` +
    `👤 ${data.nombre} ${data.apellido}\n` +
    `📱 ${data.whatsapp}\n` +
    `✉️ ${data.email}\n` +
    `🦷 ${data.servicio}\n` +
    `💬 "${data.mensaje.slice(0, 100)}${data.mensaje.length > 100 ? "..." : ""}"`
  );

  // CallMeBot usa una petición GET simple a esta URL
  const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${message}&apikey=${apiKey}`;
  
  await fetch(url);
  // No necesitamos procesar la respuesta de CallMeBot
}

// ── HANDLER POST — recibe el formulario ─────────────────────
export async function POST(req: NextRequest) {
  try {
    // 1. Parseamos el body de la petición
    const body: ContactFormData = await req.json();

    // 2. Validación básica en el servidor
    //    (el cliente también valida)
    const { nombre, apellido, email, whatsapp, servicio, mensaje } = body;
    if (!nombre || !email || !servicio || !mensaje) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    // 3. Enviamos email y WhatsApp en paralelo con Promise.allSettled
    //    allSettled (vs Promise.all) permite que uno falle sin cancelar el otro
    const [emailResult, _waResult] = await Promise.allSettled([
      
      // ── EMAIL VIA RESEND ──────────────────────────────────
      resend.emails.send({
        from:    "Formulario Dra. Dany <onboarding@resend.dev>",
        // ↑ Durante desarrollo se usa el dominio de Resend.
        //   Cuando exista dominio propio, se cambia a: "contacto@dradany.cl"
        to:      "dany.pacheco.a@gmail.com",
        subject: `📅 Nueva consulta de ${nombre} ${apellido} — ${servicio}`,
        html: `
          <div style="font-family:sans-serif; max-width:600px; margin:0 auto; padding:24px; background:#f9f9f9; border-radius:12px;">
            <h2 style="color:#c9627e; margin-bottom:16px;">Nueva solicitud de cita</h2>
            
            <table style="width:100%; border-collapse:collapse;">
              <tr>
                <td style="padding:8px 0; color:#666; width:140px;">Nombre</td>
                <td style="padding:8px 0; font-weight:600;">${nombre} ${apellido}</td>
              </tr>
              <tr>
                <td style="padding:8px 0; color:#666;">Email</td>
                <td style="padding:8px 0;">${email}</td>
              </tr>
              <tr>
                <td style="padding:8px 0; color:#666;">WhatsApp</td>
                <td style="padding:8px 0;">${whatsapp}</td>
              </tr>
              <tr>
                <td style="padding:8px 0; color:#666;">Servicio</td>
                <td style="padding:8px 0; font-weight:600; color:#c9627e;">${servicio}</td>
              </tr>
            </table>
            
            <div style="margin-top:16px; padding:16px; background:#fff; border-radius:8px; border-left:4px solid #c9627e;">
              <p style="color:#666; margin-bottom:8px; font-size:14px;">Mensaje:</p>
              <p style="color:#333;">${mensaje}</p>
            </div>
            
            <p style="margin-top:24px; font-size:12px; color:#999;">
              Enviado desde el formulario de dradany.vercel.app
            </p>
          </div>
        `,
      }),

      // ── WHATSAPP VIA CALLMEBOT ────────────────────────────
      sendWhatsApp(body),
    ]);

    // 4. Si el email falló, retornamos error
    if (emailResult.status === "rejected") {
      console.error("Error enviando email:", emailResult.reason);
      return NextResponse.json(
        { error: "Error al enviar el mensaje. Intenta nuevamente." },
        { status: 500 }
      );
    }

    // 5. Todo OK
    return NextResponse.json(
      { message: "Mensaje enviado correctamente" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error en /api/contact:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}