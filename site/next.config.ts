import type { NextConfig } from "next";

/**
 * Export estático para hospedagem em GitHub Pages (preview do cliente).
 * - `output: "export"` → gera HTML/CSS/JS em `out/` (sem servidor Node).
 * - `basePath`/`assetPrefix` só no build de Pages (project page é servido em
 *   `/site-demattia/`); o `next dev` local segue na raiz. Quando for ao domínio
 *   próprio (www.demattia.adv.br), basta não setar GITHUB_PAGES.
 * - `images.unoptimized` → next/image sem o otimizador de servidor.
 */
const isGhPages = process.env.GITHUB_PAGES === "true";
const repo = "site-demattia";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  ...(isGhPages ? { basePath: `/${repo}`, assetPrefix: `/${repo}/` } : {}),
};

export default nextConfig;
