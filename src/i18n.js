// i18n.js — locale registry + path/hreflang helpers for the multi-language rollout.
// English is the default at the root (no prefix). Other locales live under /<code>/.
// A locale only becomes routable once its content exists AND it is added to LIVE_LOCALES.

// Full planned set (priority order). Add to LIVE_LOCALES as each is translated.
export const LOCALES = ["en", "de", "fr", "es", "nl", "it", "sv", "pl", "pt"];

// Locales that currently have real, localized content and should be served + listed in hreflang.
// Start with English only; push a code here (e.g. "de") once that language is fully built.
export const LIVE_LOCALES = ["en", "de", "fr", "es", "nl", "it"];

export const DEFAULT_LOCALE = "en";

// Native names for the language switcher, and BCP-47 codes for <html lang> / hreflang.
export const LOCALE_LABEL = {
  en: "English", de: "Deutsch", fr: "Français", es: "Español",
  nl: "Nederlands", it: "Italiano", sv: "Svenska", pl: "Polski", pt: "Português",
};
export const LOCALE_HREFLANG = {
  en: "en", de: "de", fr: "fr", es: "es", nl: "nl", it: "it", sv: "sv", pl: "pl", pt: "pt-BR",
};

export const UI_STRINGS = {
  en: {
    nav: { tempMail: "Temp Mail", disposable: "Disposable", blog: "Blog", about: "About" },
    footer: { about: "About", blog: "Blog", privacy: "Privacy", terms: "Terms", contact: "Contact", disclaimer: "Disclaimer", copy: "Temp Mail — Free Temporary &amp; Disposable Email Service" },
    blog: {
      title: "Temp Mail Blog — Temporary Email Guides & Tips",
      h1: "Temp Mail Blog",
      lead: "Guides and answers about temporary email, disposable addresses, privacy, and OTP codes.",
      empty: "No articles yet — check back soon.",
      desc: "Guides and answers about temporary email, disposable email addresses, OTP codes, and online privacy.",
    },
    notFound: { title: "Page not found — Temp Mail", desc: "The page you requested could not be found.", h1: "404", lead: "That page doesn't exist.", cta: "→ Back to Temp Mail" },
    cta: "→ Get your free temp mail address",
  },
  de: {
    nav: { tempMail: "Temp Mail", disposable: "Wegwerf-E-Mail", blog: "Blog", about: "Über uns" },
    footer: { about: "Über uns", blog: "Blog", privacy: "Datenschutz", terms: "Bedingungen", contact: "Kontakt", disclaimer: "Haftung", copy: "Temp Mail — Kostenloser temporärer E-Mail-Service" },
    blog: {
      title: "Temp Mail Blog — Ratgeber zu temporärer E-Mail",
      h1: "Temp Mail Blog",
      lead: "Ratgeber zu temporärer E-Mail, Wegwerf-E-Mail, Datenschutz und OTP-Codes.",
      empty: "Noch keine Artikel — schauen Sie bald wieder vorbei.",
      desc: "Ratgeber und Antworten zu temporärer E-Mail, Wegwerf-E-Mail-Adressen, OTP-Codes und Online-Datenschutz.",
    },
    notFound: { title: "Seite nicht gefunden — Temp Mail", desc: "Die angeforderte Seite konnte nicht gefunden werden.", h1: "404", lead: "Diese Seite existiert nicht.", cta: "→ Zurück zu Temp Mail" },
    cta: "→ Kostenlose temporäre E-Mail-Adresse holen",
  },
  fr: {
    nav: { tempMail: "Temp Mail", disposable: "Email jetable", blog: "Blog", about: "À propos" },
    footer: { about: "À propos", blog: "Blog", privacy: "Confidentialité", terms: "Conditions", contact: "Contact", disclaimer: "Avertissement", copy: "Temp Mail — Service gratuit d’email temporaire" },
    blog: {
      title: "Blog Temp Mail — Guides sur l’email temporaire",
      h1: "Blog Temp Mail",
      lead: "Guides et réponses sur l’email temporaire, les adresses jetables, la confidentialité et les codes OTP.",
      empty: "Aucun article pour le moment — revenez bientôt.",
      desc: "Guides et réponses sur l’email temporaire, les adresses email jetables, les codes OTP et la confidentialité en ligne.",
    },
    notFound: { title: "Page introuvable — Temp Mail", desc: "La page demandée est introuvable.", h1: "404", lead: "Cette page n’existe pas.", cta: "→ Retour à Temp Mail" },
    cta: "→ Obtenir une adresse Temp Mail gratuite",
  },
  es: {
    nav: { tempMail: "Temp Mail", disposable: "Correo desechable", blog: "Blog", about: "Acerca de" },
    footer: { about: "Acerca de", blog: "Blog", privacy: "Privacidad", terms: "Términos", contact: "Contacto", disclaimer: "Aviso legal", copy: "Temp Mail — Servicio gratuito de correo temporal" },
    blog: {
      title: "Blog de Temp Mail — Guías de correo temporal",
      h1: "Blog de Temp Mail",
      lead: "Guías y respuestas sobre correo temporal, direcciones desechables, privacidad y códigos OTP.",
      empty: "Todavía no hay artículos — vuelve pronto.",
      desc: "Guías y respuestas sobre correo temporal, direcciones de correo desechable, códigos OTP y privacidad en línea.",
    },
    notFound: { title: "Página no encontrada — Temp Mail", desc: "No se pudo encontrar la página solicitada.", h1: "404", lead: "Esa página no existe.", cta: "→ Volver a Temp Mail" },
    cta: "→ Obtener tu correo temporal gratis",
  },
  nl: {
    nav: { tempMail: "Temp Mail", disposable: "Wegwerp e-mail", blog: "Blog", about: "Over ons" },
    footer: { about: "Over ons", blog: "Blog", privacy: "Privacy", terms: "Voorwaarden", contact: "Contact", disclaimer: "Disclaimer", copy: "Temp Mail — Gratis tijdelijke e-mailservice" },
    blog: {
      title: "Temp Mail Blog — Gidsen voor tijdelijke e-mail",
      h1: "Temp Mail Blog",
      lead: "Gidsen en antwoorden over tijdelijke e-mail, wegwerp adressen, privacy en OTP-codes.",
      empty: "Nog geen artikelen — kom binnenkort terug.",
      desc: "Gidsen en antwoorden over tijdelijke e-mail, wegwerp e-mailadressen, OTP-codes en online privacy.",
    },
    notFound: { title: "Pagina niet gevonden — Temp Mail", desc: "De gevraagde pagina kon niet worden gevonden.", h1: "404", lead: "Die pagina bestaat niet.", cta: "→ Terug naar Temp Mail" },
    cta: "→ Gratis tijdelijk e-mailadres ophalen",
  },
  it: {
    nav: { tempMail: "Temp Mail", disposable: "Email usa e getta", blog: "Blog", about: "Chi siamo" },
    footer: { about: "Chi siamo", blog: "Blog", privacy: "Privacy", terms: "Termini", contact: "Contatti", disclaimer: "Note legali", copy: "Temp Mail — Servizio gratuito di email temporanea" },
    blog: {
      title: "Blog Temp Mail — Guide sull’email temporanea",
      h1: "Blog Temp Mail",
      lead: "Guide e risposte su email temporanea, indirizzi usa e getta, privacy e codici OTP.",
      empty: "Nessun articolo per ora — torna presto.",
      desc: "Guide e risposte su email temporanea, indirizzi email usa e getta, codici OTP e privacy online.",
    },
    notFound: { title: "Pagina non trovata — Temp Mail", desc: "La pagina richiesta non è stata trovata.", h1: "404", lead: "Questa pagina non esiste.", cta: "→ Torna a Temp Mail" },
    cta: "→ Ottieni un indirizzo Temp Mail gratuito",
  },
};

export function localeStrings(locale) {
  return UI_STRINGS[locale] || UI_STRINGS.en;
}

// Split a request path into { locale, rest }. rest is the English-equivalent path (always starts with "/").
export function parseLocale(pathname) {
  const m = pathname.match(/^\/([a-z]{2})(?:\/|$)/);
  if (m && LOCALES.includes(m[1]) && m[1] !== "en") {
    const rest = pathname.slice(m[1].length + 1) || "/";
    return { locale: m[1], rest: rest.startsWith("/") ? rest : "/" + rest };
  }
  return { locale: "en", rest: pathname };
}

// Build the locale-prefixed path for a given English-equivalent rest path.
export function localizedPath(locale, rest) {
  const clean = rest === "/" ? "" : rest;
  return locale === "en" ? (rest || "/") : `/${locale}${clean}`;
}

// hreflang <link> block for one page across all LIVE locales (+ x-default → English).
export function hreflangLinks(rest, siteUrl) {
  const base = String(siteUrl || "").replace(/\/+$/, "");
  const lines = LIVE_LOCALES.map(
    (loc) => `<link rel="alternate" hreflang="${LOCALE_HREFLANG[loc]}" href="${base}${localizedPath(loc, rest)}" />`
  );
  lines.push(`<link rel="alternate" hreflang="x-default" href="${base}${localizedPath("en", rest)}" />`);
  return lines.join("\n");
}

// Language-switcher data for the frontend: [{code,label,href,current}]
export function switcherItems(rest, currentLocale) {
  return LIVE_LOCALES.map((loc) => ({
    code: loc, label: LOCALE_LABEL[loc], href: localizedPath(loc, rest), current: loc === currentLocale,
  }));
}
