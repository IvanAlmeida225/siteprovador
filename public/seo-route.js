const path = window.location.pathname;
if (path === '/criar-link' || path === '/politicas') {
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.href = 'https://meuprovadorvirtual.com' + path;
  if (path === '/criar-link') document.title = 'Criar Link Grátis para Loja | Meu Provador Virtual';
  if (path === '/politicas') document.title = 'Termos de Uso e Privacidade | Meu Provador Virtual';
}
