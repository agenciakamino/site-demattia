import { Stagger, StaggerItem } from "@/components/primitives/reveal";
import { PARTNERS } from "@/lib/content";
import { PartnerCard } from "@/components/sections/partner-card";

/** Grade dos sócios. Reutilizada na home e em /socios. */
export function PartnersGrid() {
  return (
    <Stagger className="mx-auto grid max-w-3xl gap-12 sm:grid-cols-2 md:gap-16">
      {PARTNERS.map((partner) => (
        <StaggerItem key={partner.name}>
          <PartnerCard partner={partner} />
        </StaggerItem>
      ))}
    </Stagger>
  );
}
