import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Reveal, Stagger, StaggerItem } from "@/components/primitives/reveal";
import { SectionLink } from "@/components/primitives/section-link";
import { PARTNERS } from "@/lib/content";

/** Iniciais do sócio para o monograma (descarta conectivos curtos). */
function initialsOf(name: string) {
  return name
    .split(" ")
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

/**
 * Teaser de sócios na home — apresentação enxuta (monograma, nome, função e
 * âncora de autoridade). As biografias completas vivem em /socios.
 */
export function Partners() {
  return (
    <Section id="socios" space="loose">
      <Container size="xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">Quem conduz o seu caso</Eyebrow>
          <h2 className="font-display mt-6 text-balance text-[clamp(1.9rem,4vw,3rem)] font-normal leading-tight text-navy">
            Autoridade técnica, atendimento pessoal
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-faint">
            No De Mattia, você fala diretamente com os sócios — duas décadas de
            experiência prática e acadêmica ao lado da sua empresa.
          </p>
        </Reveal>

        <Stagger className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2 sm:gap-8">
          {PARTNERS.map((partner) => (
            <StaggerItem key={partner.name} className="h-full">
              <article className="group flex h-full gap-5 rounded-2xl border border-hairline bg-card/40 p-6 transition-colors hover:border-navy/20 md:p-7">
                <span
                  aria-hidden
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[radial-gradient(120%_90%_at_50%_0%,#221e45,#191634)] font-display text-lg text-gold/70"
                >
                  {initialsOf(partner.name)}
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-xl font-normal leading-tight text-navy">
                    {partner.name}
                  </h3>
                  <p className="nums mt-1.5 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-faint">
                    {partner.oab} · {partner.role}
                  </p>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-faint">
                    {partner.anchor}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal>
          <div className="mt-12 text-center">
            <SectionLink href="/socios" newTab>
              Conheça os sócios
            </SectionLink>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
