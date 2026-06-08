import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/** Link "ver mais" com sublinhado dourado no hover e seta que desliza. */
export function SectionLink({
  href,
  children,
  className,
  onDark = false,
  newTab = false,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onDark?: boolean;
  /** Abre o destino em nova aba (links da home → páginas dedicadas). */
  newTab?: boolean;
}) {
  // Em nova aba, a seta diagonal comunica melhor a ação do que a horizontal.
  const Arrow = newTab ? ArrowUpRight : ArrowRight;
  return (
    <Link
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      className={cn(
        "group inline-flex items-center gap-2 text-sm font-medium outline-none transition-colors",
        onDark
          ? "text-paper hover:text-gold focus-visible:text-gold"
          : "text-navy hover:text-navy-deep focus-visible:text-navy-deep",
        className,
      )}
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
      </span>
      <Arrow
        className={cn(
          "h-4 w-4 transition-transform duration-300",
          newTab
            ? "group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            : "group-hover:translate-x-1",
        )}
      />
    </Link>
  );
}
