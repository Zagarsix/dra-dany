// src/lib/utils.ts
// cn() combina clsx (lógica condicional) con tailwind-merge (elimina
// clases Tailwind duplicadas/conflictivas). 
// Elimina también el problema del \r\n
// en template literals que causaba el error de hydration.

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}