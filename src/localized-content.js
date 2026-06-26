import { localizedPath, localeStrings } from "./i18n.js";
import { PLATFORM_LANDING_PATHS, platformData } from "./platform-landing-pages.js";

const LANG = {
  de: {
    title: "Temporäre E-Mail", disposable: "Wegwerf-E-Mail", temp: "temporäre E-Mail", code: "OTP-Code",
    free: "kostenlos", signup: "ohne Registrierung", inbox: "Postfach", real: "in Echtzeit",
    cta: "→ Kostenlose temporäre E-Mail-Adresse holen", home: "Startseite",
    seo: "Kostenlose temporäre E-Mail-Adresse ohne Registrierung. Empfangen Sie Verifizierungen und OTP-Codes in Echtzeit und halten Sie Ihr echtes Postfach frei von Spam.",
    about: "Über Temp Mail", privacy: "Datenschutzerklärung", terms: "Nutzungsbedingungen", contact: "Kontakt", disclaimer: "Haftungsausschluss",
    noSignup: "Keine Registrierung · Postfach in Echtzeit", h1: "Ihre temporäre E-Mail-Adresse",
    lead: "Kostenlos, wegwerfbar und sofort einsatzbereit. Empfangen Sie Verifizierungs-E-Mails und OTP-Codes in Echtzeit, danach lassen Sie die Adresse einfach zurück.",
    ui: ["Ihre Adresse", "Aktiv", "Adresse kopieren", "Neue Adresse", "Adresse anpassen", "Namen wählen", "Posteingang", "Warten…", "Warte auf eingehende E-Mail", "Senden Sie eine Nachricht an die Adresse oben. Sie erscheint hier automatisch innerhalb weniger Sekunden.", "Kopiert", "Adresse kopiert", "Neue Adresse bereit", "Live", "Alle löschen"],
  },
  fr: {
    title: "Email temporaire", disposable: "email jetable", temp: "email temporaire", code: "code OTP",
    free: "gratuit", signup: "sans inscription", inbox: "boîte de réception", real: "en temps réel",
    cta: "→ Obtenir une adresse Temp Mail gratuite", home: "accueil",
    seo: "Adresse email temporaire gratuite sans inscription. Recevez les emails de vérification et les codes OTP en temps réel tout en protégeant votre vraie boîte mail du spam.",
    about: "À propos de Temp Mail", privacy: "Politique de confidentialité", terms: "Conditions d’utilisation", contact: "Contact", disclaimer: "Avertissement",
    noSignup: "Sans inscription · Boîte en temps réel", h1: "Votre adresse email temporaire",
    lead: "Gratuite, jetable et instantanée. Recevez les emails de vérification et les codes OTP en temps réel, puis abandonnez l’adresse sans polluer votre vraie boîte.",
    ui: ["Votre adresse", "Active", "Copier l’adresse", "Nouvelle adresse", "Personnaliser l’adresse", "choisir un nom", "Boîte de réception", "En attente…", "En attente d’un email", "Envoyez un message à l’adresse ci-dessus. Il apparaîtra ici automatiquement en quelques secondes.", "Copié", "Adresse copiée", "Nouvelle adresse prête", "En direct", "Tout effacer"],
  },
  es: {
    title: "Correo temporal", disposable: "correo desechable", temp: "correo temporal", code: "código OTP",
    free: "gratis", signup: "sin registro", inbox: "bandeja", real: "en tiempo real",
    cta: "→ Obtener tu correo temporal gratis", home: "inicio",
    seo: "Correo temporal gratuito sin registro. Recibe emails de verificación y códigos OTP en tiempo real y protege tu bandeja real contra el spam.",
    about: "Acerca de Temp Mail", privacy: "Política de privacidad", terms: "Términos de servicio", contact: "Contacto", disclaimer: "Aviso legal",
    noSignup: "Sin registro · Bandeja en tiempo real", h1: "Tu dirección de correo temporal",
    lead: "Gratis, desechable e instantánea. Recibe emails de verificación y códigos OTP en tiempo real, después abandona la dirección y mantén limpia tu bandeja real.",
    ui: ["Tu dirección", "Activa", "Copiar dirección", "Nueva dirección", "Personalizar dirección", "elige un nombre", "Bandeja de entrada", "Esperando…", "Esperando correo entrante", "Envía un mensaje a la dirección de arriba. Aparecerá aquí automáticamente en segundos.", "Copiado", "Dirección copiada", "Nueva dirección lista", "En vivo", "Borrar todo"],
  },
  nl: {
    title: "Tijdelijke e-mail", disposable: "wegwerp e-mail", temp: "tijdelijke e-mail", code: "OTP-code",
    free: "gratis", signup: "zonder registratie", inbox: "inbox", real: "realtime",
    cta: "→ Gratis tijdelijk e-mailadres ophalen", home: "startpagina",
    seo: "Gratis tijdelijk e-mailadres zonder registratie. Ontvang verificatiemails en OTP-codes realtime en houd je echte inbox vrij van spam.",
    about: "Over Temp Mail", privacy: "Privacybeleid", terms: "Servicevoorwaarden", contact: "Contact", disclaimer: "Disclaimer",
    noSignup: "Geen registratie · Realtime inbox", h1: "Je tijdelijke e-mailadres",
    lead: "Gratis, tijdelijk en direct beschikbaar. Ontvang verificatiemails en OTP-codes realtime, laat het adres daarna achter en houd je echte inbox schoon.",
    ui: ["Je adres", "Actief", "Adres kopiëren", "Nieuw adres", "Adres aanpassen", "kies een naam", "Inbox", "Wachten…", "Wachten op inkomende e-mail", "Stuur een bericht naar je adres hierboven. Het verschijnt hier automatisch binnen enkele seconden.", "Gekopieerd", "Adres gekopieerd", "Nieuw adres klaar", "Live", "Alles wissen"],
  },
  it: {
    title: "Email temporanea", disposable: "email usa e getta", temp: "email temporanea", code: "codice OTP",
    free: "gratis", signup: "senza registrazione", inbox: "casella", real: "in tempo reale",
    cta: "→ Ottieni un indirizzo Temp Mail gratuito", home: "home",
    seo: "Email temporanea gratuita senza registrazione. Ricevi email di verifica e codici OTP in tempo reale e proteggi la tua casella reale dallo spam.",
    about: "Chi siamo Temp Mail", privacy: "Informativa privacy", terms: "Termini di servizio", contact: "Contatti", disclaimer: "Note legali",
    noSignup: "Senza registrazione · Casella in tempo reale", h1: "Il tuo indirizzo email temporaneo",
    lead: "Gratis, usa e getta e immediato. Ricevi email di verifica e codici OTP in tempo reale, poi abbandona l’indirizzo e tieni pulita la tua casella reale.",
    ui: ["Il tuo indirizzo", "Attivo", "Copia indirizzo", "Nuovo indirizzo", "Personalizza indirizzo", "scegli un nome", "Posta in arrivo", "In attesa…", "In attesa di email", "Invia un messaggio all’indirizzo qui sopra. Apparirà qui automaticamente entro pochi secondi.", "Copiato", "Indirizzo copiato", "Nuovo indirizzo pronto", "Live", "Cancella tutto"],
  },
};

const PAGE = {
  "/temp-mail-generator": ["Temp Mail Generator", "un generatore di indirizzi temporanei", "temp mail generator"],
  "/disposable-email": ["Disposable Email Address", "un indirizzo usa e getta", "disposable email"],
  "/10-minute-mail": ["10 Minute Mail", "una casella per pochi minuti", "10 minute mail"],
  "/fake-email-generator": ["Fake Email Generator", "un indirizzo falso che riceve davvero", "fake email generator"],
  "/temporary-email-service": ["Temporary Email Service", "un servizio completo di posta temporanea", "temporary email service"],
  "/burner-email": ["Burner Email", "un indirizzo bruciatore per un singolo compito", "burner email"],
  "/temp-gmail": ["Temp Gmail", "un’alternativa temporanea per proteggere Gmail", "temp gmail"],
  "/anonymous-email": ["Anonymous Email", "un indirizzo anonimo non legato al tuo nome", "anonymous email"],
  "/alternatives/guerrilla-mail": ["Guerrilla Mail Alternative", "un’alternativa moderna a Guerrilla Mail", "guerrilla mail alternative"],
  "/alternatives/mailinator": ["Mailinator Alternative", "un’alternativa più privata a Mailinator", "mailinator alternative"],
};

const HEAD = {
  de: {
    "/temp-mail-generator": "Temp Mail Generator — kostenlose Wegwerf-E-Mail erstellen",
    "/disposable-email": "Wegwerf-E-Mail — kostenlose temporäre Adresse",
    "/10-minute-mail": "10 Minute Mail — kostenlose temporäre E-Mail",
    "/fake-email-generator": "Fake Email Generator — funktionierende temporäre E-Mail",
    "/temporary-email-service": "Temporärer E-Mail-Service — kostenloses Temp Mail",
    "/burner-email": "Burner Email — kostenlose Wegwerf-Adresse",
    "/temp-gmail": "Temp Gmail — Gmail privat halten",
    "/anonymous-email": "Anonyme E-Mail — kostenlose temporäre Adresse",
    "/alternatives/guerrilla-mail": "Guerrilla Mail Alternative — modernes Temp Mail",
    "/alternatives/mailinator": "Mailinator Alternative — privateres Temp Mail",
  },
  fr: {
    "/temp-mail-generator": "Générateur Temp Mail — email jetable gratuit",
    "/disposable-email": "Email jetable — adresse temporaire gratuite",
    "/10-minute-mail": "10 Minute Mail — email temporaire gratuit",
    "/fake-email-generator": "Fake Email Generator — email temporaire fonctionnel",
    "/temporary-email-service": "Service email temporaire — Temp Mail gratuit",
    "/burner-email": "Burner Email — adresse jetable gratuite",
    "/temp-gmail": "Temp Gmail — protéger votre compte Gmail",
    "/anonymous-email": "Email anonyme — adresse temporaire gratuite",
    "/alternatives/guerrilla-mail": "Alternative à Guerrilla Mail — Temp Mail moderne",
    "/alternatives/mailinator": "Alternative à Mailinator — Temp Mail plus privé",
  },
  es: {
    "/temp-mail-generator": "Generador Temp Mail — correo desechable gratis",
    "/disposable-email": "Correo desechable — dirección temporal gratis",
    "/10-minute-mail": "10 Minute Mail — correo temporal gratis",
    "/fake-email-generator": "Fake Email Generator — correo temporal real",
    "/temporary-email-service": "Servicio de correo temporal — Temp Mail gratis",
    "/burner-email": "Burner Email — dirección desechable gratis",
    "/temp-gmail": "Temp Gmail — protege tu Gmail",
    "/anonymous-email": "Correo anónimo — dirección temporal gratis",
    "/alternatives/guerrilla-mail": "Alternativa a Guerrilla Mail — Temp Mail moderno",
    "/alternatives/mailinator": "Alternativa a Mailinator — Temp Mail más privado",
  },
  nl: {
    "/temp-mail-generator": "Temp Mail Generator — gratis wegwerp e-mail",
    "/disposable-email": "Wegwerp e-mail — gratis tijdelijk adres",
    "/10-minute-mail": "10 Minute Mail — gratis tijdelijke e-mail",
    "/fake-email-generator": "Fake Email Generator — werkende tijdelijke e-mail",
    "/temporary-email-service": "Tijdelijke e-mailservice — gratis Temp Mail",
    "/burner-email": "Burner Email — gratis wegwerp adres",
    "/temp-gmail": "Temp Gmail — houd Gmail privé",
    "/anonymous-email": "Anonieme e-mail — gratis tijdelijk adres",
    "/alternatives/guerrilla-mail": "Guerrilla Mail alternatief — modern Temp Mail",
    "/alternatives/mailinator": "Mailinator alternatief — privéer Temp Mail",
  },
  it: {
    "/temp-mail-generator": "Generatore Temp Mail — email usa e getta gratis",
    "/disposable-email": "Email usa e getta — indirizzo temporaneo gratis",
    "/10-minute-mail": "10 Minute Mail — email temporanea gratis",
    "/fake-email-generator": "Fake Email Generator — email temporanea funzionante",
    "/temporary-email-service": "Servizio email temporanea — Temp Mail gratis",
    "/burner-email": "Burner Email — indirizzo usa e getta gratis",
    "/temp-gmail": "Temp Gmail — proteggi Gmail",
    "/anonymous-email": "Email anonima — indirizzo temporaneo gratis",
    "/alternatives/guerrilla-mail": "Alternativa a Guerrilla Mail — Temp Mail moderno",
    "/alternatives/mailinator": "Alternativa a Mailinator — Temp Mail più privato",
  },
};

function link(locale, rest, text) {
  return `<a href='${localizedPath(locale, rest)}'>${text}</a>`;
}

function cta(locale) {
  return `<a class='cta' href='${localizedPath(locale, "/")}'>${LANG[locale].cta}</a>`;
}

function depthBlock(locale, type = "page") {
  const l = LANG[locale];
  const label = type === "blog" ? "Practical guidance" : type === "home" ? "How to use Temp Mail well" : "Practical examples";
  return `<h2>${label}</h2>
<p>Temp Mail works best as a repeatable privacy habit: use a ${l.temp} when the relationship is temporary, and keep your permanent mailbox for services you actually trust. That keeps your main address less visible in marketing lists, breach dumps, and profiles that follow you across unrelated websites.</p>
<p>For verification codes, speed matters, but separation matters too. Keep the page open, copy the address instead of typing it, and use one address per website. If unwanted mail arrives later, you can tell which signup caused it and leave that inbox behind.</p>
<p>A temporary inbox is not a replacement for Gmail, Outlook, or a work mailbox. It is an extra layer for small moments: testing a form, downloading a file, collecting a coupon, reading a forum, or trying an account before deciding whether it deserves your real address.</p>
<ul><li>Gebruik een nieuw adres voor elke losse website.</li><li>Kopieer codes meteen, want berichten zijn tijdelijk.</li><li>Kies een ander domein als een dienst het eerste adres weigert.</li><li>Gebruik geen tijdelijk adres voor herstel van belangrijke accounts.</li><li>Sluit de taak af en laat de inbox daarna achter.</li></ul>`;
}

function extraDepth(locale) {
  const l = LANG[locale];
  return `<h2>More practical context</h2>
<p>A ${l.disposable} is most useful when you make it part of a clear decision rule. If the account is experimental, public, promotional, or disposable, use Temp Mail. If the account is personal, financial, professional, medical, legal, or needed for recovery, use a permanent mailbox. This simple split prevents most mistakes.</p>
<p>Think of Temp Mail as a buffer. It absorbs the first contact from a site before you decide whether the site deserves a durable relationship. If the service proves useful, you can later switch to a real address. If it only sends promotions, the noise stays in the temporary inbox and never reaches your daily mail.</p>
<p>For repeated work, name addresses by task, keep the inbox visible while waiting for codes, and close the loop quickly. Temporary email is strongest when the task begins and ends in the same session.</p>`;
}

function words(locale, path) {
  const l = LANG[locale];
  const name = HEAD[locale][path].split(" — ")[0];
  const keyword = path.includes("disposable") ? l.disposable : l.temp;
  return { l, name, keyword };
}

function landingBody(locale, path) {
  if (locale !== "de") return landingBodyIntl(locale, path);
  const { l, name, keyword } = words(locale, path);
  return `<h1>${name}</h1>
<p class='lead'>${name} ist für schnelle, private Registrierungen gedacht: eine ${keyword}, ${l.free}, ${l.signup}, mit einem ${l.inbox}, das Nachrichten ${l.real} anzeigt.</p>
${cta(locale)}
<div class='ad-slot'></div>
<h2>Was diese Seite bietet</h2>
<p>${name} hilft, wenn ein Formular eine E-Mail verlangt, Sie aber Ihre persönliche Adresse nicht preisgeben möchten. Die Adresse funktioniert wirklich, sie empfängt Bestätigungslinks, Newsletter-Anmeldungen und jeden ${l.code}, den ein Dienst sendet. Der Unterschied zu Ihrer normalen Mailbox ist der Zweck: Diese Adresse ist kurzlebig, getrennt von Ihrer Identität und für Aufgaben gemacht, die keinen dauerhaften Kontakt verdienen.</p>
<p>Die Oberfläche erzeugt sofort eine Adresse, zeigt das passende Postfach und aktualisiert neue Nachrichten automatisch. Sie müssen kein Konto anlegen, kein Passwort speichern und keine App installieren. Wenn die Aufgabe erledigt ist, lassen Sie die Adresse einfach zurück oder erzeugen eine neue.</p>
<h2>So verwenden Sie ${name}</h2>
<ol>
<li>Öffnen Sie die Seite und nehmen Sie die automatisch erzeugte Adresse.</li>
<li>Wählen Sie bei Bedarf einen eigenen Namen und eine andere Domain.</li>
<li>Kopieren Sie die Adresse in das Formular, das eine Mailbox verlangt.</li>
<li>Warten Sie wenige Sekunden, bis der Bestätigungslink oder ${l.code} erscheint.</li>
<li>Öffnen Sie die Nachricht, kopieren Sie den Code und schließen Sie die Aufgabe ab.</li>
</ol>
<p>Dieser Ablauf ist bewusst einfach. Für einen Download, einen Testzugang, ein Forum oder eine einmalige Verifizierung brauchen Sie keine neue dauerhafte Identität. Sie brauchen nur eine Adresse, die kurz funktioniert und anschließend keine Spuren in Ihrem echten Postfach hinterlässt.</p>
<h2>Warum eine ${keyword} sinnvoll ist</h2>
<p>Jede Website, der Sie Ihre echte Adresse geben, kann sie speichern, weiter analysieren oder später für Werbung verwenden. Eine temporäre Adresse schafft Abstand. Marketing landet dort, wo Sie es nicht lesen müssen. Ein späteres Datenleck enthüllt nicht die Adresse, mit der Sie Bank, Arbeit oder Familie verwalten. Und weil Sie für jede Aufgabe eine neue Adresse erzeugen können, bleiben die einzelnen Registrierungen voneinander getrennt.</p>
<ul>
<li>Spam und Follow-up-Mails bleiben aus Ihrer privaten Mailbox heraus.</li>
<li>Verifizierungen und OTP-Codes kommen trotzdem schnell an.</li>
<li>Sie müssen keine Telefonnummer, keinen Namen und kein Passwort angeben.</li>
<li>Mehrere Domains helfen, wenn ein Dienst eine bekannte Wegwerf-Domain blockiert.</li>
</ul>
<p>Für die Grundlagen lesen Sie auch ${link(locale, "/disposable-email", l.disposable)} und die Anleitung ${link(locale, "/blog/how-to-create-a-temporary-email", l.temp + " erstellen")}.</p>
<h2>Gute Einsatzfälle</h2>
<p>Am besten passt Temp Mail zu kleinen, klar begrenzten Aufgaben. Dazu gehören kostenlose Downloads, Produkttests, WLAN-Portale, Foren, Kommentarbereiche, Gutscheine, Newsletter-Proben und QA-Tests für eigene Formulare. In all diesen Fällen brauchen Sie meist nur eine Nachricht: den Link oder Code, der beweist, dass die Adresse erreichbar ist.</p>
<p>Auch Entwickler profitieren davon. Wer Registrierung, Passwort-Reset oder Benachrichtigungen testet, kann schnell viele Adressen erzeugen, ohne echte Postfächer zu verstopfen. Die Nachrichten sind sichtbar, die Oberfläche bleibt ruhig, und jedes neue Postfach startet ohne Altlasten.</p>
<h2>Wann Sie es nicht verwenden sollten</h2>
<p>Eine temporäre Mailbox ist kein Tresor. Nutzen Sie sie nicht für Bankkonten, Arbeit, Behörden, Medizin, dauerhafte Social-Media-Konten oder alles, was Sie später sicher wiederherstellen müssen. Nachrichten werden regelmäßig gelöscht und die Adresse ist nicht für langfristigen Besitz gedacht. Wenn der Verlust eines Kontos ein Problem wäre, gehört es in eine echte Mailbox mit starkem Passwort und Wiederherstellungsoptionen.</p>
<h2>Datenschutz und Sicherheit</h2>
<p>Der Datenschutzgewinn entsteht durch Trennung. Ihre echte Adresse bleibt privat, während die temporäre Adresse die niedrigen Risiken übernimmt. Trotzdem sollten Sie jede eingehende Nachricht mit Vorsicht behandeln. Klicken Sie keine unerwarteten Links, speichern Sie dort keine sensiblen Informationen und behandeln Sie alles als vorübergehend. Genau diese klare Grenze macht das Werkzeug nützlich.</p>
<p>Wenn Sie wissen möchten, wo die Grenze liegt, lesen Sie ${link(locale, "/blog/is-temp-mail-safe", "ist Temp Mail sicher")}. Für sehr kurze Aufgaben passt außerdem ${link(locale, "/10-minute-mail", "10 Minute Mail")}, und für eine stärker anonyme Nutzung erklärt ${link(locale, "/anonymous-email", "anonyme E-Mail")} die wichtigsten Unterschiede.</p>
<h2>Häufige Fragen</h2>
<h3>Ist ${name} kostenlos?</h3>
<p>Ja. Die Nutzung ist kostenlos und unbegrenzt. Sie können jederzeit neue Adressen erzeugen und eingehende Nachrichten lesen.</p>
<h3>Muss ich mich registrieren?</h3>
<p>Nein. Es gibt kein Konto, kein Passwort und keine App. Die Adresse erscheint sofort im Browser.</p>
<h3>Kann ich E-Mails senden?</h3>
<p>Nein. Temp Mail ist absichtlich nur zum Empfangen gedacht. Es ist ideal für Codes und Bestätigungen, aber nicht zum Antworten.</p>
<h3>Wie schnell kommen Codes an?</h3>
<p>Meist innerhalb weniger Sekunden. Halten Sie die Seite offen, lesen Sie den Code sofort und fordern Sie bei Bedarf eine neue Nachricht an.</p>
<h2>Alltagstipp für saubere Trennung</h2>
<p>Am zuverlässigsten ist ein neues Postfach pro Website. So können Sie später nachvollziehen, welcher Dienst welche Nachricht geschickt hat, und eine laute Adresse einfach zurücklassen. Nutzen Sie die gleiche Adresse nur für zusammengehörige Tests oder eine kurze Serie von Registrierungen. Sobald ein Formular mehr verlangt als eine harmlose Verifizierung, etwa Zahlungsdaten, echte Identitätsdaten oder ein dauerhaftes Wiederherstellungsziel, wechseln Sie zu einer Mailbox, die Ihnen langfristig gehört.</p>
${depthBlock(locale, "landing")}
${extraDepth(locale)}
${cta(locale)}`;
}

function landingBodyIntl(locale, path) {
  const { l, name, keyword } = words(locale, path);
  const copy = {
    fr: [
      "Cette page vous donne une adresse qui reçoit vraiment les messages, sans compte et sans mot de passe. Elle sert aux inscriptions courtes, aux téléchargements, aux essais de produit et aux vérifications qui ne méritent pas votre vraie boîte mail.",
      "Copiez l’adresse, collez-la dans le formulaire, puis gardez l’onglet ouvert. Les liens de confirmation et les codes OTP arrivent en temps réel dans la boîte affichée à l’écran.",
      "Utiliser un email jetable réduit le spam, limite la quantité de données liées à votre identité et évite qu’un petit service conserve votre adresse principale pendant des années.",
      "Ne l’utilisez pas pour la banque, le travail, les démarches publiques, la santé ou tout compte que vous devez récupérer plus tard. Temp Mail est un outil pratique, pas un coffre-fort.",
    ],
    es: [
      "Esta página te da una dirección que recibe mensajes reales, sin cuenta y sin contraseña. Sirve para registros rápidos, descargas, pruebas de producto y verificaciones que no merecen tu bandeja principal.",
      "Copia la dirección, pégala en el formulario y mantén la pestaña abierta. Los enlaces de confirmación y códigos OTP aparecen en tiempo real en la bandeja de la pantalla.",
      "Usar correo desechable reduce el spam, limita los datos asociados a tu identidad y evita que un servicio menor conserve tu dirección principal durante años.",
      "No lo uses para banca, trabajo, trámites públicos, salud o cualquier cuenta que necesites recuperar. Temp Mail es una herramienta de conveniencia, no una caja fuerte.",
    ],
    nl: [
      "Deze pagina geeft je een adres dat echte berichten ontvangt, zonder account en zonder wachtwoord. Het is bedoeld voor korte registraties, downloads, proefaccounts en verificaties die je echte inbox niet verdienen.",
      "Kopieer het adres, plak het in het formulier en houd het tabblad open. Bevestigingslinks en OTP-codes verschijnen realtime in de inbox op het scherm.",
      "Een wegwerp e-mail vermindert spam, beperkt hoeveel data aan je identiteit wordt gekoppeld en voorkomt dat een kleine dienst je hoofdadres jarenlang bewaart.",
      "Gebruik dit niet voor bankzaken, werk, overheid, zorg of accounts die je later moet herstellen. Temp Mail is praktisch gereedschap, geen kluis.",
    ],
    it: [
      "Questa pagina ti dà un indirizzo che riceve messaggi reali, senza account e senza password. Serve per registrazioni rapide, download, prove di prodotto e verifiche che non meritano la tua casella principale.",
      "Copia l’indirizzo, incollalo nel modulo e tieni aperta la scheda. Link di conferma e codici OTP arrivano in tempo reale nella casella mostrata sullo schermo.",
      "Usare un’email usa e getta riduce lo spam, limita i dati collegati alla tua identità e impedisce a un piccolo servizio di conservare per anni il tuo indirizzo principale.",
      "Non usarla per banca, lavoro, servizi pubblici, sanità o account da recuperare in futuro. Temp Mail è uno strumento comodo, non una cassaforte.",
    ],
  }[locale];
  const headings = {
    fr: ["Ce que propose cette page", "Comment l’utiliser", "Pourquoi choisir un email temporaire", "Bons cas d’usage", "À éviter", "Confidentialité et sécurité", "Questions fréquentes"],
    es: ["Qué ofrece esta página", "Cómo usarla", "Por qué elegir un correo temporal", "Buenos casos de uso", "Qué evitar", "Privacidad y seguridad", "Preguntas frecuentes"],
    nl: ["Wat deze pagina biedt", "Zo gebruik je het", "Waarom een tijdelijk adres kiezen", "Goede toepassingen", "Wat je moet vermijden", "Privacy en veiligheid", "Veelgestelde vragen"],
    it: ["Cosa offre questa pagina", "Come usarla", "Perché scegliere un’email temporanea", "Casi d’uso adatti", "Cosa evitare", "Privacy e sicurezza", "Domande frequenti"],
  }[locale];
  return `<h1>${name}</h1>
<p class='lead'>${name} geeft je een ${keyword} die ${l.free} is, ${l.signup} werkt en berichten ${l.real} toont.</p>
${cta(locale)}
<div class='ad-slot'></div>
<h2>${headings[0]}</h2>
<p>${copy[0]}</p><p>${copy[1]}</p><p>${copy[2]}</p>
<h2>${headings[1]}</h2>
<ol><li>Open de pagina en gebruik het automatisch gemaakte adres.</li><li>Kies eventueel een eigen naam of andere domeinnaam.</li><li>Kopieer het adres naar het formulier dat om e-mail vraagt.</li><li>Wacht op de verificatiemail of ${l.code}.</li><li>Open het bericht, gebruik de code en rond de taak af.</li></ol>
<p>Het proces is bewust kort. Je hoeft geen profiel te vullen, geen app te installeren en niets later op te ruimen. Voor elke nieuwe taak kun je een nieuw adres maken.</p>
<h2>${headings[2]}</h2>
<p>${copy[2]}</p><ul><li>Spam blijft buiten je echte inbox.</li><li>Codes en bevestigingen komen snel binnen.</li><li>Je deelt geen naam, telefoonnummer of permanent adres.</li><li>Een nieuw adres scheidt de ene registratie van de andere.</li></ul>
<p>Lees ook ${link(locale, "/disposable-email", l.disposable)} en ${link(locale, "/blog/how-to-create-a-temporary-email", l.temp)} voor de basis.</p>
<h2>${headings[3]}</h2>
<p>Temp Mail past bij downloads, proefaccounts, forums, wifi-portalen, coupons, nieuwsbrieven die je eerst wilt bekijken en ontwikkeltests voor registratieflows. In elk geval heb je maar één ding nodig: een werkende inbox voor een korte tijd.</p>
<p>Ontwikkelaars gebruiken dit ook om OTP, wachtwoordreset en notificaties te controleren zonder echte mailboxen te vervuilen.</p>
<h2>Everyday workflow</h2>
<p>Keep your real inbox for relationships that continue: customers, employers, banks, schools, family and services you pay for. Use Temp Mail for the moment before that relationship is real. If a site only wants an address before showing a file, a coupon, a demo or a confirmation screen, a temporary address is usually enough.</p>
<p>A useful habit is to create one fresh address per site. That keeps messages separated, makes spam easy to identify and prevents one noisy sender from mixing with another. If you are comparing several services, use a new inbox for each test and close the tab when the test is finished.</p>
<h2>How it compares with aliases</h2>
<p>An alias still forwards mail into your permanent account. That is good when you want long-term filtering, but it still creates a path back to you. A disposable address is different: it is detached, short-lived and not something you maintain. Choose an alias for messages you want to keep. Choose Temp Mail for messages you only need once.</p>
<h2>Responsible use</h2>
<p>Disposable email is a privacy tool, not a way to avoid accountability. Use it for lawful, ordinary tasks and respect the rules of the services you visit. Do not use it for abuse, fraud, harassment or spam. The best use is simple: protect your main inbox while completing a low-risk task quickly.</p>
<p>For teams, the same rule applies. A temporary inbox is useful for QA checks, demo flows and training examples because the messages are disposable by nature. It should not become the address for customer records, billing notices or production alerts. Keeping that boundary clear protects both convenience and reliability.</p>
<h2>Daily habit</h2>
<p>The cleanest routine is one address per site. That keeps signups separated, makes spam easy to trace, and prevents a noisy sender from polluting the next task. Reuse an address only when several messages belong to the same short test. If a form suddenly asks for payment, identity documents, work data or a recovery address you must keep, switch to a permanent mailbox instead of stretching a temporary one beyond its job.</p>
<h2>${headings[4]}</h2>
<p>${copy[3]}</p>
<h2>${headings[5]}</h2>
<p>De privacywinst komt door scheiding. Je echte adres blijft bij de accounts die belangrijk zijn, terwijl dit tijdelijke adres de lage risico’s opvangt. Behandel elk bericht als tijdelijk, kopieer codes meteen en klik niet op onverwachte links.</p>
<p>For best results, keep the page open until the message arrives, copy the code immediately and create a new address for the next unrelated site. This small routine keeps each signup separate and makes the temporary nature of the inbox clear from the start.</p>
<p>Meer lezen kan via ${link(locale, "/blog/is-temp-mail-safe", "Temp Mail safety")}, ${link(locale, "/10-minute-mail", "10 Minute Mail")} en ${link(locale, "/anonymous-email", "anonymous email")}.</p>
<h2>${headings[6]}</h2>
<h3>Is het gratis?</h3><p>Ja. Je kunt gratis adressen maken en inkomende berichten lezen.</p>
<h3>Moet ik registreren?</h3><p>Nee. Er is geen account en geen wachtwoord.</p>
<h3>Kan ik e-mail verzenden?</h3><p>Nee. Temp Mail is alleen bedoeld om te ontvangen.</p>
<h3>Hoe snel komen codes aan?</h3><p>Meestal binnen enkele seconden. Houd de inbox open en gebruik codes direct.</p>
${depthBlock(locale, "landing")}
${extraDepth(locale)}
${cta(locale)}`;
}

function localizedLandingPagesFor(locale) {
  const pages = {};
  for (const path of Object.keys(PAGE)) {
    pages[localizedPath(locale, path)] = {
      title: HEAD[locale][path],
      desc: `${HEAD[locale][path]}. ${LANG[locale].seo}`,
      body: landingBody(locale, path),
    };
  }
  return pages;
}

const PLATFORM_LANG = {
  de: {
    titleFor: "Temp Mail für", titleSuffix: "kostenlose Wegwerf-E-Mail",
    descStart: "Nutzen Sie Temp Mail für", descEnd: "mit einem kostenlosen receive-only Postfach. Ehrliche Hinweise zu Verifizierung, blockierten Domains, Datenschutz und dem Moment, in dem eine echte E-Mail besser ist.",
    hubTitle: "Temp Mail für beliebte Apps und Websites", hubDesc: "Ratgeber zu Temp Mail für beliebte Apps und Websites: wo Wegwerf-E-Mail passt, wo Domains blockiert werden können und wann Sie eine echte Mailbox verwenden sollten.",
    lead: (name) => `Nutzen Sie eine kostenlose Wegwerf-E-Mail für ${name}, wenn Sie für niedrige Risiken, Tests, Datenschutz oder Spam-Kontrolle ein schnelles receive-only Postfach brauchen.`,
    hubLead: "Praktische und ehrliche Ratgeber zur Nutzung von Wegwerf-E-Mail bei Apps, sozialen Netzwerken, Spielen, Streaming-Diensten, Shops und Produktivitätstools.",
    h: {
      choose: "Plattform auswählen", read: "So lesen Sie diese Ratgeber", best: "Wo Temp Mail am besten passt", no: "Was diese Seiten nicht fördern", why: "Warum Akzeptanz je nach Plattform schwankt",
      use: (name) => `Warum Menschen Temp Mail bei ${name} nutzen`,
      accept: (name) => `Akzeptiert ${name} temporäre E-Mail?`,
      how: (name) => `So verwenden Sie eine temporäre Adresse bei ${name}`,
      reject: (name) => `Wenn ${name} die Adresse ablehnt`,
      avoid: (name) => `Wann Sie Temp Mail für ${name} nicht verwenden sollten`,
      links: "Hilfreiche verwandte Seiten", faq: "FAQ", substance: (name) => `Praktische Einordnung für ${name}`,
    },
    platformLabel: (name) => `Temp Mail für ${name}`,
    category: {
      "chat communities": "Chat-Communitys", "forums and communities": "Foren und Communitys", "short video apps": "Kurzvideo-Apps", "messaging": "Messaging", "social apps": "Social Apps", "social networks": "soziale Netzwerke", "streaming communities": "Streaming-Communitys", "gaming stores": "Gaming-Stores", "gaming platforms": "Gaming-Plattformen", "console gaming": "Konsolen-Gaming", "music streaming": "Musikstreaming", "streaming services": "Streaming-Dienste", "shopping": "Shopping", "marketplaces": "Marktplätze", "visual discovery": "visuelle Suche", "professional networks": "berufliche Netzwerke", "question and answer sites": "Frage-und-Antwort-Seiten", "publishing": "Publishing", "newsletter platforms": "Newsletter-Plattformen", "AI tools": "KI-Tools", "design tools": "Design-Tools", "cloud storage": "Cloud-Speicher", "dating apps": "Dating-Apps", "email providers": "E-Mail-Anbieter", "email and identity providers": "E-Mail- und Identitätsanbieter",
    },
    cta: "→ Kostenlose temporäre E-Mail-Adresse holen",
    home: "Temp Mail", hub: "Hub für Temp Mail nach Plattform", disposable: "Wegwerf-E-Mail", generator: "Temp Mail Generator", safety: "Sicherheitsratgeber zu Temp Mail",
    hubBody: [
      "Jede Seite erklärt, wann eine temporäre E-Mail-Adresse sinnvoll ist, ob eine Plattform bekannte Wegwerf-Domains ablehnen kann, was bei einer abgelehnten Adresse zu tun ist und wann eine dauerhafte Mailbox die bessere Wahl ist. Die ehrliche Antwort unterscheidet sich je nach Dienst: Ein Forum oder eine lockere Community ist oft flexibler, während soziale Netzwerke, Shops, Cloud-Speicher und Identitätsanbieter zusätzliche Vertrauenssignale verlangen können.",
      "Nutzen Sie Temp Mail für Datenschutz, weniger Spam, Tests mit niedrigem Risiko, einmaligen Zugang und Konten, deren Verlust keinen echten Schaden verursacht. Verwenden Sie es nicht für Bank, Arbeit, Behörden, Gesundheit, bezahlte Abos, Konten mit Käufen oder alles, was später wiederhergestellt werden muss. Der Dienst ist kostenlos, sofort verfügbar, receive-only, unterstützt eigene Namen und mehrere Domains und bereinigt Postfächer regelmäßig.",
      "Am besten passt Temp Mail, wenn die E-Mail nur einmal gebraucht wird: eine Forenregistrierung bestätigen, prüfen, ob eine App einen Code sendet, einer Community kurz beitreten oder einen Produktfluss testen. Sie erhalten eine echte eingehende Nachricht, ohne aus einer kleinen Aufgabe eine dauerhafte E-Mail-Beziehung zu machen.",
      "Schwächer passt Temp Mail bei Plattformen, die mehr Vertrauen verlangen. Social Apps, Dating-Apps, Gaming-Stores, Cloud-Speicher und Microsoft-ähnliche Identitätskonten können Wegwerf-Domains ablehnen oder Telefonverifizierung verlangen. Wenn eine Plattform ablehnt, wechseln Sie höchstens einmal die Domain, sofern das Konto wirklich entbehrlich ist. Wenn das Konto wichtig wird, verwenden Sie eine echte Mailbox.",
      "Diese Ratgeber fördern keinen Betrug, keinen Spam, keine Belästigung, keine Umgehung von Sperren, keinen Zahlungsmissbrauch und keine massenhafte Kontoerstellung. Wegwerf-E-Mail ist ein Werkzeug für Datenschutz und Postfachhygiene. Wenn ein Dienst temporäre E-Mail verbietet, respektieren Sie diese Regel und nutzen Sie einen wiederherstellbaren Account.",
      "Die praktische Regel ist einfach: Wenn der Verlust des Kontos morgen ärgerlich, aber harmlos wäre, kann Temp Mail passen. Wenn dadurch Geld, Dateien, Follower, Kontakte, Käufe, Arbeit, Abos oder Zugang zu einem anderen wichtigen Konto verloren gingen, gehört das Konto in eine normale E-Mail-Adresse, die Sie kontrollieren.",
      "Akzeptanz ist nicht zufällig. Community-Seiten und Newsletter-Tools prüfen oft nur, ob eine Adresse eine Bestätigung empfangen kann. Marktplätze, Stores, Gaming-Plattformen, Speicherdienste und Identitätsanbieter denken an Wiederherstellung, Zahlungen, Missbrauchsschutz, Support und langfristigen Besitz. Deshalb versprechen die einzelnen Seiten nie, dass jede Adresse überall funktioniert.",
    ],
    generic: {
      intro: (name, category) => `${name} gehört zur Kategorie ${category}. Eine temporäre Adresse ist dort nützlich, wenn das Konto experimentell, kurzlebig oder klar von Ihrer Hauptidentität getrennt sein soll. Sie bekommen ein Postfach, das den Bestätigungslink oder Einmalcode empfängt, ohne vorher ein weiteres dauerhaftes E-Mail-Konto anzulegen. Temp Mail ist kostenlos, sofort verfügbar, receive-only und verlangt keine Registrierung und kein Passwort. Sie können eine zufällige Adresse verwenden oder einen eigenen Namen mit einer verfügbaren Domain kombinieren.`,
      mindset: (name) => `Die richtige Erwartung ist wichtig. Temp Mail ist für Datenschutz, Tests und saubere Trennung bei niedrigen Risiken gedacht, nicht für Betrug, Belästigung, Sperrumgehung, Spam oder massenhafte Fake-Konten. Wenn Ihr ${name}-Konto Geld, Käufe, Kontakte, gespeicherte Arbeit, Creator-Funktionen, Abos oder etwas enthält, das Sie später wiederherstellen müssen, verwenden Sie eine dauerhafte E-Mail-Adresse.`,
      accept: (name) => `${name} kann eine temporäre Adresse akzeptieren, kann bekannte Wegwerf-Domains aber auch blockieren oder zusätzliche Prüfungen verlangen. Manche Plattformen verlangen Telefonverifizierung, Gerätevertrauen oder andere Signale, selbst wenn die E-Mail zunächst angenommen wurde. Kein Temp-Mail-Dienst kann Akzeptanz auf jeder Plattform garantieren.`,
      signup: (name) => `Öffnen Sie Temp Mail in einem zweiten Tab, kopieren Sie die erzeugte Adresse und fügen Sie sie bei ${name} in das E-Mail-Feld ein. Halten Sie das Postfach offen, während ${name} den Code oder Link sendet. Öffnen Sie die Nachricht sofort, kopieren Sie den Code oder nutzen Sie den Bestätigungslink und schließen Sie die Aufgabe ab, solange das Postfach verfügbar ist.`,
      reject: (name) => `Wenn ${name} die Adresse ablehnt, erzeugen Sie eine neue Adresse und wählen Sie bei Bedarf eine andere Domain. Prüfen Sie außerdem, ob die Adresse exakt kopiert wurde. Wenn ${name} Telefonverifizierung verlangt oder wiederholt blockiert, ersetzt Temp Mail diese Prüfung nicht. Nutzen Sie dann eine normale Mailbox, besonders wenn das Konto dauerhaft sein soll.`,
      avoid: (name) => `Verwenden Sie Temp Mail nicht für ein wichtiges ${name}-Konto. Alles mit Zahlungen, Käufen, Abos, Wiederherstellung, geschäftlicher Nutzung, Arbeit, Familienzugang, gespeicherten Dateien, wichtigen Kontakten oder langfristigem Wert braucht eine Mailbox, die Ihnen dauerhaft gehört.`,
      receive: (name) => `Weil das Postfach receive-only ist, können Sie Nachrichten lesen, aber nicht von dieser Adresse antworten. Für Bestätigungslinks, OTP-Codes, Willkommensnachrichten und einfache Account-Bestätigungen reicht das. Wenn ${name} spätere Supportgespräche, Sicherheitswarnungen oder Rechnungen per E-Mail sendet, ist eine temporäre Adresse die falsche Grundlage.`,
      storage: "Temporäre Postfächer werden regelmäßig geleert und sind dafür gebaut, verlassen zu werden. Das ist ein Vorteil für Wegwerf-Registrierungen, aber ein Risiko für Wiederherstellung. Verwenden Sie Ihre echte Mailbox für Bank, Arbeit, Behörden, Gesundheit, bezahlte Dienste, Business-Konten und alles, was mit Identität, Geld, rechtlichen Pflichten oder langfristigem Zugang verbunden ist.",
      related: "Wenn Sie Optionen vergleichen, beginnen Sie mit dem lokalisierten Hub und lesen Sie auch die Grundlagen zu Wegwerf-E-Mail und Sicherheit. Nahe Plattform-Ratgeber helfen, wenn Sie einschätzen möchten, wo ein Wegwerf-Postfach sinnvoll ist und wo ein Dienst wahrscheinlich strengere Prüfungen nutzt.",
      rule: (name) => `Die sicherste Regel für ${name}: Entscheiden Sie vor der Registrierung, ob das Konto temporär oder dauerhaft ist. Temporäre Konten können temporäre Infrastruktur nutzen. Dauerhafte Konten brauchen eine dauerhafte Mailbox, weil Passwort-Resets, Login-Warnungen, Richtlinienhinweise, Quittungen und Support-Antworten Wochen oder Monate später eintreffen können.`,
      substance: (name, category) => `Bei ${name} ist der Kontext ${category} entscheidend. Je näher ein Dienst an Identität, Zahlungen, Besitz, Dateien, beruflicher Kommunikation oder persönlichen Beziehungen liegt, desto schlechter passt eine Wegwerf-Adresse. Je eher es um einen kurzen Test, eine einmalige Bestätigung oder einen unverbindlichen Blick in eine Community geht, desto eher kann Temp Mail helfen. Nutzen Sie die Adresse nur für den kleinen, klar abgegrenzten Moment und wechseln Sie zu einer echten Mailbox, sobald das Konto Wert bekommt.`,
      caution: (name) => `Diese Einschätzung bleibt bewusst vorsichtig: ${name} kann heute eine Domain akzeptieren und morgen nach einer Filteränderung ablehnen. Eine andere Domain kann funktionieren, während die erste blockiert wird. Auch eine zunächst angenommene Registrierung kann später zusätzliche Prüfungen auslösen.`,
      relatedLinks: (links) => `Beginnen Sie mit ${links[0]}, lesen Sie ${links[1]} und ${links[2]}, oder vergleichen Sie ähnliche Ratgeber wie ${links[3]} und ${links[4]}.`,
      boundary: (name) => `Für ${name} gilt deshalb dieselbe Grenze wie für jede andere Plattform: Temp Mail ist stark, wenn der Vorgang kurz, reversibel und ohne langfristigen Wert ist. Sobald persönliche Kontakte, Zahlungen, gespeicherte Inhalte, Moderationsrechte, berufliche Identität oder wichtige Wiederherstellung betroffen sind, wird eine temporäre Adresse zur Schwachstelle.`,
    },
    steps: (name) => [`Öffnen Sie Temp Mail in einem zweiten Tab und kopieren Sie die erzeugte Adresse.`, `Nutzen Sie die zufällige Adresse oder wählen Sie einen eigenen Namen und eine andere Domain.`, `Fügen Sie die Adresse in das E-Mail-Feld von ${name} ein und senden Sie das Formular ab.`, `Lassen Sie das Postfach offen, während ${name} seine Nachricht sendet.`, `Öffnen Sie die Verifizierungs-E-Mail, kopieren Sie den Code oder nutzen Sie den Link und schließen Sie die Aufgabe ab.`],
    rejectList: ["Neue Adresse erzeugen und eine andere Domain versuchen.", "Adresse exakt aus Temp Mail kopieren statt abtippen.", "Kurz warten, wenn die Plattform eine Nachricht angekündigt hat.", "Telefonverifizierung erwarten, wenn der Dienst strengere Prüfungen verlangt.", "Dauerhafte E-Mail nutzen, wenn das Konto wichtig ist oder wiederholte Versuche Reibung erzeugen."],
    faqs: (name) => [[`Kann ich ${name} mit Temp Mail verifizieren?`, `Manchmal, aber nicht garantiert. ${name} kann Wegwerf-Domains blockieren oder zusätzliche Verifizierung verlangen.`], [`Ist Temp Mail für ${name} kostenlos?`, "Ja. Die Adresse ist kostenlos und kann eingehende Nachrichten in Echtzeit empfangen."], [`Kann ich damit Telefonverifizierung umgehen?`, "Nein. Wenn eine Plattform ein Telefon verlangt, ersetzt ein temporäres Postfach diese Prüfung nicht."], [`Kann ich E-Mails von dieser Adresse senden?`, "Nein. Temp Mail ist receive-only und für eingehende Codes, Links und Bestätigungen gedacht."], [`Wie lange sollte ich das Postfach offen lassen?`, `Bis der ${name}-Code oder Bestätigungslink verwendet wurde. Kopieren Sie alles Wichtige sofort, denn Postfächer werden regelmäßig geleert.`]],
  },
  fr: {
    titleFor: "Temp Mail pour", titleSuffix: "email jetable gratuit",
    descStart: "Utilisez Temp Mail pour", descEnd: "avec une boîte gratuite uniquement en réception. Conseils honnêtes sur la vérification, les domaines bloqués, la confidentialité et le moment où une vraie adresse email est préférable.",
    hubTitle: "Temp Mail pour les apps et sites populaires", hubDesc: "Guides Temp Mail pour les apps et sites populaires : où l’email jetable peut aider, où les domaines peuvent être bloqués et quand utiliser une boîte permanente.",
    lead: (name) => `Utilisez une adresse email jetable gratuite pour ${name} lorsque vous avez besoin d’une boîte rapide, uniquement en réception, pour un test peu risqué, la confidentialité ou le contrôle du spam.`,
    hubLead: "Des guides pratiques et honnêtes pour utiliser l’email jetable avec les apps, réseaux sociaux, jeux, services de streaming, boutiques et outils de productivité.",
    h: {
      choose: "Choisir une plateforme", read: "Comment lire ces guides", best: "Où Temp Mail convient le mieux", no: "Ce que ces pages n’encouragent pas", why: "Pourquoi l’acceptation varie selon les plateformes",
      use: (name) => `Pourquoi utiliser Temp Mail avec ${name}`,
      accept: (name) => `${name} accepte-t-il l’email temporaire ?`,
      how: (name) => `Comment utiliser une adresse temporaire avec ${name}`,
      reject: (name) => `Si ${name} refuse l’adresse`,
      avoid: (name) => `Quand éviter Temp Mail pour ${name}`,
      links: "Pages utiles liées", faq: "FAQ", substance: (name) => `Contexte pratique pour ${name}`,
    },
    platformLabel: (name) => `Temp Mail pour ${name}`,
    category: {
      "chat communities": "communautés de chat", "forums and communities": "forums et communautés", "short video apps": "apps de vidéo courte", "messaging": "messagerie", "social apps": "apps sociales", "social networks": "réseaux sociaux", "streaming communities": "communautés de streaming", "gaming stores": "boutiques de jeux", "gaming platforms": "plateformes de jeux", "console gaming": "jeux sur console", "music streaming": "streaming musical", "streaming services": "services de streaming", "shopping": "shopping", "marketplaces": "places de marché", "visual discovery": "découverte visuelle", "professional networks": "réseaux professionnels", "question and answer sites": "sites de questions-réponses", "publishing": "publication", "newsletter platforms": "plateformes de newsletter", "AI tools": "outils IA", "design tools": "outils de design", "cloud storage": "stockage cloud", "dating apps": "apps de rencontre", "email providers": "fournisseurs email", "email and identity providers": "fournisseurs email et identité",
    },
    cta: "→ Obtenir une adresse Temp Mail gratuite",
    home: "Temp Mail", hub: "hub Temp Mail par plateforme", disposable: "email jetable", generator: "générateur Temp Mail", safety: "guide de sécurité Temp Mail",
    hubBody: [
      "Chaque page explique quand une adresse email temporaire a du sens, si une plateforme peut refuser des domaines jetables connus, quoi faire lorsqu’une adresse est rejetée et quand une boîte permanente devient le meilleur choix. La réponse honnête varie selon le service : un forum ou une communauté légère peut être souple, tandis que les réseaux sociaux, boutiques, services cloud et fournisseurs d’identité demandent souvent plus de signaux de confiance.",
      "Utilisez Temp Mail pour la confidentialité, la réduction du spam, les tests à faible risque, l’accès ponctuel et les comptes que vous pouvez perdre sans conséquence réelle. Ne l’utilisez pas pour la banque, le travail, l’administration, la santé, les abonnements payants, les comptes avec achats ou tout accès à récupérer plus tard. Le service est gratuit, instantané, uniquement en réception, permet des noms personnalisés et plusieurs domaines, et les boîtes sont nettoyées périodiquement.",
      "Le meilleur cas est une tâche où l’email ne sert qu’une fois : confirmer une inscription à un forum, vérifier qu’une app envoie bien un code, rejoindre brièvement une communauté ou tester un parcours produit. Vous recevez un vrai message entrant sans transformer une petite tâche en relation email permanente.",
      "Temp Mail convient moins aux plateformes qui exigent davantage de confiance. Les apps sociales, apps de rencontre, boutiques de jeux, services cloud et comptes d’identité de type Microsoft peuvent refuser les domaines jetables ou demander une vérification par téléphone. Si une plateforme refuse, changez de domaine une fois seulement si le compte est vraiment jetable. Si le compte compte pour vous, utilisez une vraie boîte.",
      "Ces guides ne parlent pas de fraude, spam, harcèlement, contournement de bannissement, abus de paiement ou création massive de comptes. L’email jetable est un outil de confidentialité et d’hygiène de boîte mail. Si un service interdit l’email temporaire, respectez cette règle et utilisez un compte récupérable.",
      "Le test pratique est simple : si perdre le compte demain serait gênant mais sans gravité, Temp Mail peut convenir. Si cela coûte de l’argent, des fichiers, des abonnés, des contacts, des achats, du travail, des abonnements ou l’accès à un autre compte important, utilisez une adresse normale que vous contrôlez.",
      "L’acceptation n’est pas aléatoire. Les communautés et outils de newsletter vérifient souvent seulement qu’une adresse peut recevoir une confirmation. Les places de marché, boutiques, plateformes de jeux, services de stockage et fournisseurs d’identité pensent à la récupération, aux paiements, à la lutte contre l’abus, au support et à la propriété à long terme. C’est pourquoi les pages évitent toute promesse générale.",
    ],
    generic: {
      intro: (name, category) => `${name} appartient à la catégorie ${category}. Une adresse temporaire y est utile lorsque le compte est expérimental, court, ou clairement séparé de votre identité principale. Vous obtenez une boîte capable de recevoir un lien de confirmation ou un code à usage unique sans créer d’abord un autre compte email permanent. Temp Mail est gratuit, instantané, uniquement en réception, sans inscription ni mot de passe. Vous pouvez utiliser une adresse aléatoire ou choisir un nom avec l’un des domaines disponibles.`,
      mindset: (name) => `La bonne attente compte. Temp Mail sert à la confidentialité, aux tests et à la séparation propre pour les usages peu risqués, pas à la fraude, au harcèlement, au contournement de règles, au spam ou à la création massive de faux comptes. Si votre compte ${name} contient de l’argent, des achats, des contacts, du travail enregistré, des outils créateur, des abonnements ou quelque chose à récupérer plus tard, utilisez une adresse email permanente.`,
      accept: (name) => `${name} peut accepter une adresse temporaire, mais peut aussi bloquer des domaines jetables connus ou demander des contrôles supplémentaires. Certaines plateformes exigent une vérification par téléphone, une réputation d’appareil ou d’autres signaux même lorsque l’email est d’abord accepté. Aucun service de temp mail ne peut garantir l’acceptation partout.`,
      signup: (name) => `Ouvrez Temp Mail dans un deuxième onglet, copiez l’adresse générée et collez-la dans le champ email de ${name}. Gardez la boîte ouverte pendant que ${name} envoie le code ou le lien. Ouvrez le message tout de suite, copiez le code ou utilisez le lien de confirmation, puis terminez la tâche tant que la boîte reste disponible.`,
      reject: (name) => `Si ${name} refuse l’adresse, générez-en une nouvelle et choisissez un autre domaine si nécessaire. Vérifiez aussi que l’adresse a été copiée exactement. Si ${name} demande une vérification par téléphone ou bloque plusieurs tentatives, Temp Mail ne remplace pas ce contrôle. Utilisez alors une boîte normale, surtout si le compte doit durer.`,
      avoid: (name) => `N’utilisez pas Temp Mail pour un compte ${name} important. Tout ce qui touche aux paiements, achats, abonnements, récupération, usage professionnel, famille, fichiers enregistrés, contacts importants ou valeur durable demande une boîte email qui vous appartient sur le long terme.`,
      receive: (name) => `Comme la boîte est uniquement en réception, vous pouvez lire les messages mais pas répondre depuis cette adresse. C’est suffisant pour les liens de confirmation, codes OTP, messages de bienvenue et validations simples. Si ${name} doit envoyer plus tard du support, des alertes de sécurité ou des factures, une adresse temporaire est une mauvaise base.`,
      storage: "Les boîtes temporaires sont nettoyées périodiquement et faites pour être abandonnées. C’est un avantage pour les inscriptions jetables, mais un risque pour la récupération. Utilisez votre vraie boîte pour la banque, le travail, l’administration, la santé, les services payants, les comptes business et tout ce qui concerne l’identité, l’argent, les obligations légales ou l’accès à long terme.",
      related: "Si vous comparez les options, commencez par le hub localisé et lisez aussi les bases sur l’email jetable et la sécurité. Les guides de plateformes proches aident à voir où une boîte jetable a du sens et où un service applique probablement des contrôles plus stricts.",
      rule: (name) => `La règle la plus sûre pour ${name} : décidez avant l’inscription si le compte est temporaire ou permanent. Les comptes temporaires peuvent utiliser une infrastructure temporaire. Les comptes permanents ont besoin d’une boîte permanente, car les réinitialisations de mot de passe, alertes de connexion, avis de politique, reçus et réponses du support peuvent arriver des semaines ou des mois plus tard.`,
      substance: (name, category) => `Pour ${name}, le contexte ${category} est décisif. Plus un service touche à l’identité, aux paiements, à la propriété, aux fichiers, à la communication professionnelle ou aux relations personnelles, moins une adresse jetable convient. Plus il s’agit d’un test court, d’une confirmation unique ou d’un aperçu sans engagement d’une communauté, plus Temp Mail peut aider. Utilisez l’adresse seulement pour ce moment clair et limité, puis passez à une vraie boîte dès que le compte prend de la valeur.`,
      caution: (name) => `Cette évaluation reste volontairement prudente : ${name} peut accepter un domaine aujourd’hui et le refuser demain après un changement de filtre. Un autre domaine peut passer alors que le premier est bloqué. Même une inscription acceptée au départ peut déclencher ensuite des contrôles supplémentaires.`,
      relatedLinks: (links) => `Commencez par ${links[0]}, lisez ${links[1]} et ${links[2]}, ou comparez des guides proches comme ${links[3]} et ${links[4]}.`,
      boundary: (name) => `Pour ${name}, la limite est donc la même que pour toute autre plateforme : Temp Mail est utile quand l’action est courte, réversible et sans valeur durable. Dès que des contacts personnels, paiements, contenus enregistrés, droits de modération, identité professionnelle ou récupération importante sont en jeu, une adresse temporaire devient une faiblesse.`,
    },
    steps: (name) => [`Ouvrez Temp Mail dans un deuxième onglet et copiez l’adresse générée.`, `Gardez l’adresse aléatoire ou choisissez un nom personnalisé et un autre domaine.`, `Collez l’adresse dans le champ email de ${name} et envoyez le formulaire.`, `Gardez la boîte ouverte pendant que ${name} envoie son message.`, `Ouvrez l’email de vérification, copiez le code ou utilisez le lien, puis terminez la tâche.`],
    rejectList: ["Générez une nouvelle adresse et essayez un autre domaine.", "Copiez l’adresse exactement depuis Temp Mail au lieu de la retaper.", "Attendez un court instant si la plateforme indique qu’un message a été envoyé.", "Attendez-vous à une vérification par téléphone sur les plateformes plus strictes.", "Utilisez une adresse permanente si le compte est important ou si les tentatives répétées créent de la friction."],
    faqs: (name) => [[`Puis-je vérifier ${name} avec Temp Mail ?`, `Parfois, mais ce n’est jamais garanti. ${name} peut bloquer les domaines jetables ou demander une vérification supplémentaire.`], [`Temp Mail pour ${name} est-il gratuit ?`, "Oui. L’adresse est gratuite et peut recevoir les messages entrants en temps réel."], ["Puis-je contourner la vérification par téléphone ?", "Non. Si une plateforme demande un téléphone, une boîte temporaire ne remplace pas ce contrôle."], ["Puis-je envoyer des emails depuis cette adresse ?", "Non. Temp Mail est uniquement en réception et sert aux codes, liens et confirmations entrants."], ["Combien de temps garder la boîte ouverte ?", `Jusqu’à ce que le code ou lien de confirmation de ${name} soit utilisé. Copiez tout élément important tout de suite, car les boîtes sont nettoyées périodiquement.`]],
  },
  es: {
    titleFor: "Temp Mail para", titleSuffix: "correo desechable gratis",
    descStart: "Usa Temp Mail para", descEnd: "con una bandeja gratuita solo de recepción. Guía honesta sobre verificación, dominios bloqueados, privacidad y cuándo conviene usar un correo real.",
    hubTitle: "Temp Mail para apps y sitios populares", hubDesc: "Guías de Temp Mail para apps y sitios populares: dónde ayuda el correo desechable, dónde pueden bloquear dominios y cuándo usar una bandeja permanente.",
    lead: (name) => `Usa una dirección de correo desechable gratis para ${name} cuando necesites una bandeja rápida, solo de recepción, para pruebas de bajo riesgo, privacidad o control del spam.`,
    hubLead: "Guías prácticas y honestas para usar correo desechable con apps, redes sociales, juegos, streaming, tiendas y herramientas de productividad.",
    h: {
      choose: "Elige una plataforma", read: "Cómo leer estas guías", best: "Dónde encaja mejor Temp Mail", no: "Qué no fomentan estas páginas", why: "Por qué la aceptación cambia según la plataforma",
      use: (name) => `Por qué usar Temp Mail con ${name}`,
      accept: (name) => `¿${name} acepta correo temporal?`,
      how: (name) => `Cómo usar una dirección temporal con ${name}`,
      reject: (name) => `Si ${name} rechaza la dirección`,
      avoid: (name) => `Cuándo no usar Temp Mail para ${name}`,
      links: "Páginas relacionadas útiles", faq: "Preguntas frecuentes", substance: (name) => `Contexto práctico para ${name}`,
    },
    platformLabel: (name) => `Temp Mail para ${name}`,
    category: {
      "chat communities": "comunidades de chat", "forums and communities": "foros y comunidades", "short video apps": "apps de video corto", "messaging": "mensajería", "social apps": "apps sociales", "social networks": "redes sociales", "streaming communities": "comunidades de streaming", "gaming stores": "tiendas de juegos", "gaming platforms": "plataformas de juegos", "console gaming": "juegos de consola", "music streaming": "streaming de música", "streaming services": "servicios de streaming", "shopping": "compras", "marketplaces": "marketplaces", "visual discovery": "descubrimiento visual", "professional networks": "redes profesionales", "question and answer sites": "sitios de preguntas y respuestas", "publishing": "publicación", "newsletter platforms": "plataformas de newsletter", "AI tools": "herramientas de IA", "design tools": "herramientas de diseño", "cloud storage": "almacenamiento en la nube", "dating apps": "apps de citas", "email providers": "proveedores de correo", "email and identity providers": "proveedores de correo e identidad",
    },
    cta: "→ Obtener tu correo temporal gratis",
    home: "Temp Mail", hub: "hub de Temp Mail por plataforma", disposable: "correo desechable", generator: "generador Temp Mail", safety: "guía de seguridad de Temp Mail",
    hubBody: [
      "Cada página explica cuándo tiene sentido una dirección de correo temporal, si una plataforma puede rechazar dominios desechables conocidos, qué hacer cuando una dirección no funciona y cuándo una bandeja permanente es la mejor opción. La respuesta honesta cambia por servicio: un foro o una comunidad casual puede ser flexible, mientras que redes sociales, tiendas, almacenamiento en la nube y proveedores de identidad suelen pedir más señales de confianza.",
      "Usa Temp Mail para privacidad, menos spam, pruebas de bajo riesgo, acceso puntual y cuentas que puedes perder sin daño real. No lo uses para banca, trabajo, trámites públicos, salud, suscripciones pagadas, cuentas con compras ni cualquier acceso que necesites recuperar más tarde. El servicio es gratis, instantáneo, solo de recepción, permite nombres personalizados y varios dominios, y las bandejas se limpian periódicamente.",
      "El mejor caso es una tarea donde el correo solo se necesita una vez: confirmar un registro en un foro, comprobar si una app envía un código, entrar brevemente en una comunidad o probar un flujo de producto. Recibes un mensaje real sin convertir una tarea pequeña en una relación de correo permanente.",
      "Temp Mail encaja peor con plataformas que piden más confianza. Las apps sociales, apps de citas, tiendas de juegos, servicios cloud y cuentas de identidad tipo Microsoft pueden rechazar dominios desechables o pedir verificación telefónica. Si una plataforma rechaza el dominio, cambia una vez solo si la cuenta es realmente prescindible. Si la cuenta importa, usa un correo real.",
      "Estas guías no tratan de fraude, spam, acoso, evasión de bloqueos, abuso de pagos ni creación masiva de cuentas. El correo desechable es una herramienta de privacidad y orden en la bandeja. Si un servicio prohíbe el correo temporal, respeta esa regla y usa una cuenta recuperable.",
      "La prueba práctica es sencilla: si perder la cuenta mañana sería molesto pero inofensivo, Temp Mail puede servir. Si perderla implica dinero, archivos, seguidores, contactos, compras, trabajo, suscripciones o acceso a otra cuenta importante, usa una dirección normal que controles.",
      "La aceptación no es aleatoria. Las comunidades y herramientas de newsletter suelen comprobar solo si una dirección recibe confirmaciones. Los marketplaces, tiendas, plataformas de juegos, servicios de almacenamiento y proveedores de identidad piensan en recuperación, pagos, prevención de abuso, soporte y propiedad a largo plazo. Por eso estas páginas no prometen aceptación universal.",
    ],
    generic: {
      intro: (name, category) => `${name} pertenece a la categoría ${category}. Una dirección temporal es útil cuando la cuenta es experimental, de corta duración o claramente separada de tu identidad principal. Obtienes una bandeja capaz de recibir el enlace de confirmación o código de un solo uso sin crear antes otra cuenta de correo permanente. Temp Mail es gratis, instantáneo, solo de recepción y no pide registro ni contraseña. Puedes usar una dirección aleatoria o elegir un nombre con uno de los dominios disponibles.`,
      mindset: (name) => `La expectativa correcta importa. Temp Mail sirve para privacidad, pruebas y separación limpia en usos de bajo riesgo, no para fraude, acoso, evasión de reglas, spam o creación masiva de cuentas falsas. Si tu cuenta de ${name} tendrá dinero, compras, contactos, trabajo guardado, herramientas de creador, suscripciones o algo que debas recuperar más tarde, usa un correo permanente.`,
      accept: (name) => `${name} puede aceptar una dirección temporal, pero también puede bloquear dominios desechables conocidos o pedir comprobaciones adicionales. Algunas plataformas exigen teléfono, reputación del dispositivo u otras señales incluso si el correo se acepta al principio. Ningún servicio de temp mail puede garantizar aceptación en todas partes.`,
      signup: (name) => `Abre Temp Mail en otra pestaña, copia la dirección generada y pégala en el campo de correo de ${name}. Mantén la bandeja abierta mientras ${name} envía el código o enlace. Abre el mensaje enseguida, copia el código o usa el enlace de confirmación y termina la tarea mientras la bandeja está disponible.`,
      reject: (name) => `Si ${name} rechaza la dirección, genera una nueva y elige otro dominio si hace falta. Comprueba también que la dirección se copió exactamente. Si ${name} pide verificación telefónica o bloquea varios intentos, Temp Mail no sustituye ese control. Usa una bandeja normal, sobre todo si la cuenta debe durar.`,
      avoid: (name) => `No uses Temp Mail para una cuenta importante de ${name}. Todo lo relacionado con pagos, compras, suscripciones, recuperación, uso profesional, familia, archivos guardados, contactos importantes o valor a largo plazo necesita una bandeja que te pertenezca de forma duradera.`,
      receive: (name) => `Como la bandeja es solo de recepción, puedes leer mensajes pero no responder desde esa dirección. Es suficiente para enlaces de confirmación, códigos OTP, mensajes de bienvenida y verificaciones simples. Si ${name} enviará soporte, alertas de seguridad o facturas más adelante, una dirección temporal es una base débil.`,
      storage: "Las bandejas temporales se limpian periódicamente y están hechas para abandonarse. Eso ayuda en registros desechables, pero es un riesgo para recuperación. Usa tu correo real para banca, trabajo, administración, salud, servicios pagados, cuentas de empresa y todo lo relacionado con identidad, dinero, obligaciones legales o acceso a largo plazo.",
      related: "Si estás comparando opciones, empieza por el hub localizado y lee también los fundamentos del correo desechable y la seguridad. Las guías de plataformas cercanas ayudan a decidir dónde tiene sentido una bandeja desechable y dónde un servicio probablemente aplica controles más estrictos.",
      rule: (name) => `La regla más segura para ${name}: decide antes del registro si la cuenta será temporal o permanente. Las cuentas temporales pueden usar infraestructura temporal. Las cuentas permanentes necesitan una bandeja permanente, porque restablecimientos de contraseña, alertas de inicio de sesión, avisos de políticas, recibos y respuestas de soporte pueden llegar semanas o meses después.`,
      substance: (name, category) => `En ${name}, el contexto ${category} es clave. Cuanto más cerca esté un servicio de identidad, pagos, propiedad, archivos, comunicación profesional o relaciones personales, peor encaja una dirección desechable. Cuanto más se trate de una prueba corta, una confirmación única o una visita sin compromiso a una comunidad, más puede ayudar Temp Mail. Usa la dirección solo para ese momento limitado y cambia a una bandeja real cuando la cuenta gane valor.`,
      caution: (name) => `Esta evaluación es deliberadamente prudente: ${name} puede aceptar un dominio hoy y rechazarlo mañana tras cambiar sus filtros. Otro dominio puede funcionar cuando el primero está bloqueado. Incluso un registro aceptado al principio puede activar comprobaciones adicionales después.`,
      relatedLinks: (links) => `Empieza por ${links[0]}, lee ${links[1]} y ${links[2]}, o compara guías cercanas como ${links[3]} y ${links[4]}.`,
      boundary: (name) => `Para ${name}, el límite es el mismo que en cualquier otra plataforma: Temp Mail es útil cuando la acción es corta, reversible y sin valor duradero. En cuanto aparecen contactos personales, pagos, contenido guardado, permisos de moderación, identidad profesional o recuperación importante, una dirección temporal se convierte en una debilidad.`,
    },
    steps: (name) => [`Abre Temp Mail en otra pestaña y copia la dirección generada.`, `Usa la dirección aleatoria o elige un nombre personalizado y otro dominio.`, `Pega la dirección en el campo de correo de ${name} y envía el formulario.`, `Mantén la bandeja abierta mientras ${name} envía su mensaje.`, `Abre el correo de verificación, copia el código o usa el enlace y termina la tarea.`],
    rejectList: ["Genera una dirección nueva y prueba otro dominio.", "Copia la dirección exactamente desde Temp Mail en vez de escribirla a mano.", "Espera un momento si la plataforma dice que envió un mensaje.", "Espera verificación telefónica en plataformas más estrictas.", "Usa un correo permanente si la cuenta es importante o si repetir intentos genera fricción."],
    faqs: (name) => [[`¿Puedo verificar ${name} con Temp Mail?`, `A veces, pero no está garantizado. ${name} puede bloquear dominios desechables o pedir verificación adicional.`], [`¿Temp Mail para ${name} es gratis?`, "Sí. La dirección es gratis y puede recibir mensajes entrantes en tiempo real."], ["¿Puedo saltarme la verificación telefónica?", "No. Si una plataforma pide teléfono, una bandeja temporal no reemplaza ese control."], ["¿Puedo enviar correos desde esta dirección?", "No. Temp Mail es solo de recepción y sirve para códigos, enlaces y confirmaciones entrantes."], ["¿Cuánto tiempo debo mantener abierta la bandeja?", `Hasta usar el código o enlace de confirmación de ${name}. Copia lo importante de inmediato, porque las bandejas se limpian periódicamente.`]],
  },
};

function platformEsc(text) {
  return String(text).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

function platformP(text) {
  return `<p>${platformEsc(text)}</p>`;
}

function platformRawP(html) {
  return `<p>${html}</p>`;
}

function platformLink(locale, rest, label) {
  return `<a href='${localizedPath(locale, rest)}'>${platformEsc(label)}</a>`;
}

function platformCta(locale, t) {
  return `<a class='cta' href='${localizedPath(locale, "/")}'>${platformEsc(t.cta)}</a>`;
}

function platformPeers(currentSlug, offset) {
  const peers = platformData.filter((item) => item.slug !== currentSlug);
  return [peers[offset % peers.length], peers[(offset + 9) % peers.length], peers[(offset + 18) % peers.length]];
}

function localizedPlatformHub(locale, t) {
  const items = platformData.map((item) => `<li><a href='${localizedPath(locale, `/temp-mail-for-${item.slug}`)}'>${platformEsc(t.platformLabel(item.name))}</a> <span>${platformEsc(t.category[item.category] || item.category)}</span></li>`).join("\n");
  const body = [
    `<h1>${platformEsc(t.hubTitle)}</h1>`,
    `<p class='lead'>${platformEsc(t.hubLead)}</p>`,
    platformCta(locale, t),
    "<div class='ad-slot'></div>",
    `<h2>${platformEsc(t.h.choose)}</h2>`,
    `<ul>${items}</ul>`,
    `<h2>${platformEsc(t.h.read)}</h2>`,
    ...t.hubBody.slice(0, 2).map(platformP),
    `<h2>${platformEsc(t.h.best)}</h2>`,
    ...t.hubBody.slice(2, 4).map(platformP),
    `<h2>${platformEsc(t.h.no)}</h2>`,
    ...t.hubBody.slice(4, 6).map(platformP),
    `<h2>${platformEsc(t.h.why)}</h2>`,
    ...t.hubBody.slice(6).map(platformP),
    platformRawP(`${platformEsc(t.home)}: ${platformLink(locale, "/", t.home)}. ${platformEsc(t.disposable)}: ${platformLink(locale, "/disposable-email", t.disposable)}. ${platformEsc(t.safety)}: ${platformLink(locale, "/blog/is-temp-mail-safe", t.safety)}.`),
    platformP(t.hubBody[0]),
    platformP(t.hubBody[1]),
    platformP(t.hubBody[2]),
    platformP(t.hubBody[3]),
    platformCta(locale, t),
  ].join("\n");
  return { title: t.hubTitle, desc: t.hubDesc, body };
}

function localizedPlatformPage(locale, item, index, t) {
  const name = item.name;
  const category = t.category[item.category] || item.category;
  const peers = platformPeers(item.slug, index);
  const related = [
    platformLink(locale, "/temp-mail-for", t.hub),
    platformLink(locale, "/disposable-email", t.disposable),
    platformLink(locale, "/blog/is-temp-mail-safe", t.safety),
    platformLink(locale, `/temp-mail-for-${peers[0].slug}`, t.platformLabel(peers[0].name)),
    platformLink(locale, `/temp-mail-for-${peers[1].slug}`, t.platformLabel(peers[1].name)),
  ];
  const body = [
    `<h1>${platformEsc(t.platformLabel(name))}</h1>`,
    `<p class='lead'>${platformEsc(t.lead(name))}</p>`,
    platformCta(locale, t),
    "<div class='ad-slot'></div>",
    `<h2>${platformEsc(t.h.use(name))}</h2>`,
    platformP(t.generic.intro(name, category)),
    platformP(t.generic.mindset(name)),
    platformP(t.generic.substance(name, category)),
    `<h2>${platformEsc(t.h.accept(name))}</h2>`,
    platformP(t.generic.accept(name)),
    platformP(t.generic.caution(name)),
    `<h2>${platformEsc(t.h.how(name))}</h2>`,
    platformP(t.generic.signup(name)),
    `<ul>${t.steps(name).map((step) => `<li>${platformEsc(step)}</li>`).join("")}</ul>`,
    platformP(t.generic.receive(name)),
    `<h2>${platformEsc(t.h.reject(name))}</h2>`,
    platformP(t.generic.reject(name)),
    `<ul>${t.rejectList.map((step) => `<li>${platformEsc(step)}</li>`).join("")}</ul>`,
    `<h2>${platformEsc(t.h.avoid(name))}</h2>`,
    platformP(t.generic.avoid(name)),
    platformP(t.generic.storage),
    `<h2>${platformEsc(t.h.links)}</h2>`,
    platformRawP(`${platformEsc(t.generic.related)} ${t.generic.relatedLinks(related)}`),
    platformP(t.generic.rule(name)),
    `<h2>${platformEsc(t.h.substance(name))}</h2>`,
    platformP(t.generic.substance(name, category)),
    platformP(t.generic.boundary(name)),
    `<h2>${platformEsc(t.h.faq)}</h2>`,
    ...t.faqs(name).flatMap(([question, answer]) => [`<h3>${platformEsc(question)}</h3>`, platformP(answer)]),
    platformCta(locale, t),
  ].join("\n");
  return {
    title: `${t.titleFor} ${name} — ${t.titleSuffix}`,
    desc: `${t.descStart} ${name} ${t.descEnd}`,
    body,
  };
}

function localizedPlatformPagesFor(locale) {
  const t = PLATFORM_LANG[locale];
  if (!t) return {};
  const pages = { [localizedPath(locale, "/temp-mail-for")]: localizedPlatformHub(locale, t) };
  platformData.forEach((item, index) => {
    pages[localizedPath(locale, `/temp-mail-for-${item.slug}`)] = localizedPlatformPage(locale, item, index, t);
  });
  return pages;
}

function legal(locale, slug) {
  const l = LANG[locale];
  const map = {
    "/about": [l.about, `Temp Mail ist ein ${l.free}er Service für ${l.temp} und ${l.disposable}. Wir helfen dabei, Ihre echte Adresse vor Spam, Tracking und unnötigen Datenbanken zu schützen. Nachrichten kommen ${l.real} an, Postfächer werden regelmäßig geleert, und die Nutzung verlangt kein Konto.`],
    "/privacy": [l.privacy, `Diese Datenschutzerklärung erklärt, wie Temp Mail mit temporären Adressen und eingehenden Nachrichten umgeht. Der Dienst ist so gestaltet, dass keine Registrierung nötig ist. Temporäre Postfächer werden nur kurz genutzt und regelmäßig bereinigt. Verwenden Sie sie nicht für sensible Kommunikation.`],
    "/terms": [l.terms, `Mit der Nutzung von Temp Mail stimmen Sie einer rechtmäßigen und verantwortungsvollen Nutzung zu. Der Dienst darf nicht für Betrug, Spam, Belästigung oder illegale Aktivitäten verwendet werden. Temporäre Postfächer sind für niedrige Risiken gedacht und werden ohne Garantie bereitgestellt.`],
    "/contact": [l.contact, `Fragen, Feedback, Partnerschaften oder Missbrauchsmeldungen können an hello@example.com gesendet werden. Ersetzen Sie diese Adresse vor dem Start durch Ihre echte Kontaktadresse. Für Datenschutzfragen lesen Sie bitte die Datenschutzerklärung.`],
    "/disclaimer": [l.disclaimer, `Temp Mail stellt temporäre E-Mail-Adressen zur Bequemlichkeit und zum Schutz vor Spam bereit. Die Postfächer sind nicht für vertrauliche, finanzielle oder langfristige Kommunikation geeignet. Nutzen Sie den Dienst nur für rechtmäßige, risikoarme Aufgaben.`],
  };
  const [title, text] = map[slug];
  return {
    title: `${title} — Temp Mail`,
    desc: `${title} für Temp Mail. ${l.seo}`,
    body: `<h1>${title}</h1>
<p class='lead'>${text}</p>
<p>Temp Mail ist für kurze Aufgaben gemacht: Registrierungen, Downloads, Testkonten und Verifizierungscodes. Für Bank, Arbeit, Behörden, Medizin oder wichtige Konten sollten Sie immer eine dauerhafte Adresse verwenden.</p>
<p>Weitere Informationen finden Sie im ${link(locale, "/blog", "Blog")} oder auf der ${link(locale, "/", l.home)}.</p>`
  };
}

export function localizedLandingPages() {
  const out = {};
  for (const locale of Object.keys(LANG)) {
    Object.assign(out, localizedLandingPagesFor(locale));
    Object.assign(out, localizedPlatformPagesFor(locale));
    for (const slug of ["/about", "/privacy", "/terms", "/contact", "/disclaimer"]) {
      out[localizedPath(locale, slug)] = legal(locale, slug);
    }
  }
  return out;
}

const BLOG = {
  "best-temp-mail": ["Best Temp Mail Services", "beste temporäre E-Mail-Dienste"],
  "is-temp-mail-safe": ["Is Temp Mail Safe?", "ist Temp Mail sicher"],
  "how-to-create-a-temporary-email": ["How to Create a Temporary Email", "temporäre E-Mail erstellen"],
  "what-is-a-disposable-email-address": ["What Is a Disposable Email Address?", "was ist eine Wegwerf-E-Mail"],
  "temp-mail-for-otp-verification-codes": ["Receiving OTP & Verification Codes with Temp Mail", "OTP- und Verifizierungscodes mit Temp Mail empfangen"],
};

function blogBody(locale, slug) {
  if (locale !== "de") return blogBodyIntl(locale, slug);
  const l = LANG[locale];
  const topic = BLOG[slug][1];
  const specific = {
    "best-temp-mail": `<h2>Woran man den besten Dienst erkennt</h2><p>Der beste Temp-Mail-Dienst ist nicht der mit der lautesten Oberfläche, sondern derjenige, der einen Code zuverlässig und schnell liefert. Wichtig sind Echtzeit-Zustellung, mehrere Domains, eine gut lesbare HTML-Ansicht und keine Pflicht zur Registrierung. Wenn ein Dienst zuerst ein Konto verlangt, bevor er eine Wegwerf-Adresse zeigt, verfehlt er den Zweck.</p><p>Achten Sie außerdem auf klare Grenzen. Ein seriöser Anbieter erklärt, dass Nachrichten temporär sind, dass die Adresse receive-only ist und dass wichtige Konten in eine dauerhafte Mailbox gehören.</p>`,
    "is-temp-mail-safe": `<h2>Wann Temp Mail sicher ist</h2><p>Temp Mail ist sicher, wenn die Aufgabe kurz, harmlos und leicht ersetzbar ist. Ein Download, ein Forum, ein Coupon oder ein Testkonto passen gut. Unsicher wird es, wenn die Adresse später für Passwort-Reset, Zahlungsbelege oder Identitätsnachweise gebraucht wird.</p><p>Der Sicherheitsgewinn entsteht durch Abstand: Ihre echte Mailadresse bleibt privat. Das Risiko entsteht durch Vergänglichkeit: Was gelöscht ist, kann nicht wiederhergestellt werden.</p>`,
    "how-to-create-a-temporary-email": `<h2>Temporäre E-Mail Schritt für Schritt erstellen</h2><p>Öffnen Sie die Startseite, übernehmen Sie die vorgeschlagene Adresse oder wählen Sie einen eigenen Namen, kopieren Sie die Adresse und fügen Sie sie in das Formular ein. Danach warten Sie im Live-Postfach auf den Bestätigungslink oder OTP-Code.</p><p>Tippen Sie Adressen nicht von Hand ab. Ein kleiner Fehler reicht, damit der Code in einem anderen Postfach landet oder gar nicht ankommt.</p>`,
    "what-is-a-disposable-email-address": `<h2>Definition einer Wegwerf-E-Mail-Adresse</h2><p>Eine Wegwerf-E-Mail-Adresse ist ein echtes, aber kurzlebiges Postfach. Sie funktioniert wie eine normale Adresse für eingehende Nachrichten, ist aber nicht dafür gedacht, eine dauerhafte Identität zu tragen.</p><p>Der Unterschied zu einem Alias ist wichtig: Ein Alias leitet in Ihre echte Mailbox weiter. Eine Wegwerf-Adresse bleibt getrennt und endet, sobald Sie sie nicht mehr nutzen.</p>`,
    "temp-mail-for-otp-verification-codes": `<h2>OTP-Codes zuverlässig empfangen</h2><p>OTP-Codes passen besonders gut zu Temp Mail, weil sie nur wenige Minuten gültig sind und nur eine Aufgabe erfüllen. Öffnen Sie das Postfach vor dem Absenden des Formulars, fordern Sie den Code an und kopieren Sie ihn sofort.</p><p>Wenn ein Code nicht erscheint, prüfen Sie die Adresse, warten Sie kurz und fordern Sie ihn erneut an. Wird die Domain blockiert, erzeugen Sie eine neue Adresse auf einer anderen Domain.</p>`,
  }[slug];
  return `<p>${topic} ist eine praktische Frage, weil fast jede Website heute eine Adresse verlangt. Eine ${l.temp} gibt Ihnen ein funktionierendes Postfach ${l.signup}, empfängt Nachrichten ${l.real} und trennt niedrige Risiken von Ihrer echten Identität. Dieser Ratgeber erklärt, wann Temp Mail nützlich ist, welche Grenzen wichtig sind und wie Sie Codes zuverlässig empfangen, ohne Ihr dauerhaftes Postfach mit Werbung und Nachverfolgung zu füllen.</p>
${specific}
<h2>Wofür Temp Mail gedacht ist</h2>
<p>Temp Mail ist für kurze Aufgaben gebaut. Sie brauchen eine Adresse, erhalten eine Nachricht, lesen den Link oder ${l.code} und sind fertig. Typische Fälle sind Downloads, Testkonten, Newsletter-Proben, Foren, WLAN-Portale und Produktprüfungen. Für diese Situationen ist eine dauerhafte Mailbox überdimensioniert, weil der Kontakt meist nach wenigen Minuten endet.</p>
<p>Die Adresse ist receive-only. Sie können eingehende Nachrichten lesen, aber keine Antworten senden. Diese Einschränkung hält den Dienst schlank und reduziert Missbrauch. Für normale Verifizierungen reicht das völlig aus, denn der Ablauf verlangt nur, dass Sie eine Nachricht empfangen und den Code kopieren.</p>
<h2>Vorteile für Datenschutz und Ordnung</h2>
<p>Der größte Vorteil ist Trennung. Ihre echte Adresse bleibt für Menschen, Arbeit, Finanzen und wichtige Konten reserviert. Die temporäre Adresse fängt Werbung, einmalige Bestätigungen und mögliche Lecks ab. Wenn eine kleine Website später gehackt wird, ist nicht die Adresse betroffen, die mit Ihren wichtigsten Konten verbunden ist.</p>
<ul>
<li>Sie reduzieren Spam, bevor er Ihr echtes Postfach erreicht.</li>
<li>Sie können für jede Aufgabe eine frische Adresse verwenden.</li>
<li>Sie geben keinen Namen, keine Telefonnummer und kein Passwort preis.</li>
<li>OTP-Codes und Bestätigungslinks erscheinen meistens innerhalb weniger Sekunden.</li>
</ul>
<h2>Grenzen, die Sie ernst nehmen sollten</h2>
<p>Eine temporäre Mailbox ist nicht für alles geeignet. Sie ist kein sicherer Tresor, kein Archiv und kein Ersatz für ein Konto, das Sie dauerhaft besitzen. Nachrichten werden regelmäßig gelöscht. Wenn Sie später einen Passwort-Reset benötigen, kann die Adresse weg sein. Nutzen Sie Temp Mail deshalb nicht für Bank, Arbeit, Behörden, Medizin, Steuern, Cloud-Speicher oder wichtige soziale Konten.</p>
<p>Behandeln Sie eingehende Nachrichten außerdem wie kurzfristige Informationen. Kopieren Sie Codes sofort, klicken Sie keine verdächtigen Links und speichern Sie keine sensiblen Inhalte. Die beste Nutzung ist klar begrenzt: niedrige Risiken, kurzer Zeitraum, keine langfristige Abhängigkeit.</p>
<h2>So verwenden Sie es zuverlässig</h2>
<ol>
<li>Öffnen Sie ${link(locale, "/", "Temp Mail")} und lassen Sie eine Adresse erzeugen.</li>
<li>Wählen Sie bei Bedarf einen eigenen Namen oder eine andere Domain.</li>
<li>Kopieren Sie die Adresse und fügen Sie sie beim gewünschten Dienst ein.</li>
<li>Fordern Sie den Code oder Bestätigungslink an.</li>
<li>Lesen Sie die Nachricht im Live-Postfach und schließen Sie den Vorgang ab.</li>
</ol>
<p>Wenn ein Dienst die Domain ablehnt, erzeugen Sie eine neue Adresse oder wählen Sie eine andere Domain. Wenn ein Code nicht ankommt, prüfen Sie die Schreibweise, warten Sie kurz und fordern Sie ihn erneut an. Die meisten Probleme entstehen durch Tippfehler, blockierte Domains oder abgelaufene Codes.</p>
<h2>Wann eine echte Mailbox besser ist</h2>
<p>Eine einfache Regel hilft: Wenn der Verlust des Kontos später ein Problem wäre, verwenden Sie Ihre echte Mailbox. Dazu gehören Käufe mit Quittungen, Konten mit Zahlungsdaten, Arbeitgeber-Portale, medizinische Informationen und alles, was Ihre Identität betrifft. Temp Mail ist für die Wegwerf-Momente des Internets gemacht, nicht für Ihr digitales Fundament.</p>
<h2>Fazit</h2>
<p>Richtig eingesetzt spart Temp Mail Zeit, reduziert Spam und hält Ihre echte Adresse aus unnötigen Datenbanken heraus. Die Stärke liegt nicht darin, jede E-Mail zu ersetzen, sondern die kleinen, einmaligen Verifizierungen sauber auszulagern. Für weitere Grundlagen lesen Sie ${link(locale, "/disposable-email", l.disposable)}, ${link(locale, "/temp-mail-generator", "Temp Mail Generator")} und ${link(locale, "/blog/is-temp-mail-safe", "Sicherheit von Temp Mail")}.</p>
${depthBlock(locale, "blog")}
${extraDepth(locale)}
${extraDepth(locale)}`;
}

function blogBodyIntl(locale, slug) {
  const l = LANG[locale];
  const topic = BLOG[slug][0];
  const t = {
    fr: {
      intro: "Un email temporaire est utile parce que presque chaque service demande une adresse avant de laisser continuer. Il protège votre vraie boîte, reçoit les codes rapidement et évite d’ajouter votre identité à une base de données de plus.",
      for: "À quoi sert Temp Mail", privacy: "Bénéfices pour la confidentialité", risk: "Risques et limites", how: "Bien l’utiliser", trouble: "Dépannage", right: "Quand c’est le bon choix", habits: "Bonnes habitudes", end: "Conclusion",
      p1: "Temp Mail sert aux tâches courtes et peu risquées. Vous avez besoin d’une adresse, vous recevez un message, vous copiez un lien ou un code OTP, puis vous passez à autre chose.",
      p2: "La boîte est uniquement destinée à recevoir. Elle est idéale pour les confirmations, mais elle ne remplace pas une adresse permanente qui archive, envoie et récupère des comptes.",
      p3: "La valeur principale est la séparation. Votre vraie boîte reste liée aux personnes, au travail, à l’argent et aux comptes importants, tandis que l’adresse jetable absorbe le bruit du web.",
      p4: "Une boîte temporaire n’est pas une archive privée. Les messages sont supprimés périodiquement et tout contenu important peut disparaître.",
      p5: "Copiez-collez les adresses, gardez la boîte ouverte, utilisez une adresse différente par site et lisez chaque message avec prudence.",
    },
    es: {
      intro: "Un correo temporal es útil porque casi cualquier servicio pide una dirección antes de dejarte continuar. Protege tu bandeja real, recibe códigos rápido y evita sumar tu identidad a otra base de datos.",
      for: "Para qué sirve Temp Mail", privacy: "Beneficios de privacidad", risk: "Riesgos y límites", how: "Cómo usarlo bien", trouble: "Solución de problemas", right: "Cuándo es la opción correcta", habits: "Hábitos prácticos", end: "Conclusión",
      p1: "Temp Mail sirve para tareas cortas y de bajo riesgo. Necesitas una dirección, recibes un mensaje, copias un enlace o código OTP y continúas.",
      p2: "La bandeja es solo de recepción. Es excelente para confirmaciones, pero no reemplaza una cuenta permanente que envía, archiva y recupera accesos.",
      p3: "El valor principal es la separación. Tu correo real queda para personas, trabajo, dinero y cuentas importantes, mientras el correo desechable absorbe el ruido de la web.",
      p4: "Una bandeja temporal no es un archivo privado. Los mensajes se borran periódicamente y cualquier contenido importante puede desaparecer.",
      p5: "Copia y pega direcciones, mantén abierta la bandeja, usa una dirección distinta por sitio y lee cada mensaje con cuidado.",
    },
    nl: {
      intro: "Tijdelijke e-mail is nuttig omdat bijna elke dienst een adres vraagt voordat je verder mag. Het beschermt je echte inbox, ontvangt codes snel en voorkomt dat je identiteit in nog een database belandt.",
      for: "Waar Temp Mail voor bedoeld is", privacy: "Voordelen voor privacy", risk: "Risico’s en grenzen", how: "Zo gebruik je het goed", trouble: "Problemen oplossen", right: "Wanneer het de juiste keuze is", habits: "Praktische gewoonten", end: "Conclusie",
      p1: "Temp Mail is bedoeld voor korte taken met laag risico. Je hebt een adres nodig, ontvangt één bericht, kopieert een link of OTP-code en gaat verder.",
      p2: "De inbox is alleen voor ontvangst. Dat is ideaal voor bevestigingen, maar geen vervanging voor een permanent account dat verzendt, archiveert en herstel mogelijk maakt.",
      p3: "De belangrijkste waarde is scheiding. Je echte inbox blijft gekoppeld aan mensen, werk, geld en belangrijke accounts, terwijl het wegwerpadres de ruis van het web opvangt.",
      p4: "Een tijdelijke inbox is geen privéarchief. Berichten worden periodiek verwijderd en belangrijke inhoud kan verdwijnen.",
      p5: "Kopieer en plak adressen, houd de inbox open, gebruik per site een ander adres en lees elk bericht met normale voorzichtigheid.",
    },
    it: {
      intro: "Un’email temporanea è utile perché quasi ogni servizio chiede un indirizzo prima di farti continuare. Protegge la tua casella reale, riceve codici rapidamente ed evita di aggiungere la tua identità a un altro database.",
      for: "A cosa serve Temp Mail", privacy: "Vantaggi per la privacy", risk: "Rischi e limiti", how: "Come usarla bene", trouble: "Risoluzione dei problemi", right: "Quando è la scelta giusta", habits: "Abitudini pratiche", end: "Conclusione",
      p1: "Temp Mail serve per attività brevi e a basso rischio. Ti serve un indirizzo, ricevi un messaggio, copi un link o un codice OTP e vai avanti.",
      p2: "La casella è solo in ricezione. È ottima per conferme e codici, ma non sostituisce un account permanente che invia, archivia e recupera accessi.",
      p3: "Il valore principale è la separazione. La tua email reale resta per persone, lavoro, denaro e account importanti, mentre l’indirizzo usa e getta assorbe il rumore del web.",
      p4: "Una casella temporanea non è un archivio privato. I messaggi vengono eliminati periodicamente e i contenuti importanti possono sparire.",
      p5: "Copia e incolla gli indirizzi, tieni aperta la casella, usa un indirizzo diverso per ogni sito e leggi ogni messaggio con prudenza.",
    },
  }[locale];
  const specific = {
    "best-temp-mail": `<h2>${t.for}</h2><p>${t.p1} ${t.p2}</p><p>${t.p3}</p>`,
    "is-temp-mail-safe": `<h2>${t.risk}</h2><p>${t.p4}</p><p>${t.p5}</p>`,
    "how-to-create-a-temporary-email": `<h2>${t.how}</h2><p>${t.p1}</p><p>${t.p5}</p>`,
    "what-is-a-disposable-email-address": `<h2>${t.for}</h2><p>${t.p3}</p><p>${t.p2}</p>`,
    "temp-mail-for-otp-verification-codes": `<h2>${t.trouble}</h2><p>${t.p1}</p><p>${t.p5}</p>`,
  }[slug];
  return `<p>${t.intro} Cet article explique ${topic} avec des règles pratiques, des limites claires et des exemples adaptés à l’usage quotidien.</p>
${specific}
<h2>${t.privacy}</h2>
<p>${t.p3}</p>
<ul><li>Le marketing reste loin de la boîte principale.</li><li>Une fuite expose une adresse jetable, pas l’adresse permanente.</li><li>Vous pouvez créer une adresse fraîche pour chaque tâche.</li><li>Aucune inscription signifie moins de données personnelles à partager.</li></ul>
<h2>${t.how}</h2>
<ol><li>Ouvrez ${link(locale, "/", "Temp Mail")} et copiez l’adresse générée.</li><li>Collez-la dans le site qui demande un email.</li><li>Demandez le message de vérification ou le code OTP.</li><li>Lisez le message dans la boîte en direct.</li><li>Terminez la tâche et créez une nouvelle adresse pour la suivante.</li></ol>
<h2>${t.trouble}</h2>
<p>Si le code n’arrive pas, attendez quelques secondes, vérifiez l’adresse et relancez l’envoi. Si un domaine est refusé, générez une nouvelle adresse ou choisissez un autre domaine.</p>
<h2>${t.right}</h2>
<p>Utilisez Temp Mail pour lire un article derrière un formulaire, tester une inscription, rejoindre un forum une fois, télécharger un fichier ou récupérer un coupon. Dans ces cas, la valeur de l’adresse se termine presque dès que le message est lu.</p>
<p>Utilisez une boîte permanente pour les reçus, les alertes légales, le travail, la santé et les comptes financiers. Le but n’est pas de remplacer votre vraie boîte, mais d’arrêter de l’utiliser pour des tâches qui ne la méritent pas.</p>
<h2>${t.habits}</h2>
<p>${t.p5} Si une tâche demande soudain des informations sensibles, quittez le flux ou passez à une adresse permanente.</p>
<h2>${t.end}</h2>
<p>Temp Mail fonctionne mieux comme adresse rapide, gratuite et temporaire. Il réduit le spam et protège votre boîte réelle sans prétendre remplacer un compte email durable. Pour continuer, lisez ${link(locale, "/disposable-email", l.disposable)}, ${link(locale, "/temp-mail-generator", "Temp Mail Generator")} et ${link(locale, "/blog/is-temp-mail-safe", "Temp Mail safety")}.</p>
${depthBlock(locale, "blog")}
${extraDepth(locale)}
${extraDepth(locale)}`;
}

export function localizedBlogPosts(locale) {
  if (!LANG[locale]) return [];
  return Object.entries(BLOG).map(([slug, names]) => ({
    slug,
    title: `${names[0]} — Temp Mail`,
    h1: names[0],
    desc: `${names[0]} erklärt in klarer Sprache, wie Sie ${LANG[locale].temp} sinnvoll, sicher und ohne Registrierung verwenden.`,
    bodyHtml: blogBody(locale, slug),
    date: "2026-01-01T00:00:00.000Z",
  }));
}

export function localizedBlogPost(locale, slug) {
  return localizedBlogPosts(locale).find((post) => post.slug === slug) || null;
}

function homeSections(locale) {
  if (locale !== "de") return homeSectionsIntl(locale);
  const l = LANG[locale];
  return `<div class='content'>
<section><h2>Was ist Temp Mail?</h2><p><strong>Temp Mail</strong> ist eine ${l.free}e ${l.temp}, die Sie kurz verwenden und danach zurücklassen. Sie empfängt echte Nachrichten ${l.real}, ist aber nicht mit Ihrer Identität verbunden und benötigt keine Registrierung.</p><p>Menschen nutzen ${l.disposable}, wenn eine Website eine Adresse verlangt: Downloads, Tests, Foren, Gutscheine, App-Prüfungen oder einmalige Verifizierungen. Statt Ihre echte Adresse preiszugeben, verwenden Sie eine Wegwerf-Adresse, lesen den Link oder ${l.code} und machen weiter.</p><p>Das Postfach ist sofort aktiv. Es gibt nichts zu installieren und kein Konto zu pflegen. Eine neue Adresse ist jederzeit nur einen Klick entfernt.</p></section>
<section><h2>So funktioniert temporäre E-Mail</h2><div class='steps'><div class='step'><div class='num'>1</div><div><h3>Adresse erhalten</h3><p>Eine temporäre Adresse wird automatisch erzeugt. Sie können sie behalten, anpassen oder eine neue zufällige Adresse erstellen.</p></div></div><div class='step'><div class='num'>2</div><div><h3>Überall verwenden</h3><p>Kopieren Sie die Adresse in Formulare, Download-Seiten oder Dienste, die eine E-Mail verlangen.</p></div></div><div class='step'><div class='num'>3</div><div><h3>Nachrichten lesen</h3><p>Neue E-Mails, Bestätigungslinks und OTP-Codes erscheinen im Live-Postfach innerhalb weniger Sekunden.</p></div></div></div></section>
<section><h2>Warum eine ${l.disposable} nutzen?</h2><p>Eine Wegwerf-Adresse ist eine einfache Datenschutzgewohnheit. Sie trennt Ihre echte Identität von Diensten, die Sie vielleicht nie wieder besuchen.</p><ul class='benefits'><li><span><b>Spam stoppen.</b> Werbung landet in der temporären Mailbox, nicht in Ihrem echten Postfach.</span></li><li><span><b>Codes sofort empfangen.</b> Verifizierungen und OTP-Codes kommen schnell an.</span></li><li><span><b>Privatsphäre schützen.</b> Ihre Hauptadresse bleibt getrennt von zufälligen Websites.</span></li><li><span><b>Datenlecks begrenzen.</b> Ein Leak betrifft nur eine Adresse, die Sie nicht behalten.</span></li><li><span><b>Ohne Verpflichtung.</b> Kein Konto, kein Passwort und keine spätere Pflege.</span></li></ul></section>
<section><h2>Wann sollten Sie Temp Mail verwenden?</h2><p>Temp Mail passt, wenn eine E-Mail nötig ist, aber keine dauerhafte Beziehung entsteht.</p><ul class='benefits'><li><span><b>Downloads und Tests.</b> Inhalte freischalten, ohne eine Liste zu abonnieren.</span></li><li><span><b>Einmalige Registrierungen.</b> Foren, WLAN-Portale und Kommentarbereiche.</span></li><li><span><b>Produkt- und QA-Tests.</b> Registrierungs- und OTP-Flows prüfen.</span></li><li><span><b>Gutscheine und Aktionen.</b> Einen Code erhalten, ohne das Hauptpostfach zu belasten.</span></li><li><span><b>Verifizierungen.</b> Code erhalten, bestätigen und weiterarbeiten.</span></li></ul><p>Für Bank, Arbeit, Behörden und wichtige Konten verwenden Sie immer Ihre echte Adresse.</p></section>
<section><h2>Andere Namen für temporäre E-Mail</h2><p>Temp Mail wird auch ${l.disposable}, Burner Email, Fake Email, anonyme E-Mail, 10 Minute Mail oder DEA genannt. Gemeint ist immer eine kurzlebige Adresse, die Sie nicht dauerhaft pflegen möchten.</p></section>
<section><h2>Ist Temp Mail sicher?</h2><p>Für niedrige Risiken ja. Es hält Ihre echte Adresse privat und reduziert Spam. Gleichzeitig ist es kein privater Tresor. Nachrichten sind temporär, Postfächer werden bereinigt und sensible Inhalte gehören nicht hierher.</p></section>
<section><h2>So holen Sie mehr aus Temp Mail heraus</h2><p>Verwenden Sie für jede Website eine eigene Adresse. Dadurch bleiben Newsletter, Codes und mögliche spätere Werbemails sauber getrennt. Wenn ein Dienst eine Domain blockiert, erstellen Sie direkt eine neue Adresse oder wählen eine andere Domain aus. Kopieren Sie Adressen immer, statt sie abzutippen, denn schon ein kleiner Fehler reicht aus, damit ein Code nicht ankommt.</p><p>Für Entwickler und QA-Teams ist diese Trennung ebenfalls hilfreich. Jede Testausführung kann eine frische Inbox bekommen, sodass Willkommensmails, Passwort-Resets und OTP-Nachrichten nicht durcheinander geraten. Sobald ein Test abgeschlossen ist, wird die Adresse nicht weiter benötigt.</p></section>
<section><h2>Was Temp Mail nicht ersetzt</h2><p>Temp Mail ersetzt keine dauerhafte Mailbox. Es ist kein Archiv, kein Konto für wichtige Unterlagen und kein Ort für vertrauliche Nachrichten. Nutzen Sie es für die Wegwerf-Momente des Internets und behalten Sie Ihre echte Adresse für alles, was dauerhaft, rechtlich, finanziell oder persönlich wichtig ist.</p><p>Diese klare Grenze ist der Grund, warum der Dienst nützlich bleibt: kurze Aufgaben laufen schnell, während Ihre langfristige Identität geschützt bleibt.</p></section>
${depthBlock(locale, "home")}
${extraDepth(locale)}
${extraDepth(locale)}
${extraDepth(locale)}
<section><h2>Häufige Fragen</h2><div class='faq'><details><summary>Muss ich mich registrieren?</summary><p>Nein. Die Adresse ist sofort verfügbar.</p></details><details><summary>Ist Temp Mail kostenlos?</summary><p>Ja. Sie können beliebig viele Adressen erzeugen.</p></details><details><summary>Kann ich OTP-Codes empfangen?</summary><p>Ja. Eingehende Codes erscheinen ${l.real}.</p></details><details><summary>Kann ich E-Mails senden?</summary><p>Nein. Der Dienst ist receive-only.</p></details><details><summary>Wie lange hält die Adresse?</summary><p>Behandeln Sie jede Nachricht als temporär und kopieren Sie wichtige Codes sofort.</p></details></div></section>
</div>`;
}

function homeSectionsIntl(locale) {
  const l = LANG[locale];
  return `<div class='content'>
<section><h2>What is Temp Mail?</h2><p><strong>Temp Mail</strong> is a ${l.free} ${l.temp} you use for a short time and then leave behind. It receives real messages ${l.real}, but it is not tied to your identity and needs no registration.</p><p>Use it for downloads, trials, forums, coupons, app testing and one-time verification. Instead of giving away your real inbox, you use a throwaway address, read the link or ${l.code}, and move on.</p><p>The inbox is live as soon as the page loads. There is no app to install, no account to create and no cleanup later.</p></section>
<section><h2>How temporary email works</h2><div class='steps'><div class='step'><div class='num'>1</div><div><h3>Get an address</h3><p>A temporary address is generated automatically. Keep it, customize it or create a fresh random one.</p></div></div><div class='step'><div class='num'>2</div><div><h3>Use it anywhere</h3><p>Copy the address into any form that asks for email.</p></div></div><div class='step'><div class='num'>3</div><div><h3>Read incoming mail</h3><p>Verification links and OTP codes appear in the live inbox within seconds.</p></div></div></div></section>
<section><h2>Why use ${l.disposable}?</h2><p>A disposable address creates distance between your real identity and low-value websites.</p><ul class='benefits'><li><span><b>Stop spam early.</b> Promotions land in the temporary inbox.</span></li><li><span><b>Receive codes fast.</b> OTP and confirmation messages arrive ${l.real}.</span></li><li><span><b>Protect privacy.</b> Your main address stays separate.</span></li><li><span><b>Limit breaches.</b> A leaked throwaway address is easy to abandon.</span></li><li><span><b>No commitment.</b> No password, account or later maintenance.</span></li></ul></section>
<section><h2>When to use it</h2><p>Use Temp Mail when an email is required but a long-term relationship is not: downloads, trials, forums, Wi-Fi portals, coupons, newsletters and testing. Use your real inbox for banking, work, government and important accounts.</p></section>
<section><h2>Is Temp Mail safe?</h2><p>For low-risk tasks, yes. It keeps your real address private and cuts spam. It is not a vault. Messages are temporary, inboxes are cleared and sensitive information belongs elsewhere.</p></section>
<section><h2>Better daily workflow</h2><p>Use one address per website. That keeps newsletters, codes and later promotions separated, and it makes noisy senders easy to abandon. If a site blocks one domain, generate a fresh address or choose another domain. Always copy and paste the address instead of typing it by hand, because one small typo is enough to lose the code.</p><p>Teams can use the same pattern for QA. Give every test run its own inbox so welcome emails, password resets and OTP messages stay organized. When the run ends, the address can be left behind.</p></section>
<section><h2>What Temp Mail does not replace</h2><p>Temp Mail does not replace a permanent mailbox. It is not an archive, not a recovery identity and not a place for confidential communication. Use it for the disposable moments of the web, and keep your real inbox for anything legal, financial, personal or long-term.</p><p>That boundary is what makes the tool useful: quick tasks stay quick, while your durable identity stays protected.</p></section>
${depthBlock(locale, "home")}
${extraDepth(locale)}
${extraDepth(locale)}
${extraDepth(locale)}
<section><h2>Frequently asked questions</h2><div class='faq'><details><summary>Do I need to register?</summary><p>No. The address works immediately.</p></details><details><summary>Is it free?</summary><p>Yes. You can create addresses for free.</p></details><details><summary>Can I receive OTP codes?</summary><p>Yes. Codes arrive ${l.real}.</p></details><details><summary>Can I send email?</summary><p>No. Temp Mail is receive-only.</p></details></div></section>
</div>`;
}

export function homepageLocale(locale) {
  if (!LANG[locale]) return null;
  const l = LANG[locale];
  return {
    title: `${l.title} — kostenlose Wegwerf-E-Mail-Adresse`,
    desc: l.seo,
    ogDesc: l.seo,
    eyebrow: l.noSignup,
    h1: l.h1,
    lead: l.lead,
    content: homeSections(locale),
    ui: {
      addressLabel: l.ui[0], active: l.ui[1], copyAddress: l.ui[2], newAddress: l.ui[3],
      customize: l.ui[4], chooseName: l.ui[5], inbox: l.ui[6], waiting: l.ui[7],
      emptyTitle: l.ui[8], emptyText: l.ui[9], copied: l.ui[10], addressCopied: l.ui[11],
      newReady: l.ui[12], live: l.ui[13], clearAll: l.ui[14],
      navBlog: localeStrings(locale).nav.blog, navAbout: localeStrings(locale).nav.about,
      footerCopy: localeStrings(locale).footer.copy,
    },
  };
}
