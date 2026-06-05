import { SITE } from "@/lib/site-config";
import { FAQ } from "@/lib/content";

function Script({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // schema.org JSON-LD — conteúdo estático controlado pela aplicação
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** LegalService — dados do escritório. Renderizado globalmente (root layout). */
export function OrgJsonLd() {
  const legalService = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    slogan: SITE.slogan,
    telephone: SITE.contact.phone,
    email: SITE.contact.email,
    areaServed: [
      { "@type": "City", name: "Joinville" },
      { "@type": "State", name: "Santa Catarina" },
      { "@type": "Country", name: "Brasil" },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.line1,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      addressCountry: SITE.address.country,
    },
    identifier: SITE.oabRegistry,
    knowsAbout: [
      "Direito do Trabalho Patronal",
      "Direito Cível Empresarial",
      "Assessoria jurídica empresarial",
      "Compliance trabalhista",
      "Contratos empresariais",
    ],
    knowsLanguage: "pt-BR",
    founder: [
      { "@type": "Person", name: "João De Mattia Neto", identifier: "OAB/SC 22505" },
      { "@type": "Person", name: "Cristine Weiss De Mattia", identifier: "OAB/SC 22584" },
    ],
  };
  return <Script data={legalService} />;
}

/** FAQPage — usar nas páginas que exibem as perguntas (home + /faq). */
export function FaqJsonLd() {
  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  return <Script data={faqPage} />;
}

/** BreadcrumbList — trilha de navegação para páginas internas. */
export function BreadcrumbJsonLd({
  trail,
}: {
  trail: { name: string; href: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${SITE.url}${t.href}`,
    })),
  };
  return <Script data={data} />;
}
