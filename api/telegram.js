export default async function handler(req, res) {
  try {
    console.log("🔥 WEBHOOK HIT");

    if (req.method !== "POST") {
      return res.status(200).send("OK");
    }

    const update = req.body;
    const message = update.message;

    if (!message || !message.text) {
      return res.status(200).send("no message");
    }

    const chatId = message.chat.id;
    const text = message.text.toLowerCase();

    let reply = "";

    if (
      text.includes("/start") ||
      text.includes("aurx") ||
      text.includes("ia") ||
      text.includes("assistant")
    ) {
      reply =
`🤖 Bienvenue sur AurX !

AurX est une intelligence artificielle accessible directement depuis ton navigateur.

🚀 Fonctionnalités :
• Conversations IA
• Mémoire intelligente
• Réponses rapides
• Interface moderne
• Installation comme une application

📲 Télécharger AurX :
https://aurx.vercel.app

Clique sur le lien puis choisis "Ajouter à l'écran d'accueil" pour l'installer.`;
    } else {
      reply =
`👋 Je suis le bot officiel AurX.

📲 Télécharge AurX ici :
https://aurx.vercel.app

Une fois installé, tu pourras discuter directement avec l'IA.`;
    }

    await fetch(
      `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
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

    return res.status(200).json({ ok: true });

  } catch (error) {
    console.error(error);

    return res.status(200).json({
      ok: false
    });
  }
}