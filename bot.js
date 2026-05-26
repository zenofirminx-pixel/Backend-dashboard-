export default async function handler(req, res) {
  try {

    console.log("🔥 WEBHOOK HIT");
    console.log("BOT_TOKEN:", process.env.BOT_TOKEN ? "OK" : "MISSING");

    if (req.method !== "POST") {
      return res.status(200).send("OK");
    }

    const update = req.body;

    const message = update.message;
    if (!message || !message.text) {
      return res.status(200).send("no message");
    }

    const chatId = message.chat.id;
    const text = message.text;

    console.log("USER:", text);

    // 🤖 CALL AURX BACKEND
    const aurxRes = await fetch("https://aur-x-backend.vercel.app/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: text,
        userId: chatId
      })
    });

    const aurxData = await aurxRes.json();

    console.log("AURX RESPONSE:", aurxData);

    const reply = aurxData.reply || aurxData.message || "AurX vide";

    // 📤 SEND TO TELEGRAM
    const telegramRes = await fetch(
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

    const telegramData = await telegramRes.json();
    console.log("TELEGRAM RESPONSE:", telegramData);

    return res.status(200).json({ ok: true });

  } catch (error) {
    console.log("ERROR:", error);

    return res.status(200).json({
      ok: false,
      error: "handled error"
    });
  }
}