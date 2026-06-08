import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site-config";
import { PRACTICE_AREAS } from "@/lib/content";

// Gerado estaticamente no build (necessário com output: "export").
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;

  const staticRoutes = [
    "/",
    "/areas-de-atuacao",
    "/quem-representamos",
    "/escritorio",
    "/socios",
    "/faq",
    "/contato",
  ];

  const areaRoutes = PRACTICE_AREAS.flatMap((g) => [
    `/areas-de-atuacao/${g.slug}`,
    ...g.items.map((it) => `/areas-de-atuacao/${g.slug}/${it.slug}`),
  ]);

  return [...staticRoutes, ...areaRoutes].map((path) => ({
    url: `${base}${path === "/" ? "" : path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
