import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { PageHero } from "@/components/primitives/page-hero";
import { Reveal } from "@/components/primitives/reveal";
import { SectionLink } from "@/components/primitives/section-link";
import { QuoteBand } from "@/components/blocks/quote-band";
import { FaqAccordion } from "@/components/blocks/faq-accordion";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { FinalCta } from "@/components/sections/final-cta";
import { PRACTICE_AREAS, FAQ, getPracticeItem } from "@/lib/content";

type Params = { params: Promise<{ group: string; sub: string }> };

export function generateStaticParams() {
  return PRACTICE_AREAS.flatMap((g) =>
    g.items.map((it) => ({ group: g.slug, sub: it.slug })),
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { group: gSlug, sub: sSlug } = await params;
  const found = getPracticeItem(gSlug, sSlug);
  if (!found) return {};
  const { group, item } = found;
  return {
    title: `${item.title} — ${group.short}`,
    description: item.description,
    alternates: { canonical: `/areas-de-atuacao/${group.slug}/${item.slug}` },
  };
}

export default async function SubAreaPage({ params }: Params) {
  const { group: gSlug, sub: sSlug } = await params;
  const found = getPracticeItem(gSlug, sSlug);
  if (!found) notFound();
  const { group, item } = found;

  const trail = [
    { name: "Início", href: "/" },
    { name: "Áreas de atuação", href: "/areas-de-atuacao" },
    { name: group.short, href: `/areas-de-atuacao/${group.slug}` },
    { name: item.title, href: `/areas-de-atuacao/${group.slug}/${item.slug}` },
  ];
  const faqItems = (item.faqRefs ?? []).map((i) => FAQ[i]).filter(Boolean);
  const quote = item.impact ?? group.impact;
  const siblings = group.items.filter((i) => i.slug !== item.slug);

  return (
    <>
      <BreadcrumbJsonLd trail={trail} />
      <PageHero
        eyebrow={group.group}
        title={item.title}
        subtitle={item.description}
        trail={trail}
      >
        <div className="mt-8">
          <SectionLink onDark href={`/areas-de-atuacao/${group.slug}`}>
            Voltar a {group.short}
          </SectionLink>
        </div>
      </PageHero>

      <QuoteBand quote={quote} />

      {faqItems.length > 0 && (
        <Section space="default">
          <Container size="md">
            <Reveal className="mb-8 text-center">
              <Eyebrow as="h2" className="justify-center">Dúvidas frequentes</Eyebrow>
            </Reveal>
            <Reveal>
              <FaqAccordion items={faqItems} />
            </Reveal>
          </Container>
        </Section>
      )}

      {/* Outras frentes do mesmo grupo */}
      {siblings.length > 0 && (
        <Section space="default" tone="card" bordered>
          <Container size="xl">
            <Reveal>
              <Eyebrow>Outras frentes de {group.short}</Eyebrow>
            </Reveal>
            <ul className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
              {siblings.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/areas-de-atuacao/${group.slug}/${s.slug}`}
                    className="group flex h-full items-center justify-between gap-4 bg-card p-6 outline-none transition-colors hover:bg-paper focus-visible:bg-paper"
                  >
                    <span className="font-display text-base text-navy">{s.title}</span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-faint/50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-navy" />
                  </Link>
                </li>
              ))}
            </ul>
            <Reveal>
              <Link
                href="/areas-de-atuacao"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-faint outline-none transition-colors hover:text-navy focus-visible:text-navy"
              >
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                Todas as áreas de atuação
              </Link>
            </Reveal>
          </Container>
        </Section>
      )}

      <FinalCta />
    </>
  );
}
