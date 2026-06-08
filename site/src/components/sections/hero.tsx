import { ArrowRight, ShieldCheck } from "lucide-react";
import { Container } from "@/components/primitives/container";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Cta } from "@/components/primitives/cta";
import { Stagger, StaggerItem } from "@/components/primitives/reveal";
import { HERO } from "@/lib/content";
import { whatsappUrl } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-paper pt-36 pb-20 md:pt-44 md:pb-28">
      {/* Fundo navy da marca — espelha o banner das páginas internas (PageHero). */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-navy to-navy-deep"
      />
      {/* "Joia" dosada: brilho dourado sutil no topo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_50%_-10%,rgba(255,243,105,0.10),transparent)]"
      />

      <Container size="md" className="text-center">
        <Stagger>
          <StaggerItem>
            <Eyebrow onDark className="justify-center">{HERO.eyebrow}</Eyebrow>
          </StaggerItem>

          <StaggerItem>
            <h1 className="font-display mt-8 text-balance text-[clamp(2.35rem,6vw,4.75rem)] font-normal leading-[1.06] tracking-[-0.01em] text-paper">
              <span className="text-paper/80">{HERO.title[0]}</span>
              {/* Punchline destacada no dourado da marca — navy + gold é a
                  assinatura do escritório e o ponto alto da mensagem. */}
              <span className="mt-2 block text-gold">{HERO.title[1]}</span>
            </h1>
          </StaggerItem>

          <StaggerItem>
            {/* Filete dourado de assinatura — mesma marca dos banners internos */}
            <span aria-hidden className="mx-auto mt-9 block h-0.5 w-12 bg-gold" />
          </StaggerItem>

          <StaggerItem>
            <p className="mx-auto mt-7 max-w-xl text-pretty text-lg leading-relaxed text-paper/70">
              {HERO.subtitle}
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Cta
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                variant="onNavy"
                track="whatsapp"
                source="hero"
              >
                Agende um diagnóstico
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Cta>
              <a
                href="#atuacao"
                className="group inline-flex items-center gap-2 text-sm font-medium text-paper/70 outline-none transition-colors hover:text-paper focus-visible:text-paper"
              >
                Como atuamos
                <span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
              </a>
            </div>
          </StaggerItem>

          <StaggerItem>
            <p className="mx-auto mt-5 flex items-center justify-center gap-2 text-sm text-paper/60">
              <ShieldCheck aria-hidden className="h-4 w-4 text-gold/80" />
              Conversa inicial sob total sigilo — sem compromisso.
            </p>
          </StaggerItem>

          <StaggerItem>
            <p className="nums mt-10 text-xs uppercase tracking-[0.25em] text-paper/50">
              {HERO.credibility}
            </p>
          </StaggerItem>
        </Stagger>
      </Container>
    </section>
  );
}
