"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Transição de entrada entre páginas (off main thread): ao mudar a rota, o
 * `key={pathname}` remonta o conteúdo e dispara uma animação CSS de fade + sobe
 * leve (opacity/transform → compositor). Pareada com os reveals de scroll.
 *
 * NÃO anima na carga inicial (para não duplicar com o stagger do hero): no SSR
 * e no 1º render do cliente `prevPath === pathname` (render idêntico → sem
 * hydration mismatch), logo `animate` é false. A cada troca de rota, ajustamos
 * o estado durante o render (padrão sancionado do React p/ "guardar info de
 * renders anteriores") e passamos a animar. Respeita prefers-reduced-motion
 * (a regra .page-transition vive sob no-preference).
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [prevPath, setPrevPath] = useState(pathname);
  const [animate, setAnimate] = useState(false);

  if (pathname !== prevPath) {
    setPrevPath(pathname);
    setAnimate(true);
  }

  return (
    <div key={pathname} className={animate ? "page-transition" : undefined}>
      {children}
    </div>
  );
}
