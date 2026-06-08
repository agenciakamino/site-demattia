import Link from "next/link";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Reveal, Stagger, StaggerItem } from "@/components/primitives/reveal";
import { SectionLink } from "@/components/primitives/section-link";
import { PRACTICE_AREAS, PRACTICE_PARTNERS_NOTE } from "@/lib/content";

/**
 * Teaser de atuação na home — apresenta os 2 grupos de forma enxuta (rótulo,
 * lead e os títulos das subáreas), levando à página dedicada. O detalhamento
 * completo vive em /areas-de-atuacao (block PracticeGroups, não reusado aqui).
 */
export function PracticeAreas() {
  return (
    <Section id="atuacao" space="loose" className="pb-16 md:pb-20">
      <Container size="xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">Áreas de atuação</Eyebrow>
          <h2 className="font-display mt-6 text-balance text-[clamp(1.9rem,4vw,3rem)] font-normal leading-tight text-navy">
            Como atuamos para proteger a sua empresa
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-faint">
            Foco estrito em duas frentes. Concentramos a experiência onde ela mais
            protege o seu negócio — não somos generalistas.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 md:mt-16 md:grid-cols-2 md:gap-8">
          {PRACTICE_AREAS.map((group, gi) => (
            <StaggerItem key={group.key} className="h-full">
              <article className="group flex h-full flex-col rounded-2xl border border-hairline bg-card/40 p-7 transition-colors hover:border-navy/20 md:p-9">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-faint/70">
                  Grupo {gi === 0 ? "A" : "B"}
                </span>
                <h3 className="font-display mt-3 text-[clamp(1.4rem,2.4vw,1.9rem)] font-normal leading-tight text-navy">
                  <Link
                    href={`/areas-de-atuacao/${group.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="outline-none transition-colors hover:text-navy-deep focus-visible:underline"
                  >
                    {group.group}
                  </Link>
                </h3>
                <p className="mt-4 text-pretty text-sm leading-relaxed text-faint">
                  {group.lead}
                </p>

                <ul className="mt-6 flex flex-col gap-2.5 border-t border-hairline pt-6">
                  {group.items.map((item) => (
                    <li
                      key={item.slug}
                      className="flex items-baseline gap-3 text-sm text-ink/80"
                    >
                      <span
                        aria-hidden
                        className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold"
                      />
                      {item.title}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 pt-1">
                  <SectionLink
                    href={`/areas-de-atuacao/${group.slug}`}
                    newTab
                  >
                    Ver {group.short} em detalhe
                  </SectionLink>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal>
          <div className="mt-12 flex flex-col items-center gap-6 border-t border-hairline pt-8 text-center">
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-faint">
              {PRACTICE_PARTNERS_NOTE}
            </p>
            <SectionLink href="/areas-de-atuacao" newTab>
              Ver todas as áreas em detalhe
            </SectionLink>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
