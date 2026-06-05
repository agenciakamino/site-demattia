import type { Metadata } from "next";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { PageHero } from "@/components/primitives/page-hero";
import { Reveal } from "@/components/primitives/reveal";
import { PracticeGroups } from "@/components/blocks/practice-groups";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { FinalCta } from "@/components/sections/final-cta";
import { PAGES, PRACTICE_PARTNERS_NOTE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Áreas de atuação",
  description:
    "Direito do Trabalho Patronal e Cível Empresarial — as duas frentes do De Mattia Advogados, com atuação preventiva e contenciosa para empresas.",
  alternates: { canonical: "/areas-de-atuacao" },
};

const TRAIL = [
  { name: "Início", href: "/" },
  { name: "Áreas de atuação", href: "/areas-de-atuacao" },
];

export default function AreasPage() {
  return (
    <>
      <BreadcrumbJsonLd trail={TRAIL} />
      <PageHero
        eyebrow={PAGES.areas.eyebrow}
        title={PAGES.areas.title}
        subtitle={PAGES.areas.subtitle}
        trail={TRAIL}
      />

      <Section space="default">
        <Container size="xl">
          <h2 className="sr-only">As duas frentes de atuação</h2>
          <PracticeGroups />
          <Reveal>
            <p className="mx-auto mt-16 max-w-2xl border-t border-hairline pt-8 text-center text-sm leading-relaxed text-faint">
              {PRACTICE_PARTNERS_NOTE}
            </p>
          </Reveal>
        </Container>
      </Section>

      <FinalCta />
    </>
  );
}
