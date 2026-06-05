import { Container } from "@/components/primitives/container";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { SectionLink } from "@/components/primitives/section-link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center pt-32 pb-20">
      <Container size="md" className="text-center">
        <Eyebrow className="justify-center">Erro 404</Eyebrow>
        <h1 className="font-display mt-6 text-balance text-[clamp(2rem,5vw,3.4rem)] font-normal leading-tight text-navy">
          Página não encontrada
        </h1>
        <p className="mx-auto mt-5 max-w-md text-pretty text-base leading-relaxed text-faint">
          O endereço que você procura não existe ou foi movido. Vamos te levar de volta
          ao caminho certo.
        </p>
        <div className="mt-8 flex justify-center">
          <SectionLink href="/">Voltar ao início</SectionLink>
        </div>
      </Container>
    </section>
  );
}
