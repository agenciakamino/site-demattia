/**
 * tracking.ts — Hooks de medição (GA4 + Meta Pixel + cliques no WhatsApp/CTAs).
 *
 * Os IDs ficam em variáveis de ambiente públicas (ver .env.example):
 *   NEXT_PUBLIC_GA4_ID    — ex: G-XXXXXXXXXX
 *   NEXT_PUBLIC_META_PIXEL_ID — ex: 000000000000000
 *
 * Sem IDs configurados, nada é carregado e os eventos viram no-op silencioso.
 * Chame `trackEvent(...)` em cliques de CTA/WhatsApp (já fiado nos componentes).
 */

export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID ?? "";
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";

export const hasGA4 = GA4_ID.length > 0;
export const hasMetaPixel = META_PIXEL_ID.length > 0;

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

/** Dispara um evento para GA4 e Meta Pixel (no-op se não houver IDs/SSR). */
export function trackEvent(name: string, params: EventParams = {}): void {
  if (typeof window === "undefined") return;

  if (hasGA4 && typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
  if (hasMetaPixel && typeof window.fbq === "function") {
    window.fbq("trackCustom", name, params);
  }
}

/** Evento de clique no WhatsApp — origem ajuda a saber qual CTA converteu. */
export function trackWhatsappClick(source: string): void {
  trackEvent("whatsapp_click", { source });
  if (hasMetaPixel && typeof window !== "undefined" && typeof window.fbq === "function") {
    // Mapeia para o evento padrão de Lead do Meta
    window.fbq("track", "Lead", { content_name: source });
  }
}

/** Clique genérico em CTA (não-WhatsApp), ex.: e-mail, telefone. */
export function trackCtaClick(label: string, source: string): void {
  trackEvent("cta_click", { label, source });
}
