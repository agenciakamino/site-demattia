import Image from "next/image";
import { Container } from "./container";
import { Eyebrow } from "./eyebrow";
import { Reveal } from "./reveal";
import { Breadcrumb, type Crumb } from "./breadcrumb";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  trail: Crumb[];
  /** Foto de fundo opcional (sob overlay navy). Sem ela, banner navy sólido. */
  image?: { src: string; alt?: string };
  children?: React.ReactNode;
};

/**
 * Banner de cabeçalho das páginas internas — faixa navy centralizada com
 * acento dourado, espelhando a linguagem da marca (e contrastando com a home
 * clara). Limpa o header fixo, traz breadcrumb e aceita uma foto de fundo
 * opcional sob overlay navy (basta o cliente enviar fotos por página).
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  trail,
  image,
  children,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-paper">
      {/* Foto de fundo opcional */}
      {image && (
        <Image
          src={image.src}
          alt={image.alt ?? ""}
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
      )}

      {/* Overlay navy — garante legibilidade e tinge a foto na cor da marca.
          Sem foto, é o próprio fundo do banner. */}
      <div
        aria-hidden
        className={
          image
            ? "absolute inset-0 -z-10 bg-gradient-to-b from-navy/90 via-navy/80 to-navy-deep/95"
            : "absolute inset-0 -z-10 bg-gradient-to-b from-navy to-navy-deep"
        }
      />
      {/* "Joia" dosada: brilho dourado sutil no topo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_50%_-10%,rgba(255,243,105,0.10),transparent)]"
      />

      <Container size="xl" className="relative pt-32 pb-16 text-center md:pt-40 md:pb-24">
        <Breadcrumb trail={trail} onDark className="mb-8 justify-center [&>ol]:justify-center" />
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Eyebrow onDark className="justify-center">
              {eyebrow}
            </Eyebrow>
            <h1 className="font-display mt-6 text-balance text-[clamp(2.1rem,5vw,3.6rem)] font-normal leading-[1.08] tracking-[-0.01em] text-paper">
              {title}
            </h1>
            {/* Filete dourado de assinatura sob o título */}
            <span aria-hidden className="mx-auto mt-7 block h-0.5 w-12 bg-gold" />
            {subtitle && (
              <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-paper/70">
                {subtitle}
              </p>
            )}
            {children}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
