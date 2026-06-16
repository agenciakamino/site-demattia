import { FaqJsonLd } from "@/components/json-ld";
import { Hero } from "@/components/sections/hero";
import { AuthorityStrip } from "@/components/sections/authority-strip";
import { PracticeAreas } from "@/components/sections/practice-areas";
import { Sectors } from "@/components/sections/sectors";
import { Manifesto } from "@/components/sections/manifesto";
import { ImpactQuote } from "@/components/sections/impact-quote";
import { Partners } from "@/components/sections/partners";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <FaqJsonLd />
      <Hero />
      <AuthorityStrip />
      <PracticeAreas />
      <Sectors />
      <Manifesto />
      <ImpactQuote />
      <Partners />
      <Faq />
      <FinalCta />
    </>
  );
}
