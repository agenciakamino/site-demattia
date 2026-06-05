"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Brand } from "./brand";
import { NAV_LINKS } from "@/lib/content";
import { whatsappUrl } from "@/lib/site-config";
import { trackWhatsappClick } from "@/lib/tracking";
import { cn } from "@/lib/utils";

function useIsActive(pathname: string) {
  return (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = useIsActive(pathname);

  // Header transparente apenas no topo da home; sólido nas demais páginas.
  const overHero = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300",
        overHero
          ? "border-b border-transparent bg-transparent"
          : "border-b border-hairline bg-paper/85 backdrop-blur-md supports-[backdrop-filter]:bg-paper/70",
      )}
    >
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6 md:px-8">
        <Link
          href="/"
          title="Ir para o início"
          className="rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
        >
          <Brand variant="light" />
        </Link>

        {/* Navegação desktop */}
        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} href={link.href} active={isActive(link.href)}>
              {link.label}
            </NavLink>
          ))}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsappClick("header")}
            className="group relative ml-1 inline-flex items-center bg-navy px-5 py-2.5 text-[0.78rem] font-medium uppercase tracking-[0.12em] text-paper outline-none transition-colors hover:bg-navy-deep focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            Fale com um especialista
          </a>
        </nav>

        {/* Gatilho mobile */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="Abrir menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-navy outline-none transition-colors hover:bg-navy/5 focus-visible:ring-2 focus-visible:ring-navy"
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[86%] max-w-sm border-hairline bg-paper p-0">
              <SheetTitle className="sr-only">Menu de navegação</SheetTitle>
              <div className="flex h-full flex-col">
                <div className="border-b border-hairline px-6 py-6">
                  <Brand variant="light" />
                </div>
                <nav className="flex flex-1 flex-col gap-1 px-4 py-6">
                  {NAV_LINKS.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        aria-current={isActive(link.href) ? "page" : undefined}
                        className={cn(
                          "rounded-lg px-3 py-3 font-display text-xl outline-none transition-colors hover:bg-navy/5 focus-visible:bg-navy/5",
                          isActive(link.href) ? "text-navy" : "text-ink/80",
                        )}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="border-t border-hairline p-6">
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsappClick("mobile_menu")}
                    className="flex w-full items-center justify-center bg-navy px-6 py-4 text-[0.78rem] font-medium uppercase tracking-[0.18em] text-paper outline-none transition-colors hover:bg-navy-deep focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                  >
                    Fale com um especialista
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "group relative text-sm outline-none transition-colors hover:text-navy focus-visible:text-navy",
        active ? "text-navy" : "text-ink/80",
      )}
    >
      {children}
      <span
        className={cn(
          "absolute -bottom-1 left-0 h-px w-full origin-left bg-gold transition-transform duration-300",
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100",
        )}
      />
    </Link>
  );
}
