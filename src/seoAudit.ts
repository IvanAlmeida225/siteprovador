export const seoAuditDate = '2026-10-08';
export const seoTitles = {
  '/criar-link': 'Criar Link Grátis para Loja | Meu Provador Virtual',
  '/politicas': 'Termos de Uso e Privacidade | Meu Provador Virtual',
};
const path = window.location.pathname;
const title = seoTitles[path as keyof typeof seoTitles];
if (title) {
  document.title = title;
  const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (canonical) canonical.href = 'https://meuprovadorvirtual.com' + path;
}
