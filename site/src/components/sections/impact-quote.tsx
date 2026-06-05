import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Reveal } from "@/components/primitives/reveal";
import { IMPACT_QUOTE } from "@/lib/content";

export function ImpactQuote() {
  return (
    <Section tone="navy" space="loose" className="relative overflow-hidden">
      {/* Brilho dourado sutil — joia dosada, sem texto decorativo (a11y) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(50%_60%_at_85%_50%,rgba(255,243,105,0.05),transparent)]"
      />

      <Container size="md" className="relative text-center">
        <Reveal>
          <span aria-hidden className="mx-auto mb-8 block h-px w-12 bg-gold" />
          <blockquote className="font-display text-balance text-[clamp(1.9rem,4.5vw,3.4rem)] font-normal italic leading-[1.25] text-paper">
            “{IMPACT_QUOTE}”
          </blockquote>
        </Reveal>
      </Container>
    </Section>
  );
}
