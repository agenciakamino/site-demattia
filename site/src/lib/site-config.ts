/**
 * site-config.ts — Dados institucionais e de contato.
 *
 * Dados confirmados pelo cliente no feedback de 12–15/06/2026 (domínio, telefone
 * e endereço completo). [CONFIRMAR] marca apenas o que ainda depende de validação.
 */

export const SITE = {
  name: "De Mattia Advogados Associados",
  shortName: "De Mattia Advogados",
  oabRegistry: "OAB/SC 4011/2017",
  slogan: "Gestão jurídica aliada ao seu negócio.",
  description:
    "Advocacia empresarial em Joinville/SC — Direito do Trabalho Patronal e Cível Empresarial. Gestão jurídica preventiva: segurança e previsibilidade para a sua empresa.",

  // Domínio confirmado pelo cliente: demattia.com.br
  url: "https://www.demattia.com.br",
  locale: "pt-BR",

  contact: {
    // Telefone/WhatsApp confirmado pelo cliente
    whatsapp: "5547992331111",
    whatsappDisplay: "(47) 99233-1111",
    phone: "+5547992331111",
    phoneDisplay: "(47) 99233-1111",
    // [CONFIRMAR] e-mail institucional no novo domínio (.com.br)
    email: "contato@demattia.com.br",
  },

  address: {
    // Endereço completo confirmado pelo cliente
    street: "Rua Ottokar Doerffel, 401",
    suite: "Sala 3",
    line1: "Rua Ottokar Doerffel, 401 · Sala 3",
    line2: "Joinville · Santa Catarina",
    city: "Joinville",
    state: "SC",
    country: "BR",
    // Embed do Google Maps sem chave (output=embed). Usado em Contato e Escritório.
    mapsEmbed:
      "https://www.google.com/maps?q=Rua%20Ottokar%20Doerffel%2C%20401%2C%20Joinville%20-%20SC&output=embed",
  },

  social: {
    // [CONFIRMAR] perfis oficiais
    linkedin: "#",
    instagram: "#",
  },

  // Mensagem padrão pré-preenchida ao abrir o WhatsApp
  whatsappMessage:
    "Olá! Gostaria de falar com um especialista do De Mattia Advogados sobre a minha empresa.",
} as const;

/** Monta a URL do WhatsApp (wa.me) com mensagem pré-preenchida. */
export function whatsappUrl(message: string = SITE.whatsappMessage): string {
  return `https://wa.me/${SITE.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const MAILTO = `mailto:${SITE.contact.email}`;
export const TEL = `tel:${SITE.contact.phone}`;
