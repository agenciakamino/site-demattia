import { cn } from "@/lib/utils";

type EyebrowProps = React.HTMLAttributes<HTMLElement> & {
  /** Variante de cor conforme o fundo da seção. */
  onDark?: boolean;
  /** Mostra o filete dourado de assinatura à esquerda. */
  tick?: boolean;
  /** Elemento renderizado — use "h2" quando o rótulo introduz um bloco com headings internos. */
  as?: "p" | "h2";
};

/** Olho/rótulo de seção: caixa-alta, tracking largo, sóbrio. */
export function Eyebrow({
  onDark = false,
  tick = true,
  as: Tag = "p",
  className,
  children,
  ...props
}: EyebrowProps) {
  return (
    <Tag
      className={cn(
        "inline-flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.28em]",
        onDark ? "text-paper/60" : "text-faint",
        className,
      )}
      {...props}
    >
      {tick && (
        <span
          aria-hidden
          className="h-px w-6 bg-gold"
        />
      )}
      {children}
    </Tag>
  );
}
