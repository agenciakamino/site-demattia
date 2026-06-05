import type { Metadata } from "next";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { PageHero } from "@/components/primitives/page-hero";
import { Reveal } from "@/components/primitives/reveal";
import { SectionLink } from "@/components/primitives/section-link";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { PAGES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Conteúdo & Insights",
  description:
    "Em breve: conteúdo prático sobre gestão jurídica empresarial — temas trabalhistas e cíveis explicados sem juridiquês.",
  alternates: { canonical: "/insights" },
  robots: { index: false, follow: true },
};

const TRAIL = [
  { name: "Início", href: "/" },
  { name: "Insights", href: "/insights" },
];

export default function InsightsPage() {
  return (
    <>
      <BreadcrumbJsonLd trail={TRAIL} />
      <PageHero
        eyebrow={PAGES.insights.eyebrow}
        title={PAGES.insights.title}
        subtitle={PAGES.insights.subtitle}
        trail={TRAIL}
        align="center"
      />

      <Section space="default">
        <Container size="md" className="text-center">
          <Reveal>
            <p className="text-pretty text-base leading-relaxed text-faint">
              Estamos estruturando esta área. Enquanto isso, se a sua empresa tem uma
              dúvida específica, fale diretamente com os nossos sócios.
            </p>
            <div className="mt-8 flex justify-center">
              <SectionLink href="/contato">Fale com um especialista</SectionLink>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
