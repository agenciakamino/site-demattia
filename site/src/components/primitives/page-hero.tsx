import { Container } from "./container";
import { Eyebrow } from "./eyebrow";
import { Reveal } from "./reveal";
import { Breadcrumb, type Crumb } from "./breadcrumb";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  trail: Crumb[];
  align?: "left" | "center";
  children?: React.ReactNode;
};

/** Cabeçalho padrão das páginas internas — limpa o header fixo e traz breadcrumb. */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  trail,
  align = "left",
  children,
}: PageHeroProps) {
  const centered = align === "center";
  return (
    <section className="border-b border-hairline pt-32 pb-14 md:pt-40 md:pb-20">
      <Container size="xl">
        <Breadcrumb trail={trail} className="mb-8" />
        <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
          <Reveal>
            <Eyebrow className={centered ? "justify-center" : ""}>{eyebrow}</Eyebrow>
            <h1 className="font-display mt-6 text-balance text-[clamp(2.1rem,5vw,3.6rem)] font-normal leading-[1.08] tracking-[-0.01em] text-navy">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-faint">
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
