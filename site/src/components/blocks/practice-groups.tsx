import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/primitives/reveal";
import { PRACTICE_AREAS } from "@/lib/content";

/**
 * Bloco editorial dos 2 grupos de atuação com subdivisões numeradas.
 * Cada subárea linka para a sua página dedicada. Reutilizado na home e em
 * /areas-de-atuacao.
 */
export function PracticeGroups() {
  return (
    <div className="flex flex-col gap-16 md:gap-20">
      {PRACTICE_AREAS.map((group, gi) => (
        <div key={group.key} className="grid gap-8 md:grid-cols-12 md:gap-12">
          {/* Rótulo do grupo */}
          <Reveal className="md:col-span-4">
            <div className="md:sticky md:top-28">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-faint/70">
                Grupo {gi === 0 ? "A" : "B"}
              </span>
              <h3 className="font-display mt-2 text-[clamp(1.5rem,2.5vw,2rem)] font-normal leading-tight text-navy">
                <Link
                  href={`/areas-de-atuacao/${group.slug}`}
                  className="outline-none transition-colors hover:text-navy-deep focus-visible:underline"
                >
                  {group.group}
                </Link>
              </h3>
              <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-faint">
                {group.lead}
              </p>
            </div>
          </Reveal>

          {/* Subdivisões numeradas — cada uma linka para a sua página */}
          <Stagger as="ul" className="md:col-span-8">
            {group.items.map((item, i) => (
              <StaggerItem as="li" key={item.slug}>
                <Link
                  href={`/areas-de-atuacao/${group.slug}/${item.slug}`}
                  className="group relative grid grid-cols-[auto_1fr_auto] items-baseline gap-x-5 border-t border-hairline py-7 outline-none transition-colors first:border-t-0 focus-visible:bg-navy/[0.03] md:py-8"
                >
                  <span
                    aria-hidden
                    className="absolute left-0 top-7 h-0 w-px bg-gold transition-all duration-500 group-hover:h-[calc(100%-3.5rem)] md:top-8"
                  />
                  <span className="nums pt-1 text-sm font-medium tabular-nums text-faint/70 transition-colors duration-300 group-hover:text-navy">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    <span className="font-display block text-xl font-normal text-navy md:text-[1.4rem]">
                      {item.title}
                    </span>
                    <span className="mt-2 block text-pretty text-sm leading-relaxed text-faint md:text-[0.95rem]">
                      {item.description}
                    </span>
                  </span>
                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-faint/50 transition-all duration-300 group-hover:text-navy group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      ))}
    </div>
  );
}
