// src/lib/resend.ts
import { Resend } from "resend";

// Creamos UNA sola instancia de Resend para toda la app.
export const resend = new Resend(process.env.RESEND_API_KEY);