import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Copy,
  ExternalLink,
  MessageCircle,
  Shirt,
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

Ao utilizar o serviço, o usuário declara que leu, compreendeu e concorda integralmente com estes Termos de Uso. Caso não concorde com qualquer disposição aqui prevista, o usuário não deverá utilizar o serviço.

2. IDENTIFICAÇÃO DO SERVIÇO
O Meu Provador Virtual é uma solução digital que permite: envio de fotografia do usuário, envio de imagem de roupa ou produto, geração de imagem simulada com aplicação virtual do produto e entrega do resultado ao usuário.

O serviço possui caráter meramente ilustrativo e experimental, não representando garantia exata de caimento, tamanho, textura ou aparência real do produto.

3. CONDIÇÕES DE USO
Para utilizar o serviço, o usuário declara possuir capacidade civil para aceitar estes termos, possuir direitos sobre a imagem enviada ou autorização para utilizá-la e não utilizar o serviço para finalidades ilegais.

O usuário concorda em fornecer apenas imagens verdadeiras e de sua própria autoria ou com autorização.

4. REGRAS DE UTILIZAÇÃO
É proibido utilizar o serviço para gerar conteúdo de natureza sexual ou pornográfica, gerar provador de roupas íntimas, gerar conteúdo envolvendo crianças ou menores de idade, produzir conteúdo ofensivo, discriminatório ou ilegal, manipular imagens de terceiros sem autorização ou utilizar o sistema para fins de fraude ou falsificação.

Caso seja identificado uso indevido, o acesso poderá ser suspenso ou bloqueado imediatamente, sem aviso prévio.

5. USO DE IMAGEM
Ao enviar uma fotografia, o usuário declara que possui autorização para uso da imagem, autoriza o processamento da imagem pelo sistema e compreende que a imagem será utilizada exclusivamente para geração do resultado solicitado.

O Meu Provador Virtual não reivindica propriedade sobre a imagem do usuário.

6. LIMITAÇÕES TECNOLÓGICAS
O Meu Provador Virtual utiliza sistemas de inteligência artificial que podem gerar resultados que não representem perfeitamente a realidade, apresentem pequenas alterações visuais ou variem conforme iluminação, pose ou qualidade da foto enviada.

O serviço possui caráter demonstrativo e experimental.

7. RESPONSABILIDADE DO USUÁRIO
O usuário é responsável por garantir que possui direitos sobre as imagens enviadas, não violar direitos de terceiros e não utilizar o sistema para atividades ilegais.

O usuário assume total responsabilidade pelos conteúdos enviados ao sistema.

8. PROPRIEDADE INTELECTUAL
Todos os elementos do sistema, incluindo tecnologia, interface, software, fluxos de processamento, design da plataforma e identidade visual são protegidos por legislação de propriedade intelectual e direitos autorais.

É proibida a reprodução, cópia ou exploração comercial sem autorização prévia.

9. DISPONIBILIDADE DO SERVIÇO
O Meu Provador Virtual poderá sofrer interrupções, passar por manutenção, ser atualizado ou modificado sem aviso prévio.

Não há garantia de disponibilidade contínua do serviço.

10. LIMITAÇÃO DE RESPONSABILIDADE
O Meu Provador Virtual não se responsabiliza por decisões de compra baseadas na simulação gerada, diferenças entre imagem simulada e produto real ou uso indevido do serviço por terceiros.

11. PROTEÇÃO DE DADOS PESSOAIS
O tratamento de dados pessoais segue os princípios da Lei Geral de Proteção de Dados – LGPD (Lei nº 13.709/2018).

Os dados tratados podem incluir número de telefone, imagens enviadas e registros de uso do serviço.

12. COMUNICAÇÕES
O usuário poderá receber comunicações relacionadas ao funcionamento da plataforma, atualizações do serviço, novidades ou conteúdos informativos relacionados ao aplicativo.

O usuário poderá solicitar a interrupção dessas comunicações a qualquer momento.

13. ALTERAÇÃO DOS TERMOS
Estes Termos de Uso poderão ser atualizados a qualquer momento. A versão vigente será sempre a publicada oficialmente pela plataforma.

14. LEGISLAÇÃO APLICÁVEL
Estes Termos são regidos pelas leis da República Federativa do Brasil, incluindo a LGPD, Marco Civil da Internet, Código de Defesa do Consumidor e Lei de Direitos Autorais.

15. CONTATO
E-mail de contato: contato@meuprovadorvirtual.com


POLÍTICA DE PRIVACIDADE – MEU PROVADOR VIRTUAL
Última atualização: Março de 2026

1. INTRODUÇÃO
Esta Política de Privacidade descreve como o Meu Provador Virtual coleta, utiliza, armazena e protege os dados pessoais dos usuários em conformidade com a Lei Geral de Proteção de Dados (LGPD).

2. DADOS COLETADOS
Podemos coletar número de telefone, fotografias enviadas pelos usuários, imagens de produtos enviadas para simulação, registros de interação com o sistema e dados técnicos como horário de acesso e registros de uso.

3. FINALIDADE DO TRATAMENTO
Os dados são utilizados para permitir o funcionamento do provador virtual, gerar imagens simuladas, melhorar o desempenho do sistema, garantir segurança e fornecer suporte ao usuário.

4. PROCESSAMENTO POR INTELIGÊNCIA ARTIFICIAL
O serviço utiliza tecnologias de inteligência artificial para processar imagens e gerar simulações visuais de roupas ou produtos aplicados sobre a fotografia do usuário.

5. NÃO UTILIZAÇÃO PARA TREINAMENTO DE IA
As imagens enviadas pelos usuários não são utilizadas para treinamento de modelos de inteligência artificial ou construção de bases de dados comerciais.

6. COMPARTILHAMENTO DE DADOS
Os dados podem ser processados por serviços tecnológicos necessários para o funcionamento da plataforma, incluindo provedores de infraestrutura, serviços de inteligência artificial e plataformas de comunicação.

7. SEGURANÇA DAS INFORMAÇÕES
A plataforma adota medidas técnicas e administrativas para proteger os dados contra acesso não autorizado, perda, destruição ou uso indevido.

8. RETENÇÃO DOS DADOS
Os dados são armazenados apenas pelo período necessário para cumprimento das finalidades do serviço ou conforme exigido por obrigações legais.

9. DIREITOS DOS TITULARES
Nos termos da LGPD, o usuário poderá solicitar confirmação de tratamento de dados, acesso aos dados, correção de informações, anonimização ou exclusão dos dados pessoais.

10. CONTATO
Para solicitações relacionadas a dados pessoais ou privacidade, entre em contato pelo e-mail:
contato@meuprovadorvirtual.com
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
  const [route, setRoute] = useState(() => window.location.hash || "#/");

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash || "#/");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const pathname = window.location.pathname || "/";

  if (pathname.startsWith("/l/")) return { type: "store-link" as const, slug: pathname.replace("/l/", "") };
  if (route === "#/criar-link") return { type: "create-link" as const };
  if (route === "#/politicas") return { type: "policies" as const };
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
          <a href="#/" className="flex min-w-[190px] items-center gap-3">
            <BrandMark />
            <span className="font-semibold" style={{ color: COLORS.dark }}>
              Meu Provador Virtual
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-700 md:flex">
            <a href="#lojistas" className="hover:text-zinc-950">
              Para lojistas
            </a>
            <a href="#processo" className="hover:text-zinc-950">
              Processo
            </a>
            <a href="#beneficios" className="hover:text-zinc-950">
              Vantagens
            </a>
            <a href="#/criar-link" className="hover:text-zinc-950">
              Criar link
            </a>
          </nav>

          <div className="flex min-w-[150px] justify-end">
            <PrimaryButton href={WA_LINK} target="_blank">
              Testar no Whats <MessageCircle className="h-4 w-4" />
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
            Experimente antes <br />
            <span style={TEXT_GRADIENT_STYLE}>de comprar.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 }}
            className="mx-auto mt-7 max-w-2xl text-base leading-relaxed sm:text-lg md:text-xl"
            style={{ color: "rgba(28,28,28,0.72)" }}
          >
            Veja como qualquer look fica em você em segundos, direto no seu WhatsApp.
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
            Venda mais e reduza devoluções.
          </h2>

          <p className="mt-6 text-base leading-relaxed sm:text-lg" style={{ color: "rgba(28,28,28,0.72)" }}>
            Compartilhe o link da sua loja no WhatsApp e no Instagram e deixe suas clientes
            testarem seus produtos gratuitamente no Meu Provador Virtual!
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <PrimaryButton href="#/criar-link">
              Criar link da loja
              <ArrowRight className="h-5 w-5" />
            </PrimaryButton>
            <a
              href="#beneficios"
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
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl" style={{ color: COLORS.dark }}>
            Como funciona
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg" style={{ color: "rgba(28,28,28,0.72)" }}>
            3 passos simples. Você envia sua foto, envia o look e recebe o resultado.
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
      desc: "A loja pode atender dezenas de clientes ao mesmo tempo pelo WhatsApp, sem fila e sem limitar a experiência ao espaço físico.",
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
          </div>

          <a
            href="#/"
            className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold transition hover:bg-zinc-50"
            style={{ color: COLORS.dark }}
          >
            Voltar
          </a>
        </div>

        <div className="mt-9 rounded-[28px] border border-zinc-200 bg-white p-6 shadow-[0_18px_60px_rgba(0,0,0,0.08)] sm:p-8">
          <label className="text-sm font-semibold" style={{ color: COLORS.dark }}>
            Nome da loja
          </label>

          <input
            value={shopName}
            onChange={(event) => setShopName(event.target.value)}
            placeholder="Ex.: Ana Modas"
            className="mt-4 w-full rounded-full border border-zinc-200 bg-white px-5 py-4 text-base outline-none transition focus:border-zinc-400"
            style={{ color: COLORS.dark }}
          />

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
            Política de Uso e Privacidade
          </h1>
          <a
            href="#/"
            className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold transition hover:bg-zinc-50"
            style={{ color: COLORS.dark }}
          >
            Voltar
          </a>
        </div>

        <p className="mt-4 text-sm" style={{ color: "rgba(28,28,28,0.65)" }}>
          Abaixo está o texto completo do documento.
        </p>

        <div className="mt-8 overflow-hidden rounded-[24px] border border-zinc-200 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
          <div className="border-b border-zinc-200 px-5 py-4 sm:px-7" style={{ background: COLORS.light }}>
            <div className="text-sm font-semibold" style={{ color: COLORS.dark }}>
              Documento oficial
            </div>
            <div className="text-xs" style={{ color: "rgba(28,28,28,0.60)" }}>
              Para dúvidas: contato@meuprovadorvirtual.com
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
                href="mailto:contato@meuprovadorvirtual.com"
                className="text-xs"
                style={{ color: "rgba(28,28,28,0.55)" }}
              >
                contato@meuprovadorvirtual.com
              </a>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 text-sm sm:gap-4">
            <a
              href="#/criar-link"
              className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-4 py-2 font-semibold transition hover:bg-zinc-50"
              style={{ color: COLORS.dark }}
            >
              Criar link da loja
            </a>
            <a
              href="#/politicas"
              className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-4 py-2 font-semibold transition hover:bg-zinc-50"
              style={{ color: COLORS.dark }}
            >
              Política de Uso e Privacidade
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
      <Hero />
      <ShopkeeperSection />
      <ProcessSection />
      <Benefits />
      <FinalCTA />
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
