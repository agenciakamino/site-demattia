import type { Metadata } from "next";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { PageHero } from "@/components/primitives/page-hero";
import { Reveal } from "@/components/primitives/reveal";
import { FaqAccordion } from "@/components/blocks/faq-accordion";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/json-ld";
import { FinalCta } from "@/components/sections/final-cta";
import { PAGES, FAQ } from "@/lib/content";

export const metadata: Metadata = {
  title: "Perguntas frequentes",
  description:
    "Dúvidas comuns sobre assessoria jurídica empresarial: contratação, honorários, sigilo, prazos, atuação preventiva e mais — respondidas pelo De Mattia Advogados.",
  alternates: { canonical: "/faq" },
};

const TRAIL = [
  { name: "Início", href: "/" },
  { name: "FAQ", href: "/faq" },
];

export default function FaqPage() {
  return (
    <>
      <BreadcrumbJsonLd trail={TRAIL} />
      <FaqJsonLd />
      <PageHero
        eyebrow={PAGES.faq.eyebrow}
        title={PAGES.faq.title}
        subtitle={PAGES.faq.subtitle}
        trail={TRAIL}
      />

      <Section space="default">
        <Container size="md">
          <h2 className="sr-only">Lista de perguntas frequentes</h2>
          <Reveal>
            <FaqAccordion items={FAQ} />
          </Reveal>
        </Container>
      </Section>

      <FinalCta />
    </>
  );
}
