import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Reveal } from "@/components/primitives/reveal";
import { SectionLink } from "@/components/primitives/section-link";
import { FaqAccordion } from "@/components/blocks/faq-accordion";
import { FAQ as FAQ_ITEMS } from "@/lib/content";

/** Teaser de FAQ na home — primeiras perguntas + link para a página completa. */
export function Faq() {
  const teaser = FAQ_ITEMS.slice(0, 6);
  return (
    <Section id="faq" space="loose">
      <Container size="xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Eyebrow>Perguntas frequentes</Eyebrow>
              <h2 className="font-display mt-6 text-balance text-[clamp(1.9rem,4vw,2.8rem)] font-normal leading-tight text-navy">
                Antes de conversarmos
              </h2>
              <p className="mt-5 max-w-xs text-pretty text-sm leading-relaxed text-faint">
                Reunimos as dúvidas mais comuns de quem procura assessoria jurídica
                empresarial. São {FAQ_ITEMS.length} perguntas no total.
              </p>
              <SectionLink href="/faq" className="mt-5">
                Ver todas as perguntas
              </SectionLink>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-8">
            <FaqAccordion items={teaser} />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
