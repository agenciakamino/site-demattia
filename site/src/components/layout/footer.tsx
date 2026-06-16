import Link from "next/link";
import { MapPin } from "lucide-react";
import { Container } from "@/components/primitives/container";
import { LinkedInIcon, InstagramIcon } from "@/components/icons";
import { Brand } from "./brand";
import { NAV_LINKS } from "@/lib/content";
import { SITE, MAILTO, TEL } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-paper">
      <Container size="xl" className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          {/* Marca */}
          <div className="md:col-span-5">
            <Brand variant="dark" showRegistry />
            <p className="mt-6 max-w-xs text-pretty text-sm leading-relaxed text-paper/55">
              {SITE.slogan}
            </p>
            <div className="mt-7 flex items-center gap-3">
              <SocialLink href={SITE.social.linkedin} label="LinkedIn">
                <LinkedInIcon className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={SITE.social.instagram} label="Instagram">
                <InstagramIcon className="h-4 w-4" />
              </SocialLink>
            </div>
          </div>

          {/* Navegação */}
          <nav className="md:col-span-3" aria-label="Rodapé">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-paper/60">
              Navegação
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-paper/70 outline-none transition-colors hover:text-gold focus-visible:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato + endereço */}
          <div className="md:col-span-4">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-paper/60">
              Contato
            </p>
            <ul className="nums mt-5 space-y-3 text-sm text-paper/70">
              <li>
                <a href={TEL} className="outline-none transition-colors hover:text-gold focus-visible:text-gold">
                  {SITE.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={MAILTO} className="outline-none transition-colors hover:text-gold focus-visible:text-gold">
                  {SITE.contact.email}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex items-start gap-2.5 text-sm text-paper/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-paper/40" />
              <p className="text-pretty leading-relaxed">
                {SITE.address.line1}
                <br />
                {SITE.address.line2}
              </p>
            </div>
          </div>
        </div>

        {/* Barra inferior — conformidade OAB */}
        <div className="mt-14 flex flex-col gap-3 border-t border-paper/10 pt-7 text-xs text-paper/60 md:flex-row md:items-center md:justify-between">
          <span>
            © {SITE.name}. {SITE.oabRegistry}. Todos os direitos reservados.
          </span>
          <span className="text-pretty">
            Conteúdo meramente informativo, em conformidade com o Código de Ética e
            Disciplina da OAB.
          </span>
        </div>
      </Container>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper/20 text-paper/80 outline-none transition-all duration-300 hover:border-gold hover:text-gold focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep"
    >
      {children}
    </a>
  );
}
