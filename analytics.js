(() => {
  // Paste your GA4 Measurement ID below, e.g. G-ABC123DEF4.
  const GA_MEASUREMENT_ID = "";
  const CONSENT_KEY = "cookieConsent";

  const messages = {
    "pt-BR": {
      text: "Este site usa cookies/armazenamento local para preferencias e, quando habilitado, analytics. Voce pode aceitar ou recusar cookies de analytics.",
      policy: "Ver politica",
      accept: "Aceitar",
      reject: "Recusar"
    },
    en: {
      text: "This site uses cookies/local storage for preferences and, when enabled, analytics. You can accept or reject analytics cookies.",
      policy: "Privacy policy",
      accept: "Accept",
      reject: "Reject"
    }
  };

  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === "G-XXXXXXXXXX") {
    return;
  }

  const lang = document.documentElement.lang && document.documentElement.lang.startsWith("pt") ? "pt-BR" : "en";
  const copy = messages[lang];

  function getConsent() {
    return localStorage.getItem(CONSENT_KEY);
  }

  function setConsent(value) {
    localStorage.setItem(CONSENT_KEY, value);
  }

  function loadAnalytics() {
    if (window.__gaLoaded) {
      return;
    }

    window.__gaLoaded = true;

    const dataLayer = (window.dataLayer = window.dataLayer || []);

    function gtag() {
      dataLayer.push(arguments);
    }

    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", GA_MEASUREMENT_ID, {
      anonymize_ip: true
    });

    const gaScript = document.createElement("script");
    gaScript.async = true;
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`;
    document.head.appendChild(gaScript);
  }

  function createBanner() {
    const existing = document.getElementById("cookie-banner");
    if (existing) {
      return;
    }

    const policyPath = window.location.pathname.endsWith("privacy.html") ? "#toc" : "privacy.html";

    const banner = document.createElement("aside");
    banner.id = "cookie-banner";
    banner.className = "cookie-banner";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-live", "polite");
    banner.innerHTML = `
      <p>
        ${copy.text}
        <a href="${policyPath}">${copy.policy}</a>.
      </p>
      <div class="cookie-actions">
        <button class="cookie-btn reject" type="button">${copy.reject}</button>
        <button class="cookie-btn accept" type="button">${copy.accept}</button>
      </div>
    `;

    const rejectButton = banner.querySelector(".cookie-btn.reject");
    const acceptButton = banner.querySelector(".cookie-btn.accept");

    rejectButton.addEventListener("click", () => {
      setConsent("rejected");
      banner.remove();
    });

    acceptButton.addEventListener("click", () => {
      setConsent("accepted");
      loadAnalytics();
      banner.remove();
    });

    document.body.appendChild(banner);
  }

  const consent = getConsent();

  if (consent === "accepted") {
    loadAnalytics();
    return;
  }

  if (consent === "rejected") {
    return;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createBanner, { once: true });
  } else {
    createBanner();
  }
})();
