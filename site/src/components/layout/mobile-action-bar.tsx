"use client";

import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site-config";
import { trackWhatsappClick } from "@/lib/tracking";

/**
 * Botão flutuante de conversão em telas pequenas.
 * Apenas o WhatsApp, em NAVY (nunca verde-limão), conforme decisão do cliente.
 * Ancorado ao canto inferior direito, respeitando a safe-area do dispositivo.
 */
export function MobileActionBar() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsappClick("mobile_fab")}
      aria-label="Falar com um especialista no WhatsApp"
      style={{
        right: "max(1.25rem, env(safe-area-inset-right))",
        bottom: "max(1.25rem, env(safe-area-inset-bottom))",
      }}
      className="group fixed z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-navy text-paper shadow-lg shadow-navy/30 outline-none transition-[transform,background-color] duration-300 hover:bg-navy-deep focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 focus-visible:ring-offset-paper active:scale-95 lg:hidden"
    >
      {/* Halo dourado sutil no entorno — "joia" dosada */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-gold/30"
      />
      <MessageCircle className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
    </a>
  );
}
