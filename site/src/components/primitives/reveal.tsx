"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const; // easeOutExpo suave — entrada serena

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Distância do translate de entrada (px). */
  y?: number;
  as?: "div" | "section" | "li" | "article" | "span";
};

/** Entrada única: fade + translate ao entrar na viewport (uma vez). */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 16,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  );
}

/* ---------------------------------------------------------- Stagger ----- */

const groupVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "ul" | "ol";
};

/** Container que orquestra a entrada escalonada dos filhos `StaggerItem`. */
export function Stagger({ children, className, as = "div" }: StaggerProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={groupVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </MotionTag>
  );
}

type StaggerItemProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
};

export function StaggerItem({ children, className, as = "div" }: StaggerItemProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
  };
  return (
    <MotionTag className={cn(className)} variants={itemVariants}>
      {children}
    </MotionTag>
  );
}
