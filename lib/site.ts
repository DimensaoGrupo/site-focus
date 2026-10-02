// Todo o conteúdo trocável do site fica aqui.

const whatsappNumber = "5519974164386";
const whatsappMessage = "Olá! Gostaria de solicitar um orçamento com a Focus Serviços.";

export const whatsappLink = (text: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

const address = "Rua Vitória Colombo Rossi, 403, Sala 02, Jardim Santa Rosa, Valinhos-SP, CEP 13270-260";

export const site = {
  name: "Focus Serviços",
  legalName: "Focus Serviços de Portaria Ltda.",
  description:
    "Portaria, controle de acesso, limpeza, zeladoria e jardinagem para condomínios e empresas em Valinhos, Campinas e região.",
  whatsapp: "(19) 97416-4386",
  whatsappUrl: whatsappLink(whatsappMessage),
  // TODO: incluir o e-mail aqui e no rodapé quando o domínio existir.
  address,
  mapUrl: `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`,
  hours: ["Segunda a quinta, das 8h às 18h", "Sexta, das 8h às 17h"],
  cta: "Pedir orçamento",
};

export const nav = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Dúvidas", href: "#duvidas" },
  { label: "Contato", href: "#contato" },
  { label: "Área do colaborador", href: "https://colaborador.servicosfocus.com.br" },
];

export const hero = {
  eyebrow: "Portaria, limpeza e conservação",
  title: "Nós cuidamos do seu patrimônio",
  text: "Profissionais preparados para as mais diversas situações.",
};

// Fotos de banco de imagens (Pexels, uso comercial livre), salvas em /public/fotos.
// O número é o id da foto no Pexels. TODO: trocar por fotos reais da equipe em serviço.
// `position` escolhe a parte da foto que aparece quando ela é cortada.
export const images = {
  hero: { src: "/fotos/hero-edificio.jpg", alt: "Edifício residencial branco cercado por árvores" }, // 18418225
  portaria: { src: "/fotos/portaria.jpg", alt: "Porteiro recebendo uma encomenda no balcão da recepção" }, // fornecida pelo cliente
  acesso: { src: "/fotos/controle-de-acesso.jpg", alt: "Leitor biométrico ao lado de uma porta de vidro" }, // 37538043
  limpeza: { src: "/fotos/limpeza.jpg", alt: "Profissional de limpeza passando o mop no piso de um escritório" }, // fornecida pelo cliente
  zeladoria: { src: "/fotos/zeladoria.jpg", alt: "Profissional fazendo o reparo de uma janela", position: "50% 62%" }, // 5691513
  jardinagem: { src: "/fotos/jardinagem.jpg", alt: "Jardineiro aparando uma cerca viva" }, // 24595771
  bannerCondominio: { src: "/fotos/banner-condominio.jpg", alt: "Torre residencial vista por entre as árvores", position: "50% 50%" }, // 26125836
  bannerEquipe: { src: "/fotos/banner-equipe.jpg", alt: "Equipe uniformizada chegando ao local de trabalho com os equipamentos", position: "50% 30%" }, // 6196677
};

export const banners = {
  solucoes: {
    title: "Soluções sob medida para o seu condomínio ou empresa",
    text: "Cada contrato é montado a partir das necessidades do local.",
  },
  equipe: {
    title: "Uma equipe pronta para cuidar do seu patrimônio",
    text: "Portaria, limpeza, zeladoria e jardinagem em um só contrato.",
  },
};

export const services = {
  portaria: {
    title: "Recepção e Portaria",
    text: "Profissionais treinados para receber moradores, visitantes e entregas.",
  },
  acesso: {
    title: "Controle de Acesso",
    text: "Soluções personalizadas para sua empresa ou condomínio.",
  },
  limpeza: {
    title: "Limpeza e Conservação",
    text: "Ambientes limpos e bem cuidados, todos os dias.",
  },
  zeladoria: {
    title: "Zeladoria",
    text: "Cuidado diário com as áreas comuns e pequenos reparos.",
  },
  jardinagem: {
    title: "Jardinagem",
    text: "Manutenção de jardins e áreas verdes.",
  },
};

// Sexto cartão da grade de serviços: chamada para orçamento, não é um serviço.
export const servicesCta = {
  title: "Precisa de mais de um serviço?",
  text: "Combine os serviços em um só contrato, na medida do seu condomínio ou da sua empresa.",
};

export const about = {
  // TODO: completar com tempo de mercado e região atendida.
  text: [
    "A Focus Serviços oferece portaria, controle de acesso, limpeza, zeladoria e jardinagem para condomínios e empresas, com profissionais treinados e supervisão constante.",
    "Trabalhamos com soluções personalizadas para cada cliente, sempre com seriedade, pontualidade e respeito a quem circula pelo seu patrimônio.",
  ],
  mission: "A plena satisfação do cliente, com excelência no atendimento de cada demanda.",
};

// Baseado no comunicado institucional da Focus ("O que muda para nossos clientes?").
export const differentials = [
  {
    title: "Supervisão 24 horas",
    text: "Acompanhamento contínuo das operações, com mais controle e agilidade na resolução de ocorrências.",
  },
  {
    title: "Pronto atendimento",
    text: "Estrutura preparada para responder com rapidez às demandas e necessidades de cada cliente.",
  },
  {
    title: "Processos padronizados",
    text: "Procedimentos estruturados que trazem eficiência, previsibilidade e qualidade à execução dos serviços.",
  },
  {
    title: "Soluções integradas",
    text: "Pessoas, processos e tecnologia reunidos em uma única estrutura de serviços.",
  },
  {
    title: "Conforto e segurança",
    text: "Investimento contínuo em estrutura, pessoas e tecnologia para garantir a sua tranquilidade.",
  },
];

export const steps = [
  {
    title: "Visita técnica",
    text: "Conhecemos o local e as necessidades do cliente.",
  },
  {
    title: "Proposta",
    text: "Apresentamos escopo, escala e valores por escrito.",
  },
  {
    title: "Implantação",
    text: "Iniciamos o serviço na data combinada, com a equipe apresentada.",
  },
  {
    title: "Acompanhamento",
    text: "A supervisão acompanha a rotina e ajusta o que for necessário.",
  },
];

export const segments = [
  "Condomínios residenciais",
  "Condomínios comerciais",
  "Empresas",
  "Escolas",
  "Clínicas",
  "Indústrias",
];

export const faq = [
  {
    q: "Quais serviços a Focus oferece?",
    a: "Recepção e portaria, controle de acesso, CFTV e monitoramento 24 horas, limpeza e conservação, zeladoria e jardinagem.",
  },
  {
    q: "Posso contratar apenas um serviço?",
    a: "Sim. É possível contratar um único serviço ou combinar vários em uma solução integrada.",
  },
  {
    q: "As soluções são personalizadas?",
    a: "Sim. Cada proposta é elaborada na medida certa para as necessidades da sua empresa ou do seu condomínio.",
  },
  {
    q: "Como solicito um orçamento?",
    a: "Fale com a nossa equipe pelo WhatsApp ou preencha o formulário desta página. Conhecemos o local e as suas necessidades e enviamos uma proposta.",
  },
  {
    q: "Como a Focus acompanha o serviço prestado?",
    a: "A operação conta com supervisão 24 horas e pronto atendimento, para dar resposta rápida a qualquer demanda ou ocorrência.",
  },
  {
    q: "Qual a região de atendimento?",
    a: "Atendemos condomínios e empresas em Valinhos, Campinas e região.",
  },
];
