import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type Crumb = { name: string; href: string };

/** Trilha de navegação para páginas internas. O último item é a página atual. */
export function Breadcrumb({
  trail,
  className,
  onDark = false,
}: {
  trail: Crumb[];
  className?: string;
  /** Variante para uso sobre fundo navy (banner). */
  onDark?: boolean;
}) {
  return (
    <nav aria-label="Trilha de navegação" className={className}>
      <ol
        className={cn(
          "flex flex-wrap items-center gap-1.5 text-xs",
          onDark ? "text-paper/55" : "text-faint",
        )}
      >
        {trail.map((crumb, i) => {
          const last = i === trail.length - 1;
          return (
            <li key={crumb.href} className="flex items-center gap-1.5">
              {i > 0 && (
                <ChevronRight
                  aria-hidden
                  className={cn("h-3 w-3", onDark ? "text-paper/35" : "text-faint/50")}
                />
              )}
              {last ? (
                <span
                  aria-current="page"
                  className={onDark ? "text-paper/90" : "text-ink/80"}
                >
                  {crumb.name}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className={cn(
                    "outline-none transition-colors",
                    onDark
                      ? "hover:text-gold focus-visible:text-gold"
                      : "hover:text-navy focus-visible:text-navy",
                  )}
                >
                  {crumb.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
