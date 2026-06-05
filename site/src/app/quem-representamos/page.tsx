import type { Metadata } from "next";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { PageHero } from "@/components/primitives/page-hero";
import { Reveal } from "@/components/primitives/reveal";
import { SectorGrid } from "@/components/blocks/sector-grid";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { FinalCta } from "@/components/sections/final-cta";
import { PAGES, SECTORS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Quem nós representamos",
  description:
    "Os setores que o De Mattia Advogados atende em Joinville e região — indústria, comércio e serviços, cada um com as suas particularidades.",
  alternates: { canonical: "/quem-representamos" },
};

const TRAIL = [
  { name: "Início", href: "/" },
  { name: "Quem representamos", href: "/quem-representamos" },
];

export default function QuemRepresentamosPage() {
  return (
    <>
      <BreadcrumbJsonLd trail={TRAIL} />
      <PageHero
        eyebrow={PAGES.setores.eyebrow}
        title={PAGES.setores.title}
        subtitle={PAGES.setores.subtitle}
        trail={TRAIL}
      />

      <Section space="default">
        <Container size="xl">
          <SectorGrid sectors={SECTORS} />
          <Reveal>
            <p className="mt-8 text-sm italic text-faint">…dentre outros setores.</p>
            <p className="mt-6 max-w-2xl text-pretty text-sm leading-relaxed text-faint">
              Cada segmento tem riscos jurídicos próprios — da rotina trabalhista de uma
              indústria à malha contratual de uma incorporadora. Conhecer o setor é o que
              nos permite antecipar o problema antes que ele chegue ao processo.
            </p>
          </Reveal>
        </Container>
      </Section>

      <FinalCta />
    </>
  );
}
