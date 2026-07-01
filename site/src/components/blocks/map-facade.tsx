"use client";

import { useState } from "react";
import { MapPin, Play } from "lucide-react";
import { cn } from "@/lib/utils";

/*
  MapFacade — carrega o iframe do Google Maps só após clique do usuário.

  Por quê: o embed do Google define cookies de terceiros (NID) já no load,
  o que (a) reprova em "Best Practices" do Lighthouse e (b) é ruído de LGPD —
  relevante para um site de advocacia. A fachada mostra um placeholder leve e
  injeta o iframe apenas sob interação, zerando cookies de terceiros no 1º load
  e adiando ~1 requisição pesada (ganho de performance).

  `className` é aplicado tanto à fachada (button) quanto ao iframe, para o
  componente herdar o layout do container em cada página (aspect ratio, flex-1).
*/
export function MapFacade({
  src,
  title,
  className,
}: {
  src: string;
  title: string;
  className?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        title={title}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={className}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      aria-label={`Carregar mapa interativo — ${title}`}
      className={cn(
        "group relative flex flex-col items-center justify-center gap-4 bg-navy text-paper outline-none",
        "transition-colors duration-300 hover:bg-navy-deep",
        "focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-inset",
        className,
      )}
    >
      {/* Malha sutil sugerindo um mapa, puramente decorativa. */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,rgba(255,243,105,0.6)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,243,105,0.6)_1px,transparent_1px)] [background-size:34px_34px]"
      />
      <span
        aria-hidden
        className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/30 transition-transform duration-300 group-hover:scale-105"
      >
        <MapPin className="h-5 w-5 text-gold" />
      </span>
      <span className="relative flex items-center gap-2 text-sm font-medium">
        <Play className="h-3.5 w-3.5 fill-current" />
        Ver mapa interativo
      </span>
      <span className="relative max-w-[15rem] text-pretty px-6 text-center text-xs leading-relaxed text-paper/55">
        Carregamos o Google Maps só ao seu clique — mais privacidade e velocidade.
      </span>
    </button>
  );
}
