import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/lib/content";

/** Accordion de perguntas. Reutilizado na home (teaser), /faq e páginas de área. */
export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, i) => (
        <AccordionItem key={i} value={`faq-${i}`} className="border-hairline">
          <AccordionTrigger className="gap-6 py-6 font-display text-lg font-normal text-navy hover:no-underline [&>svg]:mt-1 [&>svg]:text-faint">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="pb-6 text-pretty text-[0.95rem] leading-relaxed text-faint">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
