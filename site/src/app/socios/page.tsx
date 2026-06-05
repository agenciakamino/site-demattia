import type { Metadata } from "next";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { PageHero } from "@/components/primitives/page-hero";
import { PartnersGrid } from "@/components/blocks/partners-grid";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { FinalCta } from "@/components/sections/final-cta";
import { PAGES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sócios",
  description:
    "João De Mattia Neto (OAB/SC 22505) e Cristine Weiss De Mattia (OAB/SC 22584) — duas décadas de experiência em Direito do Trabalho Patronal e Cível Empresarial.",
  alternates: { canonical: "/socios" },
};

const TRAIL = [
  { name: "Início", href: "/" },
  { name: "Sócios", href: "/socios" },
];

export default function SociosPage() {
  return (
    <>
      <BreadcrumbJsonLd trail={TRAIL} />
      <PageHero
        eyebrow={PAGES.socios.eyebrow}
        title={PAGES.socios.title}
        subtitle={PAGES.socios.subtitle}
        trail={TRAIL}
      />

      <Section space="default">
        <Container size="xl">
          <h2 className="sr-only">Nossos sócios</h2>
          <PartnersGrid />
        </Container>
      </Section>

      <FinalCta />
    </>
  );
}
