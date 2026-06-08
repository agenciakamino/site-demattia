import { ArrowRight, ShieldCheck } from "lucide-react";
import { Container } from "@/components/primitives/container";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Cta } from "@/components/primitives/cta";
import { Stagger, StaggerItem } from "@/components/primitives/reveal";
import { HERO } from "@/lib/content";
import { whatsappUrl } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      {/* Detalhe sutil: filete dourado vertical, "joia" dosada */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_-10%,rgba(34,30,69,0.05),transparent)]"
      />

      <Container size="md" className="text-center">
        <Stagger>
          <StaggerItem>
            <Eyebrow className="justify-center">{HERO.eyebrow}</Eyebrow>
          </StaggerItem>

          <StaggerItem>
            <h1 className="font-display mt-8 text-balance text-[clamp(2.35rem,6vw,4.75rem)] font-normal leading-[1.06] tracking-[-0.01em] text-navy">
              {HERO.title[0]}
              <span className="mt-2 block text-ink/55">{HERO.title[1]}</span>
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="mx-auto mt-9 max-w-xl text-pretty text-lg leading-relaxed text-faint">
              {HERO.subtitle}
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Cta
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                variant="solid"
                track="whatsapp"
                source="hero"
              >
                Agende um diagnóstico
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Cta>
              <a
                href="#atuacao"
                className="group inline-flex items-center gap-2 text-sm font-medium text-ink/70 outline-none transition-colors hover:text-navy focus-visible:text-navy"
              >
                Como atuamos
                <span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
              </a>
            </div>
          </StaggerItem>

          <StaggerItem>
            <p className="mx-auto mt-5 flex items-center justify-center gap-2 text-sm text-faint">
              <ShieldCheck aria-hidden className="h-4 w-4 text-navy/60" />
              Conversa inicial sob total sigilo — sem compromisso.
            </p>
          </StaggerItem>

          <StaggerItem>
            <p className="nums mt-10 text-xs uppercase tracking-[0.25em] text-faint/80">
              {HERO.credibility}
            </p>
          </StaggerItem>
        </Stagger>
      </Container>
    </section>
  );
}
