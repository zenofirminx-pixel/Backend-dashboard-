export default async function handler(req, res) {
try {
console.log("🤖 AurX Telegram Webhook");

if (req.method !== "POST") {
  return res.status(200).send("OK");
}

const BOT_TOKEN = process.env.BOT_TOKEN;

if (!BOT_TOKEN) {
  console.log("❌ BOT_TOKEN manquant");
  return res.status(500).json({ error: "BOT_TOKEN missing" });
}

const update = req.body;
const message = update?.message;

if (!message || !message.text) {
  return res.status(200).send("No message");
}

const chatId = message.chat.id;
const text = message.text.toLowerCase().trim();

console.log("👤 Message reçu :", text);

let reply = "";

// START
if (text === "/start") {
  const starts = [

`👋 Bienvenue sur AurX !

Je suis le bot officiel d'AurX.

🤖 AurX est une intelligence artificielle moderne capable de répondre aux questions, d'aider à apprendre et d'accompagner les utilisateurs dans leurs projets.

🚀 Utiliser AurX :
https://aurx.vercel.app

Vous pouvez l'utiliser directement depuis votre navigateur ou l'installer comme une application.`,

`🚀 Bienvenue !

Je représente officiellement AurX.

AurX est un assistant IA conçu pour fournir des réponses intelligentes, aider à la recherche et accompagner les utilisateurs au quotidien.

🌍 Accéder à AurX :
https://aurx.vercel.app

Merci de votre visite et bonne découverte !`
];

  reply = starts[Math.floor(Math.random() * starts.length)];
}

// INSTALLATION
else if (
  text.includes("install") ||
  text.includes("installer") ||
  text.includes("download") ||
  text.includes("télécharger") ||
  text.includes("app") ||
  text.includes("application") ||
  text.includes("apk")
) {
  reply =

`📲 Installer AurX

1️⃣ Ouvrez :
https://aurx.vercel.app

2️⃣ Android :
Menu du navigateur → Ajouter à l'écran d'accueil

3️⃣ PC :
Cliquez sur Installer dans votre navigateur.

AurX fonctionnera ensuite comme une application classique.`;
}

// C'EST QUOI AURX ?
else if (
  text.includes("aurx") ||
  text.includes("ai") ||
  text.includes("ia") ||
  text.includes("assistant") ||
  text.includes("chatbot") ||
  text.includes("intelligence") ||
  text.includes("what is") ||
  text.includes("c'est quoi") ||
  text.includes("qui es tu") ||
  text.includes("who are you")
) {
  const infos = [

`🤖 Je suis le bot officiel d'AurX.

AurX est une intelligence artificielle moderne conçue pour répondre aux questions, expliquer des concepts et aider les utilisateurs dans leurs projets.

🚀 Découvrir AurX :
https://aurx.vercel.app`,

`🌍 AurX est une plateforme d'intelligence artificielle accessible directement depuis votre navigateur.

Elle permet de discuter avec une IA moderne et de bénéficier d'une expérience proche d'une application native.

📲 Essayer AurX :
https://aurx.vercel.app`
];

  reply = infos[Math.floor(Math.random() * infos.length)];
}

// BONJOUR / HELLO
else if (
  text.includes("bonjour") ||
  text.includes("salut") ||
  text.includes("bonsoir") ||
  text.includes("hello") ||
  text.includes("hi") ||
  text.includes("hey")
) {
  const greetings = [

`👋 Bonjour !

Je suis le bot officiel d'AurX.

Si vous souhaitez découvrir AurX, rendez-vous sur :

https://aurx.vercel.app`,

`🤖 Hello !

Welcome to AurX.

AurX is a modern AI assistant available directly from your browser.

🚀 https://aurx.vercel.app`
];

  reply = greetings[Math.floor(Math.random() * greetings.length)];
}

// DEFAULT
else {
  const defaults = [

`🤖 Je suis le bot officiel d'AurX.

AurX est une intelligence artificielle moderne accessible depuis votre navigateur.

🚀 Utiliser AurX :
https://aurx.vercel.app`,

`👋 Merci pour votre message.

Pour découvrir AurX et commencer à utiliser l'IA :

https://aurx.vercel.app`,

`🚀 AurX vous attend.

Accédez à l'application ici :

https://aurx.vercel.app

Je peux également vous expliquer comment l'installer.`
];

  reply = defaults[Math.floor(Math.random() * defaults.length)];
}

const telegramResponse = await fetch(
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

const telegramData = await telegramResponse.json();

console.log("📤 Telegram:", telegramData);

return res.status(200).json({
  ok: true
});

} catch (error) {
console.error("❌ Erreur :", error);

return res.status(200).json({
  ok: false,
  error: error.message
});

}
}