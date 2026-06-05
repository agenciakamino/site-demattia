import { Stagger, StaggerItem } from "@/components/primitives/reveal";
import { SECTORS } from "@/lib/content";

/** Grade dos setores representados. Reutilizada na home (teaser) e em /quem-representamos. */
export function SectorGrid({
  sectors = SECTORS,
}: {
  sectors?: readonly string[];
}) {
  return (
    <Stagger
      as="ul"
      className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-3 lg:grid-cols-4"
    >
      {sectors.map((sector) => (
        <StaggerItem as="li" key={sector}>
          <div className="group flex h-full items-center gap-3 bg-card px-5 py-5 transition-colors duration-300 hover:bg-paper">
            <span
              aria-hidden
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-hairline transition-colors duration-300 group-hover:bg-gold"
            />
            <span className="text-pretty text-sm leading-snug text-ink/85 transition-colors duration-300 group-hover:text-navy">
              {sector}
            </span>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
