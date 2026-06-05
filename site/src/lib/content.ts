/**
 * content.ts — Fonte única de toda a copy do site.
 * Texto LITERAL aprovado pelo cliente (briefing-cliente/01-pesquisa-cliente.md).
 * Nada aqui deve ser reescrito sem aprovação: respeita o Código de Ética da OAB
 * (Provimento 205/2021) — sem promessa de resultado, sem superlativos, sem preços.
 */

export const SLOGAN = "Gestão jurídica aliada ao seu negócio.";

export const NAV_LINKS = [
  { label: "Atuação", href: "/areas-de-atuacao" },
  { label: "Quem representamos", href: "/quem-representamos" },
  { label: "Escritório", href: "/escritorio" },
  { label: "Sócios", href: "/socios" },
  { label: "FAQ", href: "/faq" },
  { label: "Contato", href: "/contato" },
] as const;

/* ----------------------------------------------------------------- HERO -- */

export const HERO = {
  eyebrow: "Advocacia empresarial · Trabalhista Patronal & Cível · Joinville/SC",
  // H1 — case em frase (um dos "cases em frases" do cliente)
  title: ["Nosso trabalho não começa no processo.", "Começa antes do problema."],
  subtitle:
    "Gestão jurídica aliada ao seu negócio — segurança e previsibilidade para empresas que pensam a longo prazo.",
  credibility: "OAB/SC · Ajorpeme · ~20 anos ao lado de empresas",
} as const;

/* ------------------------------------------------- FAIXA DE AUTORIDADE -- */

export const AUTHORITY_SEALS = [
  { label: "OAB Subseção Joinville", note: "Conselheiro" },
  { label: "Ajorpeme", note: "Diretoria Executiva" },
  { label: "Professor de Direito", note: "Docência e palestras" },
  { label: "Mestrado", note: "Solidez acadêmica" },
] as const;

/* ------------------------------------------------- ÁREAS DE ATUAÇÃO ----- */

export type PracticeItem = {
  slug: string;
  title: string;
  description: string;
  /** Frase de impacto do cliente, quando há uma específica para a subárea. */
  impact?: string;
  /** Índices de FAQ relevantes para exibir na página da subárea. */
  faqRefs?: number[];
};
export type PracticeGroup = {
  key: string;
  slug: string;
  group: string;
  /** Rótulo curto para cards/navegação. */
  short: string;
  lead: string;
  /** Parágrafo de abertura da página do grupo (tom corporativo, sem promessa). */
  intro: string;
  /** Frase de impacto do cliente para o grupo. */
  impact: string;
  faqRefs: number[];
  items: PracticeItem[];
};

export const PRACTICE_AREAS: PracticeGroup[] = [
  {
    key: "trabalhista",
    slug: "trabalhista-patronal",
    group: "Direito do Trabalho Patronal",
    short: "Trabalhista Patronal",
    lead: "Defesa do empregador — prevenção que protege o caixa antes do litígio.",
    intro:
      "Atuação majoritariamente preventiva na defesa do empregador: revisamos contratos, adequamos procedimentos de RH e estruturamos jornadas para mitigar passivos antes que virem ação judicial. Quando o processo já existe, conduzimos a defesa técnica focada em performance.",
    impact:
      "No Direito do Trabalho Patronal, cada brecha corrigida hoje é uma folha de pagamento protegida amanhã.",
    faqRefs: [5, 7, 8],
    items: [
      {
        slug: "consultivo-estrategico",
        title: "Consultivo estratégico",
        description:
          "Adequação de contratos, prevenção de riscos trabalhistas, compliance laboral e proteção ao caixa da empresa.",
        faqRefs: [3, 5, 7],
      },
      {
        slug: "contencioso-de-performance",
        title: "Contencioso de performance",
        description:
          "Defesa técnica rigorosa em ações judiciais e procedimentos administrativos (MTE/MPT).",
        faqRefs: [6, 8],
      },
    ],
  },
  {
    key: "civel",
    slug: "civel-empresarial",
    group: "Direito Cível Empresarial",
    short: "Cível Empresarial",
    lead: "Contratos, operações e patrimônio — segurança jurídica para decidir com confiança.",
    intro:
      "Suporte jurídico para as operações da empresa: contratos comerciais, cobranças corporativas, proteção patrimonial e contencioso cível. Da decisão do dia a dia à governança dos sócios, com a previsibilidade que o mercado corporativo exige.",
    impact:
      "No mercado corporativo, a previsibilidade jurídica é o ativo mais valioso para garantir a longevidade da empresa.",
    faqRefs: [2, 10, 13],
    items: [
      {
        slug: "assessoria-pontual-e-mensal",
        title: "Assessoria pontual e mensal",
        description:
          "Suporte jurídico dinâmico para tomadas de decisão rápidas, cobranças corporativas e proteção patrimonial.",
        faqRefs: [2, 10, 11],
      },
      {
        slug: "seguranca-contratual",
        title: "Segurança contratual",
        description:
          "Elaboração e análise de contratos comerciais complexos, NDAs e outros documentos, minimizando brechas e garantindo o cumprimento de obrigações.",
        impact:
          "Um contrato bem elaborado não serve para prever o sucesso, mas para proteger o seu negócio no momento da divergência.",
        faqRefs: [3, 13],
      },
      {
        slug: "contencioso-de-performance",
        title: "Contencioso de performance",
        description:
          "Defesa técnica rigorosa em ações judiciais e administrativas.",
        faqRefs: [6, 8],
      },
      {
        slug: "patrimonial-e-familiar",
        title: "Assessoria patrimonial e familiar para sócios",
        description:
          "Governança familiar, planejamento sucessório, inventários e direito de família para clientes e parceiros indicados. Entendemos que as empresas são feitas de pessoas e que a segurança do empresário vai além do CNPJ.",
        faqRefs: [17, 13],
      },
    ],
  },
];

/** Busca um grupo de atuação pelo slug. */
export function getPracticeGroup(slug: string): PracticeGroup | undefined {
  return PRACTICE_AREAS.find((g) => g.slug === slug);
}

/** Busca uma subárea (item) dentro de um grupo. */
export function getPracticeItem(
  groupSlug: string,
  itemSlug: string,
): { group: PracticeGroup; item: PracticeItem } | undefined {
  const group = getPracticeGroup(groupSlug);
  const item = group?.items.find((i) => i.slug === itemSlug);
  if (!group || !item) return undefined;
  return { group, item };
}

export const PRACTICE_PARTNERS_NOTE =
  "Demandas de outras áreas — como tributário e recuperação judicial — são conduzidas com uma rede de parceiros homologados e de extrema confiança, para que a sua empresa tenha sempre o especialista certo ao lado.";

/* --------------------------------------------- QUEM NÓS REPRESENTAMOS -- */

export const SECTORS = [
  "Indústria têxtil",
  "Associações",
  "Construção Civil",
  "Incorporadoras",
  "Importadoras",
  "Indústrias de Implementos Agrícolas",
  "Transportadoras de Cargas",
  "Escritórios de Advocacia",
  "Empresas de Recuperação de Crédito",
  "Panificadoras",
  "Empresas de Recrutamento e Seleção",
  "Usinagem",
  "Indústria Metal Mecânica",
  "Condomínios Residenciais",
  "Frigoríficos e Indústria de Abate Animal",
  "Auto Peças",
  "Instituições de Ensino",
  "Bares e Restaurantes",
  "Empresas do setor de Tecnologia",
  "Clínicas Médicas e Odontológicas",
  "Supermercados",
  "Marmorarias",
] as const;

/* ------------------------------------------------------- MANIFESTO ----- */

export const MANIFESTO = {
  eyebrow: "O nosso compromisso",
  text: "Há duas décadas, unimos solidez acadêmica e visão de mercado para blindar operações, reduzir passivos e viabilizar estratégias de crescimento para empresas.",
  pillars: ["Transparência", "Ética", "Linguagem clara"],
} as const;

/* ------------------------------------------------- FRASE DE IMPACTO ----- */

export const IMPACT_QUOTE = "A melhor ação trabalhista é aquela que nunca existiu.";

/* ------------------------------------------------------------ SÓCIOS --- */

export type Partner = {
  name: string;
  oab: string;
  role: string;
  anchor: string;
  bio: string;
  photo: string | null;
};

export const PARTNERS: Partner[] = [
  {
    name: "João De Mattia Neto",
    oab: "OAB/SC 22505",
    role: "Direito do Trabalho Patronal",
    anchor:
      "Mestre · Professor de Direito · Diretoria Executiva da Ajorpeme · Conselheiro da OAB/SC (Joinville)",
    bio: "Advogado especialista em Direito do Trabalho Patronal, com 20 anos de experiência na área, atuando na defesa dos empregadores. Possui especialização, mestrado e atua como professor de Direito e palestrante. É membro da Diretoria Executiva da Ajorpeme e Conselheiro da OAB/SC — Subseção de Joinville.",
    photo: null, // [CONFIRMAR] retrato P&B do sócio (cliente enviará)
  },
  {
    name: "Cristine Weiss De Mattia",
    oab: "OAB/SC 22584",
    role: "Direito Cível Empresarial",
    anchor:
      "Especialista em Processo Civil · Foco na área cível · Assessoria a sócios e familiares",
    bio: "Advogada especialista em Processo Civil, com 20 anos de experiência na área, atuando na defesa de empresas dos mais variados segmentos. Possui especialização e está focada na área cível, assessorando diretamente sócios e seus familiares.",
    photo: null, // [CONFIRMAR] retrato P&B da sócia (cliente enviará)
  },
];

/* ------------------------------------------------- PROVA SOCIAL -------- */
/* Anonimizada por segmento (Provimento 205/2021 — sem nome de cliente). */

export const TESTIMONIALS = [
  {
    quote:
      "Passamos a tratar o jurídico como parte da estratégia, não como apagar incêndio.",
    segment: "Indústria metalmecânica",
  },
  {
    quote:
      "Revisaram os nossos contratos e o passivo trabalhista antes que ele virasse problema.",
    segment: "Empresa familiar",
  },
  {
    quote:
      "Finalmente uma assessoria que explica o que está acontecendo em linguagem que entendemos.",
    segment: "Empresa de serviços",
  },
] as const;

/* ----------------------------------------------------- CTA FINAL ------- */

export const FINAL_CTA = {
  title: "Sua empresa tem o respaldo jurídico que o mercado exige?",
  subtitle:
    "Agende uma reunião estratégica com os nossos sócios. Uma primeira conversa, direta, para entendermos o seu cenário.",
} as const;

/* --------------------------------------------------------- FAQ (18) ---- */

export type FaqItem = { q: string; a: string };

export const FAQ: FaqItem[] = [
  {
    q: "O escritório atende empresas de quais portes e segmentos?",
    a: "Nosso portfólio é majoritariamente composto por micro, pequenas e médias empresas (PMEs) dos setores de indústria, comércio e serviços de Joinville e região. No entanto, contamos com sólida capacidade técnica e robustez operacional para atender grandes empresas corporativas, oferecendo o mesmo padrão de excelência, agilidade e inteligência jurídica exigidos por departamentos jurídicos internos e diretorias de grande porte.",
  },
  {
    q: "O escritório De Mattia atende apenas na região de Joinville/SC?",
    a: "Nossa sede física fica em Joinville/SC, onde possuímos forte atuação institucional e proximidade com o mercado local. No entanto, por meio da total digitalização dos tribunais e do uso de tecnologias avançadas de gestão, atendemos empresas em todo o estado de Santa Catarina e em outras regiões do país, atuando com a mesma eficiência e agilidade, tanto no contencioso digital quanto em reuniões e alinhamentos estratégicos consultivos.",
  },
  {
    q: "Como funciona a contratação do escritório? Atendem apenas mensalistas ou demandas pontuais?",
    a: "Atuamos das duas formas. Oferecemos o modelo de Assessoria Jurídica Mensal (Partido), onde sua empresa conta com um departamento jurídico consultivo e preventivo disponível continuamente por um valor fixo mensal. Também atendemos de forma Pontual, sendo contratados especificamente para um projeto corporativo, elaboração de um contrato complexo ou defesa em uma ação judicial específica (Trabalhista Patronal ou Cível).",
  },
  {
    q: "Quando a minha empresa deve contratar uma assessoria jurídica corporativa?",
    a: "O momento ideal é antes de o problema acontecer. Se a sua empresa hoje assina contratos com fornecedores sem revisão técnica, demite cargos estratégicos sem um plano de mitigação de riscos, utiliza modelos de contrato sem qualquer revisão ou não tem certeza se as rotinas do RH cumprem 100% da legislação trabalhista, você já precisa de assessoria. Esperar o processo judicial chegar para contratar um advogado custa, em média, de 3 a 5 vezes mais caro do que agir preventivamente.",
  },
  {
    q: "Qual o diferencial do escritório De Mattia Advogados?",
    a: "Nosso grande diferencial é a visão de negócios combinada à alta liderança técnica. Não somos um escritório de massa que entrega respostas padronizadas. Os clientes falam diretamente com os sócios (pessoalidade), que possuem 20 anos de experiência prática e acadêmica. Além disso, nossa imersão ativa no ecossistema empresarial local (Ajorpeme, OAB, BNI e outras entidades) nos permite entender as dores reais do empresário, entregando soluções que protegem o patrimônio sem engessar a operação da empresa.",
  },
  {
    q: "Como a atuação no Direito do Trabalho Patronal pode ajudar o caixa da minha empresa?",
    a: "Nossa atuação é majoritariamente preventiva. Atuamos revisando contratos de trabalho, adequando procedimentos de RH, estruturando jornadas e auxiliando na demissão de cargos estratégicos. O objetivo é mitigar e eliminar passivos trabalhistas antes que eles virem uma ação judicial. Caso o processo já exista, nossa equipe realiza uma defesa técnica agressiva e focada em performance para reduzir ao máximo o impacto financeiro no caixa da empresa.",
  },
  {
    q: "O escritório De Mattia prioriza a via judicial ou atua com soluções de acordos e mediações extrajudiciais?",
    a: "Nosso foco principal é a eficiência financeira e operacional da sua empresa. Por isso, sempre que estrategicamente viável, priorizamos a resolução consensual de conflitos através de negociações extrajudiciais e acordos estruturados. Ir para o tribunal é uma ferramenta poderosa que dominamos com excelência, mas entendemos que um acordo rápido e bem desenhado, muitas vezes, protege o caixa da empresa e encerra o risco jurídico de forma muito mais inteligente e célere.",
  },
  {
    q: "O escritório De Mattia também atua com capacitação e treinamentos para a minha equipe de líderes e RH?",
    a: "Sim. Entendemos que a melhor forma de prevenir passivos jurídicos é capacitando quem toma as decisões no dia a dia da empresa. Aproveitando a bagagem de quase uma década do Dr. João na docência de Direito, oferecemos treinamentos customizados, workshops e palestras para lideranças, gestores e equipes de Recursos Humanos. Abordamos temas práticos como assédio no ambiente de trabalho, NR 01, documentação trabalhista preventiva, poder diretivo do empregador e aplicação de sanções.",
  },
  {
    q: "Se a minha empresa precisar de peritos ou auxiliares (médicos, engenheiros, calculistas) para atuar na minha defesa, o escritório consegue nos ajudar?",
    a: "Sim, e este é um dos pilares da nossa atuação técnica. Em ações trabalhistas (como pedidos de insalubridade, periculosidade ou doenças ocupacionais) e cíveis complexas, a prova técnica é decisiva. O escritório De Mattia possui uma rede homologada de parceiros técnicos de extrema confiança (engenheiros do trabalho, médicos peritos, contadores e calculistas) e atua na coordenação direta desses profissionais, auxiliando na formulação de quesitos e acompanhamento de perícias para garantir a melhor defesa possível.",
  },
  {
    q: "Vocês atuam em outras áreas do Direito além da Trabalhista e Cível Empresarial?",
    a: "Nosso foco técnico e comercial é estritamente no Direito do Trabalho Patronal e Cível Empresarial (Contratos e Operações). Acreditamos que a hiperespecialização gera melhores resultados para o cliente corporativo. No entanto, para garantir um atendimento completo ao empresário, possuímos capacidade técnica e operacional para absorver outras demandas, bem como contamos com uma rede de parceiros homologados e de extrema confiança.",
  },
  {
    q: "Como a minha empresa consegue acompanhar o andamento dos processos e dos trabalhos solicitados?",
    a: "Prezamos pela transparência total e pela previsibilidade. Nosso escritório utiliza sistemas de gestão jurídica digital. Sempre que houver uma movimentação relevante em um processo judicial ou a conclusão de um parecer consultivo, nossa equipe notifica o cliente. Além disso, os sócios estão sempre acessíveis para reuniões de alinhamento de status, eliminando o “juridiquês” e focando no impacto real daquela movimentação para o negócio.",
  },
  {
    q: "Qual é o tempo de resposta do escritório para as urgências da minha empresa ou do meu RH?",
    a: "Entendemos que o tempo no mundo dos negócios custa caro. Para os nossos clientes mensais, estabelecemos um Acordo de Nível de Serviço (SLA) prioritário. Respostas consultivas de rotina e análises de contratos são entregues em prazos ágeis e combinados previamente, enquanto urgências que impactam a operação da empresa recebem atendimento imediato dos sócios.",
  },
  {
    q: "O escritório De Mattia utiliza ferramentas de Inteligência Artificial (IA) na condução dos trabalhos jurídicos?",
    a: "Sim. Entendemos que ignorar a evolução tecnológica seria estagnar e desrespeitar o tempo e o investimento do nosso próprio cliente. Por isso, utilizamos ferramentas avançadas de Inteligência Artificial para otimizar processos internos, acelerar a triagem de dados e realizar análises preditivas de jurisprudência. No entanto, a tecnologia é aplicada de forma estritamente correta, ética e segura: toda e qualquer informação gerida ou analisada por IA é obrigatoriamente revisada, validada e refinada por um ser humano. Mantemos a essência da advocacia tradicional — onde a estratégia intelectual e o olhar crítico dos sócios são soberanos —, utilizando a inovação tecnológica apenas como um motor de agilidade em favor do seu negócio.",
  },
  {
    q: "As informações e dados que eu compartilhar em uma consulta inicial estão protegidos, mesmo se a minha empresa não chegar a contratar o escritório?",
    a: "Sim, sob absoluto sigilo. O dever de confidencialidade é inerente à advocacia e uma obrigação legal rigorosa, que abrange desde a primeira reunião de diagnóstico ou consulta inicial, independentemente da posterior formalização do contrato. No escritório De Mattia, compreendemos que a ética profissional e o respeito à privacidade precedem as próprias obrigações legais. Tratamos todas as informações corporativas, estratégicas ou sensíveis de nossos clientes e parceiros como ativos de altíssimo valor, manuseados sob rígidos padrões de segurança e em total conformidade com as diretrizes de proteção de dados.",
  },
  {
    q: "Qual o valor dos honorários para contratar o escritório De Mattia?",
    a: "No mercado corporativo, os honorários não são um custo genérico, mas um investimento proporcional à complexidade da demanda e ao tamanho do risco envolvido. Nós seguimos rigorosamente a tabela de honorários da OAB/SC como patamar mínimo. Para o modelo de assessoria mensal (partido), realizamos um diagnóstico prévio do volume de demandas da empresa para apresentar uma proposta personalizada e previsível. Nosso foco é garantir que o valor investido retorne para a empresa em forma de economia, segurança e redução de passivos.",
  },
  {
    q: "O escritório De Mattia garante o resultado favorável de um processo judicial?",
    a: "Não, e nenhum profissional pautado pela ética pode fazê-lo. A advocacia é, por natureza jurídica e legal, uma atividade de meio e não de resultado. Assim como a medicina não pode assegurar a cura de um paciente, o sucesso de uma demanda judicial depende de inúmeras variáveis independentes, incluindo o entendimento dos magistrados e tribunais superiores. O Estatuto da Advocacia e o Código de Ética da OAB, inclusive, proíbem expressamente a promessa ou garantia de resultados. Nossa garantia, assegurada com base em duas décadas de trajetória, é a de uma defesa técnica agressiva, estratégica e minuciosa, gerindo o processo com o mesmo zelo e responsabilidade que aplicaríamos ao nosso próprio patrimônio.",
  },
  {
    q: "A contratação do escritório De Mattia é formalizada mediante contrato de honorários?",
    a: "Sim. Toda e qualquer contratação do escritório De Mattia — seja para atuação consultiva ou contenciosa — é rigorosamente formalizada mediante contrato de honorários advocatícios, garantindo total clareza e segurança jurídica sobre as obrigações e o escopo de cada parte. Além disso, nosso escritório possui registro formal perante a OAB/SC, atua em estrita conformidade com o Poder Público e emite nota fiscal eletrônica de todos os serviços prestados, assegurando a transparência fiscal que a governança da sua empresa exige.",
  },
  {
    q: "Recebi a indicação do nome do Dr. João ou da Dra. Cristine, mas preciso de atendimento para Pessoa Física (como Divórcio ou Inventário). Vocês atendem?",
    a: "Sim. Embora o foco principal do escritório De Mattia seja o mercado corporativo (PJ), mantemos um núcleo exclusivo e sob total sigilo para o atendimento de Demandas Patrimoniais, Familiares e Consumeristas de Pessoas Físicas, atendendo exclusivamente clientes do escritório, sócios de nossas empresas parceiras e indicações diretas da nossa rede de relacionamentos institucional. O atendimento é feito de forma personalizada e consultiva pelos sócios.",
  },
];

/* ---------------------------------------------- COPY DE PÁGINAS -------- */
/* Microcopy estrutural da Kamino para o site multi-página. Frases longas e
   institucionais derivam das palavras do próprio cliente (pesquisa/FAQ);
   revisar com o cliente antes de publicar. */

export const PAGES = {
  areas: {
    eyebrow: "Áreas de atuação",
    title: "Como atuamos para proteger a sua empresa",
    subtitle:
      "Foco estrito em duas frentes. Concentramos a experiência onde ela mais protege o seu negócio — não somos generalistas.",
  },
  setores: {
    eyebrow: "Quem nós representamos",
    title: "Empresas que confiam o jurídico a quem entende o negócio",
    subtitle:
      "Atendemos os mais variados segmentos da indústria, comércio e serviços de Joinville e região — cada um com as suas particularidades.",
  },
  escritorio: {
    eyebrow: "O escritório",
    title: "Solidez acadêmica, visão de mercado",
    subtitle:
      "Há duas décadas, unimos solidez acadêmica e visão de mercado para blindar operações, reduzir passivos e viabilizar estratégias de crescimento para empresas.",
  },
  socios: {
    eyebrow: "Quem conduz o seu caso",
    title: "Autoridade técnica, atendimento pessoal",
    subtitle:
      "No De Mattia, você fala diretamente com os sócios — duas décadas de experiência prática e acadêmica ao lado da sua empresa.",
  },
  faq: {
    eyebrow: "Perguntas frequentes",
    title: "Antes de conversarmos",
    subtitle:
      "Reunimos as dúvidas mais comuns de quem procura assessoria jurídica empresarial.",
  },
  contato: {
    eyebrow: "Fale com um especialista",
    title: "Sua empresa tem o respaldo jurídico que o mercado exige?",
    subtitle:
      "Agende uma reunião estratégica com os nossos sócios. Uma primeira conversa, direta, para entendermos o seu cenário.",
  },
  insights: {
    eyebrow: "Conteúdo & insights",
    title: "Em breve",
    subtitle:
      "Estamos preparando uma seção de conteúdo prático sobre gestão jurídica empresarial — temas trabalhistas e cíveis explicados sem juridiquês, para apoiar as decisões da sua empresa.",
  },
} as const;
