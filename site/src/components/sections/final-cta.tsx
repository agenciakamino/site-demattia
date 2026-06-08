import { ArrowRight, Mail } from "lucide-react";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Cta } from "@/components/primitives/cta";
import { Reveal } from "@/components/primitives/reveal";
import { FINAL_CTA } from "@/lib/content";
import { whatsappUrl, MAILTO, SITE } from "@/lib/site-config";

export function FinalCta() {
  return (
    <Section id="contato" tone="navy" space="loose" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(70%_60%_at_50%_120%,rgba(255,243,105,0.06),transparent)]"
      />
      <Container size="md" className="relative text-center">
        <Reveal>
          <span aria-hidden className="mx-auto mb-8 block h-0.5 w-12 bg-gold" />
          <h2 className="font-display text-balance text-[clamp(1.9rem,4.5vw,3.4rem)] font-normal leading-[1.15] text-paper">
            {FINAL_CTA.title}
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-pretty text-base leading-relaxed text-paper/70">
            {FINAL_CTA.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Cta
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              variant="onNavy"
              track="whatsapp"
              source="final_cta"
            >
              Fale com um especialista
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Cta>
            <Cta
              href={MAILTO}
              variant="outlineOnNavy"
              track="cta"
              trackLabel="email"
              source="final_cta"
            >
              <Mail className="h-4 w-4" />
              Enviar e-mail
            </Cta>
          </div>
          <p className="nums mt-8 text-xs uppercase tracking-[0.2em] text-paper/45">
            {SITE.contact.email}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
