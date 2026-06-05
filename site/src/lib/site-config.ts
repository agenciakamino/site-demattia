/**
 * site-config.ts — Dados institucionais e de contato.
 *
 * ⚠️ TODOS os campos marcados [CONFIRMAR] são PLACEHOLDERS aguardando
 * validação do cliente (ver README → "Pendências"). Não publicar sem confirmar.
 * A foto da fachada indica: Comercial Setracajo, sala 401, Joinville/SC.
 */

export const SITE = {
  name: "De Mattia Advogados Associados",
  shortName: "De Mattia Advogados",
  oabRegistry: "OAB/SC 4011/2017",
  slogan: "Gestão jurídica aliada ao seu negócio.",
  description:
    "Advocacia empresarial em Joinville/SC — Direito do Trabalho Patronal e Cível Empresarial. Gestão jurídica preventiva: segurança e previsibilidade para a sua empresa.",

  // URL canônica — [CONFIRMAR] domínio definitivo do cliente
  url: "https://www.demattia.adv.br",
  locale: "pt-BR",

  contact: {
    // [CONFIRMAR] número/uso do WhatsApp comercial do escritório
    whatsapp: "5547999999999",
    whatsappDisplay: "(47) 99999-9999",
    // [CONFIRMAR] telefone fixo comercial
    phone: "+554700000000",
    phoneDisplay: "(47) 0000-0000",
    // [CONFIRMAR] e-mail institucional
    email: "contato@demattia.adv.br",
  },

  address: {
    // [CONFIRMAR] endereço completo (sugerido pela fachada)
    line1: "Comercial Setracajo — Sala 401",
    line2: "Joinville · Santa Catarina",
    city: "Joinville",
    state: "SC",
    country: "BR",
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
