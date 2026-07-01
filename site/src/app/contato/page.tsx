import type { Metadata } from "next";
import { MessageCircle, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { PageHero } from "@/components/primitives/page-hero";
import { Reveal } from "@/components/primitives/reveal";
import { Cta } from "@/components/primitives/cta";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { MapFacade } from "@/components/blocks/map-facade";
import { PAGES } from "@/lib/content";
import { SITE, whatsappUrl, MAILTO, TEL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com um especialista do De Mattia Advogados. Atendimento pelo WhatsApp, e-mail ou telefone — escritório em Joinville/SC.",
  alternates: { canonical: "/contato" },
};

const TRAIL = [
  { name: "Início", href: "/" },
  { name: "Contato", href: "/contato" },
];

export default function ContatoPage() {
  return (
    <>
      <BreadcrumbJsonLd trail={TRAIL} />
      <PageHero
        eyebrow={PAGES.contato.eyebrow}
        title={PAGES.contato.title}
        subtitle={PAGES.contato.subtitle}
        trail={TRAIL}
      />

      <Section space="default">
        <Container size="xl">
          <div className="grid gap-10 md:grid-cols-2 md:gap-14">
            {/* Canais de atendimento */}
            <Reveal>
              <h2 className="font-display text-2xl font-normal text-navy">
                Canais de atendimento
              </h2>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-faint">
                O canal mais rápido é o WhatsApp — uma primeira conversa, direta, sem
                formulários longos.
              </p>

              <div className="mt-8">
                <Cta
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="solid"
                  track="whatsapp"
                  source="contato_page"
                  className="w-full sm:w-auto"
                >
                  <MessageCircle className="h-4 w-4" />
                  Falar no WhatsApp
                </Cta>
              </div>

              <ul role="list" className="mt-10 space-y-6">
                <ContactRow icon={<Mail className="h-4 w-4" />} label="E-mail">
                  <a
                    href={MAILTO}
                    className="outline-none transition-colors hover:text-navy focus-visible:text-navy"
                  >
                    {SITE.contact.email}
                  </a>
                </ContactRow>
                <ContactRow icon={<Phone className="h-4 w-4" />} label="Telefone">
                  <a
                    href={TEL}
                    className="nums outline-none transition-colors hover:text-navy focus-visible:text-navy"
                  >
                    {SITE.contact.phoneDisplay}
                  </a>
                </ContactRow>
                <ContactRow icon={<Clock className="h-4 w-4" />} label="Atendimento">
                  Segunda a sexta, em horário comercial
                </ContactRow>
              </ul>
            </Reveal>

            {/* Endereço + mapa */}
            <Reveal delay={0.1}>
              <h2 className="font-display text-2xl font-normal text-navy">Onde estamos</h2>
              <div className="mt-4 flex items-start gap-3 text-pretty leading-relaxed text-faint">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-navy" />
                <p>
                  {SITE.address.line1}
                  <br />
                  {SITE.address.line2}
                </p>
              </div>
              {/* Mapa do escritório — endereço confirmado pelo cliente.
                  Embed do Google Maps sem chave (output=embed). */}
              <div className="mt-6 aspect-[16/10] overflow-hidden rounded-2xl border border-hairline">
                <MapFacade
                  title="Mapa do escritório De Mattia Advogados — Rua Ottokar Doerffel, 401, Sala 3, Joinville/SC"
                  src={SITE.address.mapsEmbed}
                  className="h-full w-full"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 text-navy" aria-hidden>
        {icon}
      </span>
      <div>
        <p className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-faint">
          {label}
        </p>
        <div className="mt-1 text-sm text-ink/85">{children}</div>
      </div>
    </li>
  );
}
