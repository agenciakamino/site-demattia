import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { PageHero } from "@/components/primitives/page-hero";
import { Reveal, Stagger, StaggerItem } from "@/components/primitives/reveal";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCta } from "@/components/sections/final-cta";
import { PAGES } from "@/lib/content";

export const metadata: Metadata = {
  title: "O escritório",
  description:
    "Há duas décadas unindo solidez acadêmica e visão de mercado para blindar operações e reduzir passivos de empresas em Joinville e região.",
  alternates: { canonical: "/escritorio" },
};

const TRAIL = [
  { name: "Início", href: "/" },
  { name: "Escritório", href: "/escritorio" },
];

// Pilares derivados da identidade verbal do cliente (transparência/ética/linguagem
// clara) e das FAQ 11 e 16. ▶ Revisar a redação com o cliente.
const VALUES = [
  {
    title: "Transparência",
    body: "Dizemos com clareza o que é viável e o que não é — mesmo quando a resposta não é a que você gostaria de ouvir.",
  },
  {
    title: "Ética",
    body: "Atividade de meio, não de resultado. Não prometemos desfecho; garantimos defesa técnica, estratégica e minuciosa.",
  },
  {
    title: "Linguagem clara",
    body: "Sem juridiquês. Traduzimos cada movimentação para o impacto real no caixa e na operação da sua empresa.",
  },
];

export default function EscritorioPage() {
  return (
    <>
      <BreadcrumbJsonLd trail={TRAIL} />
      <PageHero
        eyebrow={PAGES.escritorio.eyebrow}
        title={PAGES.escritorio.title}
        subtitle={PAGES.escritorio.subtitle}
        trail={TRAIL}
      />

      {/* Foto do escritório em destaque + pilares */}
      <Section space="default">
        <Container size="xl">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              {/* ▶ PLACEHOLDER: foto real da fachada. Trocar por foto profissional
                  do escritório (interna/sócios) quando o cliente enviar. */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-hairline">
                <Image
                  src="/photos/fachada.jpeg"
                  alt="Edifício onde fica o escritório De Mattia, em Joinville/SC"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
                />
                <span aria-hidden className="absolute inset-x-0 bottom-0 h-0.5 bg-gold/55" />
              </div>
            </Reveal>

            <div>
              <Reveal>
                <Eyebrow>O nosso compromisso</Eyebrow>
                <p className="font-display mt-6 text-balance text-[clamp(1.5rem,2.6vw,2.1rem)] font-normal leading-[1.35] text-ink">
                  Não somos um escritório de massa. Os clientes falam diretamente com os
                  sócios — visão de negócios combinada à alta liderança técnica.
                </p>
              </Reveal>
              <Stagger className="mt-10 space-y-7">
                {VALUES.map((v) => (
                  <StaggerItem key={v.title}>
                    <div className="border-l-2 border-gold pl-5">
                      <h2 className="font-display text-lg font-normal text-navy">{v.title}</h2>
                      <p className="mt-1.5 text-pretty text-sm leading-relaxed text-faint">
                        {v.body}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </Container>
      </Section>

      <Testimonials />
      <FinalCta />
    </>
  );
}
