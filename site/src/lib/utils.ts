import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Prefixo de deploy (ex.: /site-demattia no GitHub Pages; vazio no domínio próprio). */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Prefixa um caminho de asset estático (em /public) com o BASE_PATH. Necessário
 * porque o next/image com `unoptimized` não aplica o basePath ao src — diferente
 * dos chunks /_next, que já saem prefixados.
 */
export function asset(path: string) {
  return `${BASE_PATH}${path}`;
}
