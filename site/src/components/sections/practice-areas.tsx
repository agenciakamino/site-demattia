import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Reveal } from "@/components/primitives/reveal";
import { SectionLink } from "@/components/primitives/section-link";
import { PracticeGroups } from "@/components/blocks/practice-groups";
import { PRACTICE_PARTNERS_NOTE } from "@/lib/content";

export function PracticeAreas() {
  return (
    <Section id="atuacao" space="loose">
      <Container size="xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">Áreas de atuação</Eyebrow>
          <h2 className="font-display mt-6 text-balance text-[clamp(1.9rem,4vw,3rem)] font-normal leading-tight text-navy">
            Como atuamos para proteger a sua empresa
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-faint">
            Foco estrito em duas frentes. Concentramos a experiência onde ela mais
            protege o seu negócio — não somos generalistas.
          </p>
        </Reveal>

        <div className="mt-16 md:mt-20">
          <PracticeGroups />
        </div>

        <Reveal>
          <div className="mt-14 flex flex-col items-center gap-6 border-t border-hairline pt-8 text-center">
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-faint">
              {PRACTICE_PARTNERS_NOTE}
            </p>
            <SectionLink href="/areas-de-atuacao">Ver todas as áreas em detalhe</SectionLink>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
