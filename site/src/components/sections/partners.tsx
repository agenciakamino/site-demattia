import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Reveal } from "@/components/primitives/reveal";
import { SectionLink } from "@/components/primitives/section-link";
import { PartnersGrid } from "@/components/blocks/partners-grid";

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

        <div className="mt-16">
          <PartnersGrid />
        </div>

        <Reveal>
          <div className="mt-12 text-center">
            <SectionLink href="/socios">Conheça os sócios</SectionLink>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
