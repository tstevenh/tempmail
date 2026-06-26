import { localizedPath, localeStrings } from "./i18n.js";

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
  return `<p>${topic} ist eine praktische Frage, weil fast jede Website heute eine Adresse verlangt. Eine ${l.temp} gibt Ihnen ein funktionierendes Postfach ${l.signup}, empfängt Nachrichten ${l.real} und trennt niedrige Risiken von Ihrer echten Identität. Dieser Ratgeber erklärt, wann Temp Mail nützlich ist, welche Grenzen wichtig sind und wie Sie Codes zuverlässig empfangen, ohne Ihr dauerhaftes Postfach mit Werbung und Nachverfolgung zu füllen.</p>
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
<p>Richtig eingesetzt spart Temp Mail Zeit, reduziert Spam und hält Ihre echte Adresse aus unnötigen Datenbanken heraus. Die Stärke liegt nicht darin, jede E-Mail zu ersetzen, sondern die kleinen, einmaligen Verifizierungen sauber auszulagern. Für weitere Grundlagen lesen Sie ${link(locale, "/disposable-email", l.disposable)}, ${link(locale, "/temp-mail-generator", "Temp Mail Generator")} und ${link(locale, "/blog/is-temp-mail-safe", "Sicherheit von Temp Mail")}.</p>`;
}

function blogBodyIntl(locale, slug) {
  const l = LANG[locale];
  const topic = BLOG[slug][0];
  const intro = {
    fr: "Un email temporaire est utile parce que presque chaque service demande une adresse avant de laisser continuer. Il protège votre vraie boîte, reçoit les codes rapidement et évite d’ajouter votre identité à une base de données de plus.",
    es: "Un correo temporal es útil porque casi cualquier servicio pide una dirección antes de dejarte continuar. Protege tu bandeja real, recibe códigos rápido y evita sumar tu identidad a otra base de datos.",
    nl: "Tijdelijke e-mail is nuttig omdat bijna elke dienst een adres vraagt voordat je verder mag. Het beschermt je echte inbox, ontvangt codes snel en voorkomt dat je identiteit in nog een database belandt.",
    it: "Un’email temporanea è utile perché quasi ogni servizio chiede un indirizzo prima di farti continuare. Protegge la tua casella reale, riceve codici rapidamente ed evita di aggiungere la tua identità a un altro database.",
  }[locale];
  return `<p>${intro} This guide explains ${topic} in practical terms, with clear limits and simple rules for safe use.</p>
<h2>What Temp Mail is for</h2>
<p>Temp Mail is for short, low-risk tasks. You need an address, receive one message, copy a link or ${l.code}, and move on. Downloads, trials, forums, coupons, Wi-Fi portals and app testing are good examples.</p>
<p>The inbox is receive-only. That makes it simple and focused. It is excellent for confirmation links and OTP codes, but it is not a replacement for a normal account where you send, archive and recover messages.</p>
<h2>Privacy benefits</h2>
<p>The main value is separation. Your real inbox remains attached to people, work, money and accounts that matter. The disposable address handles the noisy, temporary side of the web.</p>
<ul><li>Marketing mail stays away from your main inbox.</li><li>Data leaks expose a throwaway address, not your permanent one.</li><li>You can create a fresh address for every separate task.</li><li>No sign-up means less personal information to share.</li></ul>
<h2>Risks and limits</h2>
<p>A temporary inbox is not a private archive. Messages are cleared periodically, and you should assume anything important may disappear. Do not use it for banking, work, government, healthcare, cloud storage or any account you must recover later.</p>
<p>Use codes quickly, avoid suspicious links and never store credentials or private documents in a disposable inbox.</p>
<h2>How to use it well</h2>
<ol><li>Open ${link(locale, "/", "Temp Mail")} and copy the generated address.</li><li>Paste it into the site that asks for email.</li><li>Request the verification email or OTP code.</li><li>Read the incoming message in the live inbox.</li><li>Finish the task and create a new address for the next one.</li></ol>
<h2>Troubleshooting</h2>
<p>If a code does not arrive, wait a few seconds, check the address and request it again. If a site blocks the domain, generate a fresh address or choose another domain. If a code expires, request a new one and keep the inbox visible.</p>
<h2>When it is the right choice</h2>
<p>Use Temp Mail when the email relationship is short, practical and low risk. Examples include reading a gated article, testing a product onboarding flow, joining a public forum for one answer, downloading a file, collecting a coupon or checking whether a newsletter is worth your real address. In all of these cases, the value of the address ends almost as soon as the message arrives.</p>
<p>Use a permanent inbox when the relationship is important. Receipts, recovery links, legal notices, employment messages, medical portals and financial accounts need an address you control over time. The point is not to replace your main inbox. The point is to stop using it for tasks that never deserved it.</p>
<h2>Practical habits</h2>
<p>Copy and paste addresses instead of typing them. Keep the inbox open while you wait for the code. Use a different address for each unrelated site. Read incoming messages with the same caution you would use anywhere else online. If the sender looks suspicious, do not click. If the task suddenly asks for sensitive information, switch to a real account or leave.</p>
<p>For repeat testing, document which temporary address belongs to which test run, then discard it when the run is complete. This keeps logs easy to understand without letting temporary mail become part of your long-term account recovery path.</p>
<h2>Conclusion</h2>
<p>Temp Mail works best when you use it for exactly what it is: a fast, free and temporary receiving address. It reduces spam and protects your real inbox without pretending to replace a permanent email account. For more, read ${link(locale, "/disposable-email", l.disposable)}, ${link(locale, "/temp-mail-generator", "Temp Mail Generator")} and ${link(locale, "/blog/is-temp-mail-safe", "Temp Mail safety")}.</p>`;
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
