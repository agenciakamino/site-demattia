"use client";

import {
  Children,
  cloneElement,
  createElement,
  isValidElement,
  useEffect,
  useRef,
  type CSSProperties,
  type ReactElement,
} from "react";
import { cn } from "@/lib/utils";

/*
  Reveal/Stagger CSS-driven (off main thread).
  ----------------------------------------------------------------------------
  A entrada (fade + translateY) roda em TRANSIÇÕES CSS de opacity/transform —
  compositadas pela GPU. O IntersectionObserver, ao entrar na viewport, apenas
  marca o atributo `data-shown` DIRETO NO DOM (setAttribute) — SEM setState, logo
  SEM re-render do React durante o scroll. Depois disso o observer desconecta.
  Substitui a versão Framer Motion (que animava por JS a cada frame e re-renderava
  por elemento). Framer fica só em animações de ESTADO real (acordeão de bio).

  Garantias:
  - Sem JS → conteúdo VISÍVEL (regra `.js [data-reveal]` no globals.css). SEO-safe.
  - Sem flash → classe `.js` aplicada por script inline antes do 1º paint (layout.tsx).
  - Respeita `prefers-reduced-motion` (regra CSS sob no-preference).

  API idêntica à anterior: Reveal(className, delay, y, as) · Stagger(className, as)
  · StaggerItem(className, as).
*/

type Tag = "div" | "section" | "li" | "article" | "span" | "ul" | "ol";

/**
 * Observa o elemento e, ao entrar na viewport (uma vez), marca `data-shown` via
 * DOM — no próprio elemento ou, em modo grupo, em todos os `[data-reveal]` filhos.
 * Não usa estado React: o trabalho de main thread por reveal é só um setAttribute.
 */
function useRevealObserver(group: boolean, rootMargin: string) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => {
      if (group) {
        el.querySelectorAll("[data-reveal]").forEach((c) =>
          c.setAttribute("data-shown", ""),
        );
      } else {
        el.setAttribute("data-shown", "");
      }
    };

    if (typeof IntersectionObserver === "undefined") {
      reveal();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          reveal();
          io.disconnect();
        }
      },
      { rootMargin, threshold: 0.01 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [group, rootMargin]);

  return ref;
}

/* ----------------------------------------------------------------- Reveal -- */

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Atraso da transição, em segundos (paridade com a API anterior). */
  delay?: number;
  /** Distância do translate de entrada (px). */
  y?: number;
  as?: Tag;
};

export function Reveal({ children, className, delay = 0, y = 10, as = "div" }: RevealProps) {
  // rootMargin com bottom POSITIVO (+35% da viewport): o elemento revela ~1/3 de
  // tela ANTES de entrar no campo de visão, então a transição já terminou quando
  // ele chega ao olho. É o que faz o scroll parecer nativo (conteúdo parado).
  const ref = useRevealObserver(false, "0px 0px 50% 0px");
  const style = {
    "--reveal-y": `${y}px`,
    "--reveal-delay": `${delay}s`,
  } as CSSProperties;

  return createElement(
    as,
    { ref, className: cn(className), "data-reveal": "", style },
    children,
  );
}

/* ---------------------------------------------------------------- Stagger -- */

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "ul" | "ol";
};

/** Container: um único observer revela todos os itens de uma vez (via DOM); o
 *  escalonamento vem do `transition-delay` por índice, injetado no clone. */
export function Stagger({ children, className, as = "div" }: StaggerProps) {
  const ref = useRevealObserver(true, "0px 0px 50% 0px");

  let i = 0;
  const items = Children.map(children, (child) => {
    if (isValidElement(child) && child.type === StaggerItem) {
      return cloneElement(child as ReactElement<StaggerItemProps>, { _index: i++ });
    }
    return child;
  });

  return createElement(as, { ref, className: cn(className) }, items);
}

type StaggerItemProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
  /** Injetado pelo Stagger; ordena o atraso da entrada. */
  _index?: number;
};

export function StaggerItem({
  children,
  className,
  as = "div",
  _index = 0,
}: StaggerItemProps) {
  // Cascata curta e com teto: passo de 0,045s, saturando em 0,18s (~4 itens).
  // Listas longas não ficam "rasgando" itens depois que o scroll já passou.
  const style = {
    "--reveal-y": "8px",
    "--reveal-delay": `${Math.min(_index * 0.045, 0.18).toFixed(3)}s`,
  } as CSSProperties;

  return createElement(
    as,
    { className: cn(className), "data-reveal": "", style },
    children,
  );
}
