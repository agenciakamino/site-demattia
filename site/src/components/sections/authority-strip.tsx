import { Container } from "@/components/primitives/container";
import { Stagger, StaggerItem } from "@/components/primitives/reveal";
import { AUTHORITY_SEALS } from "@/lib/content";

/*
  Faixa de autoridade sutil. Hoje em formato tipográfico institucional.
  ▶ PLACEHOLDER: quando o cliente enviar os selos oficiais (OAB, Ajorpeme,
  Ielusc/UNIVILLE), trocar o texto de cada item por <Image> em escala de cinza.
*/
export function AuthorityStrip() {
  return (
    <section className="border-y border-hairline bg-card/60" aria-label="Reconhecimento e credenciais">
      <Container size="xl" className="py-10 md:py-12">
        <p className="mb-8 text-center text-[0.65rem] font-medium uppercase tracking-[0.3em] text-faint">
          Reconhecimento &amp; credenciais
        </p>
        <Stagger className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
          {AUTHORITY_SEALS.map((seal) => (
            <StaggerItem
              key={seal.label}
              className="flex flex-col items-center text-center"
            >
              <span aria-hidden className="mb-3 h-px w-5 bg-gold/70" />
              <span className="font-display text-base text-navy">{seal.label}</span>
              <span className="mt-1 text-xs uppercase tracking-[0.12em] text-faint">
                {seal.note}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
