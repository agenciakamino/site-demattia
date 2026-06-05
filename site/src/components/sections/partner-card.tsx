"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import type { Partner } from "@/lib/content";
import { cn } from "@/lib/utils";

export function PartnerCard({ partner }: { partner: Partner }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const initials = partner.name
    .split(" ")
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <article className="group">
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-hairline bg-navy">
        {partner.photo ? (
          <Image
            src={partner.photo}
            alt={`Retrato de ${partner.name}`}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
          />
        ) : (
          /* ▶ PLACEHOLDER: retrato P&B do sócio (cliente enviará). Trocar por <Image>. */
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[radial-gradient(120%_90%_at_50%_0%,#221e45,#191634)]">
            <span className="font-display text-[5.5rem] font-normal leading-none text-gold/15">
              {initials}
            </span>
            <span className="absolute bottom-5 text-[0.6rem] uppercase tracking-[0.28em] text-paper/35">
              Retrato em breve
            </span>
          </div>
        )}
        <span aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gold/40" />
      </div>

      <div className="mt-6">
        <h3 className="font-display text-2xl font-normal text-navy">{partner.name}</h3>
        <p className="nums mt-1.5 text-xs font-medium uppercase tracking-[0.2em] text-faint">
          {partner.oab} · {partner.role}
        </p>
        <p className="mt-4 text-pretty text-sm leading-relaxed text-faint">
          {partner.anchor}
        </p>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="group/btn mt-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-navy outline-none transition-colors hover:text-navy-deep focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
        >
          {open ? "Ocultar biografia" : "Ver biografia"}
          <Plus
            className={cn(
              "h-3.5 w-3.5 transition-transform duration-300",
              open && "rotate-45",
            )}
          />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="mt-4 border-t border-hairline pt-4 text-pretty text-sm leading-relaxed text-ink/80">
                {partner.bio}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </article>
  );
}
