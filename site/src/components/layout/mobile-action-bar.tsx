"use client";

import { MessageCircle, Phone } from "lucide-react";
import { whatsappUrl, TEL } from "@/lib/site-config";
import { trackWhatsappClick, trackCtaClick } from "@/lib/tracking";

/**
 * Barra de conversão fixa no rodapé em telas pequenas.
 * WhatsApp em NAVY (nunca verde-limão), conforme decisão do cliente.
 */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-paper/90 backdrop-blur-md lg:hidden">
      <div className="grid grid-cols-2 gap-px bg-hairline pb-[env(safe-area-inset-bottom)]">
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsappClick("mobile_bar")}
          className="flex items-center justify-center gap-2 bg-navy py-4 text-[0.8rem] font-medium uppercase tracking-[0.14em] text-paper outline-none transition-colors hover:bg-navy-deep focus-visible:bg-navy-deep"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
        <a
          href={TEL}
          onClick={() => trackCtaClick("call", "mobile_bar")}
          className="flex items-center justify-center gap-2 bg-paper py-4 text-[0.8rem] font-medium uppercase tracking-[0.14em] text-navy outline-none transition-colors hover:bg-card focus-visible:bg-card"
        >
          <Phone className="h-4 w-4" />
          Ligar
        </a>
      </div>
    </div>
  );
}
