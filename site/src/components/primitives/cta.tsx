"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { trackWhatsappClick, trackCtaClick } from "@/lib/tracking";

const ctaVariants = cva(
  "group inline-flex items-center justify-center gap-2.5 whitespace-nowrap font-medium uppercase transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      // Eixo de cor — apenas paleta/estado, sem geometria.
      variant: {
        // Primário sobre fundo claro: navy sólido
        solid: "bg-navy text-paper hover:bg-navy-deep focus-visible:ring-navy",
        // Primário sobre fundo navy: papel claro
        onNavy: "bg-paper text-navy hover:bg-white focus-visible:ring-gold",
        // Secundário: contorno
        outline:
          "border border-ink/25 text-ink hover:border-navy hover:bg-navy hover:text-paper focus-visible:ring-navy",
        // Secundário sobre navy: contorno claro
        outlineOnNavy:
          "border border-paper/30 text-paper/90 hover:border-paper hover:text-paper focus-visible:ring-gold",
      },
      // Eixo de tamanho — padding + escala tipográfica.
      size: {
        // Padrão de seção (heros, CTAs de bloco).
        md: "px-8 py-4 text-[0.78rem] tracking-[0.18em]",
        // Compacto para o header e barras densas.
        sm: "px-5 py-2.5 text-[0.72rem] tracking-[0.12em]",
      },
    },
    defaultVariants: { variant: "solid", size: "md" },
  },
);

type CtaProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof ctaVariants> & {
    /** Tipo de rastreio disparado no clique. */
    track?: "whatsapp" | "cta" | "none";
    /** Origem do clique (qual seção/CTA converteu). */
    source?: string;
    /** Rótulo para eventos de CTA não-WhatsApp. */
    trackLabel?: string;
  };

/** Botão-âncora de conversão, com microinteração e rastreio de clique. */
export function Cta({
  variant,
  size,
  track = "none",
  source = "unknown",
  trackLabel = "",
  className,
  children,
  onClick,
  ...props
}: CtaProps) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (track === "whatsapp") trackWhatsappClick(source);
    else if (track === "cta") trackCtaClick(trackLabel, source);
    onClick?.(e);
  }

  return (
    <a className={cn(ctaVariants({ variant, size }), className)} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
