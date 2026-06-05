import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { PageHero } from "@/components/primitives/page-hero";
import { Reveal, Stagger, StaggerItem } from "@/components/primitives/reveal";
import { QuoteBand } from "@/components/blocks/quote-band";
import { FaqAccordion } from "@/components/blocks/faq-accordion";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { FinalCta } from "@/components/sections/final-cta";
import { PRACTICE_AREAS, FAQ, getPracticeGroup } from "@/lib/content";

type Params = { params: Promise<{ group: string }> };

export function generateStaticParams() {
  return PRACTICE_AREAS.map((g) => ({ group: g.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { group: slug } = await params;
  const group = getPracticeGroup(slug);
  if (!group) return {};
  return {
    title: group.group,
    description: group.intro,
    alternates: { canonical: `/areas-de-atuacao/${group.slug}` },
  };
}

export default async function GroupPage({ params }: Params) {
  const { group: slug } = await params;
  const group = getPracticeGroup(slug);
  if (!group) notFound();

  const trail = [
    { name: "Início", href: "/" },
    { name: "Áreas de atuação", href: "/areas-de-atuacao" },
    { name: group.short, href: `/areas-de-atuacao/${group.slug}` },
  ];
  const faqItems = group.faqRefs.map((i) => FAQ[i]).filter(Boolean);

  return (
    <>
      <BreadcrumbJsonLd trail={trail} />
      <PageHero
        eyebrow="Área de atuação"
        title={group.group}
        subtitle={group.intro}
        trail={trail}
      />

      {/* Subdivisões */}
      <Section space="default">
        <Container size="xl">
          <Reveal>
            <Eyebrow>O que fazemos nesta frente</Eyebrow>
          </Reveal>
          <Stagger as="ul" className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2">
            {group.items.map((item, i) => (
              <StaggerItem as="li" key={item.slug} className="h-full">
                <Link
                  href={`/areas-de-atuacao/${group.slug}/${item.slug}`}
                  className="group flex h-full flex-col bg-card p-7 outline-none transition-colors hover:bg-paper focus-visible:bg-paper md:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="nums text-sm font-medium tabular-nums text-faint/70 transition-colors group-hover:text-navy">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-faint/50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-navy" />
                  </div>
                  <h2 className="font-display mt-4 text-xl font-normal text-navy md:text-[1.4rem]">
                    {item.title}
                  </h2>
                  <p className="mt-2.5 text-pretty text-sm leading-relaxed text-faint">
                    {item.description}
                  </p>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <QuoteBand quote={group.impact} />

      {/* FAQ relacionado */}
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

      <FinalCta />
    </>
  );
}
