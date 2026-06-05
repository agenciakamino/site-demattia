import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type Crumb = { name: string; href: string };

/** Trilha de navegação para páginas internas. O último item é a página atual. */
export function Breadcrumb({ trail, className }: { trail: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Trilha de navegação" className={className}>
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-faint">
        {trail.map((crumb, i) => {
          const last = i === trail.length - 1;
          return (
            <li key={crumb.href} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight aria-hidden className="h-3 w-3 text-faint/50" />}
              {last ? (
                <span aria-current="page" className="text-ink/80">
                  {crumb.name}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className={cn(
                    "outline-none transition-colors hover:text-navy focus-visible:text-navy",
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
