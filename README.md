# Meu Provador Virtual

Site institucional do Meu Provador Virtual, com comunicação voltada a lojistas
de moda que vendem pelo WhatsApp e Instagram.

## Posicionamento

O serviço amplia a experiência do provador da loja para o ambiente digital. A
cliente visualiza looks no próprio corpo pelo WhatsApp, onde estiver e sem
instalar aplicativo.

O resultado é uma simulação visual e ilustrativa. O site não promete prova
técnica de tamanho, medidas ou caimento exato.

## Principais rotas

- `/` - página comercial
- `/criar-link` - gerador de link da loja
- `/politicas` - política de uso e privacidade
- `/l/nome-da-loja` - encaminhamento da cliente para o WhatsApp

## Rodar localmente

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Publicar no VPS

O servidor deve tratar as rotas do site como SPA e retornar `index.html`.

```bash
cd /root/meu-provador-site
git pull origin main
npm install
npm run build
cp -a dist/. /var/www/site/
chmod -R a+rX /var/www/site
```

Não é necessário reiniciar o PM2 para atualizar somente o site.

## Fontes dos dados apresentados

- Alert Tech: benchmarks de conversão associados ao provador físico.
- DRESSX: relatório de 2026 sobre comportamento de usuários de provador virtual.

Os dados aparecem com links para as fontes e não são apresentados como garantia
de resultado para cada loja.
