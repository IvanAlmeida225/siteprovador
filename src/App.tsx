import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Coffee,
  Copy,
  ExternalLink,
  Home,
  MessageCircle,
  MousePointerClick,
  ShoppingBag,
  Shirt,
  Smartphone,
  Sparkles,
  Store,
  User,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const WA_NUMBER = "553598762499";
const SITE_URL = "https://meuprovadorvirtual.com";
const WA_LINK = `https://wa.me/${WA_NUMBER}`;

const EMBED = {
  suaFoto: "/imagem-1.png",
  look: "/imagem-2.jpg",
  resultado: "/imagem-3.jpg",
};

const LOGO = {
  icon: "/logo.png",
};

const COLORS = {
  primary: "#1C1C1C",
  secondary: "#2A2A2A",
  dark: "#1C1C1C",
  graphite: "#2A2A2A",
  gray: "#6B7280",
  light: "#F5F5F4",
  border: "#E7E5E4",
  white: "#FFFFFF",
  success: "#1C1C1C",
};

const BRAND_FONT =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif';

const TEXT_GRADIENT_STYLE: React.CSSProperties = {
  color: COLORS.primary,
};

const POLICIES_TEXT = `TERMOS DE USO – MEU PROVADOR VIRTUAL
Última atualização: Março de 2026

1. APRESENTAÇÃO
O presente Termo de Uso regula o acesso e utilização do serviço denominado Meu Provador Virtual, disponibilizado por meio de aplicativos de mensagens, incluindo o WhatsApp, bem como por páginas web ou outras interfaces digitais associadas.

O serviço consiste em uma ferramenta baseada em inteligência artificial que permite ao usuário visualizar virtualmente roupas, acessórios ou produtos aplicados sobre sua própria imagem.

Ao utilizar o serviço, o usuário declara que leu, compreendeu e concorda integralmente com estes Termos de Uso.

Caso não concorde com qualquer disposição aqui prevista, o usuário não deverá utilizar o serviço.

2. IDENTIFICAÇÃO DO SERVIÇO
O Meu Provador Virtual é uma solução digital que permite envio de fotografia do usuário, envio de imagem de roupa ou produto, geração de imagem simulada com aplicação virtual do produto e entrega do resultado ao usuário.

O serviço possui caráter meramente ilustrativo e experimental, não representando garantia exata de caimento, tamanho, textura ou aparência real do produto.

3. CONDIÇÕES DE USO
Para utilizar o serviço, o usuário declara possuir capacidade civil para aceitar estes termos, possuir direitos sobre a imagem enviada ou autorização para utilizá-la e não utilizar o serviço para finalidades ilegais.

O usuário concorda em fornecer apenas imagens verdadeiras e de sua própria autoria ou com autorização.

4. REGRAS DE UTILIZAÇÃO
É proibido utilizar o serviço para gerar conteúdo sexual ou pornográfico, gerar provador de roupas íntimas, gerar conteúdo envolvendo crianças ou menores de idade, produzir conteúdo ofensivo, discriminatório ou ilegal, manipular imagens de terceiros sem autorização ou utilizar o sistema para fins de fraude ou falsificação.

Caso seja identificado uso indevido, o acesso poderá ser suspenso ou bloqueado imediatamente, sem aviso prévio.

5. USO DE IMAGEM
Ao enviar uma fotografia, o usuário declara possuir autorização para uso da imagem, autoriza o processamento da imagem pelo sistema e compreende que a imagem será utilizada exclusivamente para geração do resultado solicitado.

O Meu Provador Virtual não reivindica propriedade sobre a imagem do usuário. As imagens são utilizadas apenas para execução do serviço.

6. LIMITAÇÕES TECNOLÓGICAS
O Meu Provador Virtual utiliza sistemas de inteligência artificial que podem gerar resultados que não representem perfeitamente a realidade, apresentem pequenas alterações visuais ou variem conforme iluminação, pose ou qualidade da foto enviada.

O serviço possui caráter demonstrativo e experimental, não sendo garantida fidelidade absoluta entre a simulação e o produto real.

7. RESPONSABILIDADE DO USUÁRIO
O usuário é responsável por garantir que possui direitos sobre as imagens enviadas, não violar direitos de terceiros, não utilizar o sistema para atividades ilegais e respeitar as condições de uso da plataforma.

O usuário assume total responsabilidade por conteúdos enviados ao sistema.

8. PROPRIEDADE INTELECTUAL
Todos os elementos do sistema, incluindo tecnologia, interface, software, fluxos de processamento, design da plataforma e identidade visual são protegidos por legislação de propriedade intelectual e direitos autorais.

É proibida a reprodução, cópia ou exploração comercial sem autorização prévia.

9. DISPONIBILIDADE DO SERVIÇO
O Meu Provador Virtual poderá sofrer interrupções, passar por manutenção ou ser atualizado ou modificado sem aviso prévio.

Não há garantia de disponibilidade contínua do serviço.

10. LIMITAÇÃO DE RESPONSABILIDADE
O Meu Provador Virtual não se responsabiliza por decisões de compra baseadas na simulação gerada, diferenças entre imagem simulada e produto real, uso indevido do serviço por terceiros ou conteúdos enviados pelos usuários.

O sistema funciona como ferramenta tecnológica de visualização simulada.

11. PROTEÇÃO DE DADOS PESSOAIS (LGPD)
O tratamento de dados pessoais segue os princípios da Lei Geral de Proteção de Dados – LGPD (Lei nº 13.709/2018).

Os dados tratados podem incluir número de telefone, imagens enviadas, registros de uso do serviço e histórico de interações com a plataforma.

Esses dados são utilizados exclusivamente para funcionamento do serviço, geração das imagens solicitadas, melhoria da experiência do usuário, segurança da plataforma e controle de uso da ferramenta.

12. COMUNICAÇÕES E INFORMATIVOS
Ao utilizar o serviço e interagir com o Meu Provador Virtual por meio do WhatsApp ou outros canais digitais, o usuário autoriza o envio de comunicações relacionadas ao funcionamento da plataforma.

Essas comunicações poderão incluir avisos sobre atualizações do serviço, informações sobre novos recursos da plataforma, conteúdos educativos, comunicações institucionais e conteúdos promocionais ou informativos relacionados ao aplicativo.

O envio dessas comunicações respeitará os princípios da Lei Geral de Proteção de Dados e demais normas aplicáveis.

O usuário poderá solicitar a interrupção do recebimento de comunicações de caráter promocional a qualquer momento por meio dos canais de contato disponibilizados pela plataforma.

13. CANCELAMENTO OU BLOQUEIO
O acesso ao serviço poderá ser suspenso ou bloqueado em caso de violação destes Termos de Uso, uso fraudulento da plataforma, uso para fins ilegais ou tentativa de exploração indevida do sistema.

14. ALTERAÇÃO DOS TERMOS
Estes Termos de Uso poderão ser atualizados a qualquer momento. A versão vigente será sempre a publicada no endereço oficial do serviço.

A continuidade de uso da plataforma após atualizações será considerada como concordância com a nova versão.

15. LEGISLAÇÃO APLICÁVEL
Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil, especialmente:

Lei nº 13.709/2018 – Lei Geral de Proteção de Dados (LGPD)
Lei nº 12.965/2014 – Marco Civil da Internet
Lei nº 8.078/1990 – Código de Defesa do Consumidor
Lei nº 9.610/1998 – Lei de Direitos Autorais

16. CONTATO
E-mail de contato: meuprovadorvirtual@gmail.com

Ao continuar utilizando o Meu Provador Virtual, o usuário declara estar ciente e de acordo com estes Termos de Uso.


POLÍTICA DE PRIVACIDADE – MEU PROVADOR VIRTUAL
Última atualização: Março de 2026

1. INTRODUÇÃO
A presente Política de Privacidade descreve como o Meu Provador Virtual coleta, utiliza, armazena e protege os dados pessoais dos usuários que utilizam a plataforma.

Nos comprometemos a tratar os dados pessoais com responsabilidade, transparência e segurança, em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 – LGPD) e demais legislações aplicáveis no Brasil.

Ao utilizar o serviço, o usuário declara estar ciente das práticas descritas nesta Política de Privacidade.

2. DADOS COLETADOS
Durante a utilização do serviço, podemos coletar dados fornecidos pelo usuário como número de telefone, fotografias enviadas, imagens de produtos ou roupas para simulação e mensagens enviadas ao sistema.

Também podem ser coletados dados gerados durante o uso do serviço, como imagens geradas pela inteligência artificial, histórico de utilização da ferramenta e registros técnicos do sistema.

Informações técnicas como endereço IP, registros de acesso, data e horário das interações podem ser coletadas para garantir segurança e funcionamento da plataforma.

3. FINALIDADE DO USO DOS DADOS
Os dados coletados podem ser utilizados para executar o funcionamento do Meu Provador Virtual, processar imagens enviadas, gerar simulações de roupas ou produtos, melhorar o desempenho da ferramenta, manter a segurança da plataforma, prevenir fraudes, prestar suporte ao usuário e enviar comunicações informativas relacionadas ao serviço.

4. BASE LEGAL PARA TRATAMENTO DE DADOS
O tratamento de dados pessoais ocorre com base nas hipóteses legais previstas na LGPD, incluindo execução do serviço solicitado pelo usuário, consentimento do usuário, legítimo interesse da plataforma e cumprimento de obrigações legais.

5. USO DE IMAGENS
As imagens enviadas pelos usuários são utilizadas exclusivamente para processamento da simulação de roupas ou produtos e geração da imagem final solicitada.

O Meu Provador Virtual não reivindica propriedade sobre as imagens enviadas pelos usuários.

6. PROCESSAMENTO POR INTELIGÊNCIA ARTIFICIAL
O serviço utiliza tecnologias de inteligência artificial e processamento automatizado de imagens para gerar simulações visuais de roupas ou produtos aplicados sobre a fotografia enviada pelo usuário.

Esse processamento ocorre de forma automatizada e pode envolver o uso de serviços de inteligência artificial de terceiros.

7. NÃO UTILIZAÇÃO DAS IMAGENS PARA TREINAMENTO DE IA
As imagens enviadas pelos usuários não são utilizadas para treinamento de modelos de inteligência artificial ou criação de datasets, sendo utilizadas apenas para geração da simulação solicitada.

8. LIMITAÇÕES DA INTELIGÊNCIA ARTIFICIAL
Os resultados gerados pela inteligência artificial podem apresentar variações ou imperfeições visuais, podendo não representar exatamente o caimento real da roupa, proporções físicas ou cores do produto.

As imagens geradas possuem caráter meramente ilustrativo.

9. COMPARTILHAMENTO DE DADOS
Os dados poderão ser compartilhados apenas quando necessário para a operação do serviço, incluindo provedores de infraestrutura em nuvem, serviços de inteligência artificial e plataformas de comunicação utilizadas para interação com o usuário.

10. SEGURANÇA DAS INFORMAÇÕES
Adotamos medidas técnicas e administrativas para proteger os dados contra acessos não autorizados, vazamentos, perda de informações ou alterações indevidas.

11. RETENÇÃO DOS DADOS
Os dados pessoais serão armazenados apenas pelo tempo necessário para execução do serviço, melhoria da plataforma, prevenção de fraudes ou cumprimento de obrigações legais.

12. DIREITOS DOS TITULARES DE DADOS
Nos termos da LGPD, o usuário possui direito de solicitar confirmação da existência de tratamento de dados, acesso aos dados pessoais, correção de informações, anonimização ou exclusão de dados, portabilidade e revogação do consentimento.

13. PROIBIÇÃO DE USO INDEVIDO DA PLATAFORMA
É proibido utilizar o Meu Provador Virtual para manipular imagens de terceiros sem autorização, criar conteúdo enganoso ou fraudulento, gerar conteúdo sexual ou pornográfico, produzir conteúdo envolvendo menores de idade ou qualquer conteúdo ilegal.

14. ALTERAÇÕES NA POLÍTICA DE PRIVACIDADE
Esta Política de Privacidade poderá ser atualizada periodicamente e a versão mais recente estará sempre disponível no canal oficial da plataforma.

15. LEGISLAÇÃO APLICÁVEL
Esta Política de Privacidade é regida pela legislação brasileira, especialmente a Lei nº 13.709/2018 – LGPD, o Marco Civil da Internet (Lei nº 12.965/2014) e o Código de Defesa do Consumidor (Lei nº 8.078/1990).

16. CONTATO
E-mail de contato: meuprovadorvirtual@gmail.com

Ao utilizar o Meu Provador Virtual, o usuário declara estar ciente e de acordo com esta Política de Privacidade.
`;

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function useRoute() {
  const getPathname = () => {
    const legacyHash = window.location.hash;

    if (
      legacyHash === "#/" ||
      legacyHash === "#/criar-link" ||
      legacyHash === "#/politicas"
    ) {
      return legacyHash.slice(1);
    }

    return window.location.pathname || "/";
  };

  const [pathname, setPathname] = useState(getPathname);

  useEffect(() => {
    const legacyHash = window.location.hash;

    if (
      legacyHash === "#/" ||
      legacyHash === "#/criar-link" ||
      legacyHash === "#/politicas"
    ) {
      const cleanPath = legacyHash.slice(1);
      window.history.replaceState({}, "", cleanPath);
      setPathname(cleanPath);
    }

    const onPopState = () =>
      setPathname(window.location.pathname || "/");

    window.addEventListener("popstate", onPopState);

    return () =>
      window.removeEventListener("popstate", onPopState);
  }, []);

  if (pathname.startsWith("/l/")) {
    return {
      type: "store-link" as const,
      slug: pathname.replace("/l/", ""),
    };
  }

  if (pathname === "/criar-link") {
    return { type: "create-link" as const };
  }

  if (pathname === "/politicas") {
    return { type: "policies" as const };
  }

  return { type: "home" as const };
}

function buildWhatsMessage(shopName?: string, slug?: string) {
  const cleanName = shopName?.trim();
  if (cleanName) {
    return `Oi, vim da loja ${cleanName} e quero testar um look gratuitamente. Código: ${slug || slugify(cleanName)}`;
  }
  return "Oi, quero testar um look no Meu Provador Virtual.";
}

function buildWhatsLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

function BrandMark() {
  return (
    <div
      className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full"
      style={{ background: COLORS.primary }}
    >
      <img
        src={LOGO.icon}
        alt="Meu Provador Virtual"
        className="h-6 w-6 object-contain"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
    </div>
  );
}

function PrimaryButton({
  href,
  children,
  target = "_self",
}: {
  href: string;
  children: React.ReactNode;
  target?: "_self" | "_blank";
}) {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
      className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:shadow-md"
      style={{ background: COLORS.primary, color: COLORS.white }}
    >
      {children}
    </a>
  );
}

function TopNav() {
  return (
    <div className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-zinc-200">
      <div className="mx-auto max-w-6xl px-5 py-3 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <a href="/" className="flex min-w-[190px] items-center gap-3">
            <BrandMark />
            <span className="font-semibold" style={{ color: COLORS.dark }}>
              Meu Provador Virtual
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-700 md:flex">
            <a
              href="/"
              onClick={(event) => {
                event.preventDefault();
                document
                  .getElementById("oportunidade")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="hover:text-zinc-950"
            >
              Por que funciona
            </a>
            <a
              href="/"
              onClick={(event) => {
                event.preventDefault();
                document
                  .getElementById("rotina")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="hover:text-zinc-950"
            >
              Na rotina
            </a>
            <a
              href="/"
              onClick={(event) => {
                event.preventDefault();
                document
                  .getElementById("processo")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="hover:text-zinc-950"
            >
              Como funciona
            </a>
            <a href="/criar-link" className="hover:text-zinc-950">
              Para lojistas
            </a>
          </nav>

          <div className="flex min-w-[150px] justify-end">
            <PrimaryButton href="/criar-link">
              Criar link <ArrowRight className="h-4 w-4" />
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section style={{ background: COLORS.light }}>
      <div className="mx-auto max-w-6xl px-5 pb-14 pt-16 sm:px-6 sm:pb-20 sm:pt-20">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
            style={{ color: COLORS.dark }}
          >
            Visualize seus looks <br />
            <span style={TEXT_GRADIENT_STYLE}>antes de comprar.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 }}
            className="mx-auto mt-7 max-w-2xl text-base leading-relaxed sm:text-lg md:text-xl"
            style={{ color: "rgba(28,28,28,0.72)" }}
          >
            Veja como diferentes looks ficam em você, direto no seu WhatsApp.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-10"
          >
            <PrimaryButton href={WA_LINK} target="_blank">
              Testar no Whats
              <MessageCircle className="h-5 w-5" style={{ color: "#25D366" }} />
            </PrimaryButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
          className="mt-12 sm:mt-14"
        >
          <div className="grid grid-cols-1 items-center justify-items-center gap-10 md:grid-cols-2 lg:gap-14">
            <div className="flex w-full justify-center">
              <div className="w-full max-w-md">
                <div className="overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-[0_18px_60px_rgba(0,0,0,0.10)]">
                  <div className="aspect-[964/2144] bg-zinc-50">
                    <video
                      src="/video-demo.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <p className="mt-4 text-center text-sm" style={{ color: "rgba(28,28,28,0.65)" }}>
                  Demonstração do Provador Virtual
                </p>
              </div>
            </div>

            <div className="flex w-full justify-center">
              <div className="max-w-xl text-center">
                <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold shadow-sm">
                  <span className="h-2 w-2 rounded-full" style={{ background: COLORS.success }} />
                  <span style={{ color: COLORS.dark }}>Fluxo direto pelo WhatsApp</span>
                </div>

                <h3
                  className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl"
                  style={{ color: COLORS.dark }}
                >
                  A cliente escolhe com mais segurança
                  <br />
                  <span style={TEXT_GRADIENT_STYLE}>antes de comprar</span>
                </h3>

                <p
                  className="mx-auto mt-5 max-w-xl text-base leading-relaxed sm:text-lg"
                  style={{ color: "rgba(28,28,28,0.72)" }}
                >
                  A cliente envia a foto, escolhe o look e recebe uma simulação visual pronta, sem
                  instalar aplicativo e sem criar conta.
                </p>

                <div className="mx-auto mt-7 max-w-xl space-y-4">
                  {[
                    {
                      icon: User,
                      title: "1) Envie sua foto",
                      desc: "Foto de corpo inteiro, com boa iluminação e fundo simples.",
                    },
                    {
                      icon: Shirt,
                      title: "2) Envie o look",
                      desc: "Pode ser foto do produto ou inspiração do look completo.",
                    },
                    {
                      icon: Sparkles,
                      title: "3) Receba o resultado",
                      desc: "A IA aplica o look mantendo sua pose e o cenário original.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4 text-left">
                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                        style={{ background: "rgba(28,28,28,0.08)" }}
                      >
                        <item.icon className="h-6 w-6" style={{ color: COLORS.primary }} />
                      </div>
                      <div>
                        <div className="font-semibold" style={{ color: COLORS.dark }}>
                          {item.title}
                        </div>
                        <div className="mt-1 text-sm leading-relaxed" style={{ color: "rgba(28,28,28,0.70)" }}>
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
                  <PrimaryButton href={WA_LINK} target="_blank">
                    Testar no Whats
                    <MessageCircle className="h-5 w-5" style={{ color: "#25D366" }} />
                  </PrimaryButton>
                  <div className="text-xs" style={{ color: "rgba(28,28,28,0.55)" }}>
                    Teste gratuito • Sem baixar nada
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ShopkeeperSection() {
  return (
    <section id="lojistas" style={{ background: COLORS.white }}>
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-xs font-semibold shadow-sm">
            <Store className="h-4 w-4" style={{ color: COLORS.primary }} />
            <span style={{ color: COLORS.dark }}>Para lojistas</span>
          </div>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl" style={{ color: COLORS.dark }}>
            Amplie a experiência da sua loja.
          </h2>

          <p className="mt-6 text-base leading-relaxed sm:text-lg" style={{ color: "rgba(28,28,28,0.72)" }}>
            Compartilhe o link da sua loja no WhatsApp e no Instagram e deixe suas clientes
            testarem seus produtos gratuitamente no Meu Provador Virtual!
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <PrimaryButton href="/criar-link">
              Criar link da loja
              <ArrowRight className="h-5 w-5" />
            </PrimaryButton>
            <a
              href="/" onClick={(event) => { event.preventDefault(); document.getElementById("beneficios")?.scrollIntoView({ behavior: "smooth", block: "start" }); }}
              className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold transition hover:bg-zinc-50"
              style={{ color: COLORS.dark }}
            >
              Ver vantagens
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    { id: "01", title: "Sua Foto", img: EMBED.suaFoto, icon: User },
    { id: "02", title: "O Look", img: EMBED.look, icon: Shirt },
    { id: "03", title: "Resultado", img: EMBED.resultado, icon: Sparkles },
  ];

  return (
    <section id="processo" style={{ background: COLORS.white }}>
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold">
            <MousePointerClick className="h-5 w-5" />
            Simples para a cliente
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl" style={{ color: COLORS.dark }}>
            Do link ao resultado em 3 passos
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg" style={{ color: "rgba(28,28,28,0.72)" }}>
            Sem cadastro e sem instalar nada: a experiência acontece na conversa
            que sua cliente já sabe usar.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-10 sm:mt-14">
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group"
            >
              <div className="overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
                <div className="aspect-[4/5] overflow-hidden bg-zinc-50">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex items-center justify-between p-5 sm:p-6">
                  <div>
                    <div className="font-mono text-xs text-zinc-500">{step.id}</div>
                    <div className="mt-1 text-xl font-semibold" style={{ color: COLORS.dark }}>
                      {step.title}
                    </div>
                  </div>
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-full"
                    style={{ background: "rgba(28,28,28,0.08)" }}
                    aria-hidden
                  >
                    <step.icon className="h-5 w-5" style={{ color: COLORS.primary }} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-700 hover:text-zinc-950"
          >
            Testar no Whats <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    {
      icon: Zap,
      title: "Atendimento em escala",
      desc: "O link permite levar a experiência a diferentes clientes pelo WhatsApp, sem limitar a descoberta ao espaço físico.",
    },
    {
      icon: CheckCircle2,
      title: "Menos dependência do provador",
      desc: "A cliente consegue visualizar o look antes de comprar, mesmo quando está comprando pelo Instagram ou WhatsApp.",
    },
    {
      icon: Users,
      title: "Teste gratuito para a cliente",
      desc: "O link da loja leva a cliente para uma experiência gratuita, facilitando a primeira interação e reduzindo a dúvida antes da compra.",
    },
    {
      icon: MessageCircle,
      title: "Direto no WhatsApp",
      desc: "A cliente não precisa baixar aplicativo nem criar conta. O fluxo acontece no canal onde a venda já acontece.",
    },
    {
      icon: Store,
      title: "Sem custo de estrutura física",
      desc: "O lojista não precisa depender de provador, troca de roupa ou espaço físico para demonstrar visualmente diferentes looks.",
    },
    {
      icon: Sparkles,
      title: "Mais segurança na decisão",
      desc: "A simulação ajuda a transformar dúvida em intenção de compra, mostrando o visual do look aplicado à cliente.",
    },
  ];

  return (
    <section id="beneficios" style={{ background: COLORS.light }}>
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl" style={{ color: COLORS.dark }}>
            Vantagens para o lojista
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg" style={{ color: "rgba(28,28,28,0.72)" }}>
            Uma forma simples de demonstrar looks, atender mais pessoas e reduzir barreiras na compra online.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 sm:mt-14">
          {items.map((item) => (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] sm:p-7"
            >
              <div className="absolute left-0 top-0 h-full w-[6px]" style={{ background: COLORS.primary }} aria-hidden />

              <div className="flex items-center gap-3">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                  style={{ background: "rgba(28,28,28,0.08)" }}
                >
                  <item.icon className="h-6 w-6" style={{ color: COLORS.primary }} />
                </div>
                <h3 className="text-xl font-semibold" style={{ color: COLORS.dark }}>
                  {item.title}
                </h3>
              </div>
              <p className="mt-4 leading-relaxed" style={{ color: "rgba(28,28,28,0.72)" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section style={{ background: COLORS.light }}>
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
        <div
          className="overflow-hidden rounded-[32px] border border-zinc-200 bg-white shadow-[0_18px_60px_rgba(0,0,0,0.10)]"
          style={{ background: "linear-gradient(180deg, rgba(28,28,28,0.08), rgba(42,42,42,0.03))" }}
        >
          <div className="px-7 py-12 text-center sm:px-10 sm:py-14">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl" style={{ color: COLORS.dark }}>
              Comece pelo WhatsApp
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg" style={{ color: "rgba(28,28,28,0.72)" }}>
              Teste gratuitamente e veja como o Meu Provador Virtual ajuda a visualizar looks antes da compra.
            </p>
            <div className="mt-10">
              <PrimaryButton href={WA_LINK} target="_blank">
                Testar no Whats
                <MessageCircle className="h-5 w-5" style={{ color: "#25D366" }} />
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MarketingHero() {
  return (
    <section className="overflow-hidden" style={{ background: COLORS.light }}>
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-semibold shadow-sm">
            <Smartphone className="h-4 w-4" style={{ color: COLORS.primary }} />
            <span>O provador da sua loja, agora também no WhatsApp</span>
          </div>

          <h1
            className="mt-7 text-4xl font-bold leading-[1.04] tracking-[-0.04em] sm:text-5xl md:text-6xl"
            style={{ color: COLORS.dark }}
          >
            Transforme o WhatsApp das suas clientes em novos provadores da sua loja.
          </h1>

          <p
            className="mx-auto mt-7 max-w-2xl text-base leading-relaxed sm:text-lg md:text-xl lg:mx-0"
            style={{ color: "rgba(28,28,28,0.72)" }}
          >
            Mais oportunidades para experimentar. Mais confiança para comprar.
            Compartilhe um link e permita que cada cliente visualize os looks da
            sua loja no próprio corpo, onde estiver e sem instalar aplicativo.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <PrimaryButton href="/criar-link">
              Criar link da minha loja
              <ArrowRight className="h-5 w-5" />
            </PrimaryButton>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold transition hover:border-zinc-400 hover:bg-zinc-50"
              style={{ color: COLORS.dark }}
            >
              Testar a experiência
              <MessageCircle className="h-5 w-5" style={{ color: "#25D366" }} />
            </a>
          </div>

          <div
            className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs lg:justify-start"
            style={{ color: "rgba(28,28,28,0.58)" }}
          >
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4" /> Teste gratuito para a cliente
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4" /> Sem instalar aplicativo
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4" /> Experiência pelo WhatsApp
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.08 }}
          className="relative mx-auto w-full max-w-[360px]"
        >
          <div
            className="absolute -left-8 top-16 z-10 hidden rounded-[22px] border border-zinc-200 bg-white p-4 shadow-xl sm:block"
            style={{ transform: "rotate(-3deg)" }}
          >
            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full"
                style={{ background: "rgba(28,28,28,0.08)" }}
              >
                <Users className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-zinc-500">Mais oportunidades</div>
                <div className="text-sm font-semibold">de experimentar</div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[36px] border border-zinc-200 bg-white p-3 shadow-[0_26px_80px_rgba(0,0,0,0.15)]">
            <div className="overflow-hidden rounded-[28px] bg-zinc-50">
              <div className="aspect-[964/2144]">
                <video
                  src="/video-demo.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div
            className="absolute -bottom-5 -right-2 z-10 rounded-[22px] border border-zinc-200 bg-white p-4 shadow-xl sm:-right-10"
            style={{ transform: "rotate(2deg)" }}
          >
            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full"
                style={{ background: "rgba(28,28,28,0.08)" }}
              >
                <Clock3 className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-zinc-500">Quando ela puder</div>
                <div className="text-sm font-semibold">onde ela estiver</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MarketOpportunity() {
  const stats = [
    {
      value: "67%",
      title: "de conversão no provador físico",
      text: "Em uma análise de varejo, clientes que foram ao provador compraram em 67% dos casos, contra 10% entre quem apenas circulou pela loja.",
      source: "Alert Tech",
      href: "https://alerttech.net/retail-conversion/",
    },
    {
      value: "Quase 7x",
      title: "mais propensão à compra",
      text: "Outro benchmark do setor relaciona o uso do provador físico a uma probabilidade de compra quase sete vezes maior.",
      source: "Alert Tech",
      href: "https://alerttech.net/retail-industry-benchmarks-for-fitting-rooms/",
    },
    {
      value: "+50%",
      title: "de conversão com try-on virtual",
      text: "Em um relatório de 2026, usuários de provador virtual converteram 50% mais, tiveram quase 3x mais adições ao carrinho e visualizaram 7x mais produtos.",
      source: "DRESSX",
      href: "https://dressx.com/b2b/vto-report",
    },
  ];

  return (
    <section id="oportunidade" style={{ background: COLORS.white }}>
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24">
        <div className="grid items-end gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex items-center gap-2 text-sm font-semibold">
              <Store className="h-5 w-5" />
              Para lojas de moda
            </div>
            <h2
              className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-[-0.035em] sm:text-5xl"
              style={{ color: COLORS.dark }}
            >
              Um provador físico atende uma cliente por vez. O virtual acompanha
              cada link compartilhado.
            </h2>
          </div>
          <p
            className="text-base leading-relaxed sm:text-lg"
            style={{ color: "rgba(28,28,28,0.70)" }}
          >
            Em vez de limitar a experimentação ao espaço e ao horário da loja,
            você leva seus produtos para o celular da cliente. Ela visualiza
            diferentes looks com calma e volta para a conversa mais segura para
            decidir.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.value}
              className="rounded-[28px] border border-zinc-200 p-6 sm:p-7"
              style={{ background: COLORS.light }}
            >
              <div className="text-5xl font-bold tracking-tight">{item.value}</div>
              <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
              <p
                className="mt-3 text-sm leading-relaxed"
                style={{ color: "rgba(28,28,28,0.68)" }}
              >
                {item.text}
              </p>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-600 hover:text-zinc-950"
              >
                Fonte: {item.source} <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>

        <p className="mt-5 text-xs leading-relaxed text-zinc-500">
          Dados de estudos e casos específicos do setor. Eles ajudam a explicar
          o papel da experimentação na decisão, mas não garantem o mesmo
          desempenho para todas as lojas.
        </p>
      </div>
    </section>
  );
}

function LifestyleSection() {
  const moments = [
    {
      icon: BriefcaseBusiness,
      title: "No intervalo do trabalho",
      desc: "A cliente pode conhecer e visualizar um look sem precisar reorganizar o dia para ir até a loja.",
    },
    {
      icon: Coffee,
      title: "Durante um café",
      desc: "Basta abrir o link, enviar as imagens e continuar a experiência pelo próprio WhatsApp.",
    },
    {
      icon: Home,
      title: "Com calma, em casa",
      desc: "Ela compara opções no momento mais conveniente e decide com menos pressa.",
    },
  ];

  return (
    <section id="rotina" style={{ background: COLORS.dark, color: COLORS.white }}>
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-300">
              <Clock3 className="h-5 w-5" />
              Moda na rotina real
            </div>
            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-0.035em] sm:text-5xl">
              Nem toda cliente tem tempo de ir até o provador. O look pode ir até ela.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-zinc-300 sm:text-lg">
              O Meu Provador Virtual transforma pequenos momentos do dia em
              oportunidades para a cliente se imaginar usando seus produtos.
            </p>
          </div>

          <div className="grid gap-4">
            {moments.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="flex gap-4 rounded-[24px] border border-white/10 bg-white/[0.06] p-5 sm:p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-zinc-900">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MarketingBenefits() {
  const items = [
    {
      icon: Zap,
      title: "Mais oportunidades de experimentar",
      desc: "O mesmo link pode ser divulgado no WhatsApp e no Instagram, levando a experiência para além da loja física.",
    },
    {
      icon: ShoppingBag,
      title: "Aproxima a cliente da compra",
      desc: "Visualizar o produto no próprio corpo ajuda a transformar uma foto da roupa em uma escolha mais concreta.",
    },
    {
      icon: BarChart3,
      title: "Ajuda a reduzir dúvidas",
      desc: "A simulação oferece uma referência visual adicional para a cliente comparar opções e conversar com a loja.",
    },
    {
      icon: MessageCircle,
      title: "No canal da venda",
      desc: "A cliente não precisa mudar de plataforma: o fluxo acontece direto pelo WhatsApp, sem criar conta.",
    },
    {
      icon: Store,
      title: "Sem ampliar a estrutura física",
      desc: "Você cria novos pontos de experimentação digital sem construir cabines ou ocupar mais espaço na loja.",
    },
    {
      icon: Sparkles,
      title: "Uma experiência memorável",
      desc: "Sua loja oferece uma jornada diferente, prática e compartilhável para apresentar os produtos.",
    },
  ];

  return (
    <section id="beneficios" style={{ background: COLORS.light }}>
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24">
        <div className="text-center">
          <h2
            className="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl"
            style={{ color: COLORS.dark }}
          >
            Mais que mostrar uma roupa. Ajude a cliente a se imaginar com ela.
          </h2>
          <p
            className="mx-auto mt-5 max-w-2xl text-base sm:text-lg"
            style={{ color: "rgba(28,28,28,0.72)" }}
          >
            Uma forma simples de ampliar a experiência da loja e diminuir a
            distância entre descobrir um produto e tomar uma decisão.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.05)] sm:p-7"
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-full"
                style={{ background: "rgba(28,28,28,0.08)" }}
              >
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    {
      question: "Como a loja cria seu link?",
      answer:
        "Acesse “Criar link”, informe o nome da loja e copie o endereço gerado. Ele identifica a origem da cliente e abre a conversa do Meu Provador Virtual no WhatsApp.",
    },
    {
      question: "Onde posso compartilhar o link?",
      answer:
        "No WhatsApp, na bio do Instagram, nos Stories, no Direct, em posts, no atendimento e em outros canais digitais da loja.",
    },
    {
      question: "A cliente precisa instalar algum aplicativo?",
      answer:
        "Não. Ela abre o link da loja e realiza todo o processo pelo WhatsApp.",
    },
    {
      question: "A cliente paga para fazer o primeiro teste?",
      answer:
        "Não. O primeiro teste é gratuito para que ela conheça a experiência antes de comprar novos créditos.",
    },
    {
      question: "Quantas clientes podem usar o link?",
      answer:
        "O mesmo link pode ser compartilhado com diferentes clientes, permitindo que a loja ofereça várias experiências digitais sem depender do número de cabines físicas.",
    },
    {
      question: "O Meu Provador Virtual informa o tamanho correto?",
      answer:
        "Não. A ferramenta cria uma simulação visual e ilustrativa do look. Ela não mede o corpo e não substitui a tabela de medidas da loja.",
    },
    {
      question: "A simulação substitui o provador físico?",
      answer:
        "Não. Ela amplia a experiência da loja e ajuda na visualização de estilo e combinação. O resultado não é uma prova técnica de tamanho, medidas ou caimento exato.",
    },
  ];

  return (
    <section style={{ background: COLORS.white }}>
      <div className="mx-auto max-w-4xl px-5 py-16 sm:px-6 sm:py-24">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Dúvidas frequentes
          </h2>
          <p className="mt-5 text-base text-zinc-600 sm:text-lg">
            O que sua loja e suas clientes precisam saber antes de começar.
          </p>
        </div>

        <div className="mt-10 divide-y divide-zinc-200 rounded-[28px] border border-zinc-200 bg-white px-6 sm:px-8">
          {items.map((item) => (
            <details key={item.question} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                <span>{item.question}</span>
                <span className="text-xl text-zinc-400 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-600 sm:text-base">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function MarketingCTA() {
  return (
    <section style={{ background: COLORS.light }}>
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
        <div
          className="overflow-hidden rounded-[32px] border border-zinc-200 bg-white shadow-[0_18px_60px_rgba(0,0,0,0.10)]"
          style={{
            background:
              "linear-gradient(180deg, rgba(28,28,28,0.08), rgba(42,42,42,0.03))",
          }}
        >
          <div className="px-7 py-12 text-center sm:px-10 sm:py-16">
            <h2
              className="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl"
              style={{ color: COLORS.dark }}
            >
              Transforme o link da sua loja em novos provadores.
            </h2>
            <p
              className="mx-auto mt-6 max-w-2xl text-base sm:text-lg"
              style={{ color: "rgba(28,28,28,0.72)" }}
            >
              Crie seu link, compartilhe com suas clientes e leve a experiência
              de visualizar looks para o WhatsApp e o Instagram.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <PrimaryButton href="/criar-link">
                Criar link da minha loja
                <ArrowRight className="h-5 w-5" />
              </PrimaryButton>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold transition hover:bg-zinc-50"
              >
                Testar como cliente
                <MessageCircle className="h-5 w-5" style={{ color: "#25D366" }} />
              </a>
            </div>
            <p className="mt-5 text-xs text-zinc-500">
              A imagem gerada é uma simulação ilustrativa e não representa prova
              técnica de tamanho ou medidas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CreateLinkPage() {
  const [shopName, setShopName] = useState("");
  const [copied, setCopied] = useState(false);

  const slug = useMemo(() => slugify(shopName), [shopName]);
  const generatedLink = slug ? `${SITE_URL}/l/${slug}` : "";

  async function copyLink() {
    if (!generatedLink) return;
    await navigator.clipboard.writeText(generatedLink);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <section className="flex-1" style={{ background: COLORS.light }}>
      <div className="mx-auto max-w-4xl px-5 py-14 sm:px-6 sm:py-16">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: COLORS.dark }}>
              Criar link da loja
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-relaxed" style={{ color: "rgba(28,28,28,0.72)" }}>
              Digite apenas o nome da loja para gerar um link compartilhável. Quando a cliente abrir
              o link, ela será direcionada ao WhatsApp com o código da loja na mensagem e poderá
              testar gratuitamente.
            </p>

            <div className="mt-5 rounded-[20px] border border-zinc-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold" style={{ color: COLORS.dark }}>
                Como compartilhar:
              </p>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(28,28,28,0.72)" }}>
                Depois de gerar o link, copie e envie para suas clientes pelo WhatsApp, coloque na bio
                do Instagram ou envie no Direct. Assim, elas podem testar seus produtos gratuitamente
                no Meu Provador Virtual.
              </p>
            </div>
          </div>

          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold transition hover:bg-zinc-50"
            style={{ color: COLORS.dark }}
          >
            Voltar
          </a>
        </div>

        <div className="mt-9 rounded-[32px] border border-zinc-200 bg-white p-6 shadow-[0_22px_70px_rgba(0,0,0,0.10)] sm:p-8">
          <div
            className="rounded-[28px] border border-zinc-200 p-5 sm:p-6"
            style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F5F5F4 100%)" }}
          >
            <div className="flex items-start gap-4">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                style={{ background: COLORS.primary }}
              >
                1
              </div>

              <div className="w-full">
                <label className="text-base font-bold" style={{ color: COLORS.dark }}>
                  Insira o nome da sua loja
                </label>

                <p className="mt-1 text-sm leading-relaxed" style={{ color: "rgba(28,28,28,0.65)" }}>
                  Esse nome será usado para criar o link exclusivo e identificar a origem da cliente.
                </p>

                <input
                  value={shopName}
                  onChange={(event) => setShopName(event.target.value)}
                  placeholder="Ex.: Ana Modas"
                  className="mt-5 w-full rounded-full border-2 border-zinc-300 bg-white px-6 py-5 text-lg font-semibold outline-none transition focus:border-zinc-900 focus:shadow-[0_0_0_4px_rgba(28,28,28,0.08)]"
                  style={{ color: COLORS.dark }}
                />
              </div>
            </div>
          </div>

          {generatedLink && (
            <div className="mt-7 rounded-[24px] border border-zinc-200 p-5" style={{ background: COLORS.light }}>
              <div className="text-sm font-semibold" style={{ color: COLORS.gray }}>
                Link gerado
              </div>

              <div className="mt-2 break-all text-xl font-bold" style={{ color: COLORS.dark }}>
                {generatedLink}
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={copyLink}
                  className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:shadow-md"
                  style={{ background: COLORS.primary, color: COLORS.white }}
                >
                  <Copy className="h-4 w-4" />
                  {copied ? "Link copiado" : "Copiar link"}
                </button>
              </div>
            </div>
          )}

          <div className="mt-8 rounded-[24px] border border-zinc-200 bg-white p-5">
            <div>
              <h2 className="text-xl font-bold tracking-tight" style={{ color: COLORS.dark }}>
                Como divulgar no Instagram
              </h2>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(28,28,28,0.72)" }}>
                Use o passo a passo abaixo para adicionar o link nos Stories e direcionar suas clientes
                para testar gratuitamente.
              </p>
            </div>

            <div className="mt-5 overflow-hidden rounded-[20px] border border-zinc-200 bg-white">
              <img
                src="/tutorial-instagram-link.png"
                alt="Passo a passo para divulgar o link da loja no Instagram"
                className="h-auto w-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StoreRedirectPage({ slug }: { slug: string }) {
  const shopName = slug
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

  const message = buildWhatsMessage(shopName, slug);
  const link = buildWhatsLink(message);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      window.location.href = link;
    }, 700);

    return () => window.clearTimeout(timer);
  }, [link]);

  return (
    <section className="flex flex-1 items-center justify-center px-5 py-16" style={{ background: COLORS.light }}>
      <div className="max-w-xl rounded-[32px] border border-zinc-200 bg-white p-8 text-center shadow-[0_18px_60px_rgba(0,0,0,0.08)]">
        <BrandMark />
        <h1 className="mt-5 text-3xl font-bold tracking-tight" style={{ color: COLORS.dark }}>
          Abrindo o WhatsApp
        </h1>
        <p className="mt-4 leading-relaxed" style={{ color: "rgba(28,28,28,0.72)" }}>
          Você será direcionada para testar gratuitamente um look pelo Meu Provador Virtual.
        </p>
        <div className="mt-7">
          <PrimaryButton href={link} target="_blank">
            Abrir WhatsApp
            <ExternalLink className="h-5 w-5" />
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}

function PoliciesPage() {
  return (
    <section className="flex-1" style={{ background: COLORS.light }}>
      <div className="mx-auto max-w-4xl px-5 py-14 sm:px-6 sm:py-16">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: COLORS.dark }}>
            Termos de Uso e Política de Privacidade
          </h1>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold transition hover:bg-zinc-50"
            style={{ color: COLORS.dark }}
          >
            Voltar
          </a>
        </div>

        <p className="mt-4 text-sm" style={{ color: "rgba(28,28,28,0.65)" }}>
          Textos integrais vigentes, atualizados em março de 2026.
        </p>

        <div className="mt-8 overflow-hidden rounded-[24px] border border-zinc-200 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
          <div className="border-b border-zinc-200 px-5 py-4 sm:px-7" style={{ background: COLORS.light }}>
            <div className="text-sm font-semibold" style={{ color: COLORS.dark }}>
              Documento oficial
            </div>
            <div className="text-xs" style={{ color: "rgba(28,28,28,0.60)" }}>
              Para dúvidas: meuprovadorvirtual@gmail.com
            </div>
          </div>

          <div className="p-5 sm:p-7">
            <pre
              className="whitespace-pre-wrap text-sm leading-relaxed"
              style={{ color: "rgba(28,28,28,0.78)", fontFamily: BRAND_FONT }}
            >
              {POLICIES_TEXT}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <BrandMark />
            <div className="flex flex-col">
              <span className="font-semibold" style={{ color: COLORS.dark }}>
                Meu Provador Virtual
              </span>
              <a
                href="mailto:meuprovadorvirtual@gmail.com"
                className="text-xs"
                style={{ color: "rgba(28,28,28,0.55)" }}
              >
                meuprovadorvirtual@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 text-sm sm:gap-4">
            <a
              href="/criar-link"
              className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-4 py-2 font-semibold transition hover:bg-zinc-50"
              style={{ color: COLORS.dark }}
            >
              Criar link da loja
            </a>
            <a
              href="/politicas"
              className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-4 py-2 font-semibold transition hover:bg-zinc-50"
              style={{ color: COLORS.dark }}
            >
              Termos e Privacidade
            </a>
          </div>

          <div className="text-center text-sm text-zinc-500 md:text-right">
            © 2026 Meu Provador Virtual. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <>
      <MarketingHero />
      <MarketOpportunity />
      <LifestyleSection />
      <ProcessSection />
      <MarketingBenefits />
      <FAQ />
      <MarketingCTA />
    </>
  );
}

export default function App() {
  const route = useRoute();

  return (
    <div
      className="flex min-h-screen flex-col"
      style={{
        background: COLORS.light,
        color: COLORS.dark,
        fontFamily: BRAND_FONT,
      }}
    >
      <TopNav />
      <main className="flex flex-1 flex-col">
        {route.type === "policies" && <PoliciesPage />}
        {route.type === "create-link" && <CreateLinkPage />}
        {route.type === "store-link" && <StoreRedirectPage slug={route.slug} />}
        {route.type === "home" && <HomePage />}
      </main>
      <Footer />
    </div>
  );
}
