export default async function handler(req, res) {
try {
console.log("🔥 TELEGRAM WEBHOOK HIT");

if (req.method !== "POST") {
  return res.status(200).send("OK");
}

const BOT_TOKEN = process.env.BOT_TOKEN;

if (!BOT_TOKEN) {
  console.log("❌ BOT_TOKEN MISSING");
  return res.status(200).json({ ok: false });
}

const update = req.body;
const message = update?.message;

if (!message || !message.text) {
  return res.status(200).send("No message");
}

const chatId = message.chat.id;
const text = message.text.toLowerCase().trim();

console.log("👤 USER:", text);

let reply = "";

// FR
if (
  text.includes("bonjour") ||
  text.includes("salut") ||
  text.includes("bonsoir")
) {
  const responses = [
    `👋 Bienvenue sur AurX !

Je suis le bot officiel d'AurX.

Souhaitez-vous utiliser l'application AurX ?

🚀 Accéder à AurX :
https://aurx.vercel.app

AurX peut être installé directement sur votre téléphone ou ordinateur.`,

    `🤖 Bonjour !

Merci de votre intérêt pour AurX.

AurX est une intelligence artificielle moderne conçue pour répondre à vos questions et vous assister au quotidien.

📲 Ouvrir AurX :
https://aurx.vercel.app`
];

  reply = responses[Math.floor(Math.random() * responses.length)];
}

// EN
else if (
  text.includes("hello") ||
  text.includes("hi") ||
  text.includes("hey")
) {
  const responses = [
    `👋 Welcome to AurX!

I am the official AurX bot.

Would you like to try the AurX application?

🚀 Launch AurX:
https://aurx.vercel.app`,

    `🤖 Hello!

AurX is an AI assistant available directly from your browser.

📲 Open AurX:
https://aurx.vercel.app`
];

  reply = responses[Math.floor(Math.random() * responses.length)];
}

// Download / Install
else if (
  text.includes("download") ||
  text.includes("install") ||
  text.includes("app") ||
  text.includes("application") ||
  text.includes("télécharger")
) {
  reply =

`📲 Télécharger AurX

1️⃣ Ouvrez :
https://aurx.vercel.app

2️⃣ Sur Android :
Menu navigateur → Ajouter à l'écran d'accueil

3️⃣ Sur PC :
Installer l'application depuis votre navigateur.

🚀 AurX sera disponible comme une vraie application.`;
}

// About AurX
else if (
  text.includes("aurx") ||
  text.includes("ai") ||
  text.includes("ia") ||
  text.includes("assistant")
) {
  reply =

`🤖 AurX est une intelligence artificielle moderne.

Fonctionnalités :

• Réponses intelligentes
• Conversations naturelles
• Mémoire utilisateur
• Interface moderne
• Installation PWA

🌍 Essayer AurX :
https://aurx.vercel.app`;
}

// Default
else {
  const defaults = [
    `👋 Je suis le bot officiel d'AurX.

📲 Utiliser AurX :
https://aurx.vercel.app`,

    `🤖 Merci pour votre message.

Pour accéder à AurX :
https://aurx.vercel.app`,

    `🚀 AurX est disponible ici :

https://aurx.vercel.app

Essayez l'application directement depuis votre navigateur.`
];

  reply = defaults[Math.floor(Math.random() * defaults.length)];
}

const telegramRes = await fetch(
  `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: reply
    })
  }
);

const telegramData = await telegramRes.json();

console.log("📤 TELEGRAM:", telegramData);

return res.status(200).json({
  ok: true
});

} catch (error) {
console.error("❌ ERROR:", error);

return res.status(200).json({
  ok: false
});

}
}