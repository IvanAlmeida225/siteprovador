import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Copy,
  ExternalLink,
  Instagram,
  MessageCircle,
  Shirt,
  Sparkles,
  Store,
  User,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const BOT_WHATSAPP_NUMBER = "553598762499";
const SITE_BASE_URL = "https://meuprovadorvirtual.com";
const WA_LINK = `https://wa.me/${BOT_WHATSAPP_NUMBER}`;
const MERCHANT_TEST_LINK = `https://wa.me/${BOT_WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá, sou lojista e quero testar o Meu Provador Virtual antes de divulgar para minhas clientes.",
)}`;

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

const TEXT_GRADIENT_STYLE: React.CSSProperties = {
  color: COLORS.primary,
};

const BRAND_FONT =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif';

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
E-mail de contato: meuprovadorvirtual@gmail.com


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
meuprovadorvirtual@gmail.com


TERMO DE CONSENTIMENTO PARA USO DE IMAGEM E PROCESSAMENTO POR INTELIGÊNCIA ARTIFICIAL
Última atualização: Março de 2026

1. OBJETIVO DO TERMO
Este Termo de Consentimento tem como objetivo informar e obter autorização do usuário para o envio e processamento de imagens pessoais no serviço Meu Provador Virtual.

2. CONSENTIMENTO PARA ENVIO DE IMAGEM
Ao utilizar o serviço, o usuário autoriza o envio de fotografias pessoais para processamento pela plataforma e declara possuir direitos sobre a imagem enviada.

3. FINALIDADE DO USO DA IMAGEM
A imagem enviada será utilizada exclusivamente para gerar simulações de roupas ou produtos sobre a fotografia do usuário e permitir a visualização de diferentes combinações de looks.

4. PROCESSAMENTO POR INTELIGÊNCIA ARTIFICIAL
Durante o uso do serviço, as imagens podem ser processadas por sistemas automatizados de inteligência artificial com o objetivo exclusivo de gerar a simulação solicitada.

5. ARMAZENAMENTO DA FOTO BASE
Com autorização do usuário, a plataforma poderá armazenar a foto base do usuário para facilitar novas simulações futuras.

6. LIMITAÇÕES DA TECNOLOGIA
As imagens geradas pela inteligência artificial possuem caráter ilustrativo e podem apresentar variações em relação ao produto real.

7. DIREITOS DO USUÁRIO
O usuário poderá solicitar exclusão da foto base armazenada ou revogação do consentimento a qualquer momento.

8. CONTATO
Para dúvidas ou solicitações relacionadas a este termo, entre em contato pelo e-mail:
meuprovadorvirtual@gmail.com
`;

function slugify(value: string) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

function titleCaseFromSlug(slug: string) {
  return String(slug || "")
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function buildWhatsAppLink(message: string) {
  return `https://wa.me/${BOT_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

async function copyTextSafely(text: string) {
  if (!text) return false;

  if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // fallback abaixo
    }
  }

  if (typeof document === "undefined") return false;

  try {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.top = "-9999px";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    const copied = document.execCommand("copy");
    document.body.removeChild(textarea);
    return copied;
  } catch {
    return false;
  }
}

function runSelfTests() {
  try {
    console.assert(typeof WA_LINK === "string" && WA_LINK.length > 0, "WA_LINK vazio");
    console.assert(typeof LOGO.icon === "string" && LOGO.icon.startsWith("/"), "LOGO.icon inválido");
    console.assert(EMBED.suaFoto.startsWith("/"), "EMBED.suaFoto inválida");
    console.assert(EMBED.look.startsWith("/"), "EMBED.look inválida");
    console.assert(EMBED.resultado.startsWith("/"), "EMBED.resultado inválida");
    console.assert(/^#([0-9a-fA-F]{6})$/.test(COLORS.primary), "COLORS.primary inválida");
    console.assert(/^#([0-9a-fA-F]{6})$/.test(COLORS.secondary), "COLORS.secondary inválida");
    console.assert(slugify("Ana Modas") === "ana-modas", "slugify básico inválido");
    console.assert(slugify("Boutique São João") === "boutique-sao-joao", "slugify com acento inválido");
    console.assert(buildWhatsAppLink("teste").includes("wa.me"), "link WhatsApp inválido");
  } catch {
    // noop
  }
}

if (typeof window !== "undefined") runSelfTests();

function TopNav() {
  return (
    <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-200">
      <div className="mx-auto max-w-6xl px-5 py-3 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex min-w-[180px] items-center gap-3">
            <div
              className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full"
              style={{
                background: COLORS.primary,
              }}
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
            <span className="font-semibold" style={{ color: COLORS.dark }}>
              Meu Provador Virtual
            </span>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-zinc-700 md:flex">
            <a href="#lojistas" className="hover:text-zinc-900">
              Para lojistas
            </a>
            <a href="#processo" className="hover:text-zinc-900">
              Processo
            </a>
            <a href="#beneficios" className="hover:text-zinc-900">
              Vantagens
            </a>
            <a href="#/criar-link" className="hover:text-zinc-900">
              Criar link
            </a>
          </nav>

          <div className="flex min-w-[180px] justify-end">
            <a
              href={MERCHANT_TEST_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:shadow"
              style={{ background: COLORS.primary, color: COLORS.white }}
            >
              Testar o bot <MessageCircle className="h-4 w-4" />
            </a>
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
            Ofereça provador virtual <br />
            <span style={TEXT_GRADIENT_STYLE}>para suas clientes.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 }}
            className="mx-auto mt-7 max-w-3xl text-base leading-relaxed sm:text-lg md:text-xl"
            style={{ color: "rgba(28,28,28,0.72)" }}
          >
            Transforme sua loja em um canal de experiência visual: suas clientes testam looks pelo WhatsApp antes de comprar, e você usa o provador para gerar combinações e conteúdos para o Instagram com mais facilidade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:items-center"
          >
            <a
              href={MERCHANT_TEST_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold text-white shadow-sm transition hover:shadow-md"
              style={{ background: COLORS.primary, color: COLORS.white }}
            >
              Testar como lojista
              <MessageCircle className="h-5 w-5" />
            </a>
            <a
              href="#/criar-link"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-7 py-3.5 text-base font-semibold shadow-sm transition hover:shadow-md"
              style={{ color: COLORS.dark }}
            >
              Criar link da loja
              <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
          className="mt-12 sm:mt-14"
        >
          <div className="mx-auto max-w-6xl">
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
                    <span style={{ color: COLORS.dark }}>Fluxo simples para vender por WhatsApp e Instagram</span>
                  </div>

                  <h3
                    className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl"
                    style={{ color: COLORS.dark }}
                  >
                    Sua cliente visualiza o look
                    <br />
                    <span style={TEXT_GRADIENT_STYLE}>antes de chamar sua loja</span>
                  </h3>

                  <p
                    className="mx-auto mt-5 max-w-xl text-base leading-relaxed sm:text-lg"
                    style={{ color: "rgba(28,28,28,0.72)" }}
                  >
                    No vídeo ao lado você vê o fluxo do provador: a cliente envia a foto, escolhe o look e recebe uma visualização. Para a loja, isso vira uma experiência de captação, atendimento e conteúdo visual.
                  </p>

                  <div className="mx-auto mt-7 max-w-xl space-y-4">
                    {[
                      {
                        icon: Store,
                        title: "1) Teste antes de divulgar",
                        desc: "O lojista pode testar o bot primeiro e entender a experiência antes de compartilhar com clientes.",
                      },
                      {
                        icon: Shirt,
                        title: "2) Divulgue o look da loja",
                        desc: "Envie produtos, vestidos, conjuntos ou combinações para a cliente visualizar no próprio corpo.",
                      },
                      {
                        icon: Instagram,
                        title: "3) Gere ideias para Instagram",
                        desc: "Use o provador para montar looks, combinações e referências visuais com mais agilidade para seus posts e stories.",
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
                          <div
                            className="mt-1 text-sm leading-relaxed"
                            style={{ color: "rgba(28,28,28,0.70)" }}
                          >
                            {item.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
                    <a
                      href={MERCHANT_TEST_LINK}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold text-white shadow-sm transition hover:shadow-md"
                      style={{ background: COLORS.primary, color: COLORS.white }}
                    >
                      Testar o bot agora
                      <MessageCircle className="h-5 w-5" />
                    </a>
                    <div className="text-xs" style={{ color: "rgba(28,28,28,0.55)" }}>
                      Sem baixar app • Experiência pelo WhatsApp
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 sm:mt-20" />
      </div>
    </section>
  );
}

function MerchantStrategySection() {
  const cards = [
    {
      icon: Store,
      title: "Canal de distribuição para sua loja",
      desc: "Crie um link da loja e envie para clientes que compram pelo Instagram ou WhatsApp. A experiência ajuda a transformar curiosidade em conversa de compra.",
    },
    {
      icon: MessageCircle,
      title: "Teste o bot antes de divulgar",
      desc: "A loja pode testar o fluxo primeiro, entender como funciona e só depois compartilhar com clientes reais.",
    },
    {
      icon: Instagram,
      title: "Apoio para looks de Instagram",
      desc: "Além de atender clientes, o lojista pode usar o provador para gerar ideias de combinações, looks e referências visuais para posts, stories e campanhas.",
    },
  ];

  return (
    <section id="lojistas" style={{ background: COLORS.white }}>
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold shadow-sm">
              <Store className="h-4 w-4" style={{ color: COLORS.primary }} />
              <span style={{ color: COLORS.dark }}>Para lojistas de moda</span>
            </div>
            <h2
              className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl"
              style={{ color: COLORS.dark }}
            >
              Uma ferramenta para vender melhor, não apenas uma IA.
            </h2>
            <p
              className="mt-6 text-base leading-relaxed sm:text-lg"
              style={{ color: "rgba(28,28,28,0.72)" }}
            >
              O Meu Provador Virtual ajuda lojas que vendem moda pelo Instagram e WhatsApp a oferecer uma experiência visual para suas clientes. A proposta não é medir tamanho, mas permitir que a cliente visualize o look, reduza dúvidas e avance na decisão de compra.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={MERCHANT_TEST_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold text-white shadow-sm transition hover:shadow-md"
                style={{ background: COLORS.primary, color: COLORS.white }}
              >
                Testar como lojista
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="#/criar-link"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-7 py-3.5 text-base font-semibold shadow-sm transition hover:shadow-md"
                style={{ color: COLORS.dark }}
              >
                Criar link da loja
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            {cards.map((card) => (
              <div
                key={card.title}
                className="relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
              >
                <div
                  className="absolute left-0 top-0 h-full w-[6px]"
                  style={{ background: COLORS.primary }}
                  aria-hidden
                />
                <div className="flex gap-4">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                    style={{ background: "rgba(28,28,28,0.08)" }}
                  >
                    <card.icon className="h-6 w-6" style={{ color: COLORS.primary }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold" style={{ color: COLORS.dark }}>
                      {card.title}
                    </h3>
                    <p className="mt-2 leading-relaxed" style={{ color: "rgba(28,28,28,0.72)" }}>
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    { id: "01", title: "Foto da cliente", img: EMBED.suaFoto, icon: User },
    { id: "02", title: "Look da loja", img: EMBED.look, icon: Shirt },
    { id: "03", title: "Visualização final", img: EMBED.resultado, icon: Sparkles },
  ];

  return (
    <section id="processo" style={{ background: COLORS.white }}>
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
        <div className="text-center">
          <h2
            className="text-4xl font-bold tracking-tight sm:text-5xl"
            style={{ color: COLORS.dark }}
          >
            Como funciona
          </h2>
          <p
            className="mx-auto mt-6 max-w-2xl text-base sm:text-lg"
            style={{ color: "rgba(28,28,28,0.72)" }}
          >
            A loja divulga o provador, a cliente envia a foto, escolhe o look e recebe uma visualização para decidir com mais segurança.
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
                    <div className="mt-1 text-xl font-semibold text-zinc-950">{step.title}</div>
                  </div>
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full"
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
            href={MERCHANT_TEST_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-700 hover:text-zinc-950"
          >
            Testar como lojista <ArrowRight className="h-4 w-4" />
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
      title: "Experiência rápida",
      desc: "A cliente visualiza o look em poucos passos, sem instalar aplicativo ou criar conta.",
    },
    {
      icon: CheckCircle2,
      title: "Mais segurança na decisão",
      desc: "A proposta é ajudar a cliente a visualizar estilo, combinação e aparência geral antes de comprar.",
    },
    {
      icon: Instagram,
      title: "Conteúdo para Instagram",
      desc: "A loja também pode usar o provador para criar ideias de looks, combinações e campanhas visuais com mais facilidade.",
    },
  ];

  return (
    <section id="beneficios" style={{ background: COLORS.light }}>
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
        <div className="text-center">
          <h2
            className="text-4xl font-bold tracking-tight sm:text-5xl"
            style={{ color: COLORS.dark }}
          >
            Vantagens para lojistas
          </h2>
          <div className="mt-4 flex justify-center">
            <div
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-xs font-semibold shadow-sm"
              style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.06)" }}
            >
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: COLORS.success }} />
              <span style={{ color: COLORS.dark }}>Distribuição, atendimento e conteúdo</span>
              <span
                className="ml-1 inline-flex items-center rounded-full px-2 py-0.5"
                style={{
                  background: COLORS.primary,
                  color: "white",
                }}
              >
                Destaque
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 sm:mt-14">
          {items.map((item) => (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] sm:p-7"
            >
              <div
                className="absolute left-0 top-0 h-full w-[6px]"
                style={{
                  background: COLORS.primary,
                }}
                aria-hidden
              />

              <div className="absolute right-5 top-5">
                <div
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-3 py-1 text-xs font-semibold"
                  style={{
                    background: "linear-gradient(135deg, rgba(28,28,28,0.08), rgba(42,42,42,0.06))",
                    color: COLORS.dark,
                  }}
                >
                  <Sparkles className="h-4 w-4" style={{ color: COLORS.secondary }} />
                  <span>Vantagem</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pr-20">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full"
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

              <div
                className="mt-6 h-[3px] w-24 rounded-full"
                style={{
                  background: COLORS.primary,
                  opacity: 0.9,
                }}
                aria-hidden
              />
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
          style={{
            background: "linear-gradient(180deg, rgba(28,28,28,0.08), rgba(42,42,42,0.03))",
          }}
        >
          <div className="px-7 py-12 text-center sm:px-10 sm:py-14">
            <h2
              className="text-4xl font-bold tracking-tight sm:text-5xl"
              style={{ color: COLORS.dark }}
            >
              Comece pela sua loja. <br />Depois divulgue para suas clientes.
            </h2>
            <p
              className="mx-auto mt-6 max-w-2xl text-base sm:text-lg"
              style={{ color: "rgba(28,28,28,0.72)" }}
            >
              Teste o bot, gere o link da loja e use o provador como apoio para atendimento, campanhas e criação de looks para Instagram.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
              <a
                href={MERCHANT_TEST_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold text-white shadow-sm transition hover:shadow-md"
                style={{ background: COLORS.primary, color: COLORS.white }}
              >
                Testar o bot
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="#/criar-link"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-7 py-3.5 text-base font-semibold shadow-sm transition hover:shadow-md"
                style={{ color: COLORS.dark }}
              >
                Criar link da loja
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CreateStoreLinkPage() {
  const [storeName, setStoreName] = useState("");
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "manual">("idle");

  const storeCode = useMemo(() => slugify(storeName), [storeName]);
  const displayStoreName = useMemo(() => {
    const trimmed = storeName.trim();
    return trimmed || titleCaseFromSlug(storeCode) || "sua loja";
  }, [storeName, storeCode]);

  const storeLandingLink = storeCode ? `${SITE_BASE_URL}/l/${storeCode}` : "";
  const whatsappMessage = storeCode
    ? `Oi, vim da loja ${displayStoreName} e quero testar um look. Código: ${storeCode}`
    : "";
  const directWhatsappLink = storeCode ? buildWhatsAppLink(whatsappMessage) : "";

  async function handleCopy() {
    if (!storeLandingLink) return;
    const copied = await copyTextSafely(storeLandingLink);
    setCopyStatus(copied ? "copied" : "manual");
    window.setTimeout(() => setCopyStatus("idle"), copied ? 1800 : 4000);
  }

  return (
    <section style={{ background: COLORS.light }}>
      <div className="mx-auto max-w-4xl px-5 py-14 sm:px-6 sm:py-16">
        <div className="flex items-center justify-between gap-4">
          <h1
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: COLORS.dark }}
          >
            Criar link da loja
          </h1>
          <a
            href="#/"
            className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold transition hover:bg-zinc-50"
            style={{ color: COLORS.dark }}
          >
            Voltar
          </a>
        </div>

        <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(28,28,28,0.72)" }}>
          Digite apenas o nome da loja para gerar um link compartilhável. Quando a cliente abrir o link, ela será direcionada para o bot com o código da loja na mensagem.
        </p>

        <div className="mt-8 overflow-hidden rounded-[28px] border border-zinc-200 bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] sm:p-7">
          <label htmlFor="storeName" className="text-sm font-semibold" style={{ color: COLORS.dark }}>
            Nome da loja
          </label>
          <input
            id="storeName"
            type="text"
            value={storeName}
            onChange={(event) => {
              setStoreName(event.target.value);
              setCopyStatus("idle");
            }}
            placeholder="Ex.: Ana Modas"
            className="mt-3 w-full rounded-full border border-zinc-200 bg-white px-5 py-3.5 text-base outline-none transition focus:border-zinc-900"
            style={{ color: COLORS.dark, fontFamily: BRAND_FONT }}
          />

          {storeCode ? (
            <div className="mt-7 rounded-[24px] border border-zinc-200 p-5" style={{ background: COLORS.light }}>
              <p className="text-sm font-semibold" style={{ color: "rgba(28,28,28,0.62)" }}>
                Link gerado
              </p>
              <p className="mt-2 break-all text-lg font-bold" style={{ color: COLORS.dark }}>
                {storeLandingLink}
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:shadow-md"
                  style={{ background: COLORS.primary, color: COLORS.white }}
                >
                  {copyStatus === "copied" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copyStatus === "copied" ? "Link copiado" : "Copiar link"}
                </button>
                <a
                  href={directWhatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold shadow-sm transition hover:shadow-md"
                  style={{ color: COLORS.dark }}
                >
                  Testar no bot
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {copyStatus === "manual" ? (
                <p className="mt-3 text-sm" style={{ color: "rgba(28,28,28,0.70)" }}>
                  O navegador bloqueou a cópia automática. Selecione o link acima e copie manualmente.
                </p>
              ) : null}

              <div className="mt-5 rounded-[20px] bg-white p-4 text-sm" style={{ color: "rgba(28,28,28,0.72)" }}>
                <p className="font-semibold" style={{ color: COLORS.dark }}>
                  Mensagem enviada ao bot:
                </p>
                <p className="mt-1">{whatsappMessage}</p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function PoliciesPage() {
  return (
    <section style={{ background: COLORS.light }}>
      <div className="mx-auto max-w-4xl px-5 py-14 sm:px-6 sm:py-16">
        <div className="flex items-center justify-between gap-4">
          <h1
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: COLORS.dark }}
          >
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
          <div
            className="border-b border-zinc-200 px-5 py-4 sm:px-7"
            style={{ background: "linear-gradient(90deg, rgba(28,28,28,0.08), rgba(42,42,42,0.05))" }}
          >
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
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <div
              className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full"
              style={{
                background: COLORS.primary,
              }}
            >
              <img src={LOGO.icon} alt="Meu Provador Virtual" className="h-6 w-6 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold" style={{ color: COLORS.dark }}>
                Meu Provador Virtual
              </span>
              <span className="text-xs" style={{ color: "rgba(28,28,28,0.55)" }}>
                contato@meuprovadorvirtual.com
              </span>
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

type Route = "home" | "politicas" | "criarLink";

function Site({ route }: { route: Route }) {
  return (
    <div
      className="min-h-screen"
      style={{
        background: COLORS.light,
        color: COLORS.dark,
        fontFamily: BRAND_FONT,
      }}
    >
      <TopNav />
      <main>
        {route === "politicas" ? (
          <PoliciesPage />
        ) : route === "criarLink" ? (
          <CreateStoreLinkPage />
        ) : (
          <>
            <Hero />
            <MerchantStrategySection />
            <ProcessSection />
            <Benefits />
            <FinalCTA />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  const getRoute = (): Route => {
    const hash = window.location.hash;
    const pathname = window.location.pathname;

    if (hash.startsWith("#/politicas")) return "politicas";
    if (hash.startsWith("#/criar-link") || pathname.startsWith("/criar-link")) return "criarLink";
    return "home";
  };

  const [route, setRoute] = useState<Route>(
    typeof window === "undefined" ? "home" : getRoute(),
  );

  useEffect(() => {
    const onRouteChange = () => setRoute(getRoute());
    window.addEventListener("hashchange", onRouteChange);
    window.addEventListener("popstate", onRouteChange);
    return () => {
      window.removeEventListener("hashchange", onRouteChange);
      window.removeEventListener("popstate", onRouteChange);
    };
  }, []);

  return <Site route={route} />;
}
