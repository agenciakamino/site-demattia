"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Transição de entrada entre páginas (off main thread): ao mudar a rota, o
 * `key={pathname}` remonta o conteúdo e dispara uma animação CSS de fade + sobe
 * leve (opacity/transform → compositor). Pareada com os reveals de scroll.
 *
 * NÃO anima na carga inicial (para não duplicar com o stagger do hero): o
 * `prev` começa null no SSR e no 1º render do cliente — render puro, idêntico
 * nos dois lados (sem hydration mismatch). O ref só é atualizado num effect,
 * depois do commit; a partir daí cada troca de pathname anima. Respeita
 * prefers-reduced-motion (a regra .page-transition vive sob no-preference).
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const prev = useRef<string | null>(null);

  const animate = prev.current !== null && prev.current !== pathname;

  useEffect(() => {
    prev.current = pathname;
  }, [pathname]);

  return (
    <div key={pathname} className={animate ? "page-transition" : undefined}>
      {children}
    </div>
  );
}
