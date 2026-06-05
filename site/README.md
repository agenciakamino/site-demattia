# De Mattia Advogados Associados — Site

Site institucional de alta conversão do escritório **De Mattia Advogados Associados**
(Joinville/SC). Conceito **"A Autoridade Serena"** (minimalista premium), aprovado pelo
cliente — vestido com a marca oficial, tipografia e conteúdo final.

Construído pela **Agência Kamino**.

---

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript** estrito (sem `any`)
- **Tailwind CSS v4** (tokens em CSS vars via `@theme inline`)
- **shadcn/ui** (Accordion, Button, Sheet) sobre **Radix UI**
- **Framer Motion** (entradas com fade+translate, stagger, microinterações)
- **Lucide** (ícones) + SVGs próprios de marca (LinkedIn/Instagram)
- Fontes via `next/font`: **Fraunces** (display serifado) + **Geist** (corpo/UI), `display: swap`

## Como rodar

```bash
pnpm install          # instala dependências
pnpm dev              # ambiente de desenvolvimento → http://localhost:3000
pnpm build            # build de produção
pnpm start            # serve o build de produção
pnpm lint             # ESLint
```

> Requer **Node 20.9+** (recomendado Node 22+). Gerenciador: **pnpm**.

### Variáveis de ambiente (medição)

Copie `.env.example` para `.env.local` e preencha quando o cliente fornecer os IDs:

```bash
NEXT_PUBLIC_GA4_ID=            # Google Analytics 4 — formato G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=     # Meta Pixel — ID numérico
```

Sem IDs, nenhum script de tracking é carregado (no-op silencioso). Os eventos de
conversão já estão fiados: `whatsapp_click` (com `source`), `cta_click`, `Lead` (Meta).

---

## Estrutura — SITE multi-página

Site navegável com menu real (não é landing page). Todas as 22 páginas são
**estáticas** (SSG); as páginas de área/subárea usam `generateStaticParams`.

```
/                                         Home (hub: hero + destaques + CTA)
/areas-de-atuacao                         Visão geral das 2 frentes
   /[group]                               trabalhista-patronal · civel-empresarial
      /[sub]                              6 subáreas (consultivo, contencioso,
                                          contratos, patrimonial-familiar, ...)
/quem-representamos                       22 setores representados
/escritorio                               Quem somos + foto em destaque + valores
/socios                                   João + Cristine (bio sob demanda)
/faq                                      As 18 perguntas (accordion)
/contato                                  WhatsApp + e-mail + telefone + endereço
/insights                                 Estrutura para conteúdo futuro (noindex)
```

```
src/
  app/
    layout.tsx                  # fontes, metadata, OG, Header/Footer/MobileBar, Org JSON-LD
    page.tsx                    # home
    areas-de-atuacao/           # overview + [group]/ + [group]/[sub]/ (dynamic, SSG)
    quem-representamos/ escritorio/ socios/ faq/ contato/ insights/
    not-found.tsx · sitemap.ts · robots.ts · icon.png · apple-icon.png
  components/
    layout/                     # Header (rotas + usePathname), Footer, MobileActionBar, Brand
    sections/                   # blocos da home (Hero, PracticeAreas, Sectors, … FinalCta)
    blocks/                     # reutilizáveis: PracticeGroups, SectorGrid, FaqAccordion,
                                #   PartnersGrid, QuoteBand
    primitives/                 # Container, Section, Eyebrow, Reveal/Stagger, Cta,
                                #   PageHero, Breadcrumb, SectionLink
    ui/                         # shadcn (accordion, button, sheet)
    analytics.tsx · json-ld.tsx · icons.tsx
  lib/
    content.ts                  # copy literal + áreas/subáreas (slugs, frases de impacto), 18 FAQ
    site-config.ts              # contatos/endereço (placeholders [CONFIRMAR])
    tracking.ts                 # GA4 + Meta Pixel + rastreio de WhatsApp/CTAs
    utils.ts                    # cn()
public/
  brand/  photos/               # logos + fachada.jpeg
```

> **As 5 "frases de impacto" do cliente** estão todas usadas: hero (#1) e faixa da
> home (#2); as outras 3 entram nas faixas navy das páginas de área/subárea.

### Design tokens (marca oficial)

| Token | HEX | Uso |
|---|---|---|
| `--navy` | `#221E45` | Primária: display, header/rodapé, blocos de marca |
| `--navy-deep` | `#191634` | Seções dark / profundidade |
| `--gold` | `#FFF369` | Acento dosado (filetes, hover, nº de índice). **Só sobre navy.** |
| `--paper` | `#FBFAF7` | Fundo base (papel premium) |
| `--ink` | `#2A2742` | Texto corpo sobre claro |
| `--faint` | `#6B6880` | Apoio/legendas |
| `--hairline` | `#E7E4DC` | Divisores finos |

Utilitários Tailwind: `bg-navy`, `text-ink`, `text-faint`, `border-hairline`, `bg-gold`, etc.

---

## Qualidade verificada

- **Lighthouse (mobile):** Acessibilidade **100** · Best Practices **100** · SEO **100**
  — verificado em home, /socios e nas páginas de área/subárea.
- **Core Web Vitals:** LCP ~0.86s · **CLS 0.00** · TTFB ~7ms
- **Acessibilidade WCAG 2.1 AA:** um único `<h1>`, hierarquia semântica, contraste
  verificado (amarelo só sobre navy), `focus-visible` em todo elemento clicável,
  navegação por teclado, focus trap (menu/accordion via Radix), `prefers-reduced-motion`.
- **SEO:** metadata + OpenGraph, JSON-LD `LegalService` + `FAQPage`, sitemap, robots.
- **Conformidade OAB (Provimento 205/2021):** sem promessa de resultado, sem superlativos,
  sem preços; prova social anonimizada por segmento; nota de conformidade no rodapé.

---

## ⏳ Pendências do cliente (placeholders prontos para troca)

Busque por `[CONFIRMAR]` e `PLACEHOLDER` no código. Itens:

### Dados de contato — `src/lib/site-config.ts`
- [ ] **WhatsApp** comercial (hoje: placeholder `5547999999999`)
- [ ] **Telefone** fixo (hoje: `(47) 0000-0000`)
- [ ] **E-mail** institucional (hoje: `contato@demattia.adv.br`)
- [ ] **Endereço** completo — a fachada sugere *Comercial Setracajo, sala 401, Joinville/SC*
- [ ] **LinkedIn / Instagram** (URLs oficiais — hoje apontam para `#`)
- [ ] **Domínio** canônico (hoje: `https://www.demattia.adv.br`)

### Imagens
- [ ] **Retratos dos sócios** (P&B, `aspect-[3/4]`) → `PARTNERS[].photo` em `content.ts`
      (hoje: placeholder elegante com iniciais JM / CW sobre navy)
- [ ] **Foto profissional do escritório** → substituir/complementar `public/photos/fachada.jpeg`
- [ ] **Selos** oficiais (OAB, Ajorpeme, Ielusc/UNIVILLE) → faixa de autoridade
      (hoje: credenciais em texto institucional)

### Marca
- [ ] **Logo vetorial** (SVG / PNG transparente) — as duas versões citadas pelo cliente
      (cabeçalho das petições + logo azul da fachada). O lockup atual é composto
      (ícone DM `logo-dm.png` + wordmark tipográfico) para nitidez; trocar pelo oficial.
- [ ] **Logo invertido** (DM amarelo + contorno sobre navy) para o rodapé.

### Medição
- [ ] IDs de **GA4** e **Meta Pixel** em `.env.local`

### Copy estrutural a revisar com o cliente
O multi-página exigiu microcopy de conexão que **não veio literal** do cliente
(derivada da pesquisa/FAQ dele, em tom corporativo e sem promessa de resultado).
Revisar antes de publicar — está marcada com comentários no código:
- [ ] Intros das páginas de grupo (`PRACTICE_AREAS[].intro` em `content.ts`)
- [ ] Pilares da página `/escritorio` (`VALUES` — Transparência/Ética/Linguagem clara)
- [ ] Títulos/subtítulos de página (`PAGES` em `content.ts`)
- [ ] Texto introdutório de `/quem-representamos`

### Evolução pós-validação (opcional, bom para SEO local)
- [ ] Página por sócio (bio individual) e conteúdo real em `/insights`.

---

*Conteúdo e estrutura conforme briefing do cliente e o conceito por ele aprovado.*
