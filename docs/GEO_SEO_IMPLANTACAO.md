# Implementação GEO + SEO — Meu Provador Virtual

## Escopo implementado
- Quatro páginas HTML estáticas em public/<slug>/index.html, publicadas pelo Vite na pasta dist.
- Estilo compartilhado em public/geo.css, baseado no visual do site.
- Links de navegação na home React e no rodapé.
- robots.txt com acesso explícito ao OAI-SearchBot e exclusão das rotas /l/.
- sitemap.xml com as novas páginas.
- JSON-LD de Organization, WebSite, SoftwareApplication e Service na página inicial.
- Teste automatizado de distribuição com scripts/check-geo.mjs.

## Publicação
1. Revisar e mesclar o pull request no main.
2. No servidor, atualizar o código e executar npm install (se necessário) e npm run build.
3. Publicar todo o conteúdo de dist, incluindo as pastas das quatro novas páginas.
4. Confirmar configuração Nginx com index index.html e fallback para arquivos ou diretórios estáticos antes do fallback SPA. Exemplo de location /: try_files $uri $uri/ /index.html;.
5. Não modificar regras /api e o redirecionamento do WhatsApp.
6. Verificar HTTP 200 e HTML fonte destas URLs:
   - https://meuprovadorvirtual.com/provador-virtual-whatsapp/
   - https://meuprovadorvirtual.com/provador-virtual-para-lojas/
   - https://meuprovadorvirtual.com/experimentar-roupas-online/
   - https://meuprovadorvirtual.com/como-funciona/
7. Confirmar que /criar-link e /l/exemplo continuam operacionais.
8. Executar node scripts/check-geo.mjs na pasta do projeto após npm run build.

## Após publicar
- Conferir robots.txt e sitemap.xml no domínio real.
- Submeter sitemap ao Google Search Console e Bing Webmaster Tools.
- Verificar acesso por firewall/CDN dos IPs do OAI-SearchBot: https://developers.openai.com/api/docs/bots.
- Configurar GA4 apenas com Measurement ID real da propriedade. Nenhuma ID foi inventada nesta mudança.
- Monitorar citações e visitas referidas pelo ChatGPT. Não há garantia de aparição nos resultados.

## Preservações
- Nenhuma alteração no endpoint Apps Script, formulário de leads, créditos ou lógica WhatsApp.
- A criação e o uso dos links de loja permanecem no aplicativo React existente.
- As novas páginas não processam nem armazenam dados pessoais.
