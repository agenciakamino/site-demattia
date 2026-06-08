import { Stagger, StaggerItem } from "@/components/primitives/reveal";
import { SECTORS } from "@/lib/content";

/**
 * Lista de setores representados em estilo bullet (marcador dourado + rótulo),
 * fluindo em múltiplas colunas — leve e editorial, sem a "caixa" emoldurada.
 * Reutilizada na home (teaser) e em /quem-representamos.
 */
export function SectorGrid({
  sectors = SECTORS,
}: {
  sectors?: readonly string[];
}) {
  return (
    <Stagger
      as="ul"
      className="grid grid-cols-2 gap-x-8 gap-y-3.5 sm:gap-x-10 lg:grid-cols-3 lg:gap-y-4 xl:grid-cols-4"
    >
      {sectors.map((sector) => (
        <StaggerItem as="li" key={sector}>
          <span className="group flex items-start gap-3">
            <span
              aria-hidden
              className="mt-[0.4rem] h-1.5 w-1.5 shrink-0 rounded-full bg-gold transition-transform duration-300 group-hover:scale-150"
            />
            <span className="text-pretty text-[0.95rem] leading-snug text-ink/80 transition-colors duration-300 group-hover:text-navy">
              {sector}
            </span>
          </span>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
