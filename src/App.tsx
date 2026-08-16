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
  suaFoto: "/modelo.png",
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
Última atualização: 16 de agosto de 2026

1. IDENTIFICAÇÃO E ACEITAÇÃO
Estes Termos regulam o uso do Meu Provador Virtual, serviço digital operado sob a marca Meu Provador Virtual, inscrito no CNPJ 66.535.748/0001-05. O atendimento e as solicitações relacionadas ao serviço podem ser feitos pelo e-mail meuprovadorvirtual@gmail.com.

Ao iniciar ou continuar o uso pelo WhatsApp ou pelo site, o usuário declara ter lido e aceitado estes Termos e a Política de Privacidade. Se não concordar, não deverá utilizar o serviço.

2. COMO O SERVIÇO FUNCIONA
O usuário envia uma foto-base de corpo inteiro e uma foto da roupa, produto ou look. Tecnologias de inteligência artificial geram uma simulação visual do produto sobre a imagem enviada. O resultado é ilustrativo e experimental: não mede o corpo e não garante tamanho, caimento, textura, cor, proporção ou aparência idêntica ao produto real.

3. REQUISITOS PARA USO
O serviço é destinado exclusivamente a pessoas com 18 anos ou mais. O usuário declara possuir os direitos ou autorização válida sobre todas as imagens enviadas e capacidade civil para aceitar estes Termos.

4. TESTE GRATUITO, CRÉDITOS E PAGAMENTOS
O primeiro teste gratuito é promocional, sujeito à disponibilidade técnica e ao limite mensal de orçamento da campanha, podendo ser suspenso ou encerrado sem aviso prévio.

Os pacotes pagos, sua quantidade de créditos, preço e eventual prazo de validade são informados antes da compra. Cada geração concluída poderá consumir um crédito. Tentativas que falhem antes da entrega do resultado não devem consumir crédito; divergências podem ser comunicadas ao suporte.

O checkout é processado pela InfinitePay. Para preencher o pagamento, podemos encaminhar nome, e-mail, telefone e o pacote escolhido. Informações adicionais solicitadas diretamente no checkout, inclusive dados de pagamento, são tratadas pela InfinitePay segundo seus próprios termos e política de privacidade. O Meu Provador Virtual não armazena o número completo do cartão.

Dados operacionais da sessão do bot, inclusive o saldo apresentado, podem expirar após 30 dias de inatividade. Se um saldo pago deixar de aparecer, o usuário deverá contatar o suporte com o comprovante para análise.

5. CANCELAMENTO E REEMBOLSO
Pedidos de cancelamento ou reembolso serão analisados conforme o Código de Defesa do Consumidor e as características do serviço digital já utilizado. O direito de arrependimento aplicável às contratações a distância será respeitado nos termos da legislação. Créditos já consumidos e serviços já executados poderão ser considerados na análise, sem prejuízo dos direitos obrigatórios do consumidor.

6. FOTO-BASE SALVA
A foto-base é salva para permitir novas simulações sem novo envio. Ela permanece armazenada até que o usuário a substitua, solicite sua exclusão ou até o encerramento definitivo do serviço, ressalvadas obrigações legais e cópias temporárias de segurança quando existentes.

Para apagar a foto-base armazenada pelo Meu Provador Virtual, o usuário deve enviar no WhatsApp: EXCLUIR MINHA FOTO. A exclusão remove a cópia criptografada mantida em nosso servidor e sua referência operacional. Ela não apaga cópias já existentes no aparelho, na conversa do WhatsApp ou em serviços de terceiros sujeitos às respectivas regras de retenção.

7. REGRAS DE USO
É proibido:
a) enviar imagens de terceiros sem autorização;
b) usar imagens de menores de 18 anos;
c) gerar conteúdo sexual, pornográfico ou envolvendo roupas íntimas;
d) produzir conteúdo ilegal, discriminatório, ofensivo, fraudulento ou destinado a enganar;
e) tentar contornar filtros de segurança, explorar falhas, sobrecarregar ou interferir no serviço;
f) violar direitos de imagem, autorais, marcas ou outros direitos de terceiros.

O acesso poderá ser suspenso ou bloqueado quando houver indícios de violação, fraude, risco a terceiros ou obrigação legal.

8. INTELIGÊNCIA ARTIFICIAL E RESULTADOS
A inteligência artificial pode alterar detalhes do rosto, corpo, roupa, fundo, acessórios, cores ou proporções e pode gerar resultados incorretos ou inadequados. O usuário deve conferir o produto real, sua descrição e a tabela de medidas antes de comprar. O serviço não substitui aconselhamento profissional nem avaliação presencial.

9. DIREITOS SOBRE IMAGENS E RESULTADOS
O Meu Provador Virtual não reivindica propriedade sobre a fotografia original enviada pelo usuário. O usuário concede autorização limitada para processá-la e entregá-la aos operadores tecnológicos estritamente necessários à execução do serviço.

O resultado gerado poderá ser usado pelo usuário para fins pessoais lícitos, respeitados os direitos de terceiros e as condições dos provedores de inteligência artificial. Não garantimos exclusividade, originalidade ou possibilidade de registro do resultado.

10. PROPRIEDADE INTELECTUAL DO SERVIÇO
Marca, site, interface, código, fluxos, design e demais elementos próprios do Meu Provador Virtual são protegidos por lei. É proibida sua reprodução ou exploração comercial sem autorização, exceto nos limites permitidos pela legislação.

11. DISPONIBILIDADE E ALTERAÇÕES
O serviço pode sofrer manutenção, limites de capacidade, indisponibilidade de fornecedores ou alterações de funcionalidade. Não garantimos operação contínua ou livre de erros. Poderemos atualizar pacotes, preços, modelos de inteligência artificial e estes Termos; mudanças relevantes serão publicadas no canal oficial.

12. RESPONSABILIDADES
Na extensão permitida por lei, o Meu Provador Virtual não responde por decisões de compra baseadas exclusivamente na simulação, diferenças entre a imagem gerada e o produto real, uso indevido feito pelo usuário, indisponibilidade causada por terceiros ou violações decorrentes de imagens enviadas sem autorização.

Nada nestes Termos exclui direitos obrigatórios previstos no Código de Defesa do Consumidor ou responsabilidade que não possa ser limitada por lei.

13. COMUNICAÇÕES
Podemos enviar mensagens necessárias ao funcionamento do serviço, pagamento, segurança e suporte. Comunicações promocionais serão enviadas quando houver base legal adequada, e o usuário poderá solicitar sua interrupção a qualquer momento.

14. PROTEÇÃO DE DADOS
O tratamento de dados pessoais é descrito na Política de Privacidade abaixo, que integra estes Termos.

15. LEGISLAÇÃO E CONTATO
Aplicam-se as leis brasileiras, especialmente a LGPD, o Marco Civil da Internet, o Código de Defesa do Consumidor e a legislação de direitos autorais. Fica preservado o foro legalmente assegurado ao consumidor.

Contato: meuprovadorvirtual@gmail.com


POLÍTICA DE PRIVACIDADE – MEU PROVADOR VIRTUAL
Última atualização: 16 de agosto de 2026

1. CONTROLADOR E ESCOPO
Esta Política explica como o Meu Provador Virtual, inscrito no CNPJ 66.535.748/0001-05, trata dados pessoais no site, no bot do WhatsApp, na geração de imagens, no checkout e no suporte. Para exercer direitos ou tirar dúvidas: meuprovadorvirtual@gmail.com.

2. DADOS TRATADOS
Podemos tratar:
a) identificação e contato: número de telefone, nome e e-mail;
b) conteúdo: foto-base, fotos de produtos ou looks, mensagens e comandos enviados;
c) resultados: imagens geradas e identificadores técnicos associados;
d) uso e conta: estado da conversa, saldo de créditos, pacote escolhido, origem do link da loja e histórico necessário à operação;
e) pagamento: dados de referência da compra, status e identificadores da transação recebidos da InfinitePay;
f) segurança e funcionamento: datas, horários, endereço IP quando disponível, registros de acesso, erros, eventos técnicos e prevenção a fraude.

Não solicitamos o número completo do cartão no WhatsApp. Dados fornecidos diretamente no checkout são tratados pela InfinitePay.

3. FINALIDADES E BASES LEGAIS
Os dados são tratados para:
a) prestar o serviço solicitado, manter a sessão, gerar e entregar a simulação — execução de contrato ou de procedimentos solicitados pelo titular;
b) salvar a foto-base para uso futuro — consentimento ou execução continuada do serviço, conforme aplicável;
c) processar compras, controlar créditos e emitir registros — execução de contrato e cumprimento de obrigações legais;
d) proteger usuários, prevenir fraude, diagnosticar falhas e defender direitos — legítimo interesse, prevenção à fraude, exercício regular de direitos e cumprimento legal, conforme o caso;
e) responder solicitações de privacidade e autoridades — cumprimento de obrigação legal ou regulatória;
f) enviar publicidade — consentimento ou outra base legal válida, com possibilidade de oposição ou cancelamento.

Quando a imagem puder revelar dados pessoais sensíveis, adotamos as bases e salvaguardas cabíveis conforme a LGPD e limitamos seu uso à finalidade solicitada.

4. FOTO-BASE: ARMAZENAMENTO, SEGURANÇA E EXCLUSÃO
A foto-base é mantida em área privada do servidor, em arquivo criptografado com AES-256-GCM e acesso restrito. A referência necessária para localizar o arquivo fica associada à sessão do usuário.

A foto-base permanece salva até ser substituída, excluída pelo usuário ou até o encerramento definitivo do serviço. Para exclusão, envie no WhatsApp: EXCLUIR MINHA FOTO.

Esse comando exclui a cópia criptografada e a referência mantidas pelo Meu Provador Virtual. Não remove automaticamente imagens que já estejam na conversa do WhatsApp, no aparelho do usuário, em backups externos ou em ambientes de operadores sujeitos a prazos próprios.

5. PROCESSAMENTO POR INTELIGÊNCIA ARTIFICIAL
Para criar a simulação, a foto-base e a imagem do produto são processadas por serviços do Google Gemini. O Meu Provador Virtual não utiliza deliberadamente as imagens para treinar modelos próprios nem cria banco comercial de fotografias de usuários.

O tratamento realizado pelo Google depende da modalidade, configuração e termos vigentes do serviço contratado. Nos termos publicados pelo Google, serviços pagos e não pagos podem possuir regras diferentes sobre uso, retenção e revisão de conteúdo. Por isso, não prometemos que nenhum operador tecnológico realizará tratamento além da geração; aplicam-se também os termos e políticas do respectivo provedor.

6. COMPARTILHAMENTO E OPERADORES
Compartilhamos somente o necessário para operar o serviço com:
a) Meta/WhatsApp — recebimento e envio de mensagens e imagens;
b) Google Gemini — análise e geração de imagens;
c) Upstash — armazenamento de sessão e dados operacionais em Redis;
d) Contabo — hospedagem da aplicação e da foto-base criptografada;
e) InfinitePay — checkout, pagamento e confirmação da compra;
f) prestadores de segurança, suporte técnico, contabilidade ou assessoria, quando necessários e sujeitos a deveres de confidencialidade.

Também poderemos compartilhar dados por obrigação legal, ordem de autoridade competente, prevenção a fraude, proteção de direitos ou em operação societária legítima, com as salvaguardas cabíveis.

7. TRANSFERÊNCIA INTERNACIONAL
Alguns fornecedores possuem infraestrutura ou equipes fora do Brasil. Assim, dados podem ser processados em outros países. Buscamos utilizar fornecedores reconhecidos e mecanismos admitidos pela LGPD e pela regulamentação da ANPD, incluindo cláusulas contratuais e outras salvaguardas aplicáveis.

8. PRAZOS DE RETENÇÃO
Aplicamos os seguintes critérios:
a) foto-base criptografada: até substituição, comando de exclusão ou encerramento definitivo do serviço;
b) foto de produto, resultado e referências operacionais: durante o processamento e, quando associadas à sessão, por até 30 dias de inatividade; cópias presentes no WhatsApp seguem as regras da Meta e as escolhas do usuário;
c) nome, e-mail, telefone, saldo e estado da sessão: em regra, por até 30 dias de inatividade, salvo quando outro prazo for necessário para compra, suporte, fraude ou obrigação legal;
d) registros de compra, fiscais e de atendimento: pelos prazos legais e pelo tempo necessário ao exercício de direitos;
e) logs técnicos e de segurança: pelo período necessário para segurança, diagnóstico, prevenção a fraude e cumprimento legal.

A eliminação pode ser adiada quando a conservação for exigida por lei, necessária ao exercício de direitos ou tecnicamente mantida em backup temporário protegido.

9. SEGURANÇA
Adotamos controles compatíveis com os riscos, como criptografia da foto-base, restrição de acesso ao servidor, proteção de credenciais, conexões seguras e registros técnicos. Nenhum sistema é totalmente imune; em caso de incidente relevante, adotaremos medidas de contenção, investigação e as comunicações exigidas pela LGPD e pela ANPD.

10. DIREITOS DO TITULAR
O titular pode solicitar, conforme a LGPD: confirmação do tratamento; acesso; correção; anonimização, bloqueio ou eliminação; informação sobre compartilhamentos; portabilidade quando regulamentada e aplicável; revisão de decisões automatizadas; oposição; revogação do consentimento; e informação sobre as consequências de não consentir.

Solicitações devem ser enviadas a meuprovadorvirtual@gmail.com. Poderemos pedir informações mínimas para verificar a identidade e evitar fraude. A resposta observará os prazos legais.

11. DECISÕES AUTOMATIZADAS
A inteligência artificial cria a imagem e pode aplicar filtros de segurança. O serviço não utiliza a simulação para tomar decisões que produzam efeitos jurídicos sobre o usuário. Se uma decisão automatizada de bloqueio afetar o acesso, o usuário poderá pedir revisão pelo canal de contato.

12. MENORES DE IDADE
O serviço não é destinado a menores de 18 anos e não deve receber suas imagens. Se identificarmos tratamento indevido de dados de menor, poderemos bloquear o uso e eliminar os dados, ressalvadas obrigações legais.

13. SITE, LINKS E SERVIÇOS DE TERCEIROS
O site pode registrar dados técnicos essenciais de acesso e encaminhar o usuário ao WhatsApp ou ao checkout da InfinitePay. Ao entrar em um serviço de terceiro, aplicam-se também os respectivos termos e políticas. Não controlamos a retenção feita no aparelho, na conta do WhatsApp ou em páginas externas.

14. COMUNICAÇÕES
Mensagens transacionais e de segurança são necessárias ao serviço. O usuário pode se opor a mensagens promocionais pelo próprio WhatsApp ou pelo e-mail de contato, sem impedir comunicações indispensáveis sobre compras, segurança ou solicitações.

15. ALTERAÇÕES DESTA POLÍTICA
Esta Política poderá ser atualizada para refletir mudanças legais, técnicas ou comerciais. A versão vigente e sua data estarão disponíveis em https://meuprovadorvirtual.com/politicas. Alterações relevantes poderão ser comunicadas pelos canais disponíveis.

16. CONTATO
Meu Provador Virtual
CNPJ: 66.535.748/0001-05
E-mail: meuprovadorvirtual@gmail.com
Site: https://meuprovadorvirtual.com
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
              Criar link grátis <ArrowRight className="h-4 w-4" />
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
            Crie e compartilhe gratuitamente o link da sua loja. Sua loja não
            paga nada, e cada cliente pode receber um primeiro teste grátis,
            sujeito à disponibilidade mensal, para visualizar os looks no próprio
            corpo, onde estiver e sem instalar aplicativo.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <PrimaryButton href="/criar-link">
              Criar link grátis da minha loja
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
              <CheckCircle2 className="h-4 w-4" /> Link grátis para a loja
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4" /> Primeiro teste grátis para a cliente
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4" /> Sem instalar aplicativo
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
      title: "Custo zero para a loja",
      desc: "Criar, divulgar e manter o link da loja é grátis. A cliente também recebe o primeiro teste sem custo.",
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
      question: "A loja paga para criar ou compartilhar o link?",
      answer:
        "Não. Criar e compartilhar o link é totalmente gratuito para a loja. Não há mensalidade nem cobrança para oferecer o link às clientes. O primeiro teste da cliente também é grátis; se ela quiser continuar depois, poderá comprar novos créditos diretamente.",
    },
    {
      question: "A cliente paga para fazer o primeiro teste?",
      answer:
        "O primeiro teste pode ser oferecido gratuitamente, sujeito à disponibilidade técnica e ao limite mensal da campanha. Depois, a cliente poderá comprar créditos diretamente, sem custo para a loja.",
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
    {
      question: "Como as fotos e os dados pessoais são utilizados?",
      answer:
        "As fotos são usadas para gerar a simulação solicitada. A foto-base fica salva de forma criptografada até você substituí-la ou enviar EXCLUIR MINHA FOTO. Não usamos as imagens para treinar modelos próprios; o processamento necessário por terceiros, como Meta/WhatsApp e Google Gemini, segue os termos, configurações e prazos desses fornecedores.",
    },
    {
      question: "As fotos e os dados ficam armazenados por quanto tempo?",
      answer:
        "A foto-base criptografada permanece salva até você substituí-la ou enviar EXCLUIR MINHA FOTO. Os dados operacionais da sessão, como nome, e-mail, telefone, saldo e referências de imagens, podem permanecer por até 30 dias de inatividade; registros de compra e segurança seguem os prazos legais.",
    },
    {
      question: "Os dados são compartilhados? Como solicitar acesso ou exclusão?",
      answer:
        "Usamos Meta/WhatsApp, Google Gemini, Upstash, Contabo e InfinitePay para comunicação, inteligência artificial, sessão, hospedagem e pagamento. Para pedir acesso, correção, exclusão, oposição ou revisão, escreva para meuprovadorvirtual@gmail.com. Consulte a página de políticas para os prazos e detalhes.",
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
              A loja não paga nada: crie e compartilhe seu link gratuitamente.
              O primeiro teste da cliente pode ser grátis, sujeito à disponibilidade
              mensal da campanha.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <PrimaryButton href="/criar-link">
                Criar link grátis da minha loja
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
              Criar link grátis da loja
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-relaxed" style={{ color: "rgba(28,28,28,0.72)" }}>
              Digite apenas o nome da loja para gerar um link compartilhável, sem mensalidade e sem
              nenhum custo para a loja. Quando a cliente abrir o link, será direcionada ao WhatsApp
              com o código da loja na mensagem e poderá solicitar um primeiro teste grátis,
              sujeito à disponibilidade mensal da campanha.
            </p>

            <div className="mt-5 rounded-[20px] border border-zinc-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold" style={{ color: COLORS.dark }}>
                Como compartilhar:
              </p>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(28,28,28,0.72)" }}>
                Depois de gerar o link, copie e envie para suas clientes pelo WhatsApp, coloque na bio
                do Instagram ou envie no Direct. Criar e divulgar esse link é grátis para a loja, e
                cada cliente pode conhecer o Meu Provador Virtual com um primeiro teste gratuito,
                sujeito à disponibilidade mensal da campanha.
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
                para solicitar um teste gratuito, sujeito à disponibilidade mensal.
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
          Você será direcionada para solicitar um teste gratuito pelo Meu Provador Virtual, sujeito à disponibilidade mensal.
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
          Textos integrais vigentes, atualizados em 16 de agosto de 2026.
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
              Criar link grátis da loja
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
