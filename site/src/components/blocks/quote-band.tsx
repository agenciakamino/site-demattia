import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Reveal } from "@/components/primitives/reveal";

/** Faixa navy com citação (par assinatura amarelo-sobre-navy). Reutilizável. */
export function QuoteBand({ quote }: { quote: string }) {
  return (
    <Section tone="navy" space="default" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(50%_60%_at_85%_50%,rgba(255,243,105,0.05),transparent)]"
      />
      <Container size="md" className="relative text-center">
        <Reveal>
          <span aria-hidden className="mx-auto mb-7 block h-px w-12 bg-gold" />
          <blockquote className="font-display text-balance text-[clamp(1.6rem,3.6vw,2.6rem)] font-normal italic leading-[1.3] text-paper">
            “{quote}”
          </blockquote>
        </Reveal>
      </Container>
    </Section>
  );
}
