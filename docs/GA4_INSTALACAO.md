# Google Analytics 4 — Meu Provador Virtual

## Dados de integração
- Propriedade: Meu Provador Virtual — Site
- Fluxo: https://meuprovadorvirtual.com
- ID de medição: G-7KGDB2V7WV (público e próprio da tag)
- Script compartilhado: public/analytics-consent.js

## Privacidade e consentimento
- O script do Google Analytics é injetado **somente depois que o visitante escolhe Aceitar análises**.
- Recusar não afeta o provador, formulários ou links WhatsApp.
- Há botão de reversão "Preferências de análise" no rodapé.
- O código não envia número de telefone preenchido, fotos, nome da loja ou conteúdo de mensagens como parâmetros de eventos.
- Links de loja /l/* e rotas técnicas ficam fora da coleta de dados de página.
- A localização enviada no page_view remove parâmetros arbitrários; preserva apenas UTM seguro.
- A política do site inclui seção sobre medições e consentimento.
- O bloqueio é client-side, devendo ser reavaliado se outras tags forem adicionadas futuramente.
- A implementação técnica não substitui revisão jurídica da LGPD ou testes reais de consentimento.

## IMPORTANTE: medição otimizada do GA4
O fluxo criado está com a medição otimizada ativada, incluindo "Cliques de saída". Ela pode enviar URLs completas de links externos, inclusive números em links de WhatsApp.

**Antes de divulgar o Analytics, entrar em Google Analytics > Administrar > Fluxos de dados > Fluxo Web > Medição otimizada (engrenagem):**
1. **Desativar "Cliques de saída"** para evitar a captura automática do endereço inteiro de links para WhatsApp.
2. **Desativar interações com formulários**, se estiverem ativas. O formulário contém um número de WhatsApp e a medição personalizada não envia o dado.
3. Pode manter visualizações de página/rolagens conforme necessidades de mensuração. Nosso código envia page_view manualmente; confirmar no GA4 se não há duplicidade de eventos de visualização de página (caso haja, desligar a página automática em "opções avançadas").
4. Não habilitar ID de usuário ou sinais do Google sem uma avaliação específica de privacidade.

## Eventos personalizados coletados (apenas após consentimento)
- mpv_click_credits — clique para abrir /criar-link
- mpv_click_whatsapp — clique em URL pública de WhatsApp (sem enviar o link)
- mpv_lead_request_submitted — navegador finalizou a chamada POST do formulário para Apps Script, **sem confirmação de persistência**, pois o envio está em modo no-cors.

**Não** classificar mpv_lead_request_submitted automaticamente como lead comprovadamente gravado no CRM. Para essa medição precisa, instrumentar confirmação de back-end válida.

No GA4 é possível marcar um evento como principal (key event) após verificá-lo e entender seu significado, mas não haverá retroatividade para dados anteriores à instalação.

## Instalação no site
Após merge para main, publicar com os comandos habituais na VPS:
1. Backup dos arquivos atuais da pasta publicada.
2. git pull --ff-only origin main, npm install/npm ci, npm run build.
3. node scripts/check-geo.mjs e node scripts/check-analytics.mjs.
4. Copiar todo dist/. para a pasta pública e verificar.
5. Testar site e rotas estáticas no navegador, banner de consentimento e links.
6. Usar GA4 > Relatórios > Tempo real para testar uma visita com consentimento. Rejeição não deve carregar script de analytics.
7. Verificar ChatGPT como canal de referência após visitas reais; tráfego de buscas com IA não é equivalente a quantidade de citações.

## Observação de publicação
A atualização do GitHub, por si só, **não publica a mudança na VPS**.
