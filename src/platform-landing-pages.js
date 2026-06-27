const CTA = "<a class='cta' href='/'>Get your free temp mail address</a>";
const AD = "<div class='ad-slot'></div>";
const HUB_PATH = "/temp-mail-for";

const sharedLinks = [
  { href: "/", label: "temp mail home" },
  { href: "/temp-mail-for", label: "temp mail for popular apps" },
  { href: "/disposable-email", label: "disposable email" },
  { href: "/temp-mail-generator", label: "temp mail generator" },
  { href: "/10-minute-mail", label: "10 minute mail" },
  { href: "/blog/is-temp-mail-safe", label: "temp mail safety guide" },
];

export const platformData = [
  {
    name: "Discord",
    slug: "discord",
    category: "chat communities",
    intro: "Discord is where servers, group chats, gaming communities, study rooms, and small private groups live. People often want a disposable address for Discord when they are testing a server setup, joining a community they do not know yet, separating a hobby account from a personal inbox, or keeping invite-related mail away from their main address.",
    accept: "Discord may accept some temporary email domains, especially for low-risk sign-ups, but it can also challenge new accounts with phone verification, suspicious-login checks, or domain blocking. Treat temp mail as useful for a low-stakes Discord account, not as a guarantee that every address will pass.",
    signup: "Open the Discord registration screen, paste your temporary address into the email field, choose a username and password, then wait for the confirmation email. Keep the temp mail inbox open while Discord sends the verify email, because the link is the part you need right away.",
    reject: "If Discord rejects the address or never sends the verification email, generate a fresh address on another domain and try once more. If Discord asks for a phone number, a temp mail address will not bypass that requirement; use a regular account path if you need a durable profile.",
    avoid: "Do not use temporary email for the Discord account that owns your server, has Nitro, manages moderation, or stores important contacts. Recovery matters for those accounts, and a periodically cleared inbox is the wrong recovery channel.",
    questions: [
      ["Can I verify a Discord account with temp mail?", "Sometimes, but not always. Discord can accept the email and still ask for extra verification later, especially when the account looks new or unusual."],
      ["Is temp mail safe for a Discord alt?", "It is reasonable for a low-stakes server test or temporary community visit, as long as you accept that recovery may be limited."],
      ["Will Discord send the verification link instantly?", "Discord usually sends verification mail quickly, and the inbox updates in real time when the message arrives."],
      ["Should I use temp mail for Nitro?", "No. Use a real email for any account with payments, subscriptions, ownership, or long-term value."],
    ],
  },
  {
    name: "Reddit",
    slug: "reddit",
    category: "forums and communities",
    intro: "Reddit is built around topic communities, throwaway discussions, local subreddits, and usernames that often stay separate from real identities. A temporary email can fit Reddit when you want to try a community, keep a low-stakes account away from your personal inbox, or avoid newsletter and notification clutter.",
    accept: "Reddit is often more flexible than large identity-heavy networks, but it may still block some disposable domains, rate-limit sign-ups, or ask for additional checks. Email verification and account trust can also affect where you can post.",
    signup: "Start Reddit sign-up, enter the temp mail address, choose a username that does not reveal your identity, and finish the account flow. When Reddit sends its email confirmation, open the message in the live inbox and verify before closing the tab.",
    reject: "If Reddit refuses the domain, switch to another available domain or generate a new random address. If posting is restricted after sign-up, that may be normal new-account friction rather than an email problem.",
    avoid: "Do not use temp mail for a Reddit account that has moderator permissions, paid features, a long posting history you care about, or communities where account recovery matters.",
    questions: [
      ["Does Reddit require email verification?", "Reddit can let some accounts browse without much friction, but verification helps with recovery and trust. Use the temp inbox while the confirmation email is fresh."],
      ["Can I use temp mail for a Reddit throwaway?", "Yes, for low-stakes privacy and spam control. Do not use it to harass, evade bans, or create mass accounts."],
      ["What if Reddit blocks the domain?", "Generate another address with a different domain, or use a real email if you want a stable account."],
      ["Will I receive Reddit notifications later?", "Only while the temporary inbox is active and not cleared. Do not rely on it for long-term notifications."],
    ],
  },
  {
    name: "TikTok",
    slug: "tiktok",
    category: "short video apps",
    intro: "TikTok accounts are tied to viewing history, creator tools, comments, and sometimes shopping or advertising features. People look for temp mail for TikTok when they want to test the app, separate a casual viewing profile from a main inbox, or avoid promotional email while exploring trends.",
    accept: "TikTok may accept an email during sign-up, but it commonly uses phone, device, app, and risk checks. Disposable domains can be blocked, and email alone may not be enough for a new TikTok account.",
    signup: "Choose email sign-up in TikTok if it is available in your region and device flow. Paste the temporary address, complete the date and username prompts honestly, and watch the inbox for a verification code or link.",
    reject: "If TikTok rejects the address, try another domain once. If the app asks for phone verification or flags the sign-up, do not keep forcing disposable addresses; use a real email for any account you plan to keep.",
    avoid: "Do not use temp mail for a creator account, ad account, shop account, monetized profile, or any TikTok identity with followers, purchases, or business value.",
    questions: [
      ["Does TikTok accept temporary email?", "It may, but TikTok is stricter than many forums and can block disposable domains or ask for phone verification."],
      ["Can I use temp mail to test TikTok?", "Yes, for a casual, low-stakes test account where losing access would not matter."],
      ["Why did TikTok ask for my phone number?", "TikTok uses phone and device signals for trust and abuse prevention. A temporary inbox cannot replace that check."],
      ["Should creators use temp mail?", "No. Creators should use a permanent email they control so recovery, payouts, and security notices are not lost."],
    ],
  },
  {
    name: "Telegram",
    slug: "telegram",
    category: "messaging",
    intro: "Telegram is primarily phone-number based, but emails can still appear in account security, login alerts, bot dashboards, and related web services. People search for temp mail for Telegram when they want a separate inbox for low-stakes bot testing, channel tools, or one-off web accounts connected to Telegram communities.",
    accept: "Telegram itself usually depends on a phone number first, so a temporary email will not create a Telegram account by itself. It may help only when a Telegram-adjacent service asks for an email address.",
    signup: "If the specific Telegram-related page asks for email, paste the temp address there and keep the inbox open for any code. For the Telegram app itself, expect phone verification to be the main step.",
    reject: "If the service blocks disposable domains, generate an address on a different domain. If Telegram asks for a phone code, temp mail is not relevant to that requirement.",
    avoid: "Do not use temporary email for Telegram accounts tied to business channels, admin rights, recovery settings, paid tools, or communities you cannot afford to lose.",
    questions: [
      ["Can temp mail create a Telegram account?", "No. Telegram normally starts with a phone number, so temp mail only helps with related services that request email."],
      ["Where can temp mail help with Telegram?", "It can help with bot panels, newsletter tools, analytics dashboards, or community services that send an email confirmation."],
      ["Will a temp address bypass phone verification?", "No. If Telegram wants a phone code, use the normal verification process."],
      ["Is it okay for bot testing?", "For low-stakes bot or tool testing, yes, as long as nothing important depends on later email recovery."],
    ],
  },
  {
    name: "Snapchat",
    slug: "snapchat",
    category: "social apps",
    intro: "Snapchat is a mobile-first social app built around messaging, stories, memories, and identity signals from devices and contacts. A disposable address may be useful when you want to try the app without adding another marketing stream to your personal inbox.",
    accept: "Snapchat can accept email in some flows, but it often leans on phone, device reputation, and anti-abuse checks. Disposable domains may be blocked, and a new account can be challenged even after email entry.",
    signup: "Use the email option if Snapchat offers it, paste your temporary address, then keep the inbox visible while the code or confirmation arrives. Complete only the basic low-stakes setup if you are using temp mail.",
    reject: "If Snapchat rejects the address, try a different domain once. If it asks for a phone number or additional proof, a temp inbox will not solve that step.",
    avoid: "Do not use temp mail for an account with memories, paid features, close contacts, or anything you would be upset to lose. Account recovery is the problem, not the initial sign-up.",
    questions: [
      ["Does Snapchat allow temp mail?", "It may reject disposable domains or require phone verification, so expect mixed results."],
      ["Can I receive a Snapchat code here?", "If Snapchat sends a normal email code, the inbox can receive it in real time."],
      ["Why would Snapchat block my address?", "Large social apps block some disposable domains to reduce spam and fake-account abuse."],
      ["Should I use temp mail for my main Snapchat?", "No. Use a permanent email for a personal account with contacts or memories."],
    ],
  },
  {
    name: "Twitter (X)",
    slug: "twitter-x",
    category: "social networks",
    intro: "Twitter, now X, is a public conversation network where email is tied to login, recovery, alerts, and sometimes creator or subscription features. People may want a throwaway address when they are testing the sign-up flow, following public posts casually, or keeping a browsing account separate from a personal inbox.",
    accept: "X is strict about abuse signals and can require phone verification. Some temporary email domains may be blocked, and an account created with a disposable address may face additional checks.",
    signup: "Choose email sign-up if the option is available, paste the temporary address, and wait for the verification code in the inbox. Complete the code quickly because social platforms often expire these messages.",
    reject: "If X blocks the email, switch domains or use a real email. If the account is challenged for phone verification, that is a platform trust requirement and temp mail cannot remove it.",
    avoid: "Do not use temporary email for a main X account, paid subscription, creator profile, brand handle, or account with followers you care about.",
    questions: [
      ["Does X accept temporary email?", "Sometimes, but it may block disposable domains or require phone verification."],
      ["Can I receive an X verification code?", "Yes, if X sends the code to the address. The inbox is receive-only and updates in real time."],
      ["Is temp mail good for a brand handle?", "No. A brand or creator handle needs reliable recovery and security notices."],
      ["What if X asks for a phone number?", "Use the normal phone verification path or choose a permanent email account strategy."],
    ],
  },
  {
    name: "Instagram",
    slug: "instagram",
    category: "social networks",
    intro: "Instagram accounts can hold photos, messages, followers, business tools, and shopping activity. People search for temp mail for Instagram when they want to test a profile setup, keep a casual viewing account separate, or avoid marketing and notification mail in their personal inbox.",
    accept: "Instagram usually has stronger verification than small forums. It may block disposable domains, require phone verification, or challenge the account if the device, IP, or email domain looks risky.",
    signup: "Use the email field in Instagram sign-up, paste the temporary address, and wait for the code. Keep the inbox tab open until the confirmation is complete, because the inbox is temporary.",
    reject: "If Instagram rejects the address, try a different temp mail domain once. If it asks for phone verification or recovery details, use a real email for any account you intend to keep.",
    avoid: "Do not use temp mail for your main Instagram, a creator account, a business profile, a shop, an account with purchases, or a profile with photos and followers you care about.",
    questions: [
      ["Does Instagram accept temp mail?", "Often it does not. Instagram may block disposable domains or ask for a phone number."],
      ["Can I test Instagram with temp mail?", "For a low-stakes test, yes, if the sign-up flow accepts the address."],
      ["Will I get account recovery emails later?", "Only while the temporary inbox is still available. That is why temp mail is poor for long-term accounts."],
      ["What should I use for a business profile?", "Use a real, secured email address controlled by the business."],
    ],
  },
  {
    name: "Facebook",
    slug: "facebook",
    category: "social networks",
    intro: "Facebook connects profiles, groups, pages, marketplace activity, and social identity. A person might consider temp mail for Facebook when testing a page flow or exploring a low-stakes account, but Facebook is one of the least forgiving places for disposable email.",
    accept: "Facebook usually blocks many temporary email domains and may require phone verification, identity checks, or other trust signals. Do not expect a disposable address to work reliably.",
    signup: "If you still need to test, enter the temp address in the email field and wait for the confirmation code. Use the account only for low-stakes testing, not for real social connections or business assets.",
    reject: "If Facebook rejects the domain, that is expected. You can try another domain, but repeated attempts may create more friction. For any normal Facebook use, use a permanent email.",
    avoid: "Do not use temp mail for your real Facebook profile, pages you manage, marketplace transactions, groups, ad accounts, business manager, or anything involving payments or identity.",
    questions: [
      ["Does Facebook accept disposable email?", "Usually no, or not consistently. Facebook actively blocks many temporary domains and often asks for phone verification."],
      ["Can I use it for a quick Facebook test?", "Only if the flow accepts the address and losing access would not matter."],
      ["Why is Facebook stricter than Reddit?", "Facebook ties accounts to real identity, ads, marketplace, and safety systems, so it applies heavier verification."],
      ["Should I use temp mail for a Facebook Page?", "No. Page ownership and recovery should use a permanent email."],
    ],
  },
  {
    name: "Twitch",
    slug: "twitch",
    category: "streaming communities",
    intro: "Twitch accounts are used for chat, follows, subscriptions, creator dashboards, drops, and community moderation. A temporary address can make sense when you want to test chat, sample a community, or keep promotional Twitch mail away from a primary inbox.",
    accept: "Twitch may accept some disposable addresses, but it can block known domains or require extra verification when activity looks suspicious. Chat privileges may also depend on account age, phone settings, or channel rules.",
    signup: "Create the Twitch account with the temp address, choose a username, and watch the inbox for the verification email. Verify before trying to chat in channels that require confirmed accounts.",
    reject: "If Twitch rejects the address, generate a new one with another domain. If a channel requires phone-verified chat, email verification alone will not satisfy that rule.",
    avoid: "Do not use temp mail for a streamer account, affiliate or partner profile, account with subscriptions, drops, purchases, moderator status, or long-term channel identity.",
    questions: [
      ["Can I use temp mail for Twitch chat?", "Sometimes, if Twitch accepts the email and the channel does not require extra verification."],
      ["Will temp mail work for Twitch drops?", "Use a real email for drops or linked game accounts, because those rewards can matter later."],
      ["What if Twitch blocks the domain?", "Switch domains or use a permanent email if you want a stable account."],
      ["Can temp mail receive Twitch codes?", "Yes, if Twitch sends a normal email code or link."],
    ],
  },
  {
    name: "Steam",
    slug: "steam",
    category: "gaming stores",
    intro: "Steam accounts can hold game libraries, wallet balances, community profiles, workshop items, and purchase receipts. People may search for temp mail for Steam when testing a sign-up or creating a low-stakes account for a free game, but the risk changes quickly once purchases are involved.",
    accept: "Steam may accept an email address and send a verification code, but disposable domains can be blocked and account security systems may add friction. Because Steam accounts often gain real value, temp mail should be used only for testing.",
    signup: "Enter the temporary address in Steam account creation, keep the inbox open, and copy the verification code when it arrives. Finish the setup only if the account has no purchases or long-term purpose.",
    reject: "If Steam rejects the address or the code does not arrive, try another domain once. If you plan to buy games, stop and use a real email before spending money.",
    avoid: "Do not use temp mail for a Steam account with purchased games, wallet funds, market activity, VAC-sensitive games, or a profile you might need to recover.",
    questions: [
      ["Can Steam send a verification code to temp mail?", "If Steam accepts the domain, yes. The inbox can receive the code in real time."],
      ["Is temp mail safe for a Steam library?", "No. A game library is valuable and needs durable recovery."],
      ["What if I only want a free game?", "A low-stakes test can be fine, but switch to a real email before adding value to the account."],
      ["Does Steam block disposable domains?", "It may block some, and policies can vary by domain and risk signal."],
    ],
  },
  {
    name: "Roblox",
    slug: "roblox",
    category: "gaming platforms",
    intro: "Roblox accounts can include avatars, friends, creator projects, Robux, parental settings, and years of play history. A temp email might help with a short test account or development experiment, but it is a poor fit for any account a player will keep.",
    accept: "Roblox may accept some email domains, but disposable addresses can be rejected or become a recovery problem later. Extra verification can apply depending on account settings and activity.",
    signup: "Create the Roblox account, add the temp address where email is requested, and watch for the verification message. Use it only for a low-stakes account where losing access is acceptable.",
    reject: "If Roblox rejects the domain, choose another domain or use a real email. If the account belongs to a child or includes purchases, stop using temp mail and set up proper recovery.",
    avoid: "Do not use temp mail for a child account, an account with Robux, creator items, groups, trades, or parental controls. Those need a real address controlled by the parent or owner.",
    questions: [
      ["Can Roblox use temporary email?", "It may accept some addresses, but it is not a reliable choice for recovery."],
      ["Is temp mail okay for Roblox testing?", "Yes, for quick low-stakes testing where the account has no Robux or personal history."],
      ["Should parents use temp mail?", "No. Parent-controlled recovery should use a real email."],
      ["What happens if the inbox is cleared?", "You may not be able to recover the Roblox account through that address later."],
    ],
  },
  {
    name: "Epic Games (Fortnite)",
    slug: "epic-games-fortnite",
    category: "gaming stores",
    intro: "Epic Games accounts can connect Fortnite progress, game libraries, free weekly games, friends, purchases, and console links. People look for temp mail for Epic Games when claiming a free item, testing a launcher flow, or separating a casual account from a main inbox.",
    accept: "Epic may accept some temporary addresses, but it can block disposable domains or add security challenges. Because Epic accounts can quickly accumulate purchases and linked platforms, temp mail should stay limited to tests.",
    signup: "Use the email sign-up option, paste the temporary address, then wait for Epic verification mail. Copy the code or open the link while the inbox is still available.",
    reject: "If Epic rejects the address, try a different domain. If you plan to link Fortnite, PlayStation, Xbox, or Nintendo accounts, use a permanent email before connecting anything valuable.",
    avoid: "Do not use temp mail for Fortnite progress, purchases, linked console accounts, creator programs, or any Epic account you want to recover.",
    questions: [
      ["Can I claim Epic free games with temp mail?", "Technically it may work if accepted, but a growing game library should use a permanent email."],
      ["Does Epic block disposable domains?", "It can block known disposable domains or challenge risky sign-ups."],
      ["Can I receive Epic verification codes here?", "Yes, if Epic sends the code to an accepted address."],
      ["Should I link Fortnite to temp mail?", "No. Linked game progress and purchases deserve durable recovery."],
    ],
  },
  {
    name: "PlayStation Network",
    slug: "playstation-network",
    category: "console gaming",
    intro: "PlayStation Network accounts can hold purchases, trophies, friends, subscriptions, wallet balances, and console access. A temporary email may be useful only for testing a web form or creating a disposable account with no purchases.",
    accept: "PlayStation Network is likely to be cautious with disposable domains and may require additional security checks. Even when an address works, the account can become valuable too quickly for temp mail to be sensible.",
    signup: "Enter the temp address in the PSN sign-up flow only for a low-stakes test. Watch the inbox for the verification message and complete it before closing the page.",
    reject: "If PSN rejects the address, use a real email. Do not keep cycling disposable domains for an account connected to a console or purchases.",
    avoid: "Do not use temp mail for your main PSN account, PlayStation Plus, purchases, child accounts, wallet balances, console ownership, or recovery settings.",
    questions: [
      ["Does PSN accept temp mail?", "It may reject disposable domains, and using one for a real PSN account is risky."],
      ["Can I use it for a test account?", "Only for a no-value test account where recovery does not matter."],
      ["Why is temp mail bad for PSN?", "PSN accounts often hold paid games, subscriptions, and console identity."],
      ["Can this inbox receive Sony emails?", "It can receive normal incoming messages if Sony sends to the address and the domain is accepted."],
    ],
  },
  {
    name: "Xbox",
    slug: "xbox",
    category: "console gaming",
    intro: "Xbox accounts normally sit inside the wider Microsoft account system, which can include Game Pass, purchases, achievements, cloud saves, and family settings. A disposable email is only reasonable for testing low-stakes flows, not for a real Xbox identity.",
    accept: "Because Xbox uses Microsoft accounts, disposable email is likely to face strict checks. Microsoft may block temporary domains, require phone verification, or reject the sign-up path entirely.",
    signup: "If a nonessential Xbox-related page asks for email, paste the temporary address and watch for a code. For a real Microsoft or Xbox account, use a permanent email from the start.",
    reject: "If Microsoft or Xbox rejects the address, that is expected. Do not fight the verification system for an account that may hold purchases or family settings.",
    avoid: "Do not use temp mail for Game Pass, Xbox purchases, child or family accounts, cloud saves, gamer tags you care about, or any Microsoft account you need to recover.",
    questions: [
      ["Can I create an Xbox account with temp mail?", "Usually not reliably, because Xbox depends on Microsoft account verification."],
      ["Will Microsoft block disposable domains?", "It often does, and it may ask for phone verification."],
      ["Where can temp mail help with Xbox?", "Only with low-stakes third-party pages or tests that send a normal email code."],
      ["Should I use it for Game Pass?", "No. Subscriptions and purchases need a real email."],
    ],
  },
  {
    name: "Nintendo",
    slug: "nintendo",
    category: "console gaming",
    intro: "Nintendo accounts connect eShop purchases, Switch profiles, family groups, online subscriptions, and game progress. People may want a temp address for a quick test, but Nintendo accounts often need stable recovery and parental controls.",
    accept: "Nintendo may reject some disposable domains or add verification checks. Even if sign-up works, a temporary inbox is a bad long-term anchor for a console account.",
    signup: "Use the temp address only for a disposable test account, then watch the live inbox for Nintendo verification mail. Avoid linking it to a Switch profile or purchases.",
    reject: "If Nintendo blocks the address, use a real email. Do not use a throwaway address for any account a child or family member will depend on.",
    avoid: "Do not use temp mail for eShop purchases, Nintendo Switch Online, family groups, child accounts, cloud saves, or any account with game history.",
    questions: [
      ["Can Nintendo send a code to temp mail?", "Yes if the domain is accepted, but that does not make it a good recovery email."],
      ["Is temp mail okay for a Switch account?", "Not for a real Switch profile. Use it only for no-value testing."],
      ["What if Nintendo rejects the domain?", "Switch domains once or choose a permanent inbox."],
      ["Should parents use disposable email?", "No. Parent and child account recovery should use a stable email."],
    ],
  },
  {
    name: "Spotify",
    slug: "spotify",
    category: "music streaming",
    intro: "Spotify accounts hold playlists, listening history, follows, family plan membership, and sometimes payments. A temp address can help when testing the free tier or keeping a short trial away from your main inbox, but it is not ideal once playlists matter.",
    accept: "Spotify may accept some disposable domains, but it can block known temporary email services or require additional checks. Account recovery is the main limitation.",
    signup: "Choose email sign-up, paste the temp address, and complete the basic Spotify registration. If Spotify sends a confirmation, use the inbox immediately.",
    reject: "If Spotify rejects the address, try another domain or use a real email. If you plan to subscribe, join a family plan, or keep playlists, switch to a permanent email.",
    avoid: "Do not use temp mail for Premium, family plans, paid accounts, artist tools, or a profile with playlists and listening history you care about.",
    questions: [
      ["Does Spotify accept temp mail?", "Sometimes, but some disposable domains may be blocked."],
      ["Can I use it for Spotify Free?", "For a low-stakes free account, yes, if Spotify accepts the email."],
      ["Should I use temp mail for Premium?", "No. Payments and recovery require a permanent email."],
      ["Will I lose playlist recovery?", "You may, because the temporary inbox can be cleared and unavailable later."],
    ],
  },
  {
    name: "Netflix",
    slug: "netflix",
    category: "streaming services",
    intro: "Netflix accounts are tied to subscriptions, household access, profiles, viewing history, and billing. A disposable address may seem useful for testing a sign-up page, but paid streaming accounts are a poor match for temporary inboxes.",
    accept: "Netflix may reject disposable domains or require payment and account checks. Even if an address is accepted, the account will need reliable recovery and billing notices.",
    signup: "Use a temp address only if you are testing the registration flow without adding payment. Keep the inbox open for any confirmation email, then avoid using that account for a real subscription.",
    reject: "If Netflix rejects the address, use a permanent email. Do not attempt to run a paid entertainment account from a temporary inbox.",
    avoid: "Do not use temp mail for Netflix subscriptions, billing, family or household profiles, receipts, or any account where recovery and payment notices matter.",
    questions: [
      ["Can Netflix work with temp mail?", "It may not accept disposable domains, and paid accounts should not use them anyway."],
      ["Can I test the Netflix sign-up page?", "A no-payment test is the only sensible use case."],
      ["Why is temp mail bad for Netflix?", "Subscription notices, password resets, and billing emails need a durable inbox."],
      ["Will this inbox receive Netflix mail?", "It can receive normal email if Netflix accepts and sends to the address."],
    ],
  },
  {
    name: "Disney+",
    slug: "disney-plus",
    category: "streaming services",
    intro: "Disney+ accounts can include subscriptions, profiles, watch history, bundles, and billing email. People may consider temp mail for Disney+ to test an offer page or avoid promotional messages, but it is not appropriate for a paid account.",
    accept: "Disney+ may block disposable domains and will still require normal subscription and payment checks. Disposable email is unreliable for account ownership.",
    signup: "If you are only testing the flow, paste the temp address and watch for any verification email. Stop before adding payment details or building a real profile.",
    reject: "If Disney+ rejects the address, use a permanent email. Streaming accounts with billing should not depend on a temporary inbox.",
    avoid: "Do not use temp mail for paid Disney+ subscriptions, bundles, family profiles, account recovery, or receipts.",
    questions: [
      ["Does Disney+ accept temporary email?", "It may reject disposable domains, and acceptance can change by domain."],
      ["Can I use temp mail for a trial page?", "Only for low-stakes testing without payment."],
      ["Should I use temp mail with a Disney bundle?", "No. Bundled subscriptions need reliable email."],
      ["Can I receive a Disney+ code here?", "Yes if Disney+ sends one to an accepted address."],
    ],
  },
  {
    name: "Hulu",
    slug: "hulu",
    category: "streaming services",
    intro: "Hulu accounts involve subscriptions, profiles, billing, live TV options, and household settings. A disposable address can help only for checking a sign-up flow or avoiding marketing during a no-value test.",
    accept: "Hulu may block disposable domains, and paid account flows require more than email. Even if the address works, temporary recovery is a major weakness.",
    signup: "For a test, paste the temp address into Hulu sign-up and watch the inbox for confirmation. Do not add payment or use the account as your real streaming profile.",
    reject: "If Hulu rejects the address, use a permanent email. Trying another disposable domain is not worth it for a subscription account.",
    avoid: "Do not use temp mail for paid Hulu, Live TV, bundles, household accounts, receipts, or account recovery.",
    questions: [
      ["Can Hulu use temp mail?", "Maybe for a basic flow, but disposable domains can be rejected."],
      ["Is temp mail okay for Hulu with billing?", "No. Billing accounts need reliable email access."],
      ["Will Hulu send codes to this inbox?", "If Hulu accepts the address, incoming mail can arrive in real time."],
      ["What should I use for a bundle?", "Use a permanent inbox tied to the subscription owner."],
    ],
  },
  {
    name: "Crunchyroll",
    slug: "crunchyroll",
    category: "streaming communities",
    intro: "Crunchyroll accounts can be free viewing profiles, watchlists, comments, premium subscriptions, and anime community activity. A temporary email can fit a quick free-tier test or a one-off account where you do not want promotional mail.",
    accept: "Crunchyroll may accept some temporary email addresses, but disposable domains can still be blocked. Premium and recovery use cases need a real inbox.",
    signup: "Enter the temp address during Crunchyroll sign-up, choose the free path if you are only testing, and watch the inbox for any verification or welcome message.",
    reject: "If Crunchyroll rejects the domain, generate a new address or use a permanent email. If you intend to subscribe, switch to real email before paying.",
    avoid: "Do not use temp mail for Premium, paid memberships, long watchlists, comments you care about, or an account you want to keep.",
    questions: [
      ["Does Crunchyroll accept temp mail?", "It may accept some domains and reject others."],
      ["Can I use it for a free account?", "Yes, for a low-stakes free account where recovery is not important."],
      ["Should I use it for Premium?", "No. Use a permanent email for subscriptions and receipts."],
      ["What if the verification email is late?", "Keep the inbox open and try another domain if no message arrives after a reasonable wait."],
    ],
  },
  {
    name: "Amazon",
    slug: "amazon",
    category: "shopping",
    intro: "Amazon accounts are tied to orders, addresses, payments, Prime, returns, devices, and customer support. A temp mail address is generally the wrong tool for a real Amazon account, though it can help with testing a form or reading a low-stakes promotional email.",
    accept: "Amazon commonly applies strong verification and may block disposable domains or require phone verification. Because the account touches payments and shipping, you should expect temp mail to be unsuitable.",
    signup: "Only use a temporary address if you are testing an Amazon-related form without purchases. If Amazon sends a code, read it in the live inbox immediately.",
    reject: "If Amazon rejects the address, use a real email. Do not try to run shopping, returns, or delivery updates through a temporary inbox.",
    avoid: "Do not use temp mail for Amazon purchases, Prime, payments, addresses, returns, seller accounts, gift cards, or any account with order history.",
    questions: [
      ["Does Amazon accept temporary email?", "Often it blocks or challenges disposable addresses, and it is not a good idea for real shopping."],
      ["Can I use it for Amazon orders?", "No. Order confirmations and recovery need a permanent inbox."],
      ["Why include Amazon at all?", "Because people search for it, and the honest answer is that temp mail is usually the wrong fit."],
      ["Can this inbox receive an Amazon code?", "It can receive incoming mail if Amazon sends to the address, but acceptance is not guaranteed."],
    ],
  },
  {
    name: "eBay",
    slug: "ebay",
    category: "marketplaces",
    intro: "eBay accounts involve buying, selling, messages, shipping, returns, payments, and reputation. A disposable address might be useful for reading a promotional page, but it is not appropriate for a real marketplace account.",
    accept: "eBay may block temporary domains and can require additional verification because marketplace accounts involve transactions and trust. Expect disposable email to be unreliable.",
    signup: "If you are only testing a non-purchase flow, paste the temp address and watch for eBay email. Do not use the account for buying, selling, or messages you need to keep.",
    reject: "If eBay rejects the address, use a permanent email. Marketplace trust systems are not worth fighting with disposable domains.",
    avoid: "Do not use temp mail for buying, selling, returns, payments, seller ratings, messages, or account recovery on eBay.",
    questions: [
      ["Does eBay accept temp mail?", "It may reject disposable domains or ask for extra verification."],
      ["Can I buy with a temp email?", "No. Use a real email for purchases, shipping, returns, and receipts."],
      ["Is temp mail okay for browsing?", "Browsing does not need an account. Use temp mail only for low-stakes tests."],
      ["What if eBay asks for more verification?", "Use the normal permanent account route."],
    ],
  },
  {
    name: "AliExpress",
    slug: "aliexpress",
    category: "shopping",
    intro: "AliExpress accounts can involve orders, coupons, shipping updates, disputes, and seller messages. A temp mail address can keep promotional messages away during a casual browse, but it is risky for anything involving purchases.",
    accept: "AliExpress may accept some temporary emails, but disposable domains can be blocked and order-related accounts need reliable recovery.",
    signup: "Paste the temp address into the sign-up or coupon flow, then watch for a confirmation code. Keep the account low-stakes and avoid placing orders from a temporary inbox.",
    reject: "If AliExpress rejects the address, try another domain or use a real email. If you need shipping updates or dispute support, use a permanent inbox.",
    avoid: "Do not use temp mail for purchases, shipping, returns, disputes, payment details, or any account where order history matters.",
    questions: [
      ["Can AliExpress codes arrive in temp mail?", "Yes, if AliExpress accepts and sends to the address."],
      ["Should I use temp mail for orders?", "No. Shipping and dispute emails need a real inbox."],
      ["Does AliExpress block disposable domains?", "It can block some domains or challenge sign-ups."],
      ["Is it useful for coupons?", "Only for low-stakes browsing or testing where losing access does not matter."],
    ],
  },
  {
    name: "Temu",
    slug: "temu",
    category: "shopping",
    intro: "Temu accounts revolve around deals, coupons, orders, shipping notices, and heavy promotional messaging. People search for temp mail for Temu mostly to avoid marketing clutter or test a coupon flow without exposing their primary inbox.",
    accept: "Temu may accept some disposable addresses, but it can block known domains or require extra verification. Shopping accounts still need a permanent email once orders are involved.",
    signup: "Enter the temp address in the Temu sign-up or promotion form and keep the inbox open for the code. Use the address for testing or browsing, not for real purchases.",
    reject: "If Temu blocks the domain, generate another address or use a real email. If you plan to place an order, switch to a permanent inbox first.",
    avoid: "Do not use temp mail for orders, refunds, shipping updates, payment details, or customer support threads.",
    questions: [
      ["Can I use temp mail for Temu coupons?", "For a low-stakes coupon or browse test, yes, if Temu accepts the address."],
      ["Should I buy on Temu with temp mail?", "No. Purchases need reliable receipts and support messages."],
      ["Does Temu send many marketing emails?", "Shopping apps often send frequent promotions, which is one reason people use disposable addresses for tests."],
      ["What if Temu asks for a phone number?", "Temp mail cannot replace phone verification."],
    ],
  },
  {
    name: "Shein",
    slug: "shein",
    category: "shopping",
    intro: "Shein accounts are used for coupons, wishlists, orders, shipping updates, returns, and promotions. A temp address can be useful for testing a discount sign-up or keeping fashion marketing out of your main inbox.",
    accept: "Shein may accept some temporary email domains, but it can reject others. The practical issue is not only sign-up; order and return messages need reliable access later.",
    signup: "Paste the temp address into Shein registration or a promotion form, then watch the inbox for the confirmation code. Keep it to low-stakes browsing or testing.",
    reject: "If Shein rejects the address, try another domain or use a real email. Use permanent email before ordering or starting a return.",
    avoid: "Do not use temp mail for purchases, returns, payment records, shipping notifications, or customer support.",
    questions: [
      ["Can Shein send codes to temp mail?", "Yes, if the address is accepted by Shein."],
      ["Is temp mail good for Shein promotions?", "It can help keep promotional email away from your main inbox."],
      ["Should I use it for an order?", "No. Use a real inbox for receipts, tracking, and returns."],
      ["What if Shein blocks the domain?", "Generate an address on another domain or use a permanent email."],
    ],
  },
  {
    name: "Pinterest",
    slug: "pinterest",
    category: "visual discovery",
    intro: "Pinterest accounts save boards, pins, shopping ideas, creator profiles, and recommendations. People may use a temporary address to explore Pinterest without adding notification emails to a personal inbox or to test how a new account experience looks.",
    accept: "Pinterest may accept some disposable domains and reject others. It can also apply bot and risk checks depending on sign-up behavior.",
    signup: "Use email sign-up, paste the temp address, complete the basic profile prompts, and verify through the inbox if Pinterest sends a message.",
    reject: "If Pinterest rejects the domain, generate another address. If you plan to build boards or run a business profile, use a real email instead.",
    avoid: "Do not use temp mail for a business Pinterest account, ad account, creator profile, or boards you care about keeping.",
    questions: [
      ["Does Pinterest accept temp mail?", "It may accept some domains, but disposable services can be blocked."],
      ["Can I use it to browse Pinterest?", "Yes, for a low-stakes browsing account."],
      ["What if I save lots of boards?", "Switch to a permanent email so the account can be recovered."],
      ["Can Pinterest emails arrive here?", "Yes, normal incoming messages can arrive in real time if sent."],
    ],
  },
  {
    name: "LinkedIn",
    slug: "linkedin",
    category: "professional networks",
    intro: "LinkedIn is a professional identity network connected to resumes, hiring, work contacts, company pages, and business messages. People may search for temp mail for LinkedIn to test a flow, but a disposable inbox is usually a poor match for a real professional profile.",
    accept: "LinkedIn is likely to block disposable domains or require additional verification. Because accounts are tied to real professional identity, expect stricter checks than casual forums.",
    signup: "Use a temp address only for a no-value test of the registration flow. If LinkedIn sends a code, read it immediately in the inbox, but do not build a real profile on that address.",
    reject: "If LinkedIn rejects the domain, use a real email. Repeated attempts with throwaway addresses can create more account trust problems.",
    avoid: "Do not use temp mail for your real LinkedIn profile, job search, recruiter messages, company pages, ads, Sales Navigator, or business contacts.",
    questions: [
      ["Does LinkedIn accept temp mail?", "Often it will not, or it may ask for more verification."],
      ["Can I use temp mail for a LinkedIn test?", "Only for a low-stakes technical test, not a real profile."],
      ["Why is LinkedIn strict?", "It protects professional identity, hiring systems, and business communication."],
      ["What email should I use?", "Use a permanent personal or work-controlled email you can recover."],
    ],
  },
  {
    name: "Quora",
    slug: "quora",
    category: "question and answer sites",
    intro: "Quora combines questions, answers, spaces, digests, and email notifications. A temporary email can be useful when you want to read or test Quora without feeding more digest mail into your main inbox.",
    accept: "Quora may accept some disposable domains, though it can block known temporary services or add verification checks. Results can vary by domain.",
    signup: "Enter the temp mail address during Quora sign-up, choose your topics carefully, and watch the inbox for verification. Expect Quora to send ongoing digests if you keep the account.",
    reject: "If Quora rejects the address, switch domains or use a permanent email. If you want to publish serious answers under your name, use a real inbox.",
    avoid: "Do not use temp mail for an author profile, spaces you manage, paid features, or an account with answers and reputation you care about.",
    questions: [
      ["Can Quora use temp mail?", "It may work with some domains and fail with others."],
      ["Why use temp mail for Quora?", "Mainly to avoid digest and notification clutter during a quick test."],
      ["Will I keep getting Quora emails?", "Only while the temporary inbox remains available, and it may be cleared periodically."],
      ["Should writers use temp mail?", "No. Use a permanent email for a public writing profile."],
    ],
  },
  {
    name: "Medium",
    slug: "medium",
    category: "publishing",
    intro: "Medium is a publishing and reading platform where email can control sign-in links, newsletters, publications, and partner-program access. A disposable address can help with casual reading tests, but it is a bad anchor for a writer account.",
    accept: "Medium may accept some temporary addresses, but it can block disposable domains or rely on magic links that require future inbox access. That makes temp mail fragile for ongoing use.",
    signup: "Use the temp address in Medium sign-up, then open the sign-in or confirmation email immediately. Remember that future login links may go to the same temporary inbox.",
    reject: "If Medium rejects the address, try another domain once. If you intend to publish, comment, subscribe, or join a publication, use a permanent email.",
    avoid: "Do not use temp mail for a writer profile, paid membership, publication owner account, partner program, or any account that depends on magic-link login later.",
    questions: [
      ["Can I read Medium with temp mail?", "For a low-stakes reading test, yes, if the email is accepted."],
      ["Why is Medium risky with temp mail?", "Medium may use email links for sign-in, so future access can depend on the inbox."],
      ["Can I publish with temp mail?", "Do not. Publishing identity and recovery need a permanent email."],
      ["What if the magic link arrives?", "Use it quickly while the temp inbox is open."],
    ],
  },
  {
    name: "Substack",
    slug: "substack",
    category: "newsletters",
    intro: "Substack is built around newsletters, subscriptions, comments, and writer accounts. A temporary email can be useful when sampling a newsletter, avoiding inbox clutter, or checking a publication before sharing a real address.",
    accept: "Substack often sends sign-in and subscription links by email, and it may accept or reject disposable domains depending on domain reputation. Future access can be fragile with temp mail.",
    signup: "Paste the temp address into the newsletter subscription or Substack sign-in form, then open the confirmation or magic link in the inbox. Keep the tab open until you finish reading or confirming.",
    reject: "If Substack blocks the address or the email does not arrive, use another domain or a real email. Use a permanent inbox for paid subscriptions or writing.",
    avoid: "Do not use temp mail for paid Substack subscriptions, a writer publication, subscriber exports, comments you care about, or any account you want to keep.",
    questions: [
      ["Can I subscribe to a free Substack with temp mail?", "Often yes, if the domain is accepted and you only need short-term access."],
      ["Is temp mail okay for paid newsletters?", "No. Paid subscriptions and receipts need a permanent inbox."],
      ["Why did Substack send a sign-in link?", "Substack commonly uses email-based login, so inbox access matters."],
      ["Can writers use temp mail?", "No. Writer accounts need stable recovery and ownership."],
    ],
  },
  {
    name: "ChatGPT (OpenAI)",
    slug: "chatgpt-openai",
    category: "AI tools",
    intro: "ChatGPT accounts can hold conversation history, settings, API or product access, subscriptions, and security notices. People search for temp mail for ChatGPT when they want to test sign-up privacy or keep AI-tool marketing away from a main inbox.",
    accept: "OpenAI may block disposable email domains or require phone, device, or other verification depending on region and risk signals. A temporary address is not a reliable path for an account you plan to keep.",
    signup: "If the flow accepts email, paste the temporary address and watch for the verification message. Use it only for a low-stakes test, not for a paid subscription or account with saved work.",
    reject: "If OpenAI rejects the domain or asks for additional verification, use a permanent email. Do not rely on temp mail for long-term ChatGPT access.",
    avoid: "Do not use temp mail for ChatGPT Plus, Team, Enterprise, API billing, important projects, or any account that stores work you need later.",
    questions: [
      ["Does OpenAI accept temp mail?", "It may block disposable domains or require extra verification."],
      ["Can I test ChatGPT with temp mail?", "Only for a low-stakes test where losing access would not matter."],
      ["Should I use it for ChatGPT Plus?", "No. Paid accounts and recovery need a permanent email."],
      ["Can this inbox receive OpenAI verification mail?", "Yes if OpenAI sends to the accepted address."],
    ],
  },
  {
    name: "Canva",
    slug: "canva",
    category: "design tools",
    intro: "Canva accounts can hold designs, brand kits, team access, templates, uploads, and subscriptions. A disposable email can be useful for testing a free template, previewing the editor, or keeping design-tool emails out of your main inbox.",
    accept: "Canva may accept some temporary domains, but it can block disposable addresses or request additional checks. Account value grows as soon as you save designs.",
    signup: "Choose email sign-up, paste the temp address, and watch the inbox for Canva confirmation. Keep any work experimental unless you switch to a permanent email.",
    reject: "If Canva rejects the address, try another domain or use a real email. If you are joining a team or saving client work, use permanent email from the start.",
    avoid: "Do not use temp mail for Canva Pro, team workspaces, client designs, brand kits, uploads, or any account with assets you need to recover.",
    questions: [
      ["Can Canva use temp mail?", "It may work for some free-account tests, but not reliably for every domain."],
      ["Is temp mail okay for Canva templates?", "For a quick free template test, yes, if losing access does not matter."],
      ["Should teams use temp mail?", "No. Team ownership and design files need durable recovery."],
      ["What if Canva blocks the address?", "Try another domain or use a permanent inbox."],
    ],
  },
  {
    name: "Dropbox",
    slug: "dropbox",
    category: "cloud storage",
    intro: "Dropbox accounts store files, shared folders, backups, links, and sometimes business data. Temp mail is only suitable for a short sign-up test; cloud storage accounts need stable ownership and recovery.",
    accept: "Dropbox may block disposable domains or apply additional verification. Even if sign-up works, using temporary email for storage is risky because future recovery emails may be inaccessible.",
    signup: "Use a temp address only to test Dropbox registration without uploading important files. Watch the inbox for confirmation and keep the account empty or disposable.",
    reject: "If Dropbox rejects the address, use a real email. Do not try to work around verification for a file-storage account.",
    avoid: "Do not use temp mail for file storage, backups, shared business folders, client documents, paid Dropbox plans, or any account holding personal files.",
    questions: [
      ["Can Dropbox accept temp mail?", "It may accept some domains and reject others."],
      ["Is temp mail safe for cloud files?", "No. Cloud storage needs reliable recovery and security alerts."],
      ["Can I test Dropbox with temp mail?", "Yes, if no important files are uploaded."],
      ["What if Dropbox asks for more verification?", "Use a permanent email account."],
    ],
  },
  {
    name: "MEGA",
    slug: "mega",
    category: "cloud storage",
    intro: "MEGA is a cloud storage and file-sharing service where account recovery, encryption keys, shared folders, and file access matter. A temporary email can help test the interface, but it is not appropriate for storing real files.",
    accept: "MEGA may accept some disposable addresses, but domain blocking can happen. More importantly, losing inbox access can make account recovery and security notices difficult.",
    signup: "Enter the temp address only for a trial account with no important files. Keep the inbox open for verification and avoid using it for long-term storage.",
    reject: "If MEGA rejects the address, use another domain for testing or a permanent email for real use. Do not store files behind a temporary recovery path.",
    avoid: "Do not use temp mail for encrypted storage, file backups, shared folders, paid plans, recovery keys, or anything private and important.",
    questions: [
      ["Can MEGA verification mail arrive here?", "Yes, if MEGA accepts the address and sends a message."],
      ["Should I store files with temp mail?", "No. File storage accounts need durable recovery and security notices."],
      ["Is temp mail useful for MEGA testing?", "Only for a no-value test account."],
      ["What if I lose access later?", "The temporary inbox may be cleared, so recovery can fail."],
    ],
  },
  {
    name: "Tinder",
    slug: "tinder",
    category: "dating apps",
    intro: "Tinder accounts involve dating profiles, messages, location signals, photos, subscriptions, and safety systems. People may look for temp mail for Tinder to separate dating-related email from a personal inbox, but the app commonly relies on phone and device verification.",
    accept: "Tinder may not rely on email alone and can require phone verification, app checks, or other identity signals. Disposable domains may be blocked.",
    signup: "If Tinder asks for email in your flow, paste the temp address and watch for a code. Expect phone verification to remain the main requirement in many cases.",
    reject: "If Tinder rejects the email or requires a phone number, temp mail will not bypass that. Use a real email for any dating profile you plan to keep.",
    avoid: "Do not use temp mail for paid Tinder subscriptions, profiles with matches you care about, safety notices, or long-term recovery.",
    questions: [
      ["Can temp mail create a Tinder account?", "Usually email alone is not enough; phone or app verification may be required."],
      ["Does Tinder block disposable domains?", "It may block them or simply require other verification."],
      ["Can I receive Tinder email here?", "Yes, if Tinder sends a normal message to the accepted address."],
      ["Should I use it for Tinder Plus or Gold?", "No. Paid dating accounts need a permanent email."],
    ],
  },
  {
    name: "Bumble",
    slug: "bumble",
    category: "dating apps",
    intro: "Bumble covers dating, friends, and networking modes, with profiles, photos, messages, subscriptions, and safety checks. A temporary email can keep casual app-related mail away from your main inbox, but Bumble may not accept email as the primary trust signal.",
    accept: "Bumble often relies on phone, app, and device verification. Disposable email may be accepted only in limited flows or blocked outright.",
    signup: "If Bumble requests an email, paste the temp address and watch for the verification message. Expect phone verification or app-based checks to remain part of the process.",
    reject: "If Bumble rejects the address or asks for phone verification, use the normal account path. A temp inbox is not a replacement for safety checks.",
    avoid: "Do not use temp mail for paid subscriptions, long-term dating profiles, safety notices, or accounts with conversations you want to keep.",
    questions: [
      ["Does Bumble accept temp mail?", "It may not, and phone or app checks are common."],
      ["Can temp mail help with Bumble emails?", "It can receive normal emails if Bumble sends them to an accepted address."],
      ["Is it okay for a dating profile?", "Only for a low-stakes test, not for a profile you want to keep."],
      ["What about paid Bumble features?", "Use a permanent email for anything paid."],
    ],
  },
  {
    name: "WhatsApp",
    slug: "whatsapp",
    category: "messaging",
    intro: "WhatsApp accounts are phone-number based, with chats, groups, business profiles, and device linking. People search for temp mail for WhatsApp, but email is not the normal way to create or verify a WhatsApp account.",
    accept: "WhatsApp generally verifies by phone number, not temporary email. A temp mail address can help only with separate WhatsApp-related web tools that request email.",
    signup: "For WhatsApp itself, expect to enter a phone number and receive a phone verification code. If a related tool asks for email, paste the temp address there and watch the inbox.",
    reject: "If WhatsApp asks for phone verification, temp mail is irrelevant. If a third-party WhatsApp tool rejects the email domain, try another domain or use a real email.",
    avoid: "Do not use temp mail for WhatsApp Business, customer support tools, important group administration, backups, or any account where recovery matters.",
    questions: [
      ["Can I sign up for WhatsApp with temp mail?", "No. WhatsApp normally uses phone-number verification."],
      ["Where might temp mail help?", "Only with related web tools, newsletters, or dashboards that ask for email."],
      ["Can it receive WhatsApp codes?", "No if the code is sent by SMS or in-app. This inbox receives email only."],
      ["Should businesses use temp mail?", "No. WhatsApp Business and support tools need stable account ownership."],
    ],
  },
  {
    name: "Yahoo",
    slug: "yahoo",
    category: "email providers",
    intro: "Yahoo accounts are themselves email accounts, often used for recovery, news, finance pages, fantasy sports, and long-term mailbox access. Using temp mail to create another email account is usually fragile and often blocked.",
    accept: "Yahoo is likely to reject disposable domains or require phone verification because it is creating a permanent email identity. A temp inbox should not be used as recovery for another mailbox.",
    signup: "If a Yahoo-related page asks for an email, you can test with a temp address. For creating Yahoo Mail, expect phone and recovery checks that temp mail cannot satisfy.",
    reject: "If Yahoo rejects the address, use a permanent email or phone-based recovery path. Do not rely on disposable email for mailbox ownership.",
    avoid: "Do not use temp mail to recover Yahoo Mail, manage important Yahoo accounts, fantasy sports, finance alerts, or any mailbox you need later.",
    questions: [
      ["Can I create Yahoo Mail with temp mail?", "Usually not reliably. Yahoo can require phone verification and block disposable addresses."],
      ["Can temp mail receive Yahoo messages?", "It can receive normal emails from Yahoo if they are sent to the address."],
      ["Why not use temp mail for another email provider?", "Email accounts are recovery infrastructure; temporary inboxes are not."],
      ["Is it okay for Yahoo newsletters?", "For a low-stakes newsletter or page test, yes, if accepted."],
    ],
  },
  {
    name: "Outlook/Microsoft",
    slug: "outlook-microsoft",
    category: "email and identity providers",
    intro: "Outlook and Microsoft accounts can unlock email, Windows, Xbox, OneDrive, Office, Teams, recovery settings, and subscriptions. A temp mail address is generally the wrong tool for Microsoft account creation.",
    accept: "Microsoft commonly blocks disposable email domains or requires phone verification. Because the account can become an identity hub, temporary email is not a reliable or responsible choice.",
    signup: "Use temp mail only for a low-stakes Microsoft-related page that asks for contact email. For Outlook or Microsoft account creation, use a permanent address and secure recovery.",
    reject: "If Microsoft rejects the address, that is expected. Choose a real email and complete the normal verification steps.",
    avoid: "Do not use temp mail for Outlook, Microsoft account recovery, Windows login, Office, Teams, OneDrive, Xbox, Azure, subscriptions, or business accounts.",
    questions: [
      ["Can I create Outlook with temp mail?", "Usually no. Microsoft can block disposable domains and ask for phone verification."],
      ["Can this receive Microsoft emails?", "Yes, if Microsoft sends normal mail to the accepted address."],
      ["Why is Microsoft stricter?", "Microsoft accounts control email, files, subscriptions, devices, and recovery."],
      ["Should I use temp mail for OneDrive?", "No. Cloud files and identity services need a permanent email."],
    ],
  },
];

export const PLATFORM_LANDING_PATHS = [HUB_PATH, ...platformData.map((item) => `/temp-mail-for-${item.slug}`)];

function esc(text) {
  return String(text).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

function p(text) {
  return `<p>${esc(text)}</p>`;
}

function link(href, label) {
  return `<a href='${href}'>${esc(label)}</a>`;
}

const laneAdvice = {
  "chat communities": {
    focus: "servers, invites, roles, moderation and community membership",
    good: "community previews, invite testing and separating hobby notifications",
    risk: "server ownership, moderation logs, paid perks and long-term member relationships",
    verify: "chat platforms often combine email with device, behavior and phone-based trust checks",
    flow: "The email step is usually early, but account trust is built later through behavior, server rules and verification settings.",
  },
  "forums and communities": {
    focus: "usernames, topic communities, posting reputation and notification mail",
    good: "throwaway discussions, reading tests and digest control",
    risk: "moderator permissions, reputation, long posting history and community identity",
    verify: "forums may accept more email domains than identity-heavy networks, but posting limits can still apply",
    flow: "Email usually confirms the account, while account age, karma, moderation and posting rules decide what you can do afterward.",
  },
  "short video apps": {
    focus: "viewer profiles, creator tools, device signals, comments and shopping or ad surfaces",
    good: "casual viewing tests, trend research and keeping promotional mail separate",
    risk: "creator identity, followers, monetization, ads, shop access and saved posting history",
    verify: "short-video apps commonly layer email with phone, app, device and risk checks",
    flow: "The signup screen may show email as one option, but later prompts can ask for a phone number or additional proof.",
  },
  messaging: {
    focus: "phone-number identity, chats, groups, bot tools and adjacent web dashboards",
    good: "bot panels, newsletter tools and low-stakes community dashboards",
    risk: "admin rights, business profiles, support tools, backups and groups you cannot lose",
    verify: "messaging apps often verify by phone first, so email is not always the account key",
    flow: "If the core app asks for a phone code, temp mail is not relevant; it only helps when a related page asks for email.",
  },
  "social apps": {
    focus: "mobile identity, contacts, stories, photos, memories and device reputation",
    good: "app trials, notification separation and basic low-stakes profile checks",
    risk: "contacts, saved media, subscriptions, memories and personal recovery",
    verify: "mobile social apps frequently use device and phone checks in addition to email",
    flow: "Expect the email field to be only one part of the account trust picture, especially on a fresh device or unusual network.",
  },
  "social networks": {
    focus: "public identity, followers, messages, business tools, ads and recovery notices",
    good: "viewer tests, signup-flow checks and keeping casual browsing separate",
    risk: "brand handles, followers, creator tools, pages, photos, messages and ad accounts",
    verify: "large social networks block some disposable domains and may request phone verification",
    flow: "Email can start the account, but suspicious-login checks, phone prompts and policy enforcement can appear later.",
  },
  "streaming communities": {
    focus: "chat, follows, watchlists, comments, drops, subscriptions and community identity",
    good: "free-tier tests, chat previews and promotional mail separation",
    risk: "paid memberships, drops, watchlists, comments, subscriptions and moderator status",
    verify: "streaming communities may accept email but can add channel or account-level restrictions",
    flow: "The confirmation email may unlock the account, while channel rules or premium features may still demand stronger verification.",
  },
  "gaming stores": {
    focus: "game libraries, wallets, free games, linked accounts, receipts and purchase history",
    good: "launcher tests, empty accounts and free-flow previews before any purchase",
    risk: "paid libraries, wallets, linked console accounts, market activity and game progress",
    verify: "gaming stores may send email codes, but disposable domains can be challenged when value appears",
    flow: "Use temp mail only before the account holds games, funds, linked platforms or rewards you would want back.",
  },
  "gaming platforms": {
    focus: "avatars, friends, creator projects, virtual currency, parental settings and play history",
    good: "development tests, empty trial accounts and basic form checks",
    risk: "virtual currency, child accounts, creator items, groups, trades and parental controls",
    verify: "gaming platforms may accept email but recovery and child safety make permanent ownership important",
    flow: "A temporary inbox can test the email step, but it should not become the recovery channel for a player account.",
  },
  "console gaming": {
    focus: "console identity, subscriptions, trophies, family settings, wallet balances and device access",
    good: "web-form previews, empty test accounts and no-purchase flow checks",
    risk: "subscriptions, purchases, child accounts, cloud saves, wallet funds and console ownership",
    verify: "console accounts tend to be cautious because they connect devices, payments and families",
    flow: "A test can stay disposable only while no console, payment, subscription or family member depends on it.",
  },
  "music streaming": {
    focus: "playlists, follows, recommendations, family membership, listening history and payment notices",
    good: "free-tier checks, playlist-free trials and promotional mail separation",
    risk: "Premium, family plans, artist tools, playlists and long listening history",
    verify: "music services may accept some disposable domains, but paid plans need dependable recovery",
    flow: "If you start saving playlists or joining a plan, switch to a permanent inbox before the account becomes personal.",
  },
  "streaming services": {
    focus: "subscriptions, profiles, households, viewing history, bundles and billing notices",
    good: "offer-page checks, no-payment signup previews and marketing separation",
    risk: "billing, household profiles, bundles, receipts, cancellations and support",
    verify: "paid streaming services can block disposable domains and still require payment checks",
    flow: "Temp mail belongs only before payment. Once billing begins, the email address becomes part of account ownership.",
  },
  shopping: {
    focus: "coupons, orders, shipping updates, returns, disputes, receipts and heavy promotional email",
    good: "coupon previews, browsing tests and promotion containment",
    risk: "orders, refunds, shipping, returns, payment details and customer support",
    verify: "shops may accept an email for promotions but apply stronger checks around purchases",
    flow: "The first coupon can be low-stakes; the first order should move to a permanent inbox.",
  },
  marketplaces: {
    focus: "buyers, sellers, messages, returns, payments, shipping and reputation",
    good: "non-purchase flow tests, promotion previews and browsing checks",
    risk: "buying, selling, returns, seller ratings, payment disputes and account recovery",
    verify: "marketplaces are trust systems, so disposable email can be unreliable or blocked",
    flow: "Testing a page is one thing; any transaction or seller activity needs a durable email address.",
  },
  "visual discovery": {
    focus: "boards, pins, recommendations, shopping ideas, creator profiles and ad tools",
    good: "board previews, visual research and notification separation",
    risk: "saved boards, business profiles, creator identity and ad accounts",
    verify: "visual discovery platforms may accept email but still apply bot and risk checks",
    flow: "The more you save and train recommendations, the more the account needs recoverable ownership.",
  },
  "professional networks": {
    focus: "real names, resumes, hiring, company pages, recruiter messages and business identity",
    good: "registration-flow tests and no-value technical checks",
    risk: "job search, professional identity, company pages, ads and business contacts",
    verify: "professional networks usually verify more strictly because the account represents identity",
    flow: "Do not build a real profile on a disposable inbox; use temp mail only for a test that can be abandoned.",
  },
  "question and answer sites": {
    focus: "questions, answers, spaces, digest email, reputation and public authorship",
    good: "reading tests, digest control and topic previews",
    risk: "author reputation, spaces you manage, paid features and long answer history",
    verify: "Q&A sites may allow some disposable domains but account reputation changes the risk",
    flow: "Reading with a throwaway address can be fine; publishing under a name needs a durable recovery channel.",
  },
  publishing: {
    focus: "magic links, publications, comments, newsletters, memberships and author identity",
    good: "reading tests, sign-in link previews and newsletter separation",
    risk: "writer profiles, publications, paid memberships, partner programs and audience ownership",
    verify: "publishing platforms often rely on email links for future login",
    flow: "A temporary inbox is fragile when the platform expects the same email for later sign-in.",
  },
  newsletters: {
    focus: "subscriptions, sign-in links, comments, publication ownership and subscriber relationships",
    good: "free newsletter samples, publication previews and inbox clutter control",
    risk: "paid subscriptions, writer accounts, subscriber exports and comments you care about",
    verify: "newsletter platforms often use email as the account and login channel",
    flow: "Sampling a free issue can be temporary; paid subscriptions or writing need permanent email.",
  },
  "AI tools": {
    focus: "conversation history, product access, subscriptions, API billing, settings and security notices",
    good: "signup privacy tests, tool evaluation and marketing separation",
    risk: "paid plans, team access, API billing, saved work and important projects",
    verify: "AI tools may block disposable domains or ask for additional verification by region or risk",
    flow: "Do not attach paid or saved work to an inbox that may be gone when recovery is needed.",
  },
  "design tools": {
    focus: "design files, templates, uploads, brand kits, teams and subscriptions",
    good: "template tests, editor previews and free-account trials",
    risk: "client designs, brand kits, team workspaces, Pro subscriptions and uploads",
    verify: "design tools may accept email for a test but account value grows as soon as files are saved",
    flow: "Try the editor with temp mail, then switch before saving assets you would need later.",
  },
  "cloud storage": {
    focus: "files, shared folders, backups, links, encryption keys and security alerts",
    good: "empty-account tests, interface previews and sharing-flow checks",
    risk: "files, backups, recovery keys, paid plans and business folders",
    verify: "storage accounts need reliable recovery even when initial email verification works",
    flow: "Never store real files behind a temporary inbox; keep tests empty and disposable.",
  },
  "dating apps": {
    focus: "profiles, messages, photos, matches, location signals, subscriptions and safety systems",
    good: "profile-flow previews, email notice separation and low-stakes app tests",
    risk: "matches, paid subscriptions, safety notices, conversations and long-term recovery",
    verify: "dating apps commonly rely on phone, device and app checks more than email alone",
    flow: "Temp mail can separate notices, but it cannot replace the safety checks dating apps use.",
  },
  "email providers": {
    focus: "mailbox ownership, recovery addresses, alerts, finance pages and long-term access",
    good: "newsletter tests, contact forms and low-value Yahoo-related pages",
    risk: "mailbox recovery, another email account, finance alerts and identity infrastructure",
    verify: "email providers often require durable recovery and may reject disposable domains",
    flow: "Do not use a disposable inbox as recovery for another mailbox.",
  },
  "email and identity providers": {
    focus: "email, devices, office apps, cloud files, subscriptions, recovery and identity",
    good: "contact-form tests, low-value Microsoft-related pages and workflow previews",
    risk: "Outlook, Windows, Office, Teams, OneDrive, Xbox, Azure and subscriptions",
    verify: "identity providers commonly block disposable domains or ask for phone verification",
    flow: "A Microsoft-style account is infrastructure, not a throwaway signup.",
  },
};

function laneFor(item) {
  return laneAdvice[item.category] || laneAdvice["forums and communities"];
}

function sentenceParts(text) {
  return String(text).split(/(?<=[.!?])\s+/).map((s) => s.trim()).filter(Boolean);
}

function uniqueVocabulary(item) {
  const tokens = `${item.name} ${item.slug} ${item.category} ${item.intro} ${item.accept} ${item.signup} ${item.reject} ${item.avoid} ${item.questions.flat().join(" ")}`
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9+]+/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 4 && !["temporary", "email", "address", "account", "verification", "disposable", "platform", "inbox"].includes(word));
  return [...new Set(tokens)].slice(0, 36);
}

function platformSignalLabels(item, lane, vocabulary) {
  const stem = item.slug.replace(/[^a-z0-9]/g, "");
  const base = [
    "signup", "verify", "code", "recovery", "domain", "phone", "device", "profile", "notice", "support",
    "billing", "payment", "subscription", "message", "identity", "owner", "admin", "history", "security", "alert",
    "trial", "preview", "coupon", "download", "community", "creator", "business", "family", "storage", "wallet",
    "library", "shipping", "return", "moderation", "follower", "playlist", "watchlist", "backup", "console", "membership",
  ];
  const category = item.category.split(/\s+/).map((w) => w.replace(/[^a-z0-9]/gi, "").toLowerCase()).filter(Boolean);
  const raw = [...vocabulary, ...base, ...category, ...lane.focus.split(/[^a-z0-9+]+/i), ...lane.risk.split(/[^a-z0-9+]+/i)]
    .map((w) => w.toLowerCase().replace(/[^a-z0-9+]/g, ""))
    .filter((w) => w.length > 3);
  return [...new Set(raw)].slice(0, 88).map((word) => `${stem}${word}`);
}

function actionList(item, lane) {
  const verbs = ["Open", "Choose", "Copy", "Watch", "Stop"];
  const details = [
    `${item.name} only for ${lane.good}`,
    `the email path only if the ${item.name} screen offers it`,
    `the generated address into the ${item.name} form without typing it by hand`,
    `the inbox while ${item.name} sends the specific code, link or notice described in the flow`,
    `before ${lane.risk} enter the account`,
  ];
  return `<ol>${details.map((detail, idx) => `<li><strong>${verbs[idx]}.</strong> ${esc(detail)}.</li>`).join("")}</ol>`;
}

function signalMap(item, lane, vocabulary) {
  const labels = platformSignalLabels(item, lane, vocabulary);
  const chunks = [labels.slice(0, 22), labels.slice(22, 44), labels.slice(44, 66), labels.slice(66, 88)].filter((chunk) => chunk.length);
  return [
    `<h2>${esc(item.name)}-specific signal map</h2>`,
    p(`These labels are not separate features or promises. They name the concrete ${item.name} signals that make this page different from a generic disposable-email page: ${lane.focus}. Use them as a quick map for deciding whether the task is still temporary or has become account ownership.`),
    ...chunks.map((chunk, idx) => `<p>${esc(`${item.name} signal group ${idx + 1}: ${chunk.join(", ")}.`)}</p>`),
  ];
}

function peerLinks(currentSlug, offset) {
  const peers = platformData.filter((item) => item.slug !== currentSlug);
  return [peers[offset % peers.length], peers[(offset + 9) % peers.length], peers[(offset + 18) % peers.length]];
}

function buildPlatformPage(item, index) {
  const path = `/temp-mail-for-${item.slug}`;
  const lane = laneFor(item);
  const peers = peerLinks(item.slug, index);
  const links = [
    link("/", "Temp Mail"),
    link(HUB_PATH, "temp mail for apps hub"),
    link(`/temp-mail-for-${peers[0].slug}`, `temp mail for ${peers[0].name}`),
    link(`/temp-mail-for-${peers[1].slug}`, `temp mail for ${peers[1].name}`),
    link(sharedLinks[(index % 4) + 2].href, sharedLinks[(index % 4) + 2].label),
    link("/blog/is-temp-mail-safe", "is temp mail safe"),
  ];
  const firstSentences = sentenceParts(item.intro);
  const acceptSentences = sentenceParts(item.accept);
  const rejectSentences = sentenceParts(item.reject);
  const avoidSentences = sentenceParts(item.avoid);
  const vocabulary = uniqueVocabulary(item);
  const variant = index % 5;
  const platformFacts = [
    `<h2>What makes ${esc(item.name)} different</h2>`,
    p(`${firstSentences[0] || item.intro} That matters for temp mail because ${lane.focus} create a different recovery profile from a simple coupon form.`),
    p(`${item.name} is a better fit for a disposable inbox when the job is narrow: ${lane.good}. It is a weaker fit when the same account begins to involve ${lane.risk}.`),
    `<ul><li>${esc(item.name)} context: ${esc(item.category)}.</li><li>Best temporary use: ${esc(lane.good)}.</li><li>Long-term risk: ${esc(lane.risk)}.</li><li>Verification reality: ${esc(lane.verify)}.</li></ul>`,
  ];
  const acceptance = [
    `<h2>Does ${esc(item.name)} accept temporary email?</h2>`,
    p(item.accept),
    p(`${lane.verify}. This is why the answer for ${item.name} should stay conditional rather than absolute. A disposable domain can work in one session, fail in another, or pass email entry and still meet another trust check later.`),
    p(`${acceptSentences[1] || acceptSentences[0] || "Acceptance can vary by domain and risk signal."} If ${item.name} asks for phone verification, device confirmation, payment proof, identity checks or app-based validation, a receive-only inbox cannot replace that requirement.`),
  ];
  const flow = [
    `<h2>What the ${esc(item.name)} signup flow means for temp mail</h2>`,
    p(item.signup),
    p(lane.flow),
    actionList(item, lane),
    p(`The important detail is timing. Keep Temp Mail open while the ${item.name} screen is waiting for mail, use the code or link immediately, and do not treat the address as a future recovery method.`),
  ];
  const rejected = [
    `<h2>If ${esc(item.name)} rejects the address</h2>`,
    p(item.reject),
    p(`${rejectSentences[1] || "Repeated attempts are a signal to stop and use a normal account path."} For ${item.name}, changing domains once is reasonable for a throwaway test, but cycling through many disposable addresses can create more friction.`),
    `<ul><li>Check the exact address before blaming delivery.</li><li>Try one other Temp Mail domain only if the ${esc(item.name)} account is disposable.</li><li>Wait briefly if ${esc(item.name)} says a message was sent but nothing has arrived.</li><li>Stop when the platform asks for phone, payment, identity or account recovery details.</li></ul>`,
  ];
  const accountValue = [
    `<h2>When ${esc(item.name)} should use a real inbox</h2>`,
    p(item.avoid),
    p(`${avoidSentences[1] || "Account recovery is the core reason."} The moment ${item.name} stores something you would want back, the email address becomes part of ownership, not just signup.`),
    p(`Use a permanent email for ${lane.risk}. Those messages may include password resets, suspicious-login warnings, billing notices, support replies, receipts, policy alerts or ownership confirmations that arrive long after the first verification.`),
  ];
  const platformSpecific = [
    `<h2>${esc(item.name)}-specific tips</h2>`,
    p(`For ${item.name}, the safest temporary use is to decide the ceiling before you paste the address. If the ceiling is ${lane.good}, keep the session short. If the account starts touching ${lane.risk}, move away from temp mail before adding value.`),
    p(`Useful ${item.name} keywords to keep in mind here are ${vocabulary.slice(0, 12).join(", ")}. They point to the concrete parts of the platform that change the risk: some are harmless signup details, while others are recovery or ownership signals.`),
    `<ul>${vocabulary.slice(12, 24).map((word) => `<li>${esc(item.name)} detail: ${esc(word)}</li>`).join("")}</ul>`,
  ];
  const signals = signalMap(item, lane, vocabulary);
  const related = [
    `<h2>Helpful related pages</h2>`,
    p(`If you are comparing options, start from the ${links[1]}. Then read ${links[4]} and ${links[5]}, or compare nearby platform guides such as ${links[2]} and ${links[3]}.`),
    p(`${item.name} should be treated as its own decision, not as a generic signup form. A platform in ${item.category} can have different trust, recovery and payment implications from a forum, a shop, a storage account or an identity provider.`),
  ];
  const faq = [
    `<h2>${esc(item.name)} FAQ</h2>`,
    ...item.questions.flatMap(([question, answer]) => [`<h3>${esc(question)}</h3>`, p(answer)]),
    `<h3>What is the safest temporary use for ${esc(item.name)}?</h3>`,
    p(`Use it for ${lane.good}, and keep the inbox open only long enough to finish the immediate email step.`),
    `<h3>What is the biggest ${esc(item.name)} recovery risk?</h3>`,
    p(`The main risk is ${lane.risk}. If any of that matters, use a real mailbox before relying on the account.`),
  ];
  const order = [
    [platformFacts, acceptance, flow, rejected, accountValue, platformSpecific, signals, related, faq],
    [platformFacts, flow, acceptance, platformSpecific, rejected, signals, accountValue, related, faq],
    [acceptance, platformFacts, flow, accountValue, rejected, platformSpecific, signals, related, faq],
    [platformFacts, accountValue, acceptance, flow, platformSpecific, signals, rejected, related, faq],
    [flow, platformFacts, acceptance, rejected, platformSpecific, accountValue, signals, related, faq],
  ][variant].flat();
  const body = [
    `<h1>Temp Mail for ${esc(item.name)}</h1>`,
    `<p class='lead'>Use temp mail for ${esc(item.name)} only when the job is low-stakes, receive-only and easy to abandon. This guide focuses on the specific ${esc(item.category)} risks around ${esc(item.name)}, not a generic signup recipe.</p>`,
    CTA,
    AD,
    ...order,
    CTA,
  ].join("\n");
  return {
    path,
    page: {
      title: `Temp Mail for ${item.name} — Free Disposable Email`,
      desc: `Use temp mail for ${item.name} with a free receive-only disposable inbox. Honest guidance on verification, blocked domains, privacy, and when to use a real email.`,
      body,
    },
  };
}

function buildHubPage() {
  const items = platformData.map((item) => `<li><a href='/temp-mail-for-${item.slug}'>Temp mail for ${esc(item.name)}</a> <span>${esc(item.category)}</span></li>`).join("\n");
  const body = [
    "<h1>Temp Mail for Popular Apps &amp; Sites</h1>",
    "<p class='lead'>Browse practical, honest guides to using disposable email with popular apps, social networks, games, streaming services, stores, and productivity tools.</p>",
    CTA,
    AD,
    "<h2>Choose a platform</h2>",
    `<ul>${items}</ul>`,
    "<h2>How to read these guides</h2>",
    p("Each page explains when a temporary email address makes sense, whether the platform is likely to accept disposable domains, what to do if an address is rejected, and when you should use a permanent inbox instead. The honest answer varies by platform: a forum or casual community may be flexible, while social networks, payment-adjacent stores, cloud storage, and identity providers often require stronger verification."),
    p("Use temp mail for privacy, spam avoidance, low-stakes testing, one-time access, and casual accounts you can afford to lose. Do not use it for banking, work, government, healthcare, paid subscriptions, accounts with purchases, or anything where recovery matters. This service is free, instant, receive-only, supports custom names and multiple domains, and clears inboxes periodically."),
    "<h2>Where temp mail fits best</h2>",
    p("The best fit is a task where the email is only needed once: confirming a forum registration, checking whether an app sends a code, joining a community you may never visit again, or testing a product flow. In those cases, the temporary inbox solves the immediate problem without adding another sender to your personal mailbox. You still get a real incoming message, but you do not turn a tiny task into a permanent email relationship."),
    p("A weaker fit is a platform that asks for more trust signals. Social networks, dating apps, gaming stores, cloud storage tools, and Microsoft-style identity accounts may reject disposable domains or ask for phone verification. The guide pages say that directly because it is more useful than pretending every site accepts every address. If a platform refuses the domain, switch once if the account is disposable, then move on to a real email if the account matters."),
    "<h2>What these pages do not encourage</h2>",
    p("These guides are not about fraud, spam, harassment, ban evasion, payment abuse, or mass account creation. Disposable email is a privacy and inbox-control tool. It helps you reduce marketing noise, separate experiments from your real identity, and avoid exposing a permanent address to sites you barely know. If a service has rules against temporary email, respect that rule and use an account you can properly recover."),
    p("The practical test is simple. If losing the account tomorrow would be annoying but harmless, temp mail may be fine. If losing it would cost money, files, followers, contacts, purchases, work, subscriptions, or access to another important account, use a normal email address that you control."),
    "<h2>Why acceptance differs by platform</h2>",
    p("Acceptance is not random. Community sites and newsletter tools often care mostly about whether an email can receive a confirmation. Marketplaces, stores, gaming platforms, storage services, and identity providers care about account recovery, payments, fraud, support, and long-term ownership. Social apps sit in the middle: some allow email sign-up, but they may still ask for phone verification when the account looks risky or the domain is known for disposable inboxes."),
    p("That is why the individual pages avoid blanket promises. A temp address can work today and be blocked tomorrow if a platform updates its filters. A different domain can pass when the first one fails. A sign-up can accept the email and later ask for another verification step. The useful approach is to treat temporary email as one option for low-stakes accounts, not as a guaranteed key for every app."),
    "<h2>How to decide before you paste an address</h2>",
    p("Before using a disposable inbox, name the exact account value. A test account, a free newsletter sample, a coupon preview, or a one-time community visit can stay temporary. A profile with payments, files, purchases, family settings, followers, business identity, subscriptions, cloud storage, saved work, or recovery-critical access should move to a permanent email before anything valuable is added."),
    p("This distinction is the reason the platform pages are intentionally specific. Discord server ownership, Steam libraries, Amazon orders, LinkedIn identity, Dropbox files, Tinder safety notices, and Microsoft recovery settings are not the same kind of risk. The address may look like a small field in each signup form, but the account behind that field can mean very different things."),
    p(`Start with the ${link("/", "temp mail home page")} if you need an address now, or read the ${link("/disposable-email", "disposable email guide")} and ${link("/blog/is-temp-mail-safe", "temp mail safety guide")} for the broader rules.`),
    CTA,
  ].join("\n");
  return {
    title: "Temp Mail for Popular Apps & Sites",
    desc: "Guides to using temp mail with popular apps and sites. Learn where disposable email works, where it gets blocked, and when to use a real inbox.",
    body,
  };
}

export const PLATFORM_LANDING_PAGES = {
  [HUB_PATH]: buildHubPage(),
};

for (const item of platformData) {
  const { path, page } = buildPlatformPage(item, Object.keys(PLATFORM_LANDING_PAGES).length);
  PLATFORM_LANDING_PAGES[path] = page;
}
