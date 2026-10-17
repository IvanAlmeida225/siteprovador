/* Meu Provador Virtual — análise opcional com consentimento.
   Nenhuma tag ou evento GA4 é enviado antes da autorização.
   Não rastrear /l/: links personalizados das lojas podem conter identificadores. */
(function () {
  "use strict";

  var MEASUREMENT_ID = "G-7KGDB2V7WV";
  var STORAGE_KEY = "mpv_analytics_choice_v1";
  var GA_DISABLED_KEY = "ga-disable-" + MEASUREMENT_ID;
  var consent = null;
  var initialized = false;

  // Links personalizados e rotas técnicas não precisam de medição.
  if (/^\/(?:l|api|webhook)(?:\/|$)/i.test(window.location.pathname)) {
    return;
  }

  try {
    var storedChoice = window.localStorage.getItem(STORAGE_KEY);
    if (storedChoice === "accepted" || storedChoice === "rejected") {
      consent = storedChoice;
    }
  } catch (error) {
    // Navegação privada pode impedir o armazenamento: manter opt-in.
  }

  function cleanLocation() {
    var destination = new URL(window.location.pathname, window.location.origin);
    var source = new URLSearchParams(window.location.search);
    // UTMs limpas permitem atribuição de campanhas sem repassar números ou dados livres.
    ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach(function (key) {
      var value = source.get(key);
      if (value && /^[a-zA-Z0-9_.-]{1,80}$/.test(value)) {
        destination.searchParams.set(key, value);
      }
    });
    return destination.href;
  }

  function cleanReferrer() {
    try {
      var url = new URL(document.referrer);
      if (url.protocol === "http:" || url.protocol === "https:") {
        return url.origin + "/";
      }
    } catch (error) {
      // Sem referenciador.
    }
    return undefined;
  }

  function track(name, parameters) {
    if (consent !== "accepted" || !initialized || typeof window.gtag !== "function") {
      return;
    }

    // Somente ações pré-definidas: nunca enviar telefones, nomes, URLs de WhatsApp ou fotos.
    var allowed = {
      mpv_click_whatsapp: true,
      mpv_click_credits: true,
      mpv_lead_request_submitted: true
    };
    if (!allowed[name]) return;
    window.gtag("event", name, parameters || {});
  }

  window.MPVAnalytics = Object.freeze({ track: track });

  function installAnalytics() {
    if (initialized || consent !== "accepted") return;
    initialized = true;
    window[GA_DISABLED_KEY] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", MEASUREMENT_ID, {
      send_page_view: false,
      allow_google_signals: false,
      allow_ad_personalization_signals: false
    });

    var referrer = cleanReferrer();
    var pageView = {
      page_title: document.title,
      page_location: cleanLocation(),
      page_path: window.location.pathname
    };
    if (referrer) pageView.page_referrer = referrer;
    window.gtag("event", "page_view", pageView);

    var script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(MEASUREMENT_ID);
    document.head.appendChild(script);
  }

  function deleteAnalyticsCookies() {
    var names = ["_ga", "_ga_" + MEASUREMENT_ID.replace(/^G-/, ""), "_gid"];
    var host = window.location.hostname;
    var domains = ["", "; domain=" + host, "; domain=." + host];
    names.forEach(function (name) {
      domains.forEach(function (domain) {
        document.cookie = name + "=; Max-Age=0; path=/" + domain + "; SameSite=Lax";
      });
    });
  }

  function dismissBanner() {
    var banner = document.getElementById("mpv-analytics-banner");
    if (banner) banner.remove();
  }

  function saveChoice(value) {
    var wasAccepted = consent === "accepted";
    consent = value;
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch (error) {
      // A escolha funciona nesta sessão mesmo se a persistência estiver indisponível.
    }
    dismissBanner();
    if (value === "accepted") {
      installAnalytics();
    } else if (wasAccepted) {
      window[GA_DISABLED_KEY] = true;
      deleteAnalyticsCookies();
      // Remover o script GA4 já carregado do contexto da página.
      window.location.reload();
    }
  }

  function showBanner() {
    if (document.getElementById("mpv-analytics-banner")) return;

    var banner = document.createElement("section");
    banner.id = "mpv-analytics-banner";
    banner.setAttribute("role", "region");
    banner.setAttribute("aria-label", "Preferências de privacidade");
    banner.innerHTML =
      '<div class="mpv-analytics-copy">' +
        '<strong>Análises opcionais</strong>' +
        '<p>Usamos o Google Analytics somente com sua autorização para entender visitas e melhorar o site. ' +
        'Não enviamos seu número de WhatsApp nem suas fotos ao Analytics. ' +
        '<a href="/politicas">Política de Privacidade</a>.</p>' +
      '</div>' +
      '<div class="mpv-analytics-actions">' +
        '<button type="button" id="mpv-analytics-reject">Recusar</button>' +
        '<button type="button" id="mpv-analytics-accept">Aceitar análises</button>' +
      '</div>';

    document.body.appendChild(banner);
    banner.querySelector("#mpv-analytics-reject").addEventListener("click", function () {
      saveChoice("rejected");
    });
    banner.querySelector("#mpv-analytics-accept").addEventListener("click", function () {
      saveChoice("accepted");
    });
  }

  function attachPreferencesControl() {
    var footer = document.querySelector("footer");
    if (!footer || document.getElementById("mpv-analytics-preferences")) return;

    var link = document.createElement("button");
    link.id = "mpv-analytics-preferences";
    link.type = "button";
    link.textContent = "Preferências de análise";
    link.setAttribute("aria-label", "Alterar consentimento de Google Analytics");
    link.addEventListener("click", showBanner);
    footer.appendChild(link);
  }

  function attachClickTracking() {
    document.addEventListener("click", function (event) {
      var target = event.target;
      if (!target || typeof target.closest !== "function") return;
      var anchor = target.closest("a[href]");
      if (!anchor) return;

      var url;
      try { url = new URL(anchor.href, window.location.href); } catch (error) { return; }
      if (url.origin === window.location.origin && url.pathname.replace(/\/$/, "") === "/criar-link") {
        track("mpv_click_credits", { action: "open_credits_page" });
      } else if (/^(?:wa\.me|api\.whatsapp\.com)$/i.test(url.hostname)) {
        track("mpv_click_whatsapp", { action: "open_whatsapp" });
      }
    });
  }

  function start() {
    var style = document.createElement("style");
    style.textContent =
      "#mpv-analytics-banner{position:fixed;bottom:16px;left:16px;right:16px;z-index:9999;display:flex;align-items:center;justify-content:space-between;gap:22px;max-width:960px;margin:auto;padding:18px 22px;border:1px solid #d4d4d4;border-radius:18px;background:#fff;color:#1c1c1c;box-shadow:0 10px 45px rgba(0,0,0,.15);font-family:Inter,system-ui,sans-serif}" +
      "#mpv-analytics-banner .mpv-analytics-copy{flex:1}" +
      "#mpv-analytics-banner strong{font-size:15px}" +
      "#mpv-analytics-banner p{font-size:13px;line-height:1.5;margin:6px 0 0;color:#52525b}" +
      "#mpv-analytics-banner p a{text-decoration:underline}" +
      "#mpv-analytics-banner .mpv-analytics-actions{display:flex;gap:10px;flex-wrap:wrap;justify-content:flex-end}" +
      "#mpv-analytics-banner button{font:600 13px Inter,system-ui,sans-serif;padding:11px 18px;border-radius:999px;border:1px solid #1c1c1c;cursor:pointer}" +
      "#mpv-analytics-reject{background:#fff;color:#1c1c1c}" +
      "#mpv-analytics-accept{background:#1c1c1c;color:#fff}" +
      "#mpv-analytics-preferences{display:inline-block;margin:8px 12px;padding:7px 10px;border:0;background:transparent;color:#52525b;text-decoration:underline;font:12px Inter,system-ui,sans-serif;cursor:pointer}" +
      "@media(max-width:640px){#mpv-analytics-banner{bottom:8px;left:8px;right:8px;flex-direction:column;align-items:stretch;padding:16px}#mpv-analytics-banner .mpv-analytics-actions{justify-content:stretch}#mpv-analytics-banner .mpv-analytics-actions button{flex:1}}";
    document.head.appendChild(style);

    attachPreferencesControl();
    attachClickTracking();
    if (consent === "accepted") {
      installAnalytics();
    } else if (consent === null) {
      showBanner();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
