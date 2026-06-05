import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Reveal } from "@/components/primitives/reveal";
import { MANIFESTO } from "@/lib/content";

export function Manifesto() {
  return (
    <Section id="escritorio" space="loose">
      <Container size="sm" className="text-center">
        <Reveal>
          <Eyebrow className="justify-center">{MANIFESTO.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-display mt-10 text-balance text-[clamp(1.6rem,3.4vw,2.6rem)] font-normal leading-[1.3] text-ink">
            {MANIFESTO.text}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <span aria-hidden className="mx-auto mt-10 block h-px w-14 bg-gold" />
          <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-medium uppercase tracking-[0.22em] text-faint">
            {MANIFESTO.pillars.map((pillar) => (
              <li key={pillar}>{pillar}</li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
