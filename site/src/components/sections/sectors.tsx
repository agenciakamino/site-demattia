import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Reveal } from "@/components/primitives/reveal";
import { SectionLink } from "@/components/primitives/section-link";
import { SectorGrid } from "@/components/blocks/sector-grid";
import { SECTORS } from "@/lib/content";

/** Teaser de setores na home — mostra um recorte e leva à página dedicada. */
export function Sectors() {
  const teaser = SECTORS.slice(0, 8);
  // Topo aparado (pt-*) — pareado com o pb de PracticeAreas para uma costura
  // equilibrada. Mantém o divisor (bordered) e o respiro de baixo.
  return (
    <Section id="setores" tone="card" bordered space="loose" className="pt-16 md:pt-24">
      <Container size="xl">
        <Reveal className="max-w-2xl">
          <Eyebrow>Quem nós representamos</Eyebrow>
          <h2 className="font-display mt-6 text-balance text-[clamp(1.9rem,4vw,3rem)] font-normal leading-tight text-navy">
            Empresas que confiam o jurídico a quem entende o negócio
          </h2>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-faint">
            Atendemos os mais variados segmentos da indústria, comércio e serviços
            de Joinville e região — cada um com as suas particularidades.
          </p>
        </Reveal>

        <div className="mt-14">
          <SectorGrid sectors={teaser} />
        </div>

        <Reveal>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm italic text-faint">
              …e mais {SECTORS.length - teaser.length} setores.
            </p>
            <SectionLink href="/quem-representamos" newTab>Ver todos os setores</SectionLink>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
