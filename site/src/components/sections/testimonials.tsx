import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Reveal, Stagger, StaggerItem } from "@/components/primitives/reveal";
import { TESTIMONIALS } from "@/lib/content";

export function Testimonials() {
  return (
    <Section tone="card" bordered space="loose">
      <Container size="xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">Quem já é cliente</Eyebrow>
          <h2 className="font-display mt-6 text-balance text-[clamp(1.7rem,3.5vw,2.5rem)] font-normal leading-tight text-navy">
            O jurídico como parte da estratégia
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.segment} className="h-full">
              <figure className="flex h-full flex-col justify-between gap-8 bg-card p-8 md:p-9">
                <blockquote className="font-display text-pretty text-lg font-normal leading-relaxed text-ink">
                  <span aria-hidden className="mb-3 block font-display text-3xl leading-none text-gold">
                    &ldquo;
                  </span>
                  {t.quote}
                </blockquote>
                <figcaption className="text-xs font-medium uppercase tracking-[0.18em] text-faint">
                  {t.segment}
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal>
          <p className="mt-8 text-center text-xs text-faint/70">
            Depoimentos reais, identificados apenas por segmento, em conformidade com
            o Código de Ética da OAB.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
