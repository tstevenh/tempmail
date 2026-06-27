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
    "/temp-mail-generator": "Temp-Mail-Generator — kostenlose Wegwerf-E-Mail erstellen",
    "/disposable-email": "Wegwerf-E-Mail — kostenlose temporäre Adresse",
    "/10-minute-mail": "10-Minuten-Mail — kostenlose temporäre E-Mail",
    "/fake-email-generator": "Generator für temporäre Test-E-Mails — funktionierende temporäre E-Mail",
    "/temporary-email-service": "Temporärer E-Mail-Service — kostenloses Temp Mail",
    "/burner-email": "Wegwerf-Adresse — kostenlos",
    "/temp-gmail": "Temp Gmail — Gmail privat halten",
    "/anonymous-email": "Anonyme E-Mail — kostenlose temporäre Adresse",
    "/alternatives/guerrilla-mail": "Alternative zu Guerrilla Mail — modernes Temp Mail",
    "/alternatives/mailinator": "Alternative zu Mailinator — privateres Temp Mail",
  },
  fr: {
    "/temp-mail-generator": "Générateur Temp Mail — email jetable gratuit",
    "/disposable-email": "Email jetable — adresse temporaire gratuite",
    "/10-minute-mail": "10 Minute Mail — email temporaire gratuit",
    "/fake-email-generator": "Générateur d’email de test — email temporaire fonctionnel",
    "/temporary-email-service": "Service email temporaire — Temp Mail gratuit",
    "/burner-email": "Adresse jetable rapide — adresse jetable gratuite",
    "/temp-gmail": "Temp Gmail — protéger votre compte Gmail",
    "/anonymous-email": "Email anonyme — adresse temporaire gratuite",
    "/alternatives/guerrilla-mail": "Alternative à Guerrilla Mail — Temp Mail moderne",
    "/alternatives/mailinator": "Alternative à Mailinator — Temp Mail plus privé",
  },
  es: {
    "/temp-mail-generator": "Generador Temp Mail — correo desechable gratis",
    "/disposable-email": "Correo desechable — dirección temporal gratis",
    "/10-minute-mail": "10 Minute Mail — correo temporal gratis",
    "/fake-email-generator": "Generador de correo de prueba — correo temporal real",
    "/temporary-email-service": "Servicio de correo temporal — Temp Mail gratis",
    "/burner-email": "Dirección desechable rápida — dirección desechable gratis",
    "/temp-gmail": "Temp Gmail — protege tu Gmail",
    "/anonymous-email": "Correo anónimo — dirección temporal gratis",
    "/alternatives/guerrilla-mail": "Alternativa a Guerrilla Mail — Temp Mail moderno",
    "/alternatives/mailinator": "Alternativa a Mailinator — Temp Mail más privado",
  },
  nl: {
    "/temp-mail-generator": "Temp Mail Generator — gratis wegwerp e-mail",
    "/disposable-email": "Wegwerp e-mail — gratis tijdelijk adres",
    "/10-minute-mail": "10 Minute Mail — gratis tijdelijke e-mail",
    "/fake-email-generator": "Generator voor testmail — werkende tijdelijke e-mail",
    "/temporary-email-service": "Tijdelijke e-mailservice — gratis Temp Mail",
    "/burner-email": "Snel wegwerpadres — gratis wegwerp adres",
    "/temp-gmail": "Temp Gmail — houd Gmail privé",
    "/anonymous-email": "Anonieme e-mail — gratis tijdelijk adres",
    "/alternatives/guerrilla-mail": "Guerrilla Mail alternatief — modern Temp Mail",
    "/alternatives/mailinator": "Mailinator alternatief — privéer Temp Mail",
  },
  it: {
    "/temp-mail-generator": "Generatore Temp Mail — email usa e getta gratis",
    "/disposable-email": "Email usa e getta — indirizzo temporaneo gratis",
    "/10-minute-mail": "10 Minute Mail — email temporanea gratis",
    "/fake-email-generator": "Generatore di email di prova — email temporanea funzionante",
    "/temporary-email-service": "Servizio email temporanea — Temp Mail gratis",
    "/burner-email": "Indirizzo usa e getta rapido — indirizzo usa e getta gratis",
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
  const t = {
    de: {
      labels: { blog: "Praktische Hinweise", home: "Temp Mail richtig nutzen", page: "Praktische Beispiele" },
      p: [
        "Temp Mail funktioniert am besten als wiederholbare Datenschutzgewohnheit: Verwenden Sie eine temporäre E-Mail, wenn der Kontakt nur vorübergehend ist, und behalten Sie Ihr dauerhaftes Postfach für Dienste, denen Sie wirklich vertrauen.",
        "Bei Verifizierungscodes zählt Geschwindigkeit, aber Trennung zählt ebenfalls. Lassen Sie die Seite offen, kopieren Sie die Adresse statt sie abzutippen und nutzen Sie pro Website eine eigene Adresse.",
        "Ein temporäres Postfach ersetzt weder Gmail noch Outlook noch ein Arbeitspostfach. Es ist eine zusätzliche Schicht für kleine Momente: Formular testen, Datei laden, Gutschein holen, Forum lesen oder ein Konto ausprobieren.",
      ],
      items: ["Nutzen Sie für jede einzelne Website eine neue Adresse.", "Kopieren Sie Codes sofort, denn Nachrichten sind temporär.", "Wählen Sie eine andere Domain, wenn ein Dienst die erste Adresse ablehnt.", "Nutzen Sie keine temporäre Adresse zur Wiederherstellung wichtiger Konten.", "Schließen Sie die Aufgabe ab und lassen Sie das Postfach danach zurück."],
    },
    fr: {
      labels: { blog: "Conseils pratiques", home: "Bien utiliser Temp Mail", page: "Exemples pratiques" },
      p: [
        "Temp Mail fonctionne mieux comme habitude de confidentialité répétable : utilisez un email temporaire lorsque la relation est temporaire et gardez votre boîte permanente pour les services auxquels vous faites confiance.",
        "Pour les codes de vérification, la vitesse compte, mais la séparation compte aussi. Gardez la page ouverte, copiez l’adresse au lieu de la saisir et utilisez une adresse par site.",
        "Une boîte temporaire ne remplace pas Gmail, Outlook ni une boîte professionnelle. C’est une couche supplémentaire pour de petits moments : tester un formulaire, télécharger un fichier, obtenir un coupon, lire un forum ou essayer un compte.",
      ],
      items: ["Utilisez une nouvelle adresse pour chaque site distinct.", "Copiez les codes tout de suite, car les messages sont temporaires.", "Choisissez un autre domaine si un service refuse la première adresse.", "N’utilisez pas une adresse temporaire pour récupérer des comptes importants.", "Terminez la tâche puis laissez la boîte derrière vous."],
    },
    es: {
      labels: { blog: "Guía práctica", home: "Cómo usar Temp Mail correctamente", page: "Ejemplos prácticos" },
      p: [
        "Temp Mail funciona mejor como un hábito de privacidad repetible: usa un correo temporal cuando la relación sea temporal y reserva tu bandeja permanente para servicios en los que realmente confías.",
        "Para códigos de verificación, la rapidez importa, pero la separación también. Mantén la página abierta, copia la dirección en vez de escribirla y usa una dirección por sitio.",
        "Una bandeja temporal no sustituye a Gmail, Outlook ni a un correo de trabajo. Es una capa extra para momentos pequeños: probar un formulario, descargar un archivo, obtener un cupón, leer un foro o probar una cuenta.",
      ],
      items: ["Usa una dirección nueva para cada sitio independiente.", "Copia los códigos enseguida, porque los mensajes son temporales.", "Elige otro dominio si un servicio rechaza la primera dirección.", "No uses una dirección temporal para recuperar cuentas importantes.", "Termina la tarea y deja atrás la bandeja."],
    },
    nl: {
      labels: { blog: "Praktische richtlijnen", home: "Temp Mail goed gebruiken", page: "Praktische voorbeelden" },
      p: [
        "Temp Mail werkt het best als herhaalbare privacygewoonte: gebruik tijdelijke e-mail wanneer de relatie tijdelijk is en bewaar je permanente inbox voor diensten die je echt vertrouwt.",
        "Bij verificatiecodes telt snelheid, maar scheiding telt ook. Houd de pagina open, kopieer het adres in plaats van het te typen en gebruik één adres per website.",
        "Een tijdelijke inbox vervangt Gmail, Outlook of je werkinbox niet. Het is een extra laag voor kleine momenten: een formulier testen, een bestand downloaden, een coupon ophalen, een forum lezen of een account proberen.",
      ],
      items: ["Gebruik een nieuw adres voor elke losse website.", "Kopieer codes meteen, want berichten zijn tijdelijk.", "Kies een ander domein als een dienst het eerste adres weigert.", "Gebruik geen tijdelijk adres voor herstel van belangrijke accounts.", "Sluit de taak af en laat de inbox daarna achter."],
    },
    it: {
      labels: { blog: "Guida pratica", home: "Come usare bene Temp Mail", page: "Esempi pratici" },
      p: [
        "Temp Mail funziona meglio come abitudine di privacy ripetibile: usa un’email temporanea quando il rapporto è temporaneo e tieni la casella permanente per i servizi di cui ti fidi davvero.",
        "Per i codici di verifica conta la velocità, ma conta anche la separazione. Tieni aperta la pagina, copia l’indirizzo invece di digitarlo e usa un indirizzo per ogni sito.",
        "Una casella temporanea non sostituisce Gmail, Outlook o una casella di lavoro. È uno strato aggiuntivo per piccoli momenti: testare un modulo, scaricare un file, ottenere un coupon, leggere un forum o provare un account.",
      ],
      items: ["Usa un nuovo indirizzo per ogni sito.", "Copia subito i codici, perché i messaggi sono temporanei.", "Scegli un altro dominio se un servizio rifiuta il primo indirizzo.", "Non usare un indirizzo temporaneo per recuperare account importanti.", "Completa l’attività e lascia poi la casella."],
    },
  }[locale];
  const label = t.labels[type] || t.labels.page;
  return `<h2>${label}</h2>
<p>${t.p[0]}</p>
<p>${t.p[1]}</p>
<p>${t.p[2]}</p>
<ul>${t.items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function extraDepth(locale, variant = 0) {
  const sets = {
    de: [
      ["Weitere praktische Einordnung", "Eine Wegwerf-E-Mail ist am nützlichsten, wenn sie Teil einer klaren Entscheidungsregel ist. Ist das Konto experimentell, öffentlich, werblich oder entbehrlich, nutzen Sie Temp Mail. Ist es persönlich, finanziell, beruflich, medizinisch, rechtlich oder für Wiederherstellung nötig, nutzen Sie ein dauerhaftes Postfach.", "Betrachten Sie Temp Mail als Puffer. Es nimmt den ersten Kontakt einer Website auf, bevor Sie entscheiden, ob daraus eine dauerhafte Beziehung werden soll.", "Für wiederholte Arbeit benennen Sie Adressen nach Aufgabe, halten Sie das Postfach während der Code-Anfrage sichtbar und schließen Sie den Vorgang zügig ab."],
      ["Saubere Trennung nach Aufgabe", "Für jede unabhängige Website sollte eine neue Adresse entstehen. So bleibt erkennbar, welche Registrierung eine spätere Nachricht ausgelöst hat, und ein lautes Postfach kann ohne Aufwand zurückgelassen werden.", "Wenn mehrere Nachrichten zu demselben kurzen Test gehören, ist Wiederverwendung sinnvoll. Sobald aber ein anderer Dienst, eine andere Rolle oder ein anderer Zweck beteiligt ist, schafft eine neue Adresse mehr Übersicht.", "Diese Trennung ist besonders hilfreich bei Produktvergleichen, QA-Prüfungen, Newsletter-Proben und einmaligen Downloads."],
      ["Grenzen bei Wiederherstellung", "Eine temporäre Adresse ist schwach, sobald ein Konto später wiederhergestellt werden muss. Passwort-Reset, Sicherheitswarnungen, Quittungen und Support-Antworten können Wochen nach der Registrierung eintreffen.", "Wenn solche Nachrichten wichtig sind, gehört das Konto in ein dauerhaftes Postfach. Temp Mail bleibt für den kurzen Moment davor gedacht: prüfen, bestätigen, Code lesen und abschließen.", "Die beste Regel lautet: Je höher der spätere Schaden, desto früher wechseln Sie zu einer echten Adresse."],
      ["Praktik für Teams", "Teams können temporäre Postfächer nutzen, um Registrierungsflüsse ohne persönliche Mailkonten zu prüfen. Jede Testausführung bekommt eine eigene Adresse, sodass Willkommensmails, Codes und Fehlermeldungen nicht durcheinander geraten.", "Nach dem Test bleibt kein künstliches Konto im Arbeitsalltag hängen. Das spart Aufräumen und macht Ergebnisse leichter nachvollziehbar.", "Für produktive Warnungen, Kundenkontakte oder Abrechnung bleibt trotzdem ein dauerhaft kontrolliertes Postfach nötig."],
    ],
    fr: [
      ["Contexte pratique supplémentaire", "Un email jetable est plus utile lorsqu’il fait partie d’une règle claire. Si le compte est expérimental, public, promotionnel ou sacrifiable, utilisez Temp Mail. S’il est personnel, financier, professionnel, médical, légal ou nécessaire à la récupération, utilisez une boîte permanente.", "Pensez à Temp Mail comme à un tampon. Il absorbe le premier contact d’un site avant que vous décidiez si ce service mérite une relation durable.", "Pour les tâches répétées, nommez les adresses par tâche, gardez la boîte visible pendant l’attente des codes et terminez rapidement."],
      ["Séparer chaque usage", "Créez une adresse différente pour chaque site indépendant. Vous saurez ainsi quel service a envoyé une relance, et vous pourrez abandonner une boîte bruyante sans toucher aux autres tâches.", "Réutiliser une adresse n’a du sens que lorsque plusieurs messages appartiennent au même test court. Dès que le service ou l’objectif change, une nouvelle adresse rend le suivi plus clair.", "Cette méthode aide pour les comparaisons de produits, les tests QA, les essais de newsletters et les téléchargements ponctuels."],
      ["Limites pour la récupération", "Une adresse temporaire devient fragile dès qu’un compte doit être récupéré plus tard. Réinitialisations, alertes de sécurité, reçus et réponses du support peuvent arriver longtemps après l’inscription.", "Si ces messages comptent, le compte doit utiliser une boîte durable. Temp Mail reste destiné au moment court : vérifier, lire le code et terminer.", "Plus la perte future serait gênante, plus vite il faut choisir une vraie adresse."],
      ["Utilisation en équipe", "Les équipes peuvent utiliser des boîtes temporaires pour tester des parcours d’inscription sans comptes personnels. Chaque exécution reçoit son adresse, ce qui garde les messages de bienvenue, codes et erreurs bien séparés.", "Après le test, aucun compte artificiel ne reste dans le travail quotidien. Les résultats sont plus faciles à relire et à nettoyer.", "Pour les alertes de production, les clients ou la facturation, une boîte durable reste indispensable."],
    ],
    es: [
      ["Más contexto práctico", "Un correo desechable es más útil cuando forma parte de una regla clara de decisión. Si la cuenta es experimental, pública, promocional o prescindible, usa Temp Mail. Si es personal, financiera, profesional, médica, legal o necesaria para recuperación, usa una bandeja permanente.", "Piensa en Temp Mail como una barrera. Absorbe el primer contacto de un sitio antes de decidir si merece una relación duradera.", "Para tareas repetidas, nombra las direcciones por tarea, mantén la bandeja visible mientras esperas códigos y cierra el proceso rápido."],
      ["Separar cada uso", "Crea una dirección distinta para cada sitio independiente. Así sabrás qué servicio envió un seguimiento y podrás abandonar una bandeja ruidosa sin afectar las demás tareas.", "Reutilizar una dirección solo tiene sentido cuando varios mensajes pertenecen a la misma prueba corta. Cuando cambia el servicio o el objetivo, una dirección nueva da más claridad.", "Este método ayuda en comparaciones de productos, pruebas QA, newsletters de prueba y descargas puntuales."],
      ["Límites para recuperación", "Una dirección temporal se vuelve frágil cuando una cuenta debe recuperarse más adelante. Restablecimientos, alertas de seguridad, recibos y respuestas de soporte pueden llegar mucho después del registro.", "Si esos mensajes importan, la cuenta debe usar una bandeja duradera. Temp Mail queda para el momento breve: verificar, leer el código y terminar.", "Cuanto mayor sea el daño futuro de perder acceso, antes conviene elegir un correo real."],
      ["Uso en equipos", "Los equipos pueden usar bandejas temporales para probar registros sin cuentas personales. Cada ejecución recibe su dirección, de modo que bienvenidas, códigos y errores quedan separados.", "Después de la prueba no queda una cuenta artificial en el trabajo diario. Los resultados se revisan y limpian con menos esfuerzo.", "Para alertas de producción, clientes o facturación, sigue siendo necesaria una bandeja permanente."],
    ],
    nl: [
      ["Meer praktische context", "Een wegwerp e-mail is het nuttigst als onderdeel van een duidelijke beslisregel. Is het account experimenteel, openbaar, promotioneel of vervangbaar, gebruik dan Temp Mail. Is het persoonlijk, financieel, professioneel, medisch, juridisch of nodig voor herstel, gebruik dan een permanente inbox.", "Zie Temp Mail als een buffer. Het vangt het eerste contact van een site op voordat je beslist of die dienst een duurzame relatie verdient.", "Voor herhaald werk geef je adressen een taaknaam, houd je de inbox zichtbaar terwijl je op codes wacht en rond je de taak snel af."],
      ["Elk gebruik scheiden", "Maak een apart adres voor elke onafhankelijke website. Zo zie je later welke dienst een vervolgbericht stuurde en kun je een drukke inbox achterlaten zonder andere taken te raken.", "Een adres hergebruiken is alleen logisch wanneer meerdere berichten bij dezelfde korte test horen. Verandert de dienst of het doel, dan geeft een nieuw adres meer overzicht.", "Deze aanpak helpt bij productvergelijkingen, QA-tests, nieuwsbriefproeven en losse downloads."],
      ["Grenzen bij herstel", "Een tijdelijk adres wordt kwetsbaar zodra een account later hersteld moet worden. Wachtwoordherstel, veiligheidsmeldingen, bonnetjes en supportreacties kunnen lang na registratie aankomen.", "Als zulke berichten belangrijk zijn, hoort het account in een duurzame inbox. Temp Mail blijft bedoeld voor het korte moment: verifiëren, code lezen en afronden.", "Hoe groter de latere schade bij verlies van toegang, hoe eerder je een echt adres moet kiezen."],
      ["Gebruik in teams", "Teams kunnen tijdelijke inboxen gebruiken om registratieflows te testen zonder persoonlijke accounts. Elke testrun krijgt een eigen adres, waardoor welkomstmails, codes en fouten gescheiden blijven.", "Na de test blijft er geen kunstmatig account in het dagelijkse werk hangen. Resultaten zijn eenvoudiger terug te lezen en op te ruimen.", "Voor productiealerts, klantcontact of facturatie blijft een permanente inbox nodig."],
    ],
    it: [
      ["Contesto pratico aggiuntivo", "Un’email usa e getta è più utile quando fa parte di una regola chiara. Se l’account è sperimentale, pubblico, promozionale o sacrificabile, usa Temp Mail. Se è personale, finanziario, professionale, medico, legale o necessario per il recupero, usa una casella permanente.", "Pensa a Temp Mail come a un filtro. Assorbe il primo contatto da un sito prima che tu decida se quel servizio merita una relazione duratura.", "Per attività ripetute, nomina gli indirizzi per compito, tieni visibile la casella mentre aspetti i codici e chiudi rapidamente il ciclo."],
      ["Separare ogni uso", "Crea un indirizzo diverso per ogni sito indipendente. Così saprai quale servizio ha inviato un seguito e potrai abbandonare una casella rumorosa senza toccare le altre attività.", "Riutilizzare un indirizzo ha senso solo quando più messaggi appartengono allo stesso test breve. Se cambia servizio o obiettivo, un nuovo indirizzo dà più chiarezza.", "Questo metodo aiuta nei confronti tra prodotti, nei test QA, nelle prove newsletter e nei download singoli."],
      ["Limiti per il recupero", "Un indirizzo temporaneo diventa fragile quando un account deve essere recuperato più avanti. Reset password, avvisi di sicurezza, ricevute e risposte del supporto possono arrivare molto dopo la registrazione.", "Se quei messaggi contano, l’account deve usare una casella duratura. Temp Mail resta per il momento breve: verificare, leggere il codice e concludere.", "Più grave sarebbe perdere accesso in futuro, prima conviene scegliere un indirizzo reale."],
      ["Uso nei team", "I team possono usare caselle temporanee per testare registrazioni senza account personali. Ogni esecuzione riceve il suo indirizzo, così messaggi di benvenuto, codici ed errori restano separati.", "Dopo il test non resta un account artificiale nel lavoro quotidiano. I risultati sono più facili da rileggere e pulire.", "Per avvisi di produzione, contatti clienti o fatturazione serve comunque una casella permanente."],
    ],
  };
  const t = sets[locale][variant % sets[locale].length];
  return `<h2>${t[0]}</h2>
<p>${t[1]}</p>
<p>${t[2]}</p>
<p>${t[3]}</p>`;
}

function homeExpansion(locale, variant = 0) {
  const headings = {
    de: ["Sauberer Ablauf im Alltag", "Wann eine neue Adresse sinnvoll ist", "Was Teams davon haben", "Grenzen vor dem nächsten Konto"],
    fr: ["Routine claire au quotidien", "Quand créer une nouvelle adresse", "Ce que les équipes y gagnent", "Limites avant le prochain compte"],
    es: ["Rutina clara en el día a día", "Cuándo crear otra dirección", "Qué ganan los equipos", "Límites antes de la próxima cuenta"],
    nl: ["Duidelijke dagelijkse werkwijze", "Wanneer je een nieuw adres maakt", "Wat teams eraan hebben", "Grenzen vóór het volgende account"],
    it: ["Routine chiara nella pratica", "Quando creare un nuovo indirizzo", "Cosa ci guadagnano i team", "Limiti prima del prossimo account"],
  };
  const sections = {
    de: [
      ["Ein guter Temp-Mail-Ablauf beginnt vor dem Formular. Entscheiden Sie zuerst, ob die Website dauerhaft wichtig ist oder nur kurz geprüft werden soll. Für kurze Prüfungen reicht ein temporäres Postfach, weil der Nutzen nach dem Code endet.", "Auch die Domain-Auswahl ist praktisch. Wenn ein Dienst eine Adresse nicht akzeptiert, ist nicht automatisch die Nachrichtenzustellung kaputt. Manche Dienste blockieren bekannte Wegwerf-Domains. Wechseln Sie dann höchstens einmal die Domain und prüfen Sie, ob die Aufgabe wirklich niedriges Risiko hat."],
      ["Eine neue Adresse lohnt sich immer dann, wenn ein anderer Anbieter, ein anderes Projekt oder ein anderer Zweck beginnt. Dadurch bleiben spätere Nachrichten nachvollziehbar und Sie müssen nicht raten, welche Registrierung eine Werbemail ausgelöst hat.", "Wiederverwendung ist nur bei zusammenhängenden Tests sinnvoll. Sobald aus einem kurzen Test ein Konto mit Wert wird, sollte die Adresse nicht weiter die Grundlage bleiben."],
      ["Für Teams ist die Trennung besonders hilfreich. QA, Support und Produktteams können Testregistrierungen sauber voneinander trennen, ohne echte Postfächer mit Testmails zu füllen.", "Jede Testausführung bekommt eine eigene Adresse, und nach dem Test bleibt keine dauerhafte Verpflichtung. Dadurch lassen sich Testdaten einfacher erklären und später löschen."],
      ["Behandeln Sie jede eingehende Nachricht wie kurzlebige Arbeitsinformation. Kopieren Sie Codes sofort, speichern Sie keine vertraulichen Daten und schließen Sie die Aufgabe ab, solange die Seite geöffnet ist.", "Wenn ein Formular plötzlich Zahlungsdaten, Identitätsnachweise oder ein Wiederherstellungsziel verlangt, ist das der Punkt, an dem eine echte Mailbox besser ist."],
    ],
    fr: [
      ["Un bon usage de Temp Mail commence avant le formulaire. Demandez-vous si le site compte durablement ou si vous voulez seulement terminer une vérification courte. Pour une vérification ponctuelle, une boîte temporaire suffit, car l’utilité se termine dès que le code est lu.", "Le choix du domaine compte aussi. Si un service refuse une adresse, cela ne signifie pas forcément que la réception ne fonctionne pas. Certains services bloquent des domaines jetables connus. Dans ce cas, changez de domaine une seule fois."],
      ["Créez une nouvelle adresse lorsqu’un autre fournisseur, un autre projet ou un autre objectif commence. Les messages restent traçables et vous n’avez pas à deviner quelle inscription a déclenché une relance.", "La réutilisation convient seulement aux tests liés entre eux. Dès qu’un compte prend de la valeur, l’adresse temporaire ne doit plus servir de base."],
      ["Pour les équipes, cette séparation évite beaucoup de bruit. QA, support et produit peuvent isoler les inscriptions de test sans remplir de vraies boîtes.", "Chaque test reçoit son adresse, les messages restent lisibles, puis l’adresse peut être abandonnée. Les données de test deviennent plus faciles à expliquer et à supprimer."],
      ["Traitez chaque message comme une information de travail courte. Copiez les codes tout de suite, ne stockez pas de données sensibles et terminez la tâche pendant que la page est ouverte.", "Si un formulaire demande soudain un paiement, une identité ou une adresse de récupération, c’est le moment de passer à une vraie boîte."],
    ],
    es: [
      ["Un buen uso de Temp Mail empieza antes del formulario. Decide si el sitio será importante a largo plazo o si solo necesitas completar una verificación corta. Para una comprobación puntual, una bandeja temporal basta, porque el valor termina cuando lees el código.", "La elección del dominio también importa. Si un servicio rechaza una dirección, no significa necesariamente que la recepción falle. Algunos servicios bloquean dominios desechables conocidos. Cambia de dominio una sola vez."],
      ["Crea una dirección nueva cuando empieza otro proveedor, otro proyecto u otro objetivo. Los mensajes quedan rastreables y no tienes que adivinar qué registro provocó una promoción posterior.", "Reutilizar una dirección solo conviene en pruebas relacionadas. Cuando una cuenta empieza a tener valor, la dirección temporal ya no debe ser la base."],
      ["Para equipos, esta separación reduce ruido. QA, soporte y producto pueden aislar registros de prueba sin llenar buzones reales.", "Cada ejecución recibe su dirección, los mensajes quedan claros y luego la dirección se abandona. Los datos de prueba son más fáciles de explicar y borrar."],
      ["Trata cada mensaje como información breve de trabajo. Copia los códigos enseguida, no guardes datos sensibles y termina la tarea mientras la página está abierta.", "Si un formulario pide de pronto pago, identidad o una dirección de recuperación, es momento de cambiar a un buzón real."],
    ],
    nl: [
      ["Goed gebruik van Temp Mail begint vóór het formulier. Bepaal eerst of de site later belangrijk blijft of dat je alleen een korte verificatie wilt afronden. Voor een eenmalige controle is een tijdelijke inbox genoeg, omdat de waarde eindigt zodra de code gelezen is.", "Ook de domeinkeuze telt. Als een dienst een adres weigert, betekent dat niet automatisch dat ontvangst kapot is. Sommige diensten blokkeren bekende wegwerpdomeinen. Wissel dan hoogstens één keer van domein."],
      ["Maak een nieuw adres wanneer een andere aanbieder, een ander project of een ander doel begint. Berichten blijven herleidbaar en je hoeft later niet te raden welke registratie reclame veroorzaakte.", "Hergebruik past alleen bij samenhangende tests. Zodra een account waarde krijgt, moet het tijdelijke adres niet langer de basis zijn."],
      ["Voor teams voorkomt deze scheiding veel ruis. QA, support en product kunnen testregistraties isoleren zonder echte mailboxen te vullen.", "Elke testrun krijgt een eigen adres, berichten blijven overzichtelijk en daarna kan het adres achterblijven. Testdata wordt makkelijker uit te leggen en te verwijderen."],
      ["Behandel elk bericht als korte werkinformatie. Kopieer codes meteen, bewaar geen gevoelige gegevens en rond de taak af terwijl de pagina open is.", "Vraagt een formulier ineens om betaling, identiteit of een hersteladres, dan is dat het moment om naar een echte inbox te gaan."],
    ],
    it: [
      ["Un buon uso di Temp Mail inizia prima del modulo. Decidi se il sito sarà importante nel tempo o se devi solo completare una verifica breve. Per un controllo singolo, una casella temporanea basta, perché il valore finisce quando leggi il codice.", "Conta anche la scelta del dominio. Se un servizio rifiuta un indirizzo, non significa per forza che la ricezione non funzioni. Alcuni servizi bloccano domini usa e getta noti. Cambia dominio una sola volta."],
      ["Crea un nuovo indirizzo quando inizia un altro fornitore, progetto o obiettivo. I messaggi restano tracciabili e non devi indovinare quale registrazione ha generato una promozione successiva.", "Riutilizzare un indirizzo va bene solo per test collegati. Quando un account acquista valore, l’indirizzo temporaneo non deve più essere la base."],
      ["Per i team, questa separazione riduce molto rumore. QA, supporto e prodotto possono isolare registrazioni di test senza riempire caselle reali.", "Ogni esecuzione riceve il suo indirizzo, i messaggi restano chiari e poi l’indirizzo può essere lasciato. I dati di test sono più facili da spiegare e rimuovere."],
      ["Tratta ogni messaggio come informazione di lavoro breve. Copia subito i codici, non conservare dati sensibili e completa l’attività mentre la pagina è aperta.", "Se un modulo chiede all’improvviso pagamento, identità o un indirizzo di recupero, è il momento di passare a una casella reale."],
    ],
  };
  const idx = variant % sections[locale].length;
  return `<section><h2>${headings[locale][idx]}</h2>${sections[locale][idx].map((p) => `<p>${p}</p>`).join("")}</section>`;
}

function homeDeepening(locale) {
  const sections = {
    de: {
      h: "Entscheidungshilfe für wiederkehrende Nutzung",
      p: [
        "Wer Temp Mail regelmäßig nutzt, sollte nicht nur an den nächsten Code denken, sondern an die Art der Beziehung zur Website. Eine kurze Verifizierung, ein Download oder ein Testkonto haben ein klares Ende. Dafür ist eine temporäre Adresse sinnvoll, weil sie keine neue dauerhafte Identität schafft. Ein Konto mit Dateien, Käufen, Kontakten oder bezahlten Funktionen hat dagegen kein klares Ende und braucht eine Adresse, die langfristig Ihnen gehört.",
        "Hilfreich ist auch eine kleine Routine beim Kopieren. Öffnen Sie zuerst das temporäre Postfach, kopieren Sie die Adresse direkt aus der Oberfläche und lassen Sie den Tab geöffnet, bis der Code genutzt wurde. So vermeiden Sie Tippfehler und verpassen keine Nachricht. Wenn ein Dienst wiederholt ablehnt, ist das ein Signal, die Plattformregel zu respektieren und für wichtige Konten eine normale Mailbox zu wählen.",
        "Diese Arbeitsweise hält Ihr Hauptpostfach sauber, ohne dass Sie wichtige Wiederherstellung riskieren. Sie macht Temp Mail zu einem Werkzeug für kurze, kontrollierte Aufgaben statt zu einem Ersatz für Ihre digitale Identität.",
      ],
    },
    fr: {
      h: "Aide à la décision pour un usage répété",
      p: [
        "Lorsque vous utilisez Temp Mail régulièrement, ne pensez pas seulement au prochain code, mais au type de relation avec le site. Une vérification courte, un téléchargement ou un compte de test ont une fin claire. Une adresse temporaire convient à ce moment, car elle ne crée pas une nouvelle identité durable. Un compte avec fichiers, achats, contacts ou fonctions payantes n’a pas cette limite nette et demande une adresse que vous contrôlez dans le temps.",
        "Une routine simple aide aussi au moment de copier. Ouvrez d’abord la boîte temporaire, copiez l’adresse depuis l’interface et gardez l’onglet ouvert jusqu’à l’utilisation du code. Vous évitez les fautes de saisie et vous ne manquez pas le message. Si un service refuse plusieurs fois, respectez sa règle et choisissez une boîte normale pour tout compte important.",
        "Cette méthode garde votre boîte principale propre sans risquer les récupérations importantes. Temp Mail reste ainsi un outil pour des tâches courtes et contrôlées, pas un remplacement de votre identité numérique.",
      ],
    },
    es: {
      h: "Guía de decisión para uso repetido",
      p: [
        "Cuando usas Temp Mail con frecuencia, no pienses solo en el próximo código, sino en el tipo de relación con el sitio. Una verificación corta, una descarga o una cuenta de prueba tienen un final claro. Una dirección temporal encaja ahí porque no crea una identidad duradera. Una cuenta con archivos, compras, contactos o funciones pagadas no tiene ese límite claro y necesita una dirección que controles a largo plazo.",
        "También ayuda una rutina sencilla al copiar. Abre primero la bandeja temporal, copia la dirección desde la interfaz y deja la pestaña abierta hasta usar el código. Evitas errores de escritura y no pierdes el mensaje. Si un servicio rechaza varias veces, respeta su regla y usa una bandeja normal para cualquier cuenta importante.",
        "Este método mantiene limpia tu bandeja principal sin arriesgar recuperaciones importantes. Así Temp Mail sigue siendo una herramienta para tareas breves y controladas, no un reemplazo de tu identidad digital.",
      ],
    },
    nl: {
      h: "Keuzehulp voor herhaald gebruik",
      p: [
        "Wie Temp Mail regelmatig gebruikt, moet niet alleen aan de volgende code denken, maar aan het soort relatie met de website. Een korte verificatie, download of testaccount heeft een duidelijk einde. Daar past een tijdelijk adres goed bij, omdat het geen nieuwe blijvende identiteit maakt. Een account met bestanden, aankopen, contacten of betaalde functies heeft die duidelijke grens niet en vraagt om een adres dat je langdurig beheert.",
        "Een kleine kopieerroutine helpt ook. Open eerst de tijdelijke inbox, kopieer het adres direct uit de interface en laat het tabblad open tot de code gebruikt is. Zo voorkom je typefouten en mis je geen bericht. Weigert een dienst meerdere keren, respecteer dan die platformregel en kies voor belangrijke accounts een normale mailbox.",
        "Deze werkwijze houdt je hoofdmailbox schoon zonder belangrijk herstel te riskeren. Temp Mail blijft zo gereedschap voor korte, gecontroleerde taken en wordt geen vervanger van je digitale identiteit.",
      ],
    },
    it: {
      h: "Guida alla scelta per l’uso ripetuto",
      p: [
        "Quando usi Temp Mail spesso, non pensare solo al prossimo codice, ma al tipo di relazione con il sito. Una verifica breve, un download o un account di prova hanno una fine chiara. Un indirizzo temporaneo è adatto perché non crea una nuova identità duratura. Un account con file, acquisti, contatti o funzioni a pagamento non ha quel limite netto e richiede un indirizzo che controlli nel tempo.",
        "Aiuta anche una piccola routine di copia. Apri prima la casella temporanea, copia l’indirizzo dall’interfaccia e tieni aperta la scheda finché il codice è stato usato. Eviti errori di digitazione e non perdi il messaggio. Se un servizio rifiuta più volte, rispetta la regola della piattaforma e usa una casella normale per ogni account importante.",
        "Questo metodo tiene pulita la casella principale senza rischiare recuperi importanti. Temp Mail resta così uno strumento per attività brevi e controllate, non un sostituto della tua identità digitale.",
      ],
    },
  }[locale];
  return `<section><h2>${sections.h}</h2>${sections.p.map((p) => `<p>${p}</p>`).join("")}</section>`;
}

function homeScenario(locale) {
  const sections = {
    de: {
      h: "Typische Alltagsszenarien",
      p: [
        "Ein typischer Einsatz beginnt mit einer kleinen Hürde: Ein Download, ein Forum oder ein Tool verlangt eine Adresse, bevor Sie den eigentlichen Inhalt sehen. In diesem Moment schützt eine temporäre Adresse vor späterer Werbung, ohne den Ablauf zu verlangsamen. Sie kopieren die Adresse, warten auf den Code und beenden die Aufgabe, ohne aus einer kurzen Interaktion eine dauerhafte Mailbeziehung zu machen.",
        "Auch beim Vergleichen mehrerer Dienste ist diese Trennung nützlich. Wenn jede Website ein eigenes Postfach bekommt, bleiben Bestätigungen, Willkommensmails und spätere Nachfassaktionen getrennt. Dadurch erkennen Sie schnell, welcher Dienst sauber kommuniziert und welcher sofort Werbedruck erzeugt.",
        "Der gleiche Gedanke gilt für Entwickler und Betreiber kleiner Websites. Eine temporäre Adresse macht sichtbar, ob Registrierung, Passwort-Reset und Benachrichtigungen verständlich ankommen. Nach dem Test wird die Adresse nicht weiter gebraucht, und das echte Team-Postfach bleibt frei von Testdaten.",
      ],
    },
    fr: {
      h: "Scénarios courants",
      p: [
        "Un usage courant commence par une petite barrière : un téléchargement, un forum ou un outil demande une adresse avant d’afficher le contenu. Dans ce moment, une adresse temporaire protège contre les relances futures sans ralentir le parcours. Vous copiez l’adresse, attendez le code et terminez la tâche sans transformer une interaction courte en relation email durable.",
        "Cette séparation aide aussi lorsque vous comparez plusieurs services. Avec une boîte par site, confirmations, messages de bienvenue et relances restent séparés. Vous voyez vite quel service communique proprement et lequel pousse déjà trop de marketing.",
        "Le même principe sert aux développeurs et aux petites équipes web. Une adresse temporaire montre si inscription, réinitialisation et notifications arrivent de façon lisible. Après le test, l’adresse n’a plus d’utilité et la boîte de l’équipe reste propre.",
      ],
    },
    es: {
      h: "Escenarios habituales",
      p: [
        "Un uso típico empieza con una pequeña barrera: una descarga, un foro o una herramienta pide una dirección antes de mostrar el contenido. En ese momento, una dirección temporal protege contra mensajes posteriores sin frenar el flujo. Copias la dirección, esperas el código y terminas la tarea sin convertir una interacción breve en una relación de correo duradera.",
        "Esta separación también ayuda al comparar varios servicios. Con una bandeja por sitio, confirmaciones, mensajes de bienvenida y seguimientos quedan separados. Ves rápido qué servicio comunica de forma limpia y cuál empieza con demasiada presión comercial.",
        "El mismo principio sirve para desarrolladores y pequeños equipos web. Una dirección temporal muestra si registro, restablecimiento y notificaciones llegan de forma legible. Después de la prueba, la dirección ya no se necesita y la bandeja real del equipo queda limpia.",
      ],
    },
    nl: {
      h: "Veelvoorkomende situaties",
      p: [
        "Een typisch gebruik begint met een kleine drempel: een download, forum of tool vraagt een adres voordat je de inhoud ziet. Op dat moment beschermt een tijdelijk adres tegen latere opvolging zonder het proces te vertragen. Je kopieert het adres, wacht op de code en rondt de taak af zonder van een korte interactie een blijvende mailrelatie te maken.",
        "Deze scheiding helpt ook wanneer je meerdere diensten vergelijkt. Met één inbox per site blijven bevestigingen, welkomstmails en latere opvolging gescheiden. Je ziet snel welke dienst netjes communiceert en welke meteen te veel marketing stuurt.",
        "Hetzelfde principe helpt ontwikkelaars en kleine webteams. Een tijdelijk adres laat zien of registratie, wachtwoordherstel en meldingen leesbaar aankomen. Na de test is het adres niet meer nodig en blijft de echte teaminbox schoon.",
      ],
    },
    it: {
      h: "Scenari comuni",
      p: [
        "Un uso tipico inizia con una piccola barriera: un download, un forum o uno strumento chiede un indirizzo prima di mostrare il contenuto. In quel momento, un indirizzo temporaneo protegge dai messaggi successivi senza rallentare il flusso. Copi l’indirizzo, aspetti il codice e completi l’attività senza trasformare un’interazione breve in una relazione email duratura.",
        "Questa separazione aiuta anche quando confronti più servizi. Con una casella per sito, conferme, messaggi di benvenuto e follow-up restano separati. Capisci presto quale servizio comunica in modo pulito e quale crea subito pressione commerciale.",
        "Lo stesso principio serve a sviluppatori e piccoli team web. Un indirizzo temporaneo mostra se registrazione, reset password e notifiche arrivano in modo leggibile. Dopo il test, l’indirizzo non serve più e la casella reale del team resta pulita.",
      ],
    },
  }[locale];
  return `<section><h2>${sections.h}</h2>${sections.p.map((p) => `<p>${p}</p>`).join("")}</section>`;
}

function homeOperationalNote(locale) {
  const t = {
    de: ["Kleine Gewohnheiten mit großer Wirkung", "Öffnen Sie das temporäre Postfach immer, bevor Sie den Code anfordern. So sehen Sie sofort, ob die Nachricht angekommen ist, und können bei Bedarf eine neue Adresse wählen. Kopieren Sie außerdem die vollständige Adresse aus der Oberfläche, statt sie abzutippen.", "Wenn ein Code angekommen ist, schließen Sie den Vorgang direkt ab. Je kürzer der Zeitraum zwischen Adresse, Nachricht und Bestätigung bleibt, desto geringer ist die Gefahr von Verwechslungen oder abgelaufenen Codes."],
    fr: ["Petites habitudes, grand effet", "Ouvrez toujours la boîte temporaire avant de demander le code. Vous voyez immédiatement si le message est arrivé et vous pouvez choisir une nouvelle adresse si nécessaire. Copiez aussi l’adresse complète depuis l’interface au lieu de la saisir.", "Quand le code arrive, terminez l’action tout de suite. Plus le délai entre adresse, message et confirmation reste court, plus le risque de confusion ou d’expiration diminue."],
    es: ["Pequeños hábitos con gran efecto", "Abre siempre la bandeja temporal antes de pedir el código. Así ves de inmediato si llegó el mensaje y puedes elegir otra dirección si hace falta. Copia además la dirección completa desde la interfaz en vez de escribirla.", "Cuando llegue el código, termina la acción enseguida. Cuanto más corto sea el tiempo entre dirección, mensaje y confirmación, menor será el riesgo de confusión o códigos caducados."],
    nl: ["Kleine gewoonten met groot effect", "Open de tijdelijke inbox altijd voordat je de code aanvraagt. Zo zie je meteen of het bericht is aangekomen en kun je zo nodig een nieuw adres kiezen. Kopieer ook het volledige adres uit de interface in plaats van het te typen.", "Wanneer de code aankomt, rond je de actie direct af. Hoe korter de tijd tussen adres, bericht en bevestiging blijft, hoe kleiner de kans op verwarring of verlopen codes."],
    it: ["Piccole abitudini, grande effetto", "Apri sempre la casella temporanea prima di chiedere il codice. Così vedi subito se il messaggio è arrivato e puoi scegliere un nuovo indirizzo se serve. Copia inoltre l’indirizzo completo dall’interfaccia invece di digitarlo.", "Quando arriva il codice, completa subito l’azione. Più breve resta il tempo tra indirizzo, messaggio e conferma, minore è il rischio di confusione o codici scaduti."],
  }[locale];
  return `<section><h2>${t[0]}</h2><p>${t[1]}</p><p>${t[2]}</p></section>`;
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
${extraDepth(locale, 0)}
${extraDepth(locale, 1)}
${extraDepth(locale, 2)}
${extraDepth(locale, 3)}
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
  const common = {
    fr: {
      lead: `${name} vous donne un ${keyword} gratuit, sans inscription, avec des messages affichés en temps réel.`,
      steps: ["Ouvrez la page et utilisez l’adresse créée automatiquement.", "Choisissez si besoin un nom personnalisé ou un autre domaine.", "Copiez l’adresse dans le formulaire qui demande un email.", `Attendez l’email de vérification ou le ${l.code}.`, "Ouvrez le message, utilisez le code et terminez la tâche."],
      short: "Le processus reste volontairement court. Aucun profil à remplir, aucune app à installer et rien à nettoyer ensuite. Pour chaque nouvelle tâche, vous pouvez créer une nouvelle adresse.",
      bullets: ["Le spam reste hors de votre vraie boîte.", "Les codes et confirmations arrivent vite.", "Vous ne partagez ni nom, ni téléphone, ni adresse permanente.", "Une nouvelle adresse sépare une inscription de la suivante."],
      basis: `Lisez aussi ${link(locale, "/disposable-email", l.disposable)} et ${link(locale, "/blog/how-to-create-a-temporary-email", l.temp)} pour les bases.`,
      cases: "Temp Mail convient aux téléchargements, comptes d’essai, forums, portails wifi, coupons, newsletters à évaluer et tests de développement pour les parcours d’inscription.",
      dev: "Les développeurs l’utilisent aussi pour vérifier OTP, réinitialisations de mot de passe et notifications sans polluer de vraies boîtes.",
      workflow: ["Routine quotidienne", "Gardez votre vraie boîte pour les relations qui durent : clients, employeurs, banques, écoles, famille et services payants. Utilisez Temp Mail avant que cette relation devienne réelle.", "Une bonne habitude consiste à créer une adresse fraîche par site. Les messages restent séparés, le spam se repère facilement et chaque test peut être fermé dès qu’il est terminé."],
      alias: ["Comparaison avec les alias", "Un alias transfère encore le courrier vers votre compte permanent. C’est utile pour le filtrage durable, mais il garde un chemin vers vous. Une adresse jetable est détachée, courte et sans maintenance."],
      responsible: ["Utilisation responsable", "L’email jetable est un outil de confidentialité, pas une façon d’éviter la responsabilité. Utilisez-le pour des tâches ordinaires et légales, et respectez les règles des services visités.", "Pour les équipes, la même limite s’applique. Une boîte temporaire sert aux tests QA, aux démos et à la formation, pas aux dossiers clients, factures ou alertes de production."],
      habit: ["Bonne habitude quotidienne", "La routine la plus propre est une adresse par site. Réutilisez une adresse seulement lorsque plusieurs messages appartiennent au même test court. Si un formulaire demande paiement, identité ou données de travail, passez à une boîte permanente."],
      privacy: "Le gain de confidentialité vient de la séparation. Votre vraie adresse reste avec les comptes importants, tandis que cette adresse temporaire absorbe les faibles risques. Traitez chaque message comme temporaire et copiez les codes tout de suite.",
      best: "Pour de meilleurs résultats, gardez la page ouverte jusqu’à l’arrivée du message, copiez le code immédiatement et créez une nouvelle adresse pour le site suivant.",
      more: `Pour continuer, lisez ${link(locale, "/blog/is-temp-mail-safe", "sécurité de Temp Mail")}, ${link(locale, "/10-minute-mail", "10 Minute Mail")} et ${link(locale, "/anonymous-email", "email anonyme")}.`,
      faq: [["Est-ce gratuit ?", "Oui. Vous pouvez créer des adresses et lire les messages entrants gratuitement."], ["Dois-je m’inscrire ?", "Non. Il n’y a ni compte ni mot de passe."], ["Puis-je envoyer des emails ?", "Non. Temp Mail sert uniquement à recevoir."], ["À quelle vitesse les codes arrivent-ils ?", "Généralement en quelques secondes. Gardez la boîte ouverte et utilisez les codes tout de suite."]],
    },
    es: {
      lead: `${name} te da un ${keyword} gratis, sin registro, que muestra mensajes en tiempo real.`,
      steps: ["Abre la página y usa la dirección creada automáticamente.", "Elige si quieres un nombre propio u otro dominio.", "Copia la dirección en el formulario que pide correo.", `Espera el email de verificación o el ${l.code}.`, "Abre el mensaje, usa el código y termina la tarea."],
      short: "El proceso es intencionalmente breve. No tienes que completar un perfil, instalar una app ni limpiar nada después. Para cada nueva tarea puedes crear una dirección nueva.",
      bullets: ["El spam queda fuera de tu bandeja real.", "Los códigos y confirmaciones llegan rápido.", "No compartes nombre, teléfono ni dirección permanente.", "Una dirección nueva separa una inscripción de otra."],
      basis: `Lee también ${link(locale, "/disposable-email", l.disposable)} y ${link(locale, "/blog/how-to-create-a-temporary-email", l.temp)} para lo básico.`,
      cases: "Temp Mail encaja con descargas, cuentas de prueba, foros, portales wifi, cupones, newsletters que quieres revisar primero y pruebas de desarrollo para flujos de registro.",
      dev: "Los desarrolladores también lo usan para comprobar OTP, restablecimientos de contraseña y notificaciones sin ensuciar buzones reales.",
      workflow: ["Flujo diario", "Reserva tu bandeja real para relaciones que continúan: clientes, empleadores, bancos, escuelas, familia y servicios que pagas. Usa Temp Mail antes de que esa relación sea real.", "Un hábito útil es crear una dirección nueva por sitio. Mantiene los mensajes separados, facilita identificar spam y permite cerrar cada prueba cuando termina."],
      alias: ["Comparación con los alias", "Un alias todavía reenvía correo a tu cuenta permanente. Sirve para filtrado a largo plazo, pero conserva una ruta hacia ti. Una dirección desechable está separada, dura poco y no se mantiene."],
      responsible: ["Uso responsable", "El correo desechable es una herramienta de privacidad, no una forma de evitar responsabilidad. Úsalo para tareas legales y ordinarias, y respeta las reglas de los servicios que visitas.", "Para equipos, aplica la misma regla. Una bandeja temporal sirve para QA, demos y formación, no para registros de clientes, facturas o alertas de producción."],
      habit: ["Hábito diario", "La rutina más limpia es una dirección por sitio. Reutiliza una dirección solo cuando varios mensajes pertenecen a la misma prueba corta. Si un formulario pide pago, identidad o datos de trabajo, cambia a una bandeja permanente."],
      privacy: "La mejora de privacidad viene de la separación. Tu dirección real queda con las cuentas importantes, mientras esta dirección temporal absorbe riesgos bajos. Trata cada mensaje como temporal y copia los códigos enseguida.",
      best: "Para mejores resultados, mantén la página abierta hasta que llegue el mensaje, copia el código de inmediato y crea una dirección nueva para el siguiente sitio.",
      more: `Puedes seguir con ${link(locale, "/blog/is-temp-mail-safe", "seguridad de Temp Mail")}, ${link(locale, "/10-minute-mail", "10 Minute Mail")} y ${link(locale, "/anonymous-email", "correo anónimo")}.`,
      faq: [["¿Es gratis?", "Sí. Puedes crear direcciones y leer mensajes entrantes gratis."], ["¿Tengo que registrarme?", "No. No hay cuenta ni contraseña."], ["¿Puedo enviar correo?", "No. Temp Mail solo sirve para recibir."], ["¿Qué tan rápido llegan los códigos?", "Normalmente en segundos. Mantén la bandeja abierta y usa los códigos enseguida."]],
    },
    nl: {
      lead: `${name} geeft je een ${keyword} die ${l.free} is, ${l.signup} werkt en berichten ${l.real} toont.`,
      steps: ["Open de pagina en gebruik het automatisch gemaakte adres.", "Kies eventueel een eigen naam of andere domeinnaam.", "Kopieer het adres naar het formulier dat om e-mail vraagt.", `Wacht op de verificatiemail of ${l.code}.`, "Open het bericht, gebruik de code en rond de taak af."],
      short: "Het proces is bewust kort. Je hoeft geen profiel te vullen, geen app te installeren en niets later op te ruimen. Voor elke nieuwe taak kun je een nieuw adres maken.",
      bullets: ["Spam blijft buiten je echte inbox.", "Codes en bevestigingen komen snel binnen.", "Je deelt geen naam, telefoonnummer of permanent adres.", "Een nieuw adres scheidt de ene registratie van de andere."],
      basis: `Lees ook ${link(locale, "/disposable-email", l.disposable)} en ${link(locale, "/blog/how-to-create-a-temporary-email", l.temp)} voor de basis.`,
      cases: "Temp Mail past bij downloads, proefaccounts, forums, wifi-portalen, coupons, nieuwsbrieven die je eerst wilt bekijken en ontwikkeltests voor registratieflows.",
      dev: "Ontwikkelaars gebruiken dit ook om OTP, wachtwoordreset en notificaties te controleren zonder echte mailboxen te vervuilen.",
      workflow: ["Dagelijkse werkwijze", "Bewaar je echte inbox voor relaties die blijven: klanten, werkgevers, banken, scholen, familie en diensten waarvoor je betaalt. Gebruik Temp Mail voor het moment voordat die relatie echt is.", "Een nuttige gewoonte is één vers adres per site. Zo blijven berichten gescheiden, is spam makkelijk te herkennen en sluit je elke test af zodra die klaar is."],
      alias: ["Vergelijking met aliassen", "Een alias stuurt mail nog steeds door naar je permanente account. Dat is goed voor langdurig filteren, maar het houdt een pad naar jou. Een wegwerpadres is losgekoppeld, kortstondig en niet iets dat je onderhoudt."],
      responsible: ["Verantwoord gebruik", "Wegwerp e-mail is privacygereedschap, geen manier om verantwoordelijkheid te ontlopen. Gebruik het voor gewone, wettelijke taken en respecteer de regels van diensten.", "Voor teams geldt dezelfde regel. Een tijdelijke inbox is nuttig voor QA, demo’s en training, niet voor klantgegevens, facturen of productiealerts."],
      habit: ["Dagelijkse gewoonte", "De schoonste routine is één adres per site. Hergebruik een adres alleen wanneer meerdere berichten bij dezelfde korte test horen. Vraagt een formulier om betaling, identiteit of werkdata, stap dan over op een permanente inbox."],
      privacy: "De privacywinst komt door scheiding. Je echte adres blijft bij de accounts die belangrijk zijn, terwijl dit tijdelijke adres de lage risico’s opvangt. Behandel elk bericht als tijdelijk en kopieer codes meteen.",
      best: "Voor het beste resultaat houd je de pagina open tot het bericht aankomt, kopieer je de code meteen en maak je voor de volgende site een nieuw adres.",
      more: `Meer lezen kan via ${link(locale, "/blog/is-temp-mail-safe", "veiligheid van Temp Mail")}, ${link(locale, "/10-minute-mail", "10 Minute Mail")} en ${link(locale, "/anonymous-email", "anonieme e-mail")}.`,
      faq: [["Is het gratis?", "Ja. Je kunt gratis adressen maken en inkomende berichten lezen."], ["Moet ik registreren?", "Nee. Er is geen account en geen wachtwoord."], ["Kan ik e-mail verzenden?", "Nee. Temp Mail is alleen bedoeld om te ontvangen."], ["Hoe snel komen codes aan?", "Meestal binnen enkele seconden. Houd de inbox open en gebruik codes direct."]],
    },
    it: {
      lead: `${name} ti dà un ${keyword} gratuito, ${l.signup}, con messaggi mostrati ${l.real}.`,
      steps: ["Apri la pagina e usa l’indirizzo creato automaticamente.", "Scegli se vuoi un nome personalizzato o un altro dominio.", "Copia l’indirizzo nel modulo che chiede un’email.", `Attendi l’email di verifica o il ${l.code}.`, "Apri il messaggio, usa il codice e completa l’attività."],
      short: "Il processo è volutamente breve. Non devi compilare un profilo, installare un’app o pulire qualcosa dopo. Per ogni nuova attività puoi creare un nuovo indirizzo.",
      bullets: ["Lo spam resta fuori dalla tua casella reale.", "Codici e conferme arrivano rapidamente.", "Non condividi nome, telefono o indirizzo permanente.", "Un nuovo indirizzo separa una registrazione dall’altra."],
      basis: `Leggi anche ${link(locale, "/disposable-email", l.disposable)} e ${link(locale, "/blog/how-to-create-a-temporary-email", l.temp)} per le basi.`,
      cases: "Temp Mail è adatta a download, account di prova, forum, portali wifi, coupon, newsletter da valutare e test di sviluppo per flussi di registrazione.",
      dev: "Gli sviluppatori la usano anche per controllare OTP, reset password e notifiche senza sporcare caselle reali.",
      workflow: ["Flusso quotidiano", "Tieni la casella reale per relazioni che continuano: clienti, datori di lavoro, banche, scuole, famiglia e servizi che paghi. Usa Temp Mail prima che quella relazione diventi reale.", "Una buona abitudine è creare un indirizzo nuovo per ogni sito. I messaggi restano separati, lo spam si riconosce facilmente e ogni test si chiude quando è finito."],
      alias: ["Confronto con gli alias", "Un alias inoltra comunque la posta al tuo account permanente. È utile per filtrare nel tempo, ma mantiene un percorso verso di te. Un indirizzo usa e getta è separato, breve e senza manutenzione."],
      responsible: ["Uso responsabile", "L’email usa e getta è uno strumento di privacy, non un modo per evitare responsabilità. Usala per attività ordinarie e legali, rispettando le regole dei servizi.", "Per i team vale la stessa regola. Una casella temporanea serve per QA, demo e formazione, non per dati clienti, fatture o avvisi di produzione."],
      habit: ["Abitudine quotidiana", "La routine più pulita è un indirizzo per sito. Riusa un indirizzo solo quando più messaggi appartengono allo stesso test breve. Se un modulo chiede pagamento, identità o dati di lavoro, passa a una casella permanente."],
      privacy: "Il vantaggio per la privacy nasce dalla separazione. Il tuo indirizzo reale resta con gli account importanti, mentre questo indirizzo temporaneo assorbe rischi bassi. Tratta ogni messaggio come temporaneo e copia subito i codici.",
      best: "Per ottenere risultati migliori, tieni aperta la pagina finché arriva il messaggio, copia subito il codice e crea un nuovo indirizzo per il sito successivo.",
      more: `Puoi continuare con ${link(locale, "/blog/is-temp-mail-safe", "sicurezza di Temp Mail")}, ${link(locale, "/10-minute-mail", "10 Minute Mail")} e ${link(locale, "/anonymous-email", "email anonima")}.`,
      faq: [["È gratis?", "Sì. Puoi creare indirizzi e leggere messaggi in arrivo gratis."], ["Devo registrarmi?", "No. Non c’è account né password."], ["Posso inviare email?", "No. Temp Mail serve solo a ricevere."], ["Quanto velocemente arrivano i codici?", "Di solito entro pochi secondi. Tieni aperta la casella e usa subito i codici."]],
    },
  }[locale];
  return `<h1>${name}</h1>
<p class='lead'>${common.lead}</p>
${cta(locale)}
<div class='ad-slot'></div>
<h2>${headings[0]}</h2>
<p>${copy[0]}</p><p>${copy[1]}</p><p>${copy[2]}</p>
<h2>${headings[1]}</h2>
<ol>${common.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
<p>${common.short}</p>
<h2>${headings[2]}</h2>
<p>${copy[2]}</p><ul>${common.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>
<p>${common.basis}</p>
<h2>${headings[3]}</h2>
<p>${common.cases}</p>
<p>${common.dev}</p>
<h2>${common.workflow[0]}</h2>
<p>${common.workflow[1]}</p>
<p>${common.workflow[2]}</p>
<h2>${common.alias[0]}</h2>
<p>${common.alias[1]}</p>
<h2>${common.responsible[0]}</h2>
<p>${common.responsible[1]}</p>
<p>${common.responsible[2]}</p>
<h2>${common.habit[0]}</h2>
<p>${common.habit[1]}</p>
<h2>${headings[4]}</h2>
<p>${copy[3]}</p>
<h2>${headings[5]}</h2>
<p>${common.privacy}</p>
<p>${common.best}</p>
<p>${common.more}</p>
<h2>${headings[6]}</h2>
${common.faq.map(([q, a]) => `<h3>${q}</h3><p>${a}</p>`).join("")}
${depthBlock(locale, "landing")}
${extraDepth(locale, 0)}
${extraDepth(locale, 1)}
${extraDepth(locale, 2)}
${extraDepth(locale, 3)}
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
    descStart: "Nutzen Sie Temp Mail für", descEnd: "mit einem kostenlosen reinen Empfangspostfach. Ehrliche Hinweise zu Verifizierung, blockierten Domains, Datenschutz und dem Moment, in dem eine echte E-Mail besser ist.",
    hubTitle: "Temp Mail für beliebte Apps und Websites", hubDesc: "Ratgeber zu Temp Mail für beliebte Apps und Websites: wo Wegwerf-E-Mail passt, wo Domains blockiert werden können und wann Sie eine echte Mailbox verwenden sollten.",
    lead: (name) => `Nutzen Sie eine kostenlose Wegwerf-E-Mail für ${name}, wenn Sie für niedrige Risiken, Tests, Datenschutz oder Spam-Kontrolle ein schnelles reines Empfangspostfach brauchen.`,
    hubLead: "Praktische und ehrliche Ratgeber zur Nutzung von Wegwerf-E-Mail bei Apps, sozialen Netzwerken, Spielen, Streaming-Diensten, Shops und Produktivitätstools.",
    h: {
      choose: "Plattform auswählen", read: "So lesen Sie diese Ratgeber", best: "Wo Temp Mail am besten passt", no: "Was diese Seiten nicht fördern", why: "Warum Akzeptanz je nach Plattform schwankt",
      use: (name) => `Warum Menschen Temp Mail bei ${name} nutzen`,
      accept: (name) => `Akzeptiert ${name} temporäre E-Mail?`,
      how: (name) => `So verwenden Sie eine temporäre Adresse bei ${name}`,
      reject: (name) => `Wenn ${name} die Adresse ablehnt`,
      avoid: (name) => `Wann Sie Temp Mail für ${name} nicht verwenden sollten`,
      links: "Hilfreiche verwandte Seiten", faq: "Häufige Fragen", substance: (name) => `Praktische Einordnung für ${name}`,
    },
    platformLabel: (name) => `Temp Mail für ${name}`,
    category: {
      "chat communities": "Chat-Communitys", "forums and communities": "Foren und Communitys", "short video apps": "Kurzvideo-Apps", "messaging": "Messaging", "social apps": "Social Apps", "social networks": "soziale Netzwerke", "streaming communities": "Streaming-Communitys", "gaming stores": "Gaming-Stores", "gaming platforms": "Gaming-Plattformen", "console gaming": "Konsolen-Gaming", "music streaming": "Musikstreaming", "streaming services": "Streaming-Dienste", "shopping": "Shopping", "marketplaces": "Marktplätze", "visual discovery": "visuelle Suche", "professional networks": "berufliche Netzwerke", "question and answer sites": "Frage-und-Antwort-Seiten", "publishing": "Publishing", "newsletter platforms": "Newsletter-Plattformen", "AI tools": "KI-Tools", "design tools": "Design-Tools", "cloud storage": "Cloud-Speicher", "dating apps": "Dating-Apps", "email providers": "E-Mail-Anbieter", "email and identity providers": "E-Mail- und Identitätsanbieter",
    },
    cta: "→ Kostenlose temporäre E-Mail-Adresse holen",
    home: "Temp Mail", hub: "Hub für Temp Mail nach Plattform", disposable: "Wegwerf-E-Mail", generator: "Temp Mail Generator", safety: "Sicherheitsratgeber zu Temp Mail",
    hubBody: [
      "Jede Seite erklärt, wann eine temporäre E-Mail-Adresse sinnvoll ist, ob eine Plattform bekannte Wegwerf-Domains ablehnen kann, was bei einer abgelehnten Adresse zu tun ist und wann eine dauerhafte Mailbox die bessere Wahl ist. Die ehrliche Antwort unterscheidet sich je nach Dienst: Ein Forum oder eine lockere Community ist oft flexibler, während soziale Netzwerke, Shops, Cloud-Speicher und Identitätsanbieter zusätzliche Vertrauenssignale verlangen können.",
      "Nutzen Sie Temp Mail für Datenschutz, weniger Spam, Tests mit niedrigem Risiko, einmaligen Zugang und Konten, deren Verlust keinen echten Schaden verursacht. Verwenden Sie es nicht für Bank, Arbeit, Behörden, Gesundheit, bezahlte Abos, Konten mit Käufen oder alles, was später wiederhergestellt werden muss. Der Dienst ist kostenlos, sofort verfügbar, nur zum Empfangen gedacht, unterstützt eigene Namen und mehrere Domains und bereinigt Postfächer regelmäßig.",
      "Am besten passt Temp Mail, wenn die E-Mail nur einmal gebraucht wird: eine Forenregistrierung bestätigen, prüfen, ob eine App einen Code sendet, einer Community kurz beitreten oder einen Produktfluss testen. Sie erhalten eine echte eingehende Nachricht, ohne aus einer kleinen Aufgabe eine dauerhafte E-Mail-Beziehung zu machen.",
      "Schwächer passt Temp Mail bei Plattformen, die mehr Vertrauen verlangen. Social Apps, Dating-Apps, Gaming-Stores, Cloud-Speicher und Microsoft-ähnliche Identitätskonten können Wegwerf-Domains ablehnen oder Telefonverifizierung verlangen. Wenn eine Plattform ablehnt, wechseln Sie höchstens einmal die Domain, sofern das Konto wirklich entbehrlich ist. Wenn das Konto wichtig wird, verwenden Sie eine echte Mailbox.",
      "Diese Ratgeber fördern keinen Betrug, keinen Spam, keine Belästigung, keine Umgehung von Sperren, keinen Zahlungsmissbrauch und keine massenhafte Kontoerstellung. Wegwerf-E-Mail ist ein Werkzeug für Datenschutz und Postfachhygiene. Wenn ein Dienst temporäre E-Mail verbietet, respektieren Sie diese Regel und nutzen Sie einen wiederherstellbaren Account.",
      "Die praktische Regel ist einfach: Wenn der Verlust des Kontos morgen ärgerlich, aber harmlos wäre, kann Temp Mail passen. Wenn dadurch Geld, Dateien, Follower, Kontakte, Käufe, Arbeit, Abos oder Zugang zu einem anderen wichtigen Konto verloren gingen, gehört das Konto in eine normale E-Mail-Adresse, die Sie kontrollieren.",
      "Akzeptanz ist nicht zufällig. Community-Seiten und Newsletter-Tools prüfen oft nur, ob eine Adresse eine Bestätigung empfangen kann. Marktplätze, Stores, Gaming-Plattformen, Speicherdienste und Identitätsanbieter denken an Wiederherstellung, Zahlungen, Missbrauchsschutz, Support und langfristigen Besitz. Deshalb versprechen die einzelnen Seiten nie, dass jede Adresse überall funktioniert.",
    ],
    generic: {
      intro: (name, category) => `${name} gehört zur Kategorie ${category}. Eine temporäre Adresse ist dort nützlich, wenn das Konto experimentell, kurzlebig oder klar von Ihrer Hauptidentität getrennt sein soll. Sie bekommen ein Postfach, das den Bestätigungslink oder Einmalcode empfängt, ohne vorher ein weiteres dauerhaftes E-Mail-Konto anzulegen. Temp Mail ist kostenlos, sofort verfügbar, nur zum Empfangen gedacht und verlangt keine Registrierung und kein Passwort. Sie können eine zufällige Adresse verwenden oder einen eigenen Namen mit einer verfügbaren Domain kombinieren.`,
      mindset: (name) => `Die richtige Erwartung ist wichtig. Temp Mail ist für Datenschutz, Tests und saubere Trennung bei niedrigen Risiken gedacht, nicht für Betrug, Belästigung, Sperrumgehung, Spam oder massenhafte Fake-Konten. Wenn Ihr ${name}-Konto Geld, Käufe, Kontakte, gespeicherte Arbeit, Creator-Funktionen, Abos oder etwas enthält, das Sie später wiederherstellen müssen, verwenden Sie eine dauerhafte E-Mail-Adresse.`,
      accept: (name) => `${name} kann eine temporäre Adresse akzeptieren, kann bekannte Wegwerf-Domains aber auch blockieren oder zusätzliche Prüfungen verlangen. Manche Plattformen verlangen Telefonverifizierung, Gerätevertrauen oder andere Signale, selbst wenn die E-Mail zunächst angenommen wurde. Kein Temp-Mail-Dienst kann Akzeptanz auf jeder Plattform garantieren.`,
      signup: (name) => `Öffnen Sie Temp Mail in einem zweiten Tab, kopieren Sie die erzeugte Adresse und fügen Sie sie bei ${name} in das E-Mail-Feld ein. Halten Sie das Postfach offen, während ${name} den Code oder Link sendet. Öffnen Sie die Nachricht sofort, kopieren Sie den Code oder nutzen Sie den Bestätigungslink und schließen Sie die Aufgabe ab, solange das Postfach verfügbar ist.`,
      reject: (name) => `Wenn ${name} die Adresse ablehnt, erzeugen Sie eine neue Adresse und wählen Sie bei Bedarf eine andere Domain. Prüfen Sie außerdem, ob die Adresse exakt kopiert wurde. Wenn ${name} Telefonverifizierung verlangt oder wiederholt blockiert, ersetzt Temp Mail diese Prüfung nicht. Nutzen Sie dann eine normale Mailbox, besonders wenn das Konto dauerhaft sein soll.`,
      avoid: (name) => `Verwenden Sie Temp Mail nicht für ein wichtiges ${name}-Konto. Alles mit Zahlungen, Käufen, Abos, Wiederherstellung, geschäftlicher Nutzung, Arbeit, Familienzugang, gespeicherten Dateien, wichtigen Kontakten oder langfristigem Wert braucht eine Mailbox, die Ihnen dauerhaft gehört.`,
      receive: (name) => `Weil das Postfach nur zum Empfangen gedacht ist, können Sie Nachrichten lesen, aber nicht von dieser Adresse antworten. Für Bestätigungslinks, OTP-Codes, Willkommensnachrichten und einfache Account-Bestätigungen reicht das. Wenn ${name} spätere Supportgespräche, Sicherheitswarnungen oder Rechnungen per E-Mail sendet, ist eine temporäre Adresse die falsche Grundlage.`,
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
    faqs: (name) => [[`Kann ich ${name} mit Temp Mail verifizieren?`, `Manchmal, aber nicht garantiert. ${name} kann Wegwerf-Domains blockieren oder zusätzliche Verifizierung verlangen.`], [`Ist Temp Mail für ${name} kostenlos?`, "Ja. Die Adresse ist kostenlos und kann eingehende Nachrichten in Echtzeit empfangen."], [`Kann ich damit Telefonverifizierung umgehen?`, "Nein. Wenn eine Plattform ein Telefon verlangt, ersetzt ein temporäres Postfach diese Prüfung nicht."], [`Kann ich E-Mails von dieser Adresse senden?`, "Nein. Temp Mail ist nur zum Empfangen gedacht und für eingehende Codes, Links und Bestätigungen gedacht."], [`Wie lange sollte ich das Postfach offen lassen?`, `Bis der ${name}-Code oder Bestätigungslink verwendet wurde. Kopieren Sie alles Wichtige sofort, denn Postfächer werden regelmäßig geleert.`]],
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
      links: "Pages utiles liées", faq: "Häufige Fragen", substance: (name) => `Contexte pratique pour ${name}`,
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
  nl: {
    titleFor: "Temp Mail voor", titleSuffix: "gratis wegwerp e-mail",
    descStart: "Gebruik Temp Mail voor", descEnd: "met een gratis inbox die alleen kan ontvangen. Eerlijke uitleg over verificatie, geblokkeerde domeinen, privacy en wanneer een echt e-mailadres beter is.",
    hubTitle: "Temp Mail voor populaire apps en sites", hubDesc: "Gidsen voor Temp Mail bij populaire apps en sites: waar wegwerp e-mail helpt, waar domeinen geblokkeerd kunnen worden en wanneer je een vaste inbox gebruikt.",
    lead: (name) => `Gebruik een gratis wegwerp e-mailadres voor ${name} wanneer je een snelle, alleen-ontvangende inbox nodig hebt voor een test met laag risico, privacy of minder spam.`,
    hubLead: "Praktische en eerlijke gidsen voor wegwerp e-mail bij apps, sociale netwerken, games, streamingdiensten, winkels en productiviteitstools.",
    h: {
      choose: "Kies een platform", read: "Zo lees je deze gidsen", best: "Waar Temp Mail het beste past", no: "Wat deze pagina’s niet aanmoedigen", why: "Waarom acceptatie per platform verschilt",
      use: (name) => `Waarom mensen Temp Mail gebruiken met ${name}`,
      accept: (name) => `Accepteert ${name} tijdelijke e-mail?`,
      how: (name) => `Zo gebruik je een tijdelijk adres met ${name}`,
      reject: (name) => `Als ${name} het adres weigert`,
      avoid: (name) => `Wanneer je Temp Mail niet moet gebruiken voor ${name}`,
      links: "Handige gerelateerde pagina’s", faq: "Veelgestelde vragen", substance: (name) => `Praktische context voor ${name}`,
    },
    platformLabel: (name) => `Temp Mail voor ${name}`,
    category: {
      "chat communities": "chatcommunity’s", "forums and communities": "forums en community’s", "short video apps": "korte video-apps", "messaging": "berichtenapps", "social apps": "sociale apps", "social networks": "sociale netwerken", "streaming communities": "streamingcommunity’s", "gaming stores": "gamewinkels", "gaming platforms": "gameplatforms", "console gaming": "consolegaming", "music streaming": "muziekstreaming", "streaming services": "streamingdiensten", "shopping": "winkelen", "marketplaces": "marktplaatsen", "visual discovery": "visuele ontdekking", "professional networks": "professionele netwerken", "question and answer sites": "vraag-en-antwoord-sites", "publishing": "publiceren", "newsletter platforms": "nieuwsbriefplatforms", "AI tools": "AI-tools", "design tools": "designtools", "cloud storage": "cloudopslag", "dating apps": "datingapps", "email providers": "e-mailproviders", "email and identity providers": "e-mail- en identiteitsproviders",
    },
    cta: "→ Gratis tijdelijk e-mailadres ophalen",
    home: "Temp Mail", hub: "Temp Mail hub per platform", disposable: "wegwerp e-mail", generator: "Temp Mail Generator", safety: "veiligheidsgids voor Temp Mail",
    hubBody: [
      "Elke pagina legt uit wanneer een tijdelijk e-mailadres zinvol is, of een platform bekende wegwerpdomeinen kan weigeren, wat je doet als een adres wordt afgewezen en wanneer een vaste mailbox de betere keuze is. Het eerlijke antwoord verschilt per dienst: een forum of losse community kan soepel zijn, terwijl sociale netwerken, winkels, cloudopslag en identiteitsproviders vaak meer vertrouwenssignalen vragen.",
      "Gebruik Temp Mail voor privacy, minder spam, tests met laag risico, eenmalige toegang en accounts die je zonder echte schade kunt verliezen. Gebruik het niet voor bankzaken, werk, overheid, zorg, betaalde abonnementen, accounts met aankopen of toegang die je later moet herstellen. De dienst is gratis, direct beschikbaar, alleen voor ontvangst, ondersteunt eigen namen en meerdere domeinen, en inboxen worden periodiek opgeschoond.",
      "De beste situatie is een taak waarvoor e-mail maar één keer nodig is: een forumregistratie bevestigen, controleren of een app een code stuurt, kort een community bezoeken of een productflow testen. Je ontvangt een echt inkomend bericht zonder van een kleine taak een permanente e-mailrelatie te maken.",
      "Temp Mail past minder goed bij platformen die meer vertrouwen vragen. Sociale apps, datingapps, gamewinkels, clouddiensten en Microsoft-achtige identiteitsaccounts kunnen wegwerpdomeinen weigeren of telefoonverificatie vragen. Als een platform weigert, wissel hooguit één keer van domein als het account echt wegwerpbaar is. Als het account belangrijk wordt, gebruik je een echte inbox.",
      "Deze gidsen gaan niet over fraude, spam, intimidatie, het omzeilen van bans, betalingsmisbruik of massaal accounts maken. Wegwerp e-mail is een hulpmiddel voor privacy en inboxhygiëne. Als een dienst tijdelijke e-mail verbiedt, respecteer die regel en gebruik een account dat je goed kunt herstellen.",
      "De praktische test is simpel: als verlies van het account morgen vervelend maar onschuldig zou zijn, kan Temp Mail passen. Als je geld, bestanden, volgers, contacten, aankopen, werk, abonnementen of toegang tot een belangrijk account verliest, gebruik dan een normaal adres dat je beheert.",
      "Acceptatie is niet willekeurig. Communitysites en nieuwsbriefhulpmiddelen controleren vaak alleen of een adres een bevestiging kan ontvangen. Marktplaatsen, winkels, gameplatforms, opslagdiensten en identiteitsproviders denken aan herstel, betalingen, misbruikpreventie, support en eigendom op lange termijn. Daarom beloven deze pagina’s nergens universele acceptatie.",
    ],
    generic: {
      intro: (name, category) => `${name} valt in de categorie ${category}. Een tijdelijk adres is daar nuttig wanneer het account experimenteel, kortdurend of duidelijk gescheiden van je hoofdidentiteit moet blijven. Je krijgt een inbox die een bevestigingslink of eenmalige code kan ontvangen zonder eerst nog een permanent e-mailaccount te maken. Temp Mail is gratis, direct, alleen voor ontvangst en vraagt geen registratie of wachtwoord. Je kunt een willekeurig adres gebruiken of een eigen naam combineren met een beschikbaar domein.`,
      mindset: (name) => `De juiste verwachting is belangrijk. Temp Mail is bedoeld voor privacy, tests en nette scheiding bij laag risico, niet voor fraude, intimidatie, regelomzeiling, spam of massaal nepaccounts maken. Als je ${name}-account geld, aankopen, contacten, opgeslagen werk, creatorfuncties, abonnementen of iets bevat dat je later moet herstellen, gebruik dan een permanent e-mailadres.`,
      accept: (name) => `${name} kan een tijdelijk adres accepteren, maar kan bekende wegwerpdomeinen ook blokkeren of extra controles vragen. Sommige platforms eisen telefoonverificatie, apparaatreputatie of andere signalen, zelfs als de e-mail eerst is geaccepteerd. Geen enkele temp-maildienst kan acceptatie overal garanderen.`,
      signup: (name) => `Open Temp Mail in een tweede tabblad, kopieer het gegenereerde adres en plak het in het e-mailveld van ${name}. Houd de inbox open terwijl ${name} de code of link verzendt. Open het bericht meteen, kopieer de code of gebruik de bevestigingslink en rond de taak af zolang de inbox beschikbaar is.`,
      reject: (name) => `Als ${name} het adres weigert, maak dan een nieuw adres en kies zo nodig een ander domein. Controleer ook of het adres exact is gekopieerd. Als ${name} telefoonverificatie vraagt of meerdere pogingen blokkeert, vervangt Temp Mail die controle niet. Gebruik dan een normale inbox, zeker als het account moet blijven bestaan.`,
      avoid: (name) => `Gebruik Temp Mail niet voor een belangrijk ${name}-account. Alles met betalingen, aankopen, abonnementen, herstel, zakelijk gebruik, familie, opgeslagen bestanden, belangrijke contacten of blijvende waarde heeft een mailbox nodig die langdurig van jou is.`,
      receive: (name) => `Omdat de inbox alleen kan ontvangen, kun je berichten lezen maar niet vanaf dit adres antwoorden. Dat is genoeg voor bevestigingslinks, OTP-codes, welkomstberichten en eenvoudige accountbevestiging. Als ${name} later support, beveiligingsmeldingen of facturen per mail stuurt, is een tijdelijk adres geen goede basis.`,
      storage: "Tijdelijke inboxen worden periodiek opgeschoond en zijn gemaakt om achter te laten. Dat is handig voor wegwerpregistraties, maar riskant voor herstel. Gebruik je echte inbox voor bankzaken, werk, overheid, zorg, betaalde diensten, zakelijke accounts en alles rond identiteit, geld, wettelijke verplichtingen of langdurige toegang.",
      related: "Als je opties vergelijkt, begin dan bij de gelokaliseerde hub en lees ook de basis over wegwerp e-mail en veiligheid. Nabije platformgidsen helpen beoordelen waar een wegwerpinbox zinvol is en waar een dienst waarschijnlijk strengere controles gebruikt.",
      rule: (name) => `De veiligste regel voor ${name}: bepaal vóór registratie of het account tijdelijk of permanent is. Tijdelijke accounts kunnen tijdelijke infrastructuur gebruiken. Permanente accounts hebben een permanente inbox nodig, omdat wachtwoordresets, loginwaarschuwingen, beleidsmeldingen, bonnetjes en supportantwoorden weken of maanden later kunnen aankomen.`,
      substance: (name, category) => `Bij ${name} is de context ${category} doorslaggevend. Hoe dichter een dienst bij identiteit, betalingen, eigendom, bestanden, professionele communicatie of persoonlijke relaties ligt, hoe slechter een wegwerpadres past. Hoe meer het gaat om een korte test, een eenmalige bevestiging of vrijblijvend meekijken in een community, hoe beter Temp Mail kan helpen. Gebruik het adres alleen voor dat beperkte moment en stap over op een echte inbox zodra het account waarde krijgt.`,
      caution: (name) => `Deze inschatting blijft bewust voorzichtig: ${name} kan vandaag een domein accepteren en het morgen na een filterwijziging weigeren. Een ander domein kan werken terwijl het eerste wordt geblokkeerd. Ook een registratie die eerst lukt, kan later extra controles krijgen.`,
      relatedLinks: (links) => `Begin met ${links[0]}, lees ${links[1]} en ${links[2]}, of vergelijk nabije gidsen zoals ${links[3]} en ${links[4]}.`,
      boundary: (name) => `Voor ${name} geldt dus dezelfde grens als voor elk ander platform: Temp Mail is sterk wanneer de actie kort, omkeerbaar en zonder blijvende waarde is. Zodra persoonlijke contacten, betalingen, opgeslagen inhoud, moderatierechten, professionele identiteit of belangrijk herstel meespelen, wordt een tijdelijk adres een zwakke plek.`,
    },
    steps: (name) => [`Open Temp Mail in een tweede tabblad en kopieer het gegenereerde adres.`, `Gebruik het willekeurige adres of kies een eigen naam en ander domein.`, `Plak het adres in het e-mailveld van ${name} en verstuur het formulier.`, `Houd de inbox open terwijl ${name} het bericht verstuurt.`, `Open de verificatiemail, kopieer de code of gebruik de link en rond de taak af.`],
    rejectList: ["Maak een nieuw adres en probeer een ander domein.", "Kopieer het adres exact vanuit Temp Mail in plaats van het over te typen.", "Wacht kort als het platform zegt dat er een bericht is verzonden.", "Verwacht telefoonverificatie bij strengere platforms.", "Gebruik een permanent adres als het account belangrijk is of herhaalde pogingen frictie veroorzaken."],
    faqs: (name) => [[`Kan ik ${name} verifiëren met Temp Mail?`, `Soms, maar het is niet gegarandeerd. ${name} kan wegwerpdomeinen blokkeren of extra verificatie vragen.`], [`Is Temp Mail voor ${name} gratis?`, "Ja. Het adres is gratis en kan inkomende berichten realtime ontvangen."], ["Kan ik telefoonverificatie omzeilen?", "Nee. Als een platform een telefoon vraagt, vervangt een tijdelijke inbox die controle niet."], ["Kan ik e-mail verzenden vanaf dit adres?", "Nee. Temp Mail is alleen voor ontvangst en bedoeld voor inkomende codes, links en bevestigingen."], ["Hoe lang moet ik de inbox open houden?", `Tot de code of bevestigingslink van ${name} is gebruikt. Kopieer belangrijke informatie direct, want inboxen worden periodiek opgeschoond.`]],
  },
  it: {
    titleFor: "Temp Mail per", titleSuffix: "email usa e getta gratis",
    descStart: "Usa Temp Mail per", descEnd: "con una casella gratuita solo in ricezione. Guida onesta su verifica, domini bloccati, privacy e quando è meglio usare un indirizzo reale.",
    hubTitle: "Temp Mail per app e siti popolari", hubDesc: "Guide Temp Mail per app e siti popolari: dove l’email usa e getta può aiutare, dove i domini possono essere bloccati e quando usare una casella permanente.",
    lead: (name) => `Usa un indirizzo email usa e getta gratuito per ${name} quando ti serve una casella rapida, solo in ricezione, per test a basso rischio, privacy o controllo dello spam.`,
    hubLead: "Guide pratiche e oneste per usare email usa e getta con app, social network, giochi, streaming, negozi e strumenti di produttività.",
    h: {
      choose: "Scegli una piattaforma", read: "Come leggere queste guide", best: "Dove Temp Mail funziona meglio", no: "Cosa non incoraggiano queste pagine", why: "Perché l’accettazione cambia tra piattaforme",
      use: (name) => `Perché usare Temp Mail con ${name}`,
      accept: (name) => `${name} accetta email temporanee?`,
      how: (name) => `Come usare un indirizzo temporaneo con ${name}`,
      reject: (name) => `Se ${name} rifiuta l’indirizzo`,
      avoid: (name) => `Quando non usare Temp Mail per ${name}`,
      links: "Pagine correlate utili", faq: "Domande frequenti", substance: (name) => `Contesto pratico per ${name}`,
    },
    platformLabel: (name) => `Temp Mail per ${name}`,
    category: {
      "chat communities": "community di chat", "forums and communities": "forum e community", "short video apps": "app di video brevi", "messaging": "messaggistica", "social apps": "app social", "social networks": "social network", "streaming communities": "community di streaming", "gaming stores": "negozi di giochi", "gaming platforms": "piattaforme di gioco", "console gaming": "gaming su console", "music streaming": "streaming musicale", "streaming services": "servizi di streaming", "shopping": "shopping", "marketplaces": "marketplace", "visual discovery": "scoperta visuale", "professional networks": "reti professionali", "question and answer sites": "siti di domande e risposte", "publishing": "pubblicazione", "newsletter platforms": "piattaforme newsletter", "AI tools": "strumenti IA", "design tools": "strumenti di design", "cloud storage": "archiviazione cloud", "dating apps": "app di incontri", "email providers": "provider email", "email and identity providers": "provider email e identità",
    },
    cta: "→ Ottieni un indirizzo Temp Mail gratuito",
    home: "Temp Mail", hub: "hub Temp Mail per piattaforma", disposable: "email usa e getta", generator: "generatore Temp Mail", safety: "guida sicurezza Temp Mail",
    hubBody: [
      "Ogni pagina spiega quando un indirizzo email temporaneo ha senso, se una piattaforma può rifiutare domini usa e getta noti, cosa fare quando un indirizzo viene respinto e quando una casella permanente è la scelta migliore. La risposta onesta cambia per servizio: un forum o una community leggera può essere flessibile, mentre social network, negozi, cloud storage e provider di identità spesso chiedono più segnali di fiducia.",
      "Usa Temp Mail per privacy, meno spam, test a basso rischio, accesso una tantum e account che puoi perdere senza danni reali. Non usarla per banca, lavoro, pubblica amministrazione, salute, abbonamenti pagati, account con acquisti o accessi da recuperare più avanti. Il servizio è gratuito, immediato, solo in ricezione, supporta nomi personalizzati e più domini, e le caselle vengono pulite periodicamente.",
      "Il caso migliore è un’attività in cui l’email serve una sola volta: confermare un forum, verificare se un’app invia un codice, entrare brevemente in una community o testare un flusso prodotto. Ricevi un vero messaggio in arrivo senza trasformare un piccolo passaggio in una relazione email permanente.",
      "Temp Mail è meno adatta alle piattaforme che chiedono più fiducia. App social, app di incontri, negozi di giochi, servizi cloud e account di identità in stile Microsoft possono rifiutare domini usa e getta o chiedere verifica telefonica. Se una piattaforma rifiuta, cambia dominio una sola volta se l’account è davvero sacrificabile. Se l’account conta, usa una casella reale.",
      "Queste guide non parlano di frode, spam, molestie, aggiramento dei ban, abuso dei pagamenti o creazione massiva di account. L’email usa e getta è uno strumento di privacy e igiene della casella. Se un servizio vieta email temporanee, rispetta quella regola e usa un account recuperabile.",
      "Il test pratico è semplice: se perdere l’account domani sarebbe fastidioso ma innocuo, Temp Mail può andare bene. Se perderlo significa denaro, file, follower, contatti, acquisti, lavoro, abbonamenti o accesso a un altro account importante, usa un indirizzo normale che controlli.",
      "L’accettazione non è casuale. Community e strumenti newsletter spesso controllano solo che un indirizzo possa ricevere una conferma. Marketplace, negozi, piattaforme di gioco, storage e provider di identità pensano a recupero, pagamenti, prevenzione abusi, supporto e proprietà a lungo termine. Per questo le pagine non promettono mai accettazione universale.",
    ],
    generic: {
      intro: (name, category) => `${name} rientra nella categoria ${category}. Un indirizzo temporaneo è utile quando l’account è sperimentale, breve o chiaramente separato dalla tua identità principale. Ottieni una casella che può ricevere il link di conferma o il codice monouso senza creare prima un altro account email permanente. Temp Mail è gratuita, immediata, solo in ricezione e non richiede registrazione né password. Puoi usare un indirizzo casuale o scegliere un nome con uno dei domini disponibili.`,
      mindset: (name) => `L’aspettativa giusta è importante. Temp Mail serve per privacy, test e separazione pulita in usi a basso rischio, non per frode, molestie, aggiramento delle regole, spam o creazione massiva di account falsi. Se il tuo account ${name} conterrà denaro, acquisti, contatti, lavoro salvato, strumenti creator, abbonamenti o qualcosa da recuperare più tardi, usa un indirizzo permanente.`,
      accept: (name) => `${name} può accettare un indirizzo temporaneo, ma può anche bloccare domini usa e getta noti o chiedere controlli aggiuntivi. Alcune piattaforme richiedono telefono, reputazione del dispositivo o altri segnali anche quando l’email è accettata all’inizio. Nessun servizio di temp mail può garantire accettazione ovunque.`,
      signup: (name) => `Apri Temp Mail in una seconda scheda, copia l’indirizzo generato e incollalo nel campo email di ${name}. Tieni aperta la casella mentre ${name} invia il codice o il link. Apri subito il messaggio, copia il codice o usa il link di conferma e completa l’attività mentre la casella è disponibile.`,
      reject: (name) => `Se ${name} rifiuta l’indirizzo, genera un nuovo indirizzo e scegli un altro dominio se serve. Verifica anche che l’indirizzo sia stato copiato esattamente. Se ${name} chiede verifica telefonica o blocca più tentativi, Temp Mail non sostituisce quel controllo. Usa una casella normale, soprattutto se l’account deve durare.`,
      avoid: (name) => `Non usare Temp Mail per un account ${name} importante. Tutto ciò che riguarda pagamenti, acquisti, abbonamenti, recupero, uso professionale, famiglia, file salvati, contatti importanti o valore duraturo richiede una casella email che possiedi nel tempo.`,
      receive: (name) => `Poiché la casella è solo in ricezione, puoi leggere i messaggi ma non rispondere da quell’indirizzo. È sufficiente per link di conferma, codici OTP, messaggi di benvenuto e verifiche semplici. Se ${name} invierà in seguito supporto, avvisi di sicurezza o fatture, un indirizzo temporaneo è una base debole.`,
      storage: "Le caselle temporanee vengono pulite periodicamente e sono fatte per essere abbandonate. Questo è utile per registrazioni usa e getta, ma rischioso per il recupero. Usa la tua casella reale per banca, lavoro, pubblica amministrazione, salute, servizi pagati, account business e tutto ciò che riguarda identità, denaro, obblighi legali o accesso a lungo termine.",
      related: "Se stai confrontando le opzioni, parti dall’hub localizzato e leggi anche le basi sull’email usa e getta e sulla sicurezza. Le guide di piattaforme vicine aiutano a capire dove una casella usa e getta ha senso e dove un servizio probabilmente applica controlli più rigidi.",
      rule: (name) => `La regola più sicura per ${name}: decidi prima della registrazione se l’account è temporaneo o permanente. Gli account temporanei possono usare infrastruttura temporanea. Gli account permanenti hanno bisogno di una casella permanente, perché reset password, avvisi di accesso, comunicazioni di policy, ricevute e risposte del supporto possono arrivare settimane o mesi dopo.`,
      substance: (name, category) => `Per ${name}, il contesto ${category} è decisivo. Più un servizio è vicino a identità, pagamenti, proprietà, file, comunicazione professionale o relazioni personali, meno un indirizzo usa e getta è adatto. Più si tratta di un test breve, una conferma singola o uno sguardo senza impegno in una community, più Temp Mail può aiutare. Usa l’indirizzo solo per quel momento limitato e passa a una casella reale appena l’account acquisisce valore.`,
      caution: (name) => `Questa valutazione resta volutamente prudente: ${name} può accettare un dominio oggi e rifiutarlo domani dopo un cambio di filtri. Un altro dominio può funzionare mentre il primo è bloccato. Anche una registrazione accettata all’inizio può attivare controlli aggiuntivi in seguito.`,
      relatedLinks: (links) => `Inizia da ${links[0]}, leggi ${links[1]} e ${links[2]}, oppure confronta guide vicine come ${links[3]} e ${links[4]}.`,
      boundary: (name) => `Per ${name}, il limite è lo stesso di qualsiasi altra piattaforma: Temp Mail è utile quando l’azione è breve, reversibile e senza valore duraturo. Appena entrano in gioco contatti personali, pagamenti, contenuti salvati, permessi di moderazione, identità professionale o recupero importante, un indirizzo temporaneo diventa un punto debole.`,
    },
    steps: (name) => [`Apri Temp Mail in una seconda scheda e copia l’indirizzo generato.`, `Usa l’indirizzo casuale oppure scegli un nome personalizzato e un altro dominio.`, `Incolla l’indirizzo nel campo email di ${name} e invia il modulo.`, `Tieni aperta la casella mentre ${name} invia il messaggio.`, `Apri l’email di verifica, copia il codice o usa il link e completa l’attività.`],
    rejectList: ["Genera un nuovo indirizzo e prova un altro dominio.", "Copia l’indirizzo esattamente da Temp Mail invece di digitarlo.", "Aspetta un momento se la piattaforma dice di aver inviato un messaggio.", "Aspettati verifica telefonica sulle piattaforme più rigide.", "Usa un indirizzo permanente se l’account è importante o i tentativi ripetuti creano frizione."],
    faqs: (name) => [[`Posso verificare ${name} con Temp Mail?`, `A volte, ma non è garantito. ${name} può bloccare domini usa e getta o chiedere verifiche aggiuntive.`], [`Temp Mail per ${name} è gratis?`, "Sì. L’indirizzo è gratuito e può ricevere messaggi in arrivo in tempo reale."], ["Posso aggirare la verifica telefonica?", "No. Se una piattaforma chiede un telefono, una casella temporanea non sostituisce quel controllo."], ["Posso inviare email da questo indirizzo?", "No. Temp Mail è solo in ricezione e serve per codici, link e conferme in arrivo."], ["Quanto devo tenere aperta la casella?", `Fino a quando il codice o link di conferma di ${name} è stato usato. Copia subito ciò che conta, perché le caselle vengono pulite periodicamente.`]],
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

function platformDecision(name, category, note) {
  return `Eine praktische Entscheidungshilfe: Benennen Sie vor der Registrierung den genauen Zweck für ${name}. Wenn die Aufgabe kurz und risikoarm bleibt, kann ein reines Empfangspostfach sie vom Hauptpostfach trennen. Sobald das Konto dauerhaften Wert bekommt, wird die E-Mail-Adresse Teil von Besitz und Wiederherstellung. Im Bereich ${category} sollten Sie deshalb zuerst testen und zu einer echten Adresse wechseln, sobald das Konto wichtig wird.`;
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

const PLATFORM_NOTES = {
  discord: { lane: "community", use: ["server test", "invite cleanup", "hobby alt"], value: ["server ownership", "Nitro", "moderation"], verify: "email can work, but phone checks are common for risky new accounts" },
  reddit: { lane: "forum", use: ["throwaway discussion", "subreddit trial", "digest control"], value: ["moderator role", "posting history", "paid features"], verify: "usually more flexible than identity networks, but trust limits can affect posting" },
  tiktok: { lane: "social", use: ["viewer test", "trend research", "separate casual profile"], value: ["creator tools", "followers", "shop or ads"], verify: "often uses phone, device and risk checks beyond email" },
  telegram: { lane: "phone", use: ["bot panel", "channel tool", "community dashboard"], value: ["admin rights", "business channels", "paid tools"], verify: "Telegram itself is phone-number first; email helps only on related tools" },
  snapchat: { lane: "social", use: ["app trial", "marketing separation", "low-stakes profile"], value: ["memories", "contacts", "paid features"], verify: "can lean on phone, device reputation and anti-abuse checks" },
  "twitter-x": { lane: "social", use: ["public browsing", "signup test", "separate reading account"], value: ["brand handle", "subscribers", "creator profile"], verify: "may block disposable domains or require phone verification" },
  instagram: { lane: "social", use: ["profile setup test", "viewer account", "notification separation"], value: ["followers", "business profile", "photos and messages"], verify: "often stricter and may ask for phone or recovery checks" },
  facebook: { lane: "identity", use: ["registration test", "page-flow preview", "low-value experiment"], value: ["real profile", "pages", "marketplace and ads"], verify: "usually blocks many disposable domains and may require identity or phone checks" },
  twitch: { lane: "community", use: ["chat test", "community sampling", "notification separation"], value: ["streamer account", "subscriptions", "drops and moderation"], verify: "email can work, but channel rules may require phone-verified chat" },
  steam: { lane: "gaming", use: ["free-game test", "launcher signup check", "empty account"], value: ["game library", "wallet funds", "market activity"], verify: "may accept email, but account value grows quickly after purchases" },
  roblox: { lane: "gaming", use: ["development test", "empty trial account", "form check"], value: ["Robux", "child account", "creator items"], verify: "email may work, but recovery and parental control need a real inbox" },
  "epic-games-fortnite": { lane: "gaming", use: ["launcher test", "free-item preview", "empty Epic account"], value: ["Fortnite progress", "linked consoles", "game library"], verify: "can challenge disposable domains and linked-platform accounts" },
  "playstation-network": { lane: "console", use: ["web-form test", "no-purchase account", "console-flow preview"], value: ["PS Plus", "wallet", "trophies and purchases"], verify: "likely cautious because console accounts hold paid value" },
  xbox: { lane: "identity", use: ["third-party Xbox tool", "low-value page test", "email-only contact form"], value: ["Game Pass", "Microsoft account", "cloud saves"], verify: "Xbox depends on Microsoft identity and is usually strict" },
  nintendo: { lane: "console", use: ["registration preview", "empty test account", "no-purchase flow"], value: ["eShop", "family group", "Switch Online"], verify: "may accept email but family and purchases require durable recovery" },
  spotify: { lane: "subscription", use: ["free-tier test", "playlist-free trial", "marketing separation"], value: ["Premium", "family plan", "playlists"], verify: "some domains work, but subscriptions need reliable email" },
  netflix: { lane: "subscription", use: ["signup-page test", "no-payment preview", "offer check"], value: ["billing", "household profiles", "subscription notices"], verify: "paid streaming accounts should not rely on temporary recovery" },
  "disney-plus": { lane: "subscription", use: ["offer-page test", "no-payment preview", "bundle research"], value: ["bundle billing", "family profiles", "subscription receipts"], verify: "may block disposable domains and still requires payment checks" },
  hulu: { lane: "subscription", use: ["signup-flow test", "promotion preview", "no-value account"], value: ["Live TV", "bundle", "billing notices"], verify: "paid account flows make temporary email weak" },
  crunchyroll: { lane: "streaming", use: ["free-tier trial", "watchlist-free test", "anime newsletter check"], value: ["Premium", "watchlist", "comments"], verify: "can be more flexible for free accounts, but premium needs real email" },
  amazon: { lane: "shopping", use: ["form test", "promotion preview", "newsletter separation"], value: ["orders", "Prime", "returns and payments"], verify: "strong verification is common because shipping and payments are involved" },
  ebay: { lane: "marketplace", use: ["page test", "promotion preview", "non-purchase flow"], value: ["buying", "selling", "returns and reputation"], verify: "marketplace trust makes disposable email unreliable" },
  aliexpress: { lane: "shopping", use: ["coupon preview", "browse test", "promotion separation"], value: ["orders", "shipping", "disputes"], verify: "may accept some domains, but order support needs a real inbox" },
  temu: { lane: "shopping", use: ["coupon flow", "deal browsing", "promotion containment"], value: ["orders", "refunds", "tracking"], verify: "can accept or reject disposable domains; purchases need durable mail" },
  shein: { lane: "shopping", use: ["discount test", "wishlist preview", "marketing separation"], value: ["orders", "returns", "shipping"], verify: "promotion flows may work, but purchase support should use real email" },
  pinterest: { lane: "discovery", use: ["board preview", "visual research", "notification separation"], value: ["business profile", "ad account", "saved boards"], verify: "may accept some domains but can apply bot checks" },
  linkedin: { lane: "identity", use: ["registration test", "profile-flow preview", "no-value experiment"], value: ["professional identity", "recruiter messages", "company pages"], verify: "professional identity checks make disposable email a poor fit" },
  quora: { lane: "forum", use: ["reading test", "digest control", "topic preview"], value: ["author reputation", "spaces", "answer history"], verify: "may accept some domains but publishing identity needs recovery" },
  medium: { lane: "publishing", use: ["reading test", "magic-link preview", "newsletter separation"], value: ["writer profile", "publication", "membership"], verify: "magic links make future inbox access important" },
  substack: { lane: "newsletter", use: ["free newsletter sample", "publication preview", "inbox clutter control"], value: ["paid subscriptions", "writer publication", "comments"], verify: "email-based login means temporary access can be fragile" },
  "chatgpt-openai": { lane: "identity", use: ["signup privacy test", "AI tool evaluation", "marketing separation"], value: ["Plus", "Team", "API billing and saved work"], verify: "OpenAI may block disposable domains or request additional verification" },
  canva: { lane: "creative", use: ["template test", "editor preview", "free-account trial"], value: ["Pro", "team workspace", "client designs"], verify: "free tests may work, but saved designs make recovery important" },
  dropbox: { lane: "storage", use: ["registration test", "empty account", "sharing-flow preview"], value: ["files", "backups", "business folders"], verify: "storage accounts need stable ownership and security notices" },
  mega: { lane: "storage", use: ["interface test", "empty trial account", "file-sharing preview"], value: ["encrypted files", "recovery key", "paid storage"], verify: "verification may work, but file recovery should not depend on temp mail" },
  tinder: { lane: "phone", use: ["email notice separation", "profile-flow preview", "low-stakes app test"], value: ["matches", "subscriptions", "safety notices"], verify: "phone and app verification are usually central" },
  bumble: { lane: "phone", use: ["email notice separation", "mode preview", "low-stakes app test"], value: ["matches", "subscriptions", "safety notices"], verify: "phone, app and device checks are common" },
  whatsapp: { lane: "phone", use: ["WhatsApp-related web tool", "newsletter form", "business dashboard test"], value: ["chats", "Business account", "group administration"], verify: "WhatsApp itself verifies by phone number, not email" },
  yahoo: { lane: "identity", use: ["Yahoo-related newsletter", "page test", "contact form"], value: ["mailbox", "recovery identity", "finance or fantasy alerts"], verify: "creating an email provider account usually requires durable recovery" },
  "outlook-microsoft": { lane: "identity", use: ["contact-form test", "Microsoft-related page preview", "low-value workflow"], value: ["Outlook", "Windows", "Office, OneDrive and Xbox"], verify: "Microsoft identity commonly blocks disposable domains or asks for phone checks" },
};

const PLATFORM_TONE = {
  de: {
    best: "Sinnvolle Kurzzeit-Nutzung", riskTitle: "Was hier schnell wertvoll wird", verifyTitle: "Realistische Verifizierung", planTitle: "Praktischer Ablauf", decision: "Entscheidung vor der Registrierung",
    intro: (name, category, note) => `${name} ist kein allgemeiner Formularname, sondern ein Dienst aus dem Bereich ${category}. Ein temporäres Postfach passt dort nur, wenn der konkrete Zweck klein bleibt: ${note.use.join(", ")}. Diese Details ändern die Empfehlung, weil ${name} andere Risiken hat als ein beliebiger Newsletter oder ein einmaliger Download.`,
    risk: (name, note) => `Kritisch wird es, sobald ${name} mehr enthält als einen Test. Dazu gehören ${note.value.join(", ")}. In diesen Fällen brauchen Passwort-Reset, Sicherheitswarnungen, Rechnungen, Support und Besitznachweise eine dauerhafte Adresse.`,
    verify: (name, note) => `Für ${name} gilt: ${note.verify}. Wenn die Plattform eine Domain blockiert oder Telefonverifizierung verlangt, ist das kein Fehler von Temp Mail, sondern eine Vertrauensprüfung der Plattform.`,
    plan: (name, note) => `Nutzen Sie Temp Mail nur für ${note.use[0]} oder ähnliche Aufgaben. Kopieren Sie die Adresse, halten Sie das Live-Postfach offen, verwenden Sie den Code sofort und wechseln Sie zu einer echten Mailbox, bevor ${note.value[0]} oder anderer dauerhafter Wert entsteht.`,
    lane: {
      phone: "Bei telefonbasierten Apps ist E-Mail oft nur ein Zusatzkanal. Temp Mail kann bei begleitenden Webtools helfen, aber nicht den SMS- oder App-Code ersetzen.",
      identity: "Identitätsnahe Plattformen prüfen strenger, weil ein Konto später viele andere Dienste, Profile oder Wiederherstellungen steuern kann.",
      shopping: "Bei Shops ist der erste Coupon selten das Problem. Das Problem entsteht durch Versand, Rückgaben, Zahlungsbelege und Supportfälle.",
      marketplace: "Marktplätze hängen an Vertrauen zwischen Käufern, Verkäufern, Zahlungen und Nachrichten. Eine Wegwerf-Adresse ist dort nur für Tests sinnvoll.",
      gaming: "Gaming-Konten sammeln schnell Bibliotheken, Fortschritt, Wallets oder verknüpfte Plattformen. Das macht dauerhafte Wiederherstellung wichtig.",
      console: "Konsolen-Konten berühren Käufe, Familienfunktionen und Gerätezugang. Nutzen Sie Temp Mail nur, solange kein echter Besitz entsteht.",
      subscription: "Abo-Dienste senden Rechnungen, Kündigungshinweise und Sicherheitsmeldungen. Für bezahlte Nutzung ist ein echtes Postfach die saubere Grenze.",
      storage: "Cloud-Speicher und Dateien sind recovery-kritisch. Ein temporäres Postfach ist höchstens für einen leeren Testaccount vertretbar.",
      community: "Community-Konten sind oft flexibler, aber Moderation, Besitzerrollen und bezahlte Vorteile brauchen trotzdem dauerhafte Wiederherstellung.",
      forum: "Foren und Q&A-Seiten passen besser zu Wegwerf-Mail, solange Reputation, Moderation und Autorenschaft nicht wichtig werden.",
      social: "Soziale Netzwerke kombinieren Reichweite, Identität und Missbrauchsschutz. Rechnen Sie deshalb mit Domain-Blocks oder zusätzlicher Prüfung.",
      streaming: "Kostenlose Streaming- oder Community-Tests sind eine Sache; Premium, Watchlists und Kommentare machen das Konto wertvoller.",
      discovery: "Bei visuellen Entdeckungsdiensten hängt der Wert an gespeicherten Boards, Profilen und Empfehlungen.",
      publishing: "Publishing-Plattformen nutzen E-Mail oft für Login und Autorenschaft. Temp Mail passt nur für Lesen oder kurze Tests.",
      newsletter: "Newsletter-Plattformen können gut zu temporärer Mail passen, solange es nicht um bezahlte Abos oder ein eigenes Publikum geht.",
      creative: "Design-Tools speichern Dateien, Markenmaterial und Teamzugänge. Testen ist okay, Kundenarbeit nicht.",
    },
    faq1: (name, note) => [`Kann ich ${name} mit Temp Mail nutzen?`, `Für ${note.use.join(", ")} kann es passen. Für ${note.value.join(", ")} sollten Sie eine echte Adresse verwenden.`],
    faq2: (name, note) => [`Was ist bei ${name} der häufigste Stolperstein?`, note.verify],
    faq3: () => ["Kann Temp Mail Telefonverifizierung umgehen?", "Nein. Wenn ein Dienst ein Telefon, ein Gerät oder eine Identitätsprüfung verlangt, ersetzt ein reinen Empfangspostfach diese Prüfung nicht."],
  },
  fr: {
    best: "Usages courts pertinents", riskTitle: "Ce qui prend vite de la valeur", verifyTitle: "Vérification réaliste", planTitle: "Plan pratique", decision: "Décision avant inscription",
    intro: (name, category, note) => `${name} n’est pas un simple formulaire générique : c’est un service de la catégorie ${category}. Une boîte temporaire convient seulement si l’objectif reste limité : ${note.use.join(", ")}. Ces détails changent le conseil, car ${name} ne présente pas les mêmes risques qu’une newsletter ou un téléchargement ponctuel.`,
    risk: (name, note) => `La limite arrive dès que ${name} contient plus qu’un test. Cela inclut ${note.value.join(", ")}. Dans ces cas, les réinitialisations, alertes de sécurité, reçus, réponses du support et preuves de propriété doivent aller vers une adresse durable.`,
    verify: (name, note) => `Pour ${name}, la réalité est la suivante : ${note.verify}. Si la plateforme bloque un domaine ou demande le téléphone, ce n’est pas un défaut de Temp Mail mais un contrôle de confiance du service.`,
    plan: (name, note) => `Utilisez Temp Mail seulement pour ${note.use[0]} ou une tâche comparable. Copiez l’adresse, gardez la boîte ouverte, utilisez le code tout de suite et passez à une vraie boîte avant que ${note.value[0]} ou une autre valeur durable apparaisse.`,
    lane: {
      phone: "Pour les apps centrées sur le téléphone, l’email est souvent secondaire. Temp Mail peut aider avec des outils web liés, pas remplacer un code SMS ou in-app.",
      identity: "Les plateformes proches de l’identité vérifient plus strictement, car un compte peut ensuite contrôler d’autres services, profils ou récupérations.",
      shopping: "Dans les boutiques, le premier coupon n’est pas le vrai risque. Le risque commence avec livraison, retours, reçus et support.",
      marketplace: "Les places de marché reposent sur la confiance entre acheteurs, vendeurs, paiements et messages. L’email jetable y convient surtout aux tests.",
      gaming: "Les comptes de jeu accumulent vite bibliothèques, progression, portefeuilles ou liens console. La récupération durable devient importante.",
      console: "Les comptes console touchent aux achats, familles et appareils. Temp Mail ne convient que tant qu’aucune valeur réelle n’est créée.",
      subscription: "Les abonnements envoient factures, avis et alertes de sécurité. Dès qu’un paiement existe, une vraie boîte est préférable.",
      storage: "Le stockage cloud et les fichiers sont critiques pour la récupération. Une boîte temporaire ne convient qu’à un compte vide de test.",
      community: "Les communautés peuvent être plus souples, mais rôles de modération, propriété et avantages payants demandent une récupération durable.",
      forum: "Forums et Q&A conviennent mieux à l’email jetable tant que réputation, modération et auteur public ne comptent pas.",
      social: "Les réseaux sociaux combinent portée, identité et anti-abus. Attendez-vous à des domaines bloqués ou contrôles supplémentaires.",
      streaming: "Tester gratuitement un service ou une communauté est une chose ; Premium, listes et commentaires rendent le compte plus précieux.",
      discovery: "Dans la découverte visuelle, la valeur vient des tableaux, profils et recommandations enregistrés.",
      publishing: "Les plateformes de publication utilisent souvent l’email pour login et auteur. Temp Mail convient surtout à la lecture ou aux tests.",
      newsletter: "Les newsletters conviennent à Temp Mail tant qu’il ne s’agit pas d’abonnements payants ou d’une publication que vous possédez.",
      creative: "Les outils créatifs stockent fichiers, marques et accès d’équipe. Tester oui, travail client non.",
    },
    faq1: (name, note) => [`Puis-je utiliser ${name} avec Temp Mail ?`, `Oui pour ${note.use.join(", ")} si la plateforme accepte l’adresse. Pour ${note.value.join(", ")}, utilisez une vraie adresse.`],
    faq2: (name, note) => [`Quel est le principal blocage avec ${name} ?`, note.verify],
    faq3: () => ["Temp Mail remplace-t-il la vérification téléphone ?", "Non. Si un service demande un téléphone, un appareil ou une identité, une boîte uniquement en réception ne remplace pas ce contrôle."],
  },
  es: {
    best: "Usos breves adecuados", riskTitle: "Qué gana valor rápido", verifyTitle: "Verificación realista", planTitle: "Plan práctico", decision: "Decisión antes de registrarte",
    intro: (name, category, note) => `${name} no es un formulario cualquiera: es un servicio de la categoría ${category}. Una bandeja temporal encaja solo si el objetivo queda limitado: ${note.use.join(", ")}. Esos detalles cambian la recomendación porque ${name} no tiene los mismos riesgos que una newsletter o una descarga puntual.`,
    risk: (name, note) => `El límite aparece cuando ${name} deja de ser una prueba. Eso incluye ${note.value.join(", ")}. En esos casos, los reseteos, alertas de seguridad, recibos, soporte y pruebas de propiedad necesitan un correo duradero.`,
    verify: (name, note) => `Para ${name}, la realidad es esta: ${note.verify}. Si la plataforma bloquea un dominio o pide teléfono, no es un fallo de Temp Mail, sino una comprobación de confianza del servicio.`,
    plan: (name, note) => `Usa Temp Mail solo para ${note.use[0]} o una tarea parecida. Copia la dirección, mantén la bandeja abierta, usa el código enseguida y cambia a una bandeja real antes de que ${note.value[0]} u otro valor duradero aparezca.`,
    lane: {
      phone: "En apps basadas en teléfono, el correo suele ser secundario. Temp Mail ayuda con herramientas web relacionadas, no sustituye un código SMS o de app.",
      identity: "Las plataformas cercanas a la identidad verifican con más dureza porque una cuenta puede controlar otros servicios, perfiles o recuperaciones.",
      shopping: "En tiendas, el primer cupón no es el gran riesgo. El problema llega con envío, devoluciones, recibos y soporte.",
      marketplace: "Los marketplaces dependen de confianza entre compradores, vendedores, pagos y mensajes. El correo desechable encaja sobre todo en pruebas.",
      gaming: "Las cuentas de juegos acumulan bibliotecas, progreso, saldo o vínculos de consola. La recuperación duradera importa pronto.",
      console: "Las cuentas de consola tocan compras, familia y dispositivos. Temp Mail solo encaja mientras no exista valor real.",
      subscription: "Los servicios de suscripción envían facturas, avisos y alertas. Con pago, una bandeja real es la línea correcta.",
      storage: "El almacenamiento cloud y los archivos son críticos para recuperación. Una bandeja temporal solo sirve para una cuenta vacía de prueba.",
      community: "Las comunidades pueden ser flexibles, pero moderación, propiedad y ventajas pagadas necesitan recuperación estable.",
      forum: "Foros y Q&A encajan mejor con correo temporal mientras reputación, moderación y autoría no sean importantes.",
      social: "Las redes sociales combinan alcance, identidad y antiabuso. Espera dominios bloqueados o controles extra.",
      streaming: "Probar gratis un servicio o comunidad es una cosa; Premium, listas y comentarios vuelven valiosa la cuenta.",
      discovery: "En descubrimiento visual, el valor está en tableros, perfiles y recomendaciones guardadas.",
      publishing: "Las plataformas de publicación usan el email para login y autoría. Temp Mail sirve mejor para leer o probar.",
      newsletter: "Las newsletters encajan con Temp Mail mientras no sean suscripciones pagadas ni una publicación propia.",
      creative: "Las herramientas creativas guardan archivos, marcas y equipos. Probar sí; trabajo de clientes no.",
    },
    faq1: (name, note) => [`¿Puedo usar ${name} con Temp Mail?`, `Sí para ${note.use.join(", ")} si la plataforma acepta el dominio. Para ${note.value.join(", ")}, usa un correo real.`],
    faq2: (name, note) => [`¿Cuál es el bloqueo típico en ${name}?`, note.verify],
    faq3: () => ["¿Temp Mail evita la verificación telefónica?", "No. Si un servicio pide teléfono, dispositivo o identidad, una bandeja solo de recepción no sustituye ese control."],
  },
  nl: {
    best: "Geschikte korte toepassingen", riskTitle: "Wat snel waarde krijgt", verifyTitle: "Realistische verificatie", planTitle: "Praktisch plan", decision: "Beslissen vóór registratie",
    intro: (name, category, note) => `${name} is geen willekeurig formulier, maar een dienst in de categorie ${category}. Een tijdelijke inbox past alleen als het doel beperkt blijft: ${note.use.join(", ")}. Die details veranderen het advies, omdat ${name} andere risico’s heeft dan een nieuwsbrief of een losse download.`,
    risk: (name, note) => `De grens komt zodra ${name} meer wordt dan een test. Denk aan ${note.value.join(", ")}. Dan moeten wachtwoordherstel, beveiligingsmeldingen, bonnetjes, support en eigendomsbewijs naar een duurzaam adres.`,
    verify: (name, note) => `Voor ${name} is de realiteit: ${note.verify}. Blokkeert het platform een domein of vraagt het om telefoon, dan is dat geen fout van Temp Mail maar een vertrouwenscontrole van de dienst.`,
    plan: (name, note) => `Gebruik Temp Mail alleen voor ${note.use[0]} of iets vergelijkbaars. Kopieer het adres, houd de inbox open, gebruik de code meteen en stap over op een echte inbox voordat ${note.value[0]} of andere blijvende waarde ontstaat.`,
    lane: {
      phone: "Bij telefoonapps is e-mail vaak slechts aanvullend. Temp Mail kan helpen bij verwante webtools, niet bij het vervangen van sms- of appcodes.",
      identity: "Identiteitsplatforms controleren strenger omdat één account later andere diensten, profielen of herstel kan aansturen.",
      shopping: "Bij winkels is de eerste coupon zelden het probleem. Het risico begint bij verzending, retouren, bonnetjes en support.",
      marketplace: "Marktplaatsen draaien op vertrouwen tussen kopers, verkopers, betalingen en berichten. Wegwerp e-mail past vooral bij tests.",
      gaming: "Gameaccounts verzamelen snel bibliotheken, voortgang, saldo of consolekoppelingen. Duurzaam herstel wordt snel belangrijk.",
      console: "Consoleaccounts raken aankopen, familie en apparaten. Temp Mail past alleen zolang er geen echte waarde ontstaat.",
      subscription: "Abodiensten sturen facturen, meldingen en veiligheidswaarschuwingen. Bij betaling hoort een echte inbox.",
      storage: "Cloudopslag en bestanden zijn herstelkritisch. Een tijdelijke inbox past hoogstens bij een lege testaccount.",
      community: "Community’s kunnen soepel zijn, maar moderatie, eigendom en betaalde voordelen vragen duurzaam herstel.",
      forum: "Forums en Q&A-sites passen beter bij tijdelijke mail zolang reputatie, moderatie en auteurschap niet belangrijk zijn.",
      social: "Sociale netwerken combineren bereik, identiteit en anti-misbruik. Reken op geblokkeerde domeinen of extra controles.",
      streaming: "Gratis testen is één ding; Premium, kijklijsten en reacties maken het account waardevoller.",
      discovery: "Bij visuele ontdekking zit de waarde in opgeslagen boards, profielen en aanbevelingen.",
      publishing: "Publicatieplatforms gebruiken e-mail vaak voor login en auteurschap. Temp Mail past vooral bij lezen of testen.",
      newsletter: "Nieuwsbrieven passen bij Temp Mail zolang het niet gaat om betaalde abonnementen of je eigen publicatie.",
      creative: "Creatieve tools bewaren bestanden, merken en teamtoegang. Testen kan, klantwerk niet.",
    },
    faq1: (name, note) => [`Kan ik ${name} gebruiken met Temp Mail?`, `Ja voor ${note.use.join(", ")} als het platform het domein accepteert. Voor ${note.value.join(", ")} gebruik je een echt adres.`],
    faq2: (name, note) => [`Wat is de typische blokkade bij ${name}?`, note.verify],
    faq3: () => ["Vervangt Temp Mail telefoonverificatie?", "Nee. Als een dienst telefoon, apparaat of identiteit vraagt, vervangt een alleen-ontvangende inbox die controle niet."],
  },
  it: {},
};

PLATFORM_TONE.it = {
  best: "Usi brevi adatti", riskTitle: "Cosa diventa presto prezioso", verifyTitle: "Verifica realistica", planTitle: "Piano pratico", decision: "Decisione prima della registrazione",
  intro: (name, category, note) => `${name} non è un modulo qualunque: è un servizio della categoria ${category}. Una casella temporanea ha senso solo se lo scopo resta limitato: ${note.use.join(", ")}. Questi dettagli cambiano il consiglio, perché ${name} non ha gli stessi rischi di una newsletter o di un download singolo.`,
  risk: (name, note) => `Il limite arriva quando ${name} non è più solo un test. Questo include ${note.value.join(", ")}. In questi casi reset password, avvisi di sicurezza, ricevute, supporto e prove di proprietà devono arrivare a un indirizzo stabile.`,
  verify: (name, note) => `Per ${name}, la realtà è questa: ${note.verify}. Se la piattaforma blocca un dominio o chiede il telefono, non è un errore di Temp Mail ma un controllo di fiducia del servizio.`,
  plan: (name, note) => `Usa Temp Mail solo per ${note.use[0]} o attività simili. Copia l’indirizzo, tieni aperta la casella, usa subito il codice e passa a una casella reale prima che ${note.value[0]} o altro valore duraturo entri in gioco.`,
  lane: {
    phone: "Nelle app basate sul telefono, l’email è spesso secondaria. Temp Mail può aiutare con strumenti web collegati, non sostituire codici SMS o in-app.",
    identity: "Le piattaforme vicine all’identità verificano con più severità, perché un account può controllare altri servizi, profili o recuperi.",
    shopping: "Nei negozi il primo coupon raramente è il problema. Il rischio nasce con spedizioni, resi, ricevute e supporto.",
    marketplace: "I marketplace dipendono dalla fiducia tra acquirenti, venditori, pagamenti e messaggi. L’email usa e getta è adatta soprattutto ai test.",
    gaming: "Gli account gaming accumulano presto librerie, progressi, wallet o collegamenti console. Il recupero stabile diventa importante.",
    console: "Gli account console toccano acquisti, famiglia e dispositivi. Temp Mail va bene solo finché non nasce valore reale.",
    subscription: "I servizi in abbonamento inviano fatture, avvisi e alert di sicurezza. Con un pagamento serve una casella reale.",
    storage: "Cloud storage e file sono critici per il recupero. Una casella temporanea va bene al massimo per un account di test vuoto.",
    community: "Le community possono essere flessibili, ma moderazione, proprietà e vantaggi pagati richiedono recupero stabile.",
    forum: "Forum e Q&A si adattano meglio alla mail temporanea finché reputazione, moderazione e autorevolezza non contano.",
    social: "I social network combinano portata, identità e anti-abuso. Aspettati domini bloccati o controlli extra.",
    streaming: "Provare gratis è una cosa; Premium, liste e commenti rendono l’account più prezioso.",
    discovery: "Nella scoperta visuale il valore sta in board, profili e raccomandazioni salvate.",
    publishing: "Le piattaforme di pubblicazione usano spesso l’email per login e autore. Temp Mail serve meglio per leggere o testare.",
    newsletter: "Le newsletter si adattano a Temp Mail finché non sono abbonamenti pagati o una pubblicazione tua.",
    creative: "Gli strumenti creativi salvano file, brand e accessi team. Test sì, lavoro clienti no.",
  },
  faq1: (name, note) => [`Posso usare ${name} con Temp Mail?`, `Sì per ${note.use.join(", ")} se la piattaforma accetta il dominio. Per ${note.value.join(", ")}, usa un indirizzo reale.`],
  faq2: (name, note) => [`Qual è il blocco tipico con ${name}?`, note.verify],
  faq3: () => ["Temp Mail sostituisce la verifica telefonica?", "No. Se un servizio richiede telefono, dispositivo o identità, una casella solo in ricezione non sostituisce quel controllo."],
};

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
    platformP(t.hubBody[4]),
    platformP(t.hubBody[5]),
    platformP(t.hubBody[6]),
    platformCta(locale, t),
  ].join("\n");
  return { title: t.hubTitle, desc: t.hubDesc, body };
}

function localizedPlatformPage(locale, item, index, t) {
  const name = item.name;
  const category = t.category[item.category] || item.category;
  const tone = PLATFORM_TONE[locale] || PLATFORM_TONE.de;
  const questionsTitle = {
    de: `${name}-spezifische Fragen`,
    fr: `Questions propres à ${name}`,
    es: `Preguntas específicas de ${name}`,
    nl: `${name}-specifieke vragen`,
    it: `Domande specifiche su ${name}`,
  }[locale] || `${name} platform-specific questions`;
  const note = PLATFORM_NOTES[item.slug] || { lane: "community", use: ["low-risk test", "one-time signup", "inbox separation"], value: ["account recovery", "saved content", "payments"], verify: "temporary domains may be accepted or rejected depending on platform filters" };
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
    platformP(tone.lane[note.lane] || t.generic.substance(name, category)),
    `<h2>${platformEsc(tone.best)}</h2>`,
    `<ul>${t.steps(name).slice(0, 3).map((use) => `<li>${platformEsc(use)}</li>`).join("")}</ul>`,
    platformP(t.generic.rule(name)),
    `<h2>${platformEsc(t.h.accept(name))}</h2>`,
    platformP(t.generic.accept(name)),
    platformP(t.generic.caution(name)),
    `<h2>${platformEsc(t.h.how(name))}</h2>`,
    platformP(t.generic.signup(name)),
    `<ul>${t.steps(name).map((step) => `<li>${platformEsc(step)}</li>`).join("")}</ul>`,
    `<h2>${platformEsc(t.h.reject(name))}</h2>`,
    platformP(t.generic.reject(name)),
    `<ul>${t.rejectList.map((step) => `<li>${platformEsc(step)}</li>`).join("")}</ul>`,
    `<h2>${platformEsc(t.h.avoid(name))}</h2>`,
    platformP(t.generic.avoid(name)),
    platformP(t.generic.storage),
    `<h2>${platformEsc(t.h.links)}</h2>`,
    platformRawP(`${platformEsc(t.generic.related)} ${t.generic.relatedLinks(related)}`),
    `<h2>${platformEsc(t.h.substance(name))}</h2>`,
    platformP(t.generic.substance(name, category)),
    platformP(t.generic.boundary(name)),
    platformP(t.generic.receive(name)),
    platformP(tone.lane[note.lane] || t.generic.substance(name, category)),
    `<h2>${platformEsc(questionsTitle)}</h2>`,
    ...t.faqs(name).slice(0, 3).flatMap(([question, answer]) => [`<h3>${platformEsc(question)}</h3>`, platformP(answer)]),
    `<h2>${platformEsc(t.h.faq)}</h2>`,
    ...t.faqs(name).slice(3).flatMap(([question, answer]) => [`<h3>${platformEsc(question)}</h3>`, platformP(answer)]),
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

const LEGAL_TITLE_KEY = {
  "/about": "about",
  "/privacy": "privacy",
  "/terms": "terms",
  "/contact": "contact",
  "/disclaimer": "disclaimer",
};

function legal(locale, slug) {
  const l = LANG[locale];
  const title = l[LEGAL_TITLE_KEY[slug]];
  const maps = {
    de: {
      "/about": `Temp Mail ist ein kostenloser Service für ${l.temp} und ${l.disposable}. Wir helfen dabei, Ihre echte Adresse vor Spam, Tracking und unnötigen Datenbanken zu schützen. Nachrichten kommen ${l.real} an, Postfächer werden regelmäßig geleert, und die Nutzung verlangt kein Konto.`,
      "/privacy": "Diese Datenschutzerklärung erklärt, wie Temp Mail mit temporären Adressen und eingehenden Nachrichten umgeht. Der Dienst ist so gestaltet, dass keine Registrierung nötig ist. Temporäre Postfächer werden nur kurz genutzt und regelmäßig bereinigt. Verwenden Sie sie nicht für sensible Kommunikation.",
      "/terms": "Mit der Nutzung von Temp Mail stimmen Sie einer rechtmäßigen und verantwortungsvollen Nutzung zu. Der Dienst darf nicht für Betrug, Spam, Belästigung oder illegale Aktivitäten verwendet werden. Temporäre Postfächer sind für niedrige Risiken gedacht und werden ohne Garantie bereitgestellt.",
      "/contact": "Fragen, Feedback, Partnerschaften oder Missbrauchsmeldungen können an hello@example.com gesendet werden. Ersetzen Sie diese Adresse vor dem Start durch Ihre echte Kontaktadresse. Für Datenschutzfragen lesen Sie bitte die Datenschutzerklärung.",
      "/disclaimer": "Temp Mail stellt temporäre E-Mail-Adressen zur Bequemlichkeit und zum Schutz vor Spam bereit. Die Postfächer sind nicht für vertrauliche, finanzielle oder langfristige Kommunikation geeignet. Nutzen Sie den Dienst nur für rechtmäßige, risikoarme Aufgaben.",
      safe: "Temp Mail ist für kurze Aufgaben gemacht: Registrierungen, Downloads, Testkonten und Verifizierungscodes. Für Bank, Arbeit, Behörden, Medizin oder wichtige Konten sollten Sie immer eine dauerhafte Adresse verwenden.",
      more: `Weitere Informationen finden Sie im ${link(locale, "/blog", "Blog")}, auf der ${link(locale, "/", l.home)}, bei ${link(locale, "/disposable-email", l.disposable)} und im ${link(locale, "/temp-mail-for", "Hub für App-Ratgeber")}.`,
      desc: `${title} für Temp Mail. ${l.seo}`,
    },
    fr: {
      "/about": `Temp Mail est un service gratuit pour ${l.temp} et ${l.disposable}. Il aide à protéger votre vraie adresse contre le spam, le suivi et les bases de données inutiles.`,
      "/privacy": "Cette politique de confidentialité explique comment Temp Mail traite les adresses temporaires et les messages entrants. Le service ne demande pas d’inscription, et les boîtes temporaires sont régulièrement nettoyées.",
      "/terms": "En utilisant Temp Mail, vous acceptez un usage légal et responsable. Le service ne doit pas servir à la fraude, au spam, au harcèlement ou à des activités illégales.",
      "/contact": "Questions, retours, partenariats ou signalements d’abus peuvent être envoyés à hello@example.com. Remplacez cette adresse par votre vraie adresse de contact avant le lancement.",
      "/disclaimer": "Temp Mail fournit des adresses email temporaires pour la commodité et la protection contre le spam. Ces boîtes ne conviennent pas aux communications confidentielles, financières ou durables.",
      safe: "Temp Mail est conçu pour les tâches courtes : inscriptions, téléchargements, comptes de test et codes de vérification. Pour la banque, le travail, l’administration, la santé ou les comptes importants, utilisez toujours une adresse permanente.",
      more: `Vous trouverez plus d’informations dans le ${link(locale, "/blog", "blog")}, sur la ${link(locale, "/", l.home)}, avec ${link(locale, "/disposable-email", l.disposable)} et dans le ${link(locale, "/temp-mail-for", "hub par app")}.`,
      desc: `${title} pour Temp Mail. ${l.seo}`,
    },
    es: {
      "/about": `Temp Mail es un servicio gratuito para ${l.temp} y ${l.disposable}. Ayuda a proteger tu dirección real frente a spam, seguimiento y bases de datos innecesarias.`,
      "/privacy": "Esta política de privacidad explica cómo Temp Mail gestiona direcciones temporales y mensajes entrantes. El servicio no requiere registro y las bandejas temporales se limpian periódicamente.",
      "/terms": "Al usar Temp Mail aceptas un uso legal y responsable. El servicio no debe usarse para fraude, spam, acoso ni actividades ilegales.",
      "/contact": "Preguntas, comentarios, colaboraciones o reportes de abuso pueden enviarse a hello@example.com. Sustituye esta dirección por tu contacto real antes del lanzamiento.",
      "/disclaimer": "Temp Mail ofrece direcciones de correo temporales por comodidad y protección contra spam. Estas bandejas no son adecuadas para comunicación confidencial, financiera o duradera.",
      safe: "Temp Mail está hecho para tareas breves: registros, descargas, cuentas de prueba y códigos de verificación. Para banca, trabajo, administración, salud o cuentas importantes, usa siempre una dirección permanente.",
      more: `Encontrarás más información en el ${link(locale, "/blog", "blog")}, en la ${link(locale, "/", l.home)}, sobre ${link(locale, "/disposable-email", l.disposable)} y en el ${link(locale, "/temp-mail-for", "hub por app")}.`,
      desc: `${title} para Temp Mail. ${l.seo}`,
    },
    nl: {
      "/about": `Temp Mail is een gratis dienst voor ${l.temp} en ${l.disposable}. We helpen je echte adres beschermen tegen spam, tracking en onnodige databases.`,
      "/privacy": "Dit privacybeleid legt uit hoe Temp Mail omgaat met tijdelijke adressen en inkomende berichten. De dienst vraagt geen registratie en tijdelijke inboxen worden regelmatig opgeschoond.",
      "/terms": "Door Temp Mail te gebruiken ga je akkoord met wettig en verantwoordelijk gebruik. De dienst mag niet worden gebruikt voor fraude, spam, intimidatie of illegale activiteiten.",
      "/contact": "Vragen, feedback, partnerschappen of misbruikmeldingen kunnen naar hello@example.com worden gestuurd. Vervang dit adres voor lancering door je echte contactadres.",
      "/disclaimer": "Temp Mail biedt tijdelijke e-mailadressen voor gemak en bescherming tegen spam. De inboxen zijn niet geschikt voor vertrouwelijke, financiële of langdurige communicatie.",
      safe: "Temp Mail is gemaakt voor korte taken: registraties, downloads, testaccounts en verificatiecodes. Voor bankzaken, werk, overheid, zorg of belangrijke accounts gebruik je altijd een permanent adres.",
      more: `Meer informatie vind je in de ${link(locale, "/blog", "blog")}, op de ${link(locale, "/", l.home)}, bij ${link(locale, "/disposable-email", l.disposable)} en in de ${link(locale, "/temp-mail-for", "appgids-hub")}.`,
      desc: `${title} voor Temp Mail. ${l.seo}`,
    },
    it: {
      "/about": `Temp Mail è un servizio gratuito per ${l.temp} ed ${l.disposable}. Aiuta a proteggere il tuo indirizzo reale da spam, tracciamento e database inutili.`,
      "/privacy": "Questa informativa sulla privacy spiega come Temp Mail gestisce indirizzi temporanei e messaggi in arrivo. Il servizio non richiede registrazione e le caselle temporanee vengono pulite periodicamente.",
      "/terms": "Usando Temp Mail accetti un uso legale e responsabile. Il servizio non deve essere usato per frode, spam, molestie o attività illegali.",
      "/contact": "Domande, feedback, partnership o segnalazioni di abuso possono essere inviati a hello@example.com. Sostituisci questo indirizzo con il tuo contatto reale prima del lancio.",
      "/disclaimer": "Temp Mail fornisce indirizzi email temporanei per comodità e protezione dallo spam. Le caselle non sono adatte a comunicazioni riservate, finanziarie o durature.",
      safe: "Temp Mail è pensato per attività brevi: registrazioni, download, account di prova e codici di verifica. Per banca, lavoro, pubblica amministrazione, salute o account importanti usa sempre un indirizzo permanente.",
      more: `Trovi altre informazioni nel ${link(locale, "/blog", "blog")}, nella ${link(locale, "/", l.home)}, su ${link(locale, "/disposable-email", l.disposable)} e nell’${link(locale, "/temp-mail-for", "hub per app")}.`,
      desc: `${title} per Temp Mail. ${l.seo}`,
    },
  };
  const map = maps[locale] || maps.de;
  const text = map[slug];
  return {
    title: `${title} — Temp Mail`,
    desc: map.desc,
    body: `<h1>${title}</h1>
<p class='lead'>${text}</p>
<p>${map.safe}</p>
<p>${map.more}</p>`
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
    "best-temp-mail": `<h2>Woran man den besten Dienst erkennt</h2><p>Der beste Temp-Mail-Dienst ist nicht der mit der lautesten Oberfläche, sondern derjenige, der einen Code zuverlässig und schnell liefert. Wichtig sind Echtzeit-Zustellung, mehrere Domains, eine gut lesbare HTML-Ansicht und keine Pflicht zur Registrierung. Wenn ein Dienst zuerst ein Konto verlangt, bevor er eine Wegwerf-Adresse zeigt, verfehlt er den Zweck.</p><p>Achten Sie außerdem auf klare Grenzen. Ein seriöser Anbieter erklärt, dass Nachrichten temporär sind, dass die Adresse nur zum Empfangen gedacht ist und dass wichtige Konten in eine dauerhafte Mailbox gehören.</p>`,
    "is-temp-mail-safe": `<h2>Wann Temp Mail sicher ist</h2><p>Temp Mail ist sicher, wenn die Aufgabe kurz, harmlos und leicht ersetzbar ist. Ein Download, ein Forum, ein Coupon oder ein Testkonto passen gut. Unsicher wird es, wenn die Adresse später für Passwort-Reset, Zahlungsbelege oder Identitätsnachweise gebraucht wird.</p><p>Der Sicherheitsgewinn entsteht durch Abstand: Ihre echte Mailadresse bleibt privat. Das Risiko entsteht durch Vergänglichkeit: Was gelöscht ist, kann nicht wiederhergestellt werden.</p>`,
    "how-to-create-a-temporary-email": `<h2>Temporäre E-Mail Schritt für Schritt erstellen</h2><p>Öffnen Sie die Startseite, übernehmen Sie die vorgeschlagene Adresse oder wählen Sie einen eigenen Namen, kopieren Sie die Adresse und fügen Sie sie in das Formular ein. Danach warten Sie im Live-Postfach auf den Bestätigungslink oder OTP-Code.</p><p>Tippen Sie Adressen nicht von Hand ab. Ein kleiner Fehler reicht, damit der Code in einem anderen Postfach landet oder gar nicht ankommt.</p>`,
    "what-is-a-disposable-email-address": `<h2>Definition einer Wegwerf-E-Mail-Adresse</h2><p>Eine Wegwerf-E-Mail-Adresse ist ein echtes, aber kurzlebiges Postfach. Sie funktioniert wie eine normale Adresse für eingehende Nachrichten, ist aber nicht dafür gedacht, eine dauerhafte Identität zu tragen.</p><p>Der Unterschied zu einem Alias ist wichtig: Ein Alias leitet in Ihre echte Mailbox weiter. Eine Wegwerf-Adresse bleibt getrennt und endet, sobald Sie sie nicht mehr nutzen.</p>`,
    "temp-mail-for-otp-verification-codes": `<h2>OTP-Codes zuverlässig empfangen</h2><p>OTP-Codes passen besonders gut zu Temp Mail, weil sie nur wenige Minuten gültig sind und nur eine Aufgabe erfüllen. Öffnen Sie das Postfach vor dem Absenden des Formulars, fordern Sie den Code an und kopieren Sie ihn sofort.</p><p>Wenn ein Code nicht erscheint, prüfen Sie die Adresse, warten Sie kurz und fordern Sie ihn erneut an. Wird die Domain blockiert, erzeugen Sie eine neue Adresse auf einer anderen Domain.</p>`,
  }[slug];
  return `<p>${topic} ist eine praktische Frage, weil fast jede Website heute eine Adresse verlangt. Eine ${l.temp} gibt Ihnen ein funktionierendes Postfach ${l.signup}, empfängt Nachrichten ${l.real} und trennt niedrige Risiken von Ihrer echten Identität. Dieser Ratgeber erklärt, wann Temp Mail nützlich ist, welche Grenzen wichtig sind und wie Sie Codes zuverlässig empfangen, ohne Ihr dauerhaftes Postfach mit Werbung und Nachverfolgung zu füllen.</p>
${specific}
<h2>Wofür Temp Mail gedacht ist</h2>
<p>Temp Mail ist für kurze Aufgaben gebaut. Sie brauchen eine Adresse, erhalten eine Nachricht, lesen den Link oder ${l.code} und sind fertig. Typische Fälle sind Downloads, Testkonten, Newsletter-Proben, Foren, WLAN-Portale und Produktprüfungen. Für diese Situationen ist eine dauerhafte Mailbox überdimensioniert, weil der Kontakt meist nach wenigen Minuten endet.</p>
<p>Die Adresse ist nur zum Empfangen gedacht. Sie können eingehende Nachrichten lesen, aber keine Antworten senden. Diese Einschränkung hält den Dienst schlank und reduziert Missbrauch. Für normale Verifizierungen reicht das völlig aus, denn der Ablauf verlangt nur, dass Sie eine Nachricht empfangen und den Code kopieren.</p>
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
${extraDepth(locale, 0)}
${extraDepth(locale, 1)}
${extraDepth(locale, 2)}
${extraDepth(locale, 3)}`;
}

function blogBodyIntl(locale, slug) {
  const l = LANG[locale];
  const t = {
    fr: {
      intro: "Un email temporaire est utile parce que presque chaque service demande une adresse avant de laisser continuer. Il protège votre vraie boîte, reçoit les codes rapidement et évite d’ajouter votre identité à une base de données de plus.",
      for: "À quoi sert Temp Mail", privacy: "Bénéfices pour la confidentialité", risk: "Risques et limites", how: "Bien l’utiliser", trouble: "Dépannage", right: "Quand c’est le bon choix", habits: "Bonnes habitudes", end: "Conclusion",
      p1: "Temp Mail sert aux tâches courtes et peu risquées. Vous avez besoin d’une adresse, vous recevez un message, vous copiez un lien ou un code OTP, puis vous passez à autre chose.",
      p2: "La boîte est uniquement destinée à recevoir. Elle est idéale pour les confirmations, mais elle ne remplace pas une adresse permanente qui archive, envoie et récupère des comptes.",
      p3: "La valeur principale est la séparation. Votre vraie boîte reste liée aux personnes, au travail, à l’argent et aux comptes importants, tandis que l’adresse jetable absorbe le bruit du web.",
      p4: "Une boîte temporaire n’est pas une archive privée. Les messages sont supprimés périodiquement et tout contenu important peut disparaître.",
      p5: "Copiez-collez les adresses, gardez la boîte ouverte, utilisez une adresse différente par site et lisez chaque message avec prudence.",
      explain: "Cet article explique", marketing: "Le marketing reste loin de la boîte principale.", leak: "Une fuite expose une adresse jetable, pas l’adresse permanente.", fresh: "Vous pouvez créer une adresse fraîche pour chaque tâche.", noSignup: "Aucune inscription signifie moins de données personnelles à partager.",
      open: "Ouvrez", copy: "et copiez l’adresse générée.", paste: "Collez-la dans le site qui demande un email.", ask: "Demandez le message de vérification ou le code OTP.", read: "Lisez le message dans la boîte en direct.", finish: "Terminez la tâche et créez une nouvelle adresse pour la suivante.",
      troubleText: "Si le code n’arrive pas, attendez quelques secondes, vérifiez l’adresse et relancez l’envoi. Si un domaine est refusé, générez une nouvelle adresse ou choisissez un autre domaine.",
      right1: "Utilisez Temp Mail pour lire un article derrière un formulaire, tester une inscription, rejoindre un forum une fois, télécharger un fichier ou récupérer un coupon. Dans ces cas, la valeur de l’adresse se termine presque dès que le message est lu.",
      right2: "Utilisez une boîte permanente pour les reçus, les alertes légales, le travail, la santé et les comptes financiers. Le but n’est pas de remplacer votre vraie boîte, mais d’arrêter de l’utiliser pour des tâches qui ne la méritent pas.",
      sensitive: "Si une tâche demande soudain des informations sensibles, quittez le flux ou passez à une adresse permanente.",
      conclusion: "Temp Mail fonctionne mieux comme adresse rapide, gratuite et temporaire. Il réduit le spam et protège votre boîte réelle sans prétendre remplacer un compte email durable.",
      safety: "sécurité de Temp Mail",
      tail: "avec des règles pratiques, des limites claires et des exemples adaptés à l’usage quotidien.",
    },
    es: {
      intro: "Un correo temporal es útil porque casi cualquier servicio pide una dirección antes de dejarte continuar. Protege tu bandeja real, recibe códigos rápido y evita sumar tu identidad a otra base de datos.",
      for: "Para qué sirve Temp Mail", privacy: "Beneficios de privacidad", risk: "Riesgos y límites", how: "Cómo usarlo bien", trouble: "Solución de problemas", right: "Cuándo es la opción correcta", habits: "Hábitos prácticos", end: "Conclusión",
      p1: "Temp Mail sirve para tareas cortas y de bajo riesgo. Necesitas una dirección, recibes un mensaje, copias un enlace o código OTP y continúas.",
      p2: "La bandeja es solo de recepción. Es excelente para confirmaciones, pero no reemplaza una cuenta permanente que envía, archiva y recupera accesos.",
      p3: "El valor principal es la separación. Tu correo real queda para personas, trabajo, dinero y cuentas importantes, mientras el correo desechable absorbe el ruido de la web.",
      p4: "Una bandeja temporal no es un archivo privado. Los mensajes se borran periódicamente y cualquier contenido importante puede desaparecer.",
      p5: "Copia y pega direcciones, mantén abierta la bandeja, usa una dirección distinta por sitio y lee cada mensaje con cuidado.",
      explain: "Este artículo explica", marketing: "El marketing queda lejos de la bandeja principal.", leak: "Una filtración expone una dirección desechable, no la permanente.", fresh: "Puedes crear una dirección nueva para cada tarea.", noSignup: "Sin registro significa menos datos personales compartidos.",
      open: "Abre", copy: "y copia la dirección generada.", paste: "Pégala en el sitio que pide correo.", ask: "Solicita el mensaje de verificación o el código OTP.", read: "Lee el mensaje en la bandeja en vivo.", finish: "Termina la tarea y crea una dirección nueva para la siguiente.",
      troubleText: "Si el código no llega, espera unos segundos, revisa la dirección y vuelve a solicitar el envío. Si un dominio se rechaza, genera una nueva dirección o elige otro dominio.",
      right1: "Usa Temp Mail para leer un artículo detrás de un formulario, probar un registro, entrar una vez a un foro, descargar un archivo o recuperar un cupón. En esos casos, el valor de la dirección termina casi cuando lees el mensaje.",
      right2: "Usa una bandeja permanente para recibos, alertas legales, trabajo, salud y cuentas financieras. El objetivo no es reemplazar tu correo real, sino dejar de usarlo para tareas que no lo merecen.",
      sensitive: "Si una tarea pide de pronto información sensible, sal del flujo o cambia a una dirección permanente.",
      conclusion: "Temp Mail funciona mejor como dirección rápida, gratuita y temporal. Reduce el spam y protege tu bandeja real sin pretender reemplazar una cuenta de correo duradera.",
      safety: "seguridad de Temp Mail",
      tail: "con reglas prácticas, límites claros y ejemplos adaptados al uso diario.",
    },
    nl: {
      intro: "Tijdelijke e-mail is nuttig omdat bijna elke dienst een adres vraagt voordat je verder mag. Het beschermt je echte inbox, ontvangt codes snel en voorkomt dat je identiteit in nog een database belandt.",
      for: "Waar Temp Mail voor bedoeld is", privacy: "Voordelen voor privacy", risk: "Risico’s en grenzen", how: "Zo gebruik je het goed", trouble: "Problemen oplossen", right: "Wanneer het de juiste keuze is", habits: "Praktische gewoonten", end: "Conclusie",
      p1: "Temp Mail is bedoeld voor korte taken met laag risico. Je hebt een adres nodig, ontvangt één bericht, kopieert een link of OTP-code en gaat verder.",
      p2: "De inbox is alleen voor ontvangst. Dat is ideaal voor bevestigingen, maar geen vervanging voor een permanent account dat verzendt, archiveert en herstel mogelijk maakt.",
      p3: "De belangrijkste waarde is scheiding. Je echte inbox blijft gekoppeld aan mensen, werk, geld en belangrijke accounts, terwijl het wegwerpadres de ruis van het web opvangt.",
      p4: "Een tijdelijke inbox is geen privéarchief. Berichten worden periodiek verwijderd en belangrijke inhoud kan verdwijnen.",
      p5: "Kopieer en plak adressen, houd de inbox open, gebruik per site een ander adres en lees elk bericht met normale voorzichtigheid.",
      explain: "Dit artikel legt uit", marketing: "Marketing blijft weg uit je hoofdmailbox.", leak: "Een lek toont een wegwerpadres, niet je permanente adres.", fresh: "Je kunt voor elke taak een vers adres maken.", noSignup: "Geen registratie betekent minder persoonlijke gegevens delen.",
      open: "Open", copy: "en kopieer het gemaakte adres.", paste: "Plak het in de site die om e-mail vraagt.", ask: "Vraag het verificatiebericht of de OTP-code aan.", read: "Lees het bericht in de live inbox.", finish: "Rond de taak af en maak een nieuw adres voor de volgende.",
      troubleText: "Komt de code niet aan, wacht dan een paar seconden, controleer het adres en vraag opnieuw verzending aan. Wordt een domein geweigerd, maak dan een nieuw adres of kies een ander domein.",
      right1: "Gebruik Temp Mail om een artikel achter een formulier te lezen, een registratie te testen, één keer een forum te bezoeken, een bestand te downloaden of een coupon op te halen. In die gevallen eindigt de waarde van het adres bijna zodra het bericht gelezen is.",
      right2: "Gebruik een permanente inbox voor bonnetjes, juridische meldingen, werk, zorg en financiële accounts. Het doel is niet je echte inbox te vervangen, maar die niet meer te gebruiken voor taken die hem niet verdienen.",
      sensitive: "Vraagt een taak ineens om gevoelige informatie, stop dan of stap over op een permanent adres.",
      conclusion: "Temp Mail werkt het best als snel, gratis en tijdelijk adres. Het vermindert spam en beschermt je echte inbox zonder een duurzaam e-mailaccount te willen vervangen.",
      safety: "veiligheid van Temp Mail",
      tail: "met praktische regels, duidelijke grenzen en voorbeelden voor dagelijks gebruik.",
    },
    it: {
      intro: "Un’email temporanea è utile perché quasi ogni servizio chiede un indirizzo prima di farti continuare. Protegge la tua casella reale, riceve codici rapidamente ed evita di aggiungere la tua identità a un altro database.",
      for: "A cosa serve Temp Mail", privacy: "Vantaggi per la privacy", risk: "Rischi e limiti", how: "Come usarla bene", trouble: "Risoluzione dei problemi", right: "Quando è la scelta giusta", habits: "Abitudini pratiche", end: "Conclusione",
      p1: "Temp Mail serve per attività brevi e a basso rischio. Ti serve un indirizzo, ricevi un messaggio, copi un link o un codice OTP e vai avanti.",
      p2: "La casella è solo in ricezione. È ottima per conferme e codici, ma non sostituisce un account permanente che invia, archivia e recupera accessi.",
      p3: "Il valore principale è la separazione. La tua email reale resta per persone, lavoro, denaro e account importanti, mentre l’indirizzo usa e getta assorbe il rumore del web.",
      p4: "Una casella temporanea non è un archivio privato. I messaggi vengono eliminati periodicamente e i contenuti importanti possono sparire.",
      p5: "Copia e incolla gli indirizzi, tieni aperta la casella, usa un indirizzo diverso per ogni sito e leggi ogni messaggio con prudenza.",
      explain: "Questo articolo spiega", marketing: "Il marketing resta lontano dalla casella principale.", leak: "Una fuga espone un indirizzo usa e getta, non quello permanente.", fresh: "Puoi creare un indirizzo nuovo per ogni attività.", noSignup: "Nessuna registrazione significa meno dati personali da condividere.",
      open: "Apri", copy: "e copia l’indirizzo generato.", paste: "Incollalo nel sito che chiede un’email.", ask: "Richiedi il messaggio di verifica o il codice OTP.", read: "Leggi il messaggio nella casella live.", finish: "Completa l’attività e crea un nuovo indirizzo per la successiva.",
      troubleText: "Se il codice non arriva, aspetta qualche secondo, controlla l’indirizzo e richiedi un nuovo invio. Se un dominio viene rifiutato, genera un nuovo indirizzo o scegli un altro dominio.",
      right1: "Usa Temp Mail per leggere un articolo dietro un modulo, testare una registrazione, entrare una volta in un forum, scaricare un file o ottenere un coupon. In questi casi, il valore dell’indirizzo finisce quasi appena il messaggio viene letto.",
      right2: "Usa una casella permanente per ricevute, avvisi legali, lavoro, salute e account finanziari. Lo scopo non è sostituire la tua casella reale, ma smettere di usarla per attività che non la meritano.",
      sensitive: "Se un’attività chiede improvvisamente informazioni sensibili, esci dal flusso o passa a un indirizzo permanente.",
      conclusion: "Temp Mail funziona meglio come indirizzo rapido, gratuito e temporaneo. Riduce lo spam e protegge la tua casella reale senza pretendere di sostituire un account email duraturo.",
      safety: "sicurezza di Temp Mail",
      tail: "con regole pratiche, limiti chiari ed esempi adatti all’uso quotidiano.",
    },
  }[locale];
  const topic = (BLOG_TITLE[locale] && BLOG_TITLE[locale][slug]) || BLOG[slug][0];
  const specific = {
    "best-temp-mail": `<h2>${t.for}</h2><p>${t.p1} ${t.p2}</p><p>${t.p3}</p>`,
    "is-temp-mail-safe": `<h2>${t.risk}</h2><p>${t.p4}</p><p>${t.p5}</p>`,
    "how-to-create-a-temporary-email": `<h2>${t.how}</h2><p>${t.p1}</p><p>${t.p5}</p>`,
    "what-is-a-disposable-email-address": `<h2>${t.for}</h2><p>${t.p3}</p><p>${t.p2}</p>`,
    "temp-mail-for-otp-verification-codes": `<h2>${t.trouble}</h2><p>${t.p1}</p><p>${t.p5}</p>`,
  }[slug];
  return `<p>${t.intro} ${t.explain} ${topic} ${t.tail}</p>
${specific}
<h2>${t.privacy}</h2>
<p>${t.p3}</p>
<ul><li>${t.marketing}</li><li>${t.leak}</li><li>${t.fresh}</li><li>${t.noSignup}</li></ul>
<h2>${t.how}</h2>
<ol><li>${t.open} ${link(locale, "/", "Temp Mail")} ${t.copy}</li><li>${t.paste}</li><li>${t.ask}</li><li>${t.read}</li><li>${t.finish}</li></ol>
<h2>${t.trouble}</h2>
<p>${t.troubleText}</p>
<h2>${t.right}</h2>
<p>${t.right1}</p>
<p>${t.right2}</p>
<h2>${t.habits}</h2>
<p>${t.p5} ${t.sensitive}</p>
<h2>${t.end}</h2>
<p>${t.conclusion} Pour continuer, lisez ${link(locale, "/disposable-email", l.disposable)}, ${link(locale, "/temp-mail-generator", "Temp Mail Generator")} et ${link(locale, "/blog/is-temp-mail-safe", t.safety)}.</p>
${depthBlock(locale, "blog")}
${extraDepth(locale, 0)}
${extraDepth(locale, 1)}
${extraDepth(locale, 2)}
${extraDepth(locale, 3)}`;
}

// Localized blog titles per locale (used for <title>, <h1>, and meta description).
const BLOG_TITLE = {
  de: {
    "best-temp-mail": "Beste temporäre E-Mail-Dienste",
    "is-temp-mail-safe": "Ist Temp Mail sicher?",
    "how-to-create-a-temporary-email": "Temporäre E-Mail erstellen",
    "what-is-a-disposable-email-address": "Was ist eine Wegwerf-E-Mail?",
    "temp-mail-for-otp-verification-codes": "OTP- und Verifizierungscodes mit Temp Mail empfangen",
  },
  fr: {
    "best-temp-mail": "Meilleurs services de temp mail",
    "is-temp-mail-safe": "Le temp mail est-il sûr ?",
    "how-to-create-a-temporary-email": "Comment créer une adresse email temporaire",
    "what-is-a-disposable-email-address": "Qu’est-ce qu’une adresse email jetable ?",
    "temp-mail-for-otp-verification-codes": "Recevoir des codes OTP et de vérification avec le temp mail",
  },
  es: {
    "best-temp-mail": "Mejores servicios de correo temporal",
    "is-temp-mail-safe": "¿Es seguro el correo temporal?",
    "how-to-create-a-temporary-email": "Cómo crear un correo temporal",
    "what-is-a-disposable-email-address": "¿Qué es un correo desechable?",
    "temp-mail-for-otp-verification-codes": "Recibir códigos OTP y de verificación con correo temporal",
  },
  nl: {
    "best-temp-mail": "Beste tijdelijke e-maildiensten",
    "is-temp-mail-safe": "Is tijdelijke e-mail veilig?",
    "how-to-create-a-temporary-email": "Een tijdelijk e-mailadres maken",
    "what-is-a-disposable-email-address": "Wat is een wegwerp-e-mailadres?",
    "temp-mail-for-otp-verification-codes": "OTP- en verificatiecodes ontvangen met tijdelijke e-mail",
  },
  it: {
    "best-temp-mail": "Migliori servizi di email temporanea",
    "is-temp-mail-safe": "L’email temporanea è sicura?",
    "how-to-create-a-temporary-email": "Come creare un’email temporanea",
    "what-is-a-disposable-email-address": "Cos’è un’email usa e getta?",
    "temp-mail-for-otp-verification-codes": "Ricevere codici OTP e di verifica con l’email temporanea",
  },
};

export function localizedBlogPosts(locale) {
  if (!LANG[locale]) return [];
  const tmap = BLOG_TITLE[locale] || {};
  return Object.entries(BLOG).map(([slug, names]) => {
    const title = tmap[slug] || names[0];
    return {
      slug,
      title: `${title} — Temp Mail`,
      h1: title,
      desc: `${title}. ${LANG[locale].seo}`,
      bodyHtml: blogBody(locale, slug),
      date: "2026-01-01T00:00:00.000Z",
    };
  });
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
<section><h2>Andere Namen für temporäre E-Mail</h2><p>Temp Mail wird auch ${l.disposable}, Wegwerf-Adresse, Test-E-Mail, anonyme E-Mail, 10-Minuten-Mail oder Wegwerf-E-Mail-Adresse genannt. Gemeint ist immer eine kurzlebige Adresse, die Sie nicht dauerhaft pflegen möchten.</p></section>
<section><h2>Ist Temp Mail sicher?</h2><p>Für niedrige Risiken ja. Es hält Ihre echte Adresse privat und reduziert Spam. Gleichzeitig ist es kein privater Tresor. Nachrichten sind temporär, Postfächer werden bereinigt und sensible Inhalte gehören nicht hierher.</p></section>
<section><h2>So holen Sie mehr aus Temp Mail heraus</h2><p>Verwenden Sie für jede Website eine eigene Adresse. Dadurch bleiben Newsletter, Codes und mögliche spätere Werbemails sauber getrennt. Wenn ein Dienst eine Domain blockiert, erstellen Sie direkt eine neue Adresse oder wählen eine andere Domain aus. Kopieren Sie Adressen immer, statt sie abzutippen, denn schon ein kleiner Fehler reicht aus, damit ein Code nicht ankommt.</p><p>Für Entwickler und QA-Teams ist diese Trennung ebenfalls hilfreich. Jede Testausführung kann eine frische Inbox bekommen, sodass Willkommensmails, Passwort-Resets und OTP-Nachrichten nicht durcheinander geraten. Sobald ein Test abgeschlossen ist, wird die Adresse nicht weiter benötigt.</p></section>
<section><h2>Was Temp Mail nicht ersetzt</h2><p>Temp Mail ersetzt keine dauerhafte Mailbox. Es ist kein Archiv, kein Konto für wichtige Unterlagen und kein Ort für vertrauliche Nachrichten. Nutzen Sie es für die Wegwerf-Momente des Internets und behalten Sie Ihre echte Adresse für alles, was dauerhaft, rechtlich, finanziell oder persönlich wichtig ist.</p><p>Diese klare Grenze ist der Grund, warum der Dienst nützlich bleibt: kurze Aufgaben laufen schnell, während Ihre langfristige Identität geschützt bleibt.</p></section>
<section><h2>Nützliche nächste Schritte</h2><p>Lesen Sie mehr über ${link(locale, "/disposable-email", l.disposable)}, erstellen Sie eine Adresse mit dem ${link(locale, "/temp-mail-generator", "Temp-Mail-Generator")}, vergleichen Sie App-Ratgeber im ${link(locale, "/temp-mail-for", "Temp-Mail-Hub")} oder prüfen Sie ${link(locale, "/blog/is-temp-mail-safe", "Sicherheit von Temp Mail")}.</p></section>
${homeExpansion(locale, 0)}
${homeExpansion(locale, 1)}
${homeExpansion(locale, 2)}
${homeExpansion(locale, 3)}
${homeDeepening(locale)}
${homeScenario(locale)}
${homeOperationalNote(locale)}
${depthBlock(locale, "home")}
${extraDepth(locale, 0)}
${extraDepth(locale, 1)}
${extraDepth(locale, 2)}
<section><h2>Häufige Fragen</h2><div class='faq'><details><summary>Muss ich mich registrieren?</summary><p>Nein. Die Adresse ist sofort verfügbar.</p></details><details><summary>Ist Temp Mail kostenlos?</summary><p>Ja. Sie können beliebig viele Adressen erzeugen.</p></details><details><summary>Kann ich OTP-Codes empfangen?</summary><p>Ja. Eingehende Codes erscheinen ${l.real}.</p></details><details><summary>Kann ich E-Mails senden?</summary><p>Nein. Der Dienst ist nur zum Empfangen gedacht.</p></details><details><summary>Wie lange hält die Adresse?</summary><p>Behandeln Sie jede Nachricht als temporär und kopieren Sie wichtige Codes sofort.</p></details></div></section>
</div>`;
}

function homeSectionsIntl(locale) {
  const l = LANG[locale];
  const t = {
    fr: {
      what: "Qu’est-ce que Temp Mail ?", works: "Comment fonctionne l’email temporaire", get: "Obtenir une adresse", use: "L’utiliser partout", read: "Lire les messages reçus", why: `Pourquoi utiliser ${l.disposable} ?`, when: "Quand l’utiliser", safe: "Temp Mail est-il sûr ?", workflow: "Meilleure routine quotidienne", replace: "Ce que Temp Mail ne remplace pas", faq: "Questions fréquentes",
      intro: `<strong>Temp Mail</strong> est un ${l.temp} ${l.free} que vous utilisez brièvement puis laissez derrière vous. Il reçoit de vrais messages ${l.real}, sans être lié à votre identité et sans inscription.`,
      useText: `Utilisez-le pour téléchargements, essais, forums, coupons, tests d’apps et vérifications ponctuelles. Au lieu de donner votre vraie boîte, vous utilisez une adresse jetable, lisez le lien ou le ${l.code}, puis continuez.`,
      instant: "La boîte est active dès le chargement de la page. Aucune app à installer, aucun compte à créer et aucun nettoyage ensuite.",
      step1: "Une adresse temporaire est générée automatiquement. Gardez-la, personnalisez-la ou créez-en une nouvelle.", step2: "Copiez l’adresse dans tout formulaire qui demande un email.", step3: `Les liens de vérification et codes OTP apparaissent dans la boîte en direct en quelques secondes.`,
      benefits: ["Stopper le spam tôt.", "Recevoir les codes vite.", "Protéger la confidentialité.", "Limiter les fuites.", "Sans engagement."],
      whenText: "Utilisez Temp Mail lorsqu’un email est demandé sans relation durable : téléchargements, essais, forums, portails Wi-Fi, coupons, newsletters et tests. Gardez votre vraie boîte pour la banque, le travail, l’administration et les comptes importants.",
      safeText: "Pour les tâches à faible risque, oui. Il protège votre vraie adresse et réduit le spam. Ce n’est pas un coffre-fort : les messages sont temporaires et les informations sensibles doivent rester ailleurs.",
      workflowText: "Utilisez une adresse par site. Les newsletters, codes et promotions restent séparés, et les expéditeurs bruyants sont faciles à abandonner. Copiez toujours l’adresse au lieu de la saisir.",
      replaceText: "Temp Mail ne remplace pas une boîte permanente. Ce n’est ni une archive, ni une identité de récupération, ni un lieu pour les communications confidentielles.",
      q: [["Dois-je m’inscrire ?", "Non. L’adresse fonctionne immédiatement."], ["Est-ce gratuit ?", "Oui. Vous pouvez créer des adresses gratuitement."], ["Puis-je recevoir des codes OTP ?", `Oui. Les codes arrivent ${l.real}.`], ["Puis-je envoyer des emails ?", "Non. Temp Mail est uniquement en réception."]],
    },
    es: {
      what: "¿Qué es Temp Mail?", works: "Cómo funciona el correo temporal", get: "Obtén una dirección", use: "Úsala en cualquier sitio", read: "Lee el correo entrante", why: `¿Por qué usar ${l.disposable}?`, when: "Cuándo usarlo", safe: "¿Es seguro Temp Mail?", workflow: "Mejor rutina diaria", replace: "Qué no reemplaza Temp Mail", faq: "Preguntas frecuentes",
      intro: `<strong>Temp Mail</strong> es un ${l.temp} ${l.free} que usas por poco tiempo y luego abandonas. Recibe mensajes reales ${l.real}, sin estar ligado a tu identidad y sin registro.`,
      useText: `Úsalo para descargas, pruebas, foros, cupones, tests de apps y verificaciones puntuales. En vez de dar tu bandeja real, usas una dirección desechable, lees el enlace o el ${l.code}, y sigues.`,
      instant: "La bandeja está activa en cuanto carga la página. No hay app que instalar, cuenta que crear ni limpieza posterior.",
      step1: "Se genera una dirección temporal automáticamente. Consérvala, personalízala o crea una nueva.", step2: "Copia la dirección en cualquier formulario que pida correo.", step3: "Los enlaces de verificación y códigos OTP aparecen en la bandeja en vivo en segundos.",
      benefits: ["Detener spam temprano.", "Recibir códigos rápido.", "Proteger la privacidad.", "Limitar filtraciones.", "Sin compromiso."],
      whenText: "Usa Temp Mail cuando se requiere un correo pero no una relación a largo plazo: descargas, pruebas, foros, portales Wi-Fi, cupones, newsletters y testing. Usa tu bandeja real para banca, trabajo, gobierno y cuentas importantes.",
      safeText: "Para tareas de bajo riesgo, sí. Mantiene privada tu dirección real y reduce spam. No es una caja fuerte: los mensajes son temporales y la información sensible pertenece a otro lugar.",
      workflowText: "Usa una dirección por sitio. Así newsletters, códigos y promociones quedan separados, y los remitentes ruidosos se abandonan fácilmente. Copia siempre la dirección en vez de escribirla.",
      replaceText: "Temp Mail no reemplaza una bandeja permanente. No es archivo, identidad de recuperación ni lugar para comunicación confidencial.",
      q: [["¿Tengo que registrarme?", "No. La dirección funciona de inmediato."], ["¿Es gratis?", "Sí. Puedes crear direcciones gratis."], ["¿Puedo recibir códigos OTP?", `Sí. Los códigos llegan ${l.real}.`], ["¿Puedo enviar correo?", "No. Temp Mail solo recibe."]],
    },
    nl: {
      what: "Wat is Temp Mail?", works: "Zo werkt tijdelijke e-mail", get: "Adres krijgen", use: "Overal gebruiken", read: "Inkomende mail lezen", why: `Waarom ${l.disposable} gebruiken?`, when: "Wanneer gebruik je het?", safe: "Is Temp Mail veilig?", workflow: "Betere dagelijkse werkwijze", replace: "Wat Temp Mail niet vervangt", faq: "Veelgestelde vragen",
      intro: `<strong>Temp Mail</strong> is een ${l.free} ${l.temp} die je kort gebruikt en daarna achterlaat. Het ontvangt echte berichten ${l.real}, maar is niet gekoppeld aan je identiteit en vraagt geen registratie.`,
      useText: `Gebruik het voor downloads, proefaccounts, forums, coupons, app-tests en eenmalige verificatie. In plaats van je echte inbox te geven, gebruik je een wegwerpadres, lees je de link of ${l.code} en ga je verder.`,
      instant: "De inbox is actief zodra de pagina laadt. Geen app, geen account en geen opruimwerk achteraf.",
      step1: "Een tijdelijk adres wordt automatisch gemaakt. Houd het, pas het aan of maak een nieuw adres.", step2: "Kopieer het adres naar elk formulier dat om e-mail vraagt.", step3: "Verificatielinks en OTP-codes verschijnen binnen enkele seconden in de live inbox.",
      benefits: ["Spam vroeg stoppen.", "Codes snel ontvangen.", "Privacy beschermen.", "Lekken beperken.", "Geen verplichting."],
      whenText: "Gebruik Temp Mail wanneer e-mail nodig is maar geen langdurige relatie ontstaat: downloads, tests, forums, wifi-portalen, coupons, nieuwsbrieven en testing. Gebruik je echte inbox voor bankzaken, werk, overheid en belangrijke accounts.",
      safeText: "Voor taken met laag risico wel. Het houdt je echte adres privé en vermindert spam. Het is geen kluis: berichten zijn tijdelijk en gevoelige informatie hoort elders.",
      workflowText: "Gebruik één adres per website. Nieuwsbrieven, codes en promoties blijven gescheiden, en drukke afzenders zijn makkelijk achter te laten. Kopieer het adres altijd in plaats van het te typen.",
      replaceText: "Temp Mail vervangt geen permanente mailbox. Het is geen archief, geen herstelidentiteit en geen plek voor vertrouwelijke communicatie.",
      q: [["Moet ik registreren?", "Nee. Het adres werkt meteen."], ["Is het gratis?", "Ja. Je kunt gratis adressen maken."], ["Kan ik OTP-codes ontvangen?", `Ja. Codes komen ${l.real}.`], ["Kan ik e-mail verzenden?", "Nee. Temp Mail is alleen voor ontvangst."]],
    },
    it: {
      what: "Cos’è Temp Mail?", works: "Come funziona l’email temporanea", get: "Ottieni un indirizzo", use: "Usalo ovunque", read: "Leggi la posta in arrivo", why: `Perché usare ${l.disposable}?`, when: "Quando usarla", safe: "Temp Mail è sicura?", workflow: "Routine quotidiana migliore", replace: "Cosa non sostituisce Temp Mail", faq: "Domande frequenti",
      intro: `<strong>Temp Mail</strong> è una ${l.temp} ${l.free} che usi per poco tempo e poi lasci. Riceve messaggi reali ${l.real}, ma non è collegata alla tua identità e non richiede registrazione.`,
      useText: `Usala per download, prove, forum, coupon, test di app e verifiche singole. Invece di dare la tua casella reale, usi un indirizzo usa e getta, leggi il link o il ${l.code} e continui.`,
      instant: "La casella è attiva appena la pagina si carica. Nessuna app, nessun account e nessuna pulizia successiva.",
      step1: "Un indirizzo temporaneo viene generato automaticamente. Tienilo, personalizzalo o creane uno nuovo.", step2: "Copia l’indirizzo in qualsiasi modulo che chiede email.", step3: "Link di verifica e codici OTP appaiono nella casella live in pochi secondi.",
      benefits: ["Fermare presto lo spam.", "Ricevere codici velocemente.", "Proteggere la privacy.", "Limitare le fughe di dati.", "Nessun impegno."],
      whenText: "Usa Temp Mail quando serve un’email ma non nasce una relazione duratura: download, prove, forum, portali Wi-Fi, coupon, newsletter e testing. Usa la casella reale per banca, lavoro, pubblica amministrazione e account importanti.",
      safeText: "Per attività a basso rischio, sì. Tiene privato il tuo indirizzo reale e riduce lo spam. Non è una cassaforte: i messaggi sono temporanei e le informazioni sensibili vanno altrove.",
      workflowText: "Usa un indirizzo per sito. Newsletter, codici e promozioni restano separati, e i mittenti rumorosi sono facili da abbandonare. Copia sempre l’indirizzo invece di digitarlo.",
      replaceText: "Temp Mail non sostituisce una casella permanente. Non è un archivio, un’identità di recupero o un luogo per comunicazioni riservate.",
      q: [["Devo registrarmi?", "No. L’indirizzo funziona subito."], ["È gratis?", "Sì. Puoi creare indirizzi gratis."], ["Posso ricevere codici OTP?", `Sì. I codici arrivano ${l.real}.`], ["Posso inviare email?", "No. Temp Mail è solo in ricezione."]],
    },
  }[locale];
  return `<div class='content'>
<section><h2>${t.what}</h2><p>${t.intro}</p><p>${t.useText}</p><p>${t.instant}</p></section>
<section><h2>${t.works}</h2><div class='steps'><div class='step'><div class='num'>1</div><div><h3>${t.get}</h3><p>${t.step1}</p></div></div><div class='step'><div class='num'>2</div><div><h3>${t.use}</h3><p>${t.step2}</p></div></div><div class='step'><div class='num'>3</div><div><h3>${t.read}</h3><p>${t.step3}</p></div></div></div></section>
<section><h2>${t.why}</h2><p>${t.useText}</p><ul class='benefits'>${t.benefits.map((b) => `<li><span><b>${b}</b></span></li>`).join("")}</ul></section>
<section><h2>${t.when}</h2><p>${t.whenText}</p></section>
<section><h2>${t.safe}</h2><p>${t.safeText}</p></section>
<section><h2>${t.workflow}</h2><p>${t.workflowText}</p></section>
<section><h2>${t.replace}</h2><p>${t.replaceText}</p></section>
<section><h2>${locale === "fr" ? "Étapes suivantes utiles" : locale === "es" ? "Siguientes pasos útiles" : locale === "nl" ? "Handige volgende stappen" : "Passaggi successivi utili"}</h2><p>${locale === "fr" ? `Lisez ${link(locale, "/disposable-email", l.disposable)}, créez une adresse avec ${link(locale, "/temp-mail-generator", "Temp Mail Generator")}, comparez les guides dans le ${link(locale, "/temp-mail-for", "hub Temp Mail")} ou vérifiez ${link(locale, "/blog/is-temp-mail-safe", "la sécurité de Temp Mail")}.` : locale === "es" ? `Lee sobre ${link(locale, "/disposable-email", l.disposable)}, crea una dirección con ${link(locale, "/temp-mail-generator", "Temp Mail Generator")}, compara guías en el ${link(locale, "/temp-mail-for", "hub Temp Mail")} o revisa ${link(locale, "/blog/is-temp-mail-safe", "la seguridad de Temp Mail")}.` : locale === "nl" ? `Lees meer over ${link(locale, "/disposable-email", l.disposable)}, maak een adres met ${link(locale, "/temp-mail-generator", "Temp Mail Generator")}, vergelijk gidsen in de ${link(locale, "/temp-mail-for", "Temp Mail-hub")} of bekijk ${link(locale, "/blog/is-temp-mail-safe", "de veiligheid van Temp Mail")}.` : `Leggi ${link(locale, "/disposable-email", l.disposable)}, crea un indirizzo con ${link(locale, "/temp-mail-generator", "Temp Mail Generator")}, confronta le guide nell’${link(locale, "/temp-mail-for", "hub Temp Mail")} o verifica ${link(locale, "/blog/is-temp-mail-safe", "la sicurezza di Temp Mail")}.`}</p></section>
${homeExpansion(locale, 0)}
${homeExpansion(locale, 1)}
${homeExpansion(locale, 2)}
${homeExpansion(locale, 3)}
${homeDeepening(locale)}
${homeScenario(locale)}
${homeOperationalNote(locale)}
${depthBlock(locale, "home")}
${extraDepth(locale, 0)}
${extraDepth(locale, 1)}
${extraDepth(locale, 2)}
<section><h2>${t.faq}</h2><div class='faq'>${t.q.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("")}</div></section>
</div>`;
}

export function homepageLocale(locale) {
  if (!LANG[locale]) return null;
  const l = LANG[locale];
  return {
    title: `${l.title} — ${{
      de: "kostenlose Wegwerf-E-Mail-Adresse",
      fr: "adresse email jetable gratuite",
      es: "correo temporal gratis",
      nl: "gratis tijdelijk e-mailadres",
      it: "indirizzo email temporaneo gratuito",
    }[locale] || "Free Temporary Email Address"}`,
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
