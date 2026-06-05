import Image from "next/image";
import { cn } from "@/lib/utils";

/*
  Lockup da marca composto: tile do monograma DM (asset autossuficiente, navy
  com DM amarelo) + wordmark tipográfico. Escolha deliberada para nitidez em
  qualquer resolução e fundo, evitando o PNG horizontal rasterizado (fundo
  branco). ▶ TROCAR pelo SVG vetorial oficial quando o cliente enviar.
  Assets de referência: public/brand/logo-horizontal.png e logo-dm.png.
*/

type BrandProps = {
  /** "light" = sobre fundo claro (header) · "dark" = sobre navy (rodapé). */
  variant?: "light" | "dark";
  className?: string;
  /** Mostra a linha de registro OAB/SC sob o descritor. */
  showRegistry?: boolean;
};

export function Brand({
  variant = "light",
  className,
  showRegistry = false,
}: BrandProps) {
  const isDark = variant === "dark";

  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <Image
        src="/brand/logo-dm.png"
        alt=""
        width={44}
        height={44}
        priority
        className={cn(
          "h-10 w-10 rounded-[0.6rem] shadow-sm md:h-11 md:w-11",
          isDark && "ring-1 ring-paper/15",
        )}
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg font-medium tracking-tight md:text-xl",
            isDark ? "text-paper" : "text-navy",
          )}
        >
          De Mattia
        </span>
        <span
          className={cn(
            "mt-1 text-[0.6rem] font-medium uppercase tracking-[0.3em]",
            isDark ? "text-paper/55" : "text-faint",
          )}
        >
          Advogados Associados
        </span>
        {showRegistry && (
          <span
            className={cn(
              "nums mt-1 text-[0.6rem] uppercase tracking-[0.2em]",
              isDark ? "text-paper/65" : "text-faint",
            )}
          >
            OAB/SC 4011/2017
          </span>
        )}
      </span>
    </span>
  );
}
