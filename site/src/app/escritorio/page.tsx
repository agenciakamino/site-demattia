import type { Metadata } from "next";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { PageHero } from "@/components/primitives/page-hero";
import { Reveal, Stagger, StaggerItem } from "@/components/primitives/reveal";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { FinalCta } from "@/components/sections/final-cta";
import { PAGES, OFFICE_HIGHLIGHTS } from "@/lib/content";

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
              {/* Painel de marca no lugar da foto da fachada — a foto anterior
                  exibia outras empresas do prédio (inclusive outro escritório de
                  advocacia). Trocar por foto profissional do escritório quando o
                  cliente enviar a sessão fotográfica (Thaís / Bravus). */}
              <div className="relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl border border-hairline bg-[radial-gradient(120%_90%_at_50%_0%,#221e45,#191634)] p-9 md:p-10">
                <span
                  aria-hidden
                  className="font-display pointer-events-none absolute -right-3 -top-5 select-none text-[9rem] leading-none text-gold/10 md:text-[11rem]"
                >
                  DM
                </span>
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-paper/55">
                  Joinville · Santa Catarina
                </p>
                <p className="font-display mt-4 text-balance text-xl font-normal leading-snug text-paper/90 md:text-2xl">
                  Há duas décadas unindo solidez acadêmica e visão de mercado ao lado
                  de empresas.
                </p>
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

      {/* Destaques do escritório — sugestão literal do cliente. Substitui a antiga
          seção de depoimentos (prova social vedada pelo Código de Ética da OAB). */}
      <Section tone="card" bordered space="loose">
        <Container size="xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow className="justify-center">Por que o De Mattia</Eyebrow>
            <h2 className="font-display mt-6 text-balance text-[clamp(1.7rem,3.5vw,2.5rem)] font-normal leading-tight text-navy">
              Direito corporativo com profundidade técnica
            </h2>
          </Reveal>

          <Stagger className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-3">
            {OFFICE_HIGHLIGHTS.map((item, i) => (
              <StaggerItem key={item.label} className="h-full">
                <div className="flex h-full flex-col gap-5 bg-card p-8 md:p-9">
                  <span className="nums font-display text-2xl font-normal leading-none text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-faint">
                    {item.label}
                  </p>
                  <p className="font-display text-pretty text-lg font-normal leading-relaxed text-ink">
                    {item.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <FinalCta />
    </>
  );
}
