export default async function handler(req, res) {

  // Vérification token
  const auth = req.headers.authorization;

  if (auth !== "Bearer aurx_admin_token") {
    return res.status(401).json({
      error: "Unauthorized"
    });
  }

  // Données activité
  return res.status(200).json({

    total_messages: 2847,

    active_sessions: 12,

    recent_conversations: [

      {
        user_email: "firmin@aurx.ai",

        message: "Salut AurX",

        timestamp: Date.now(),

        device: "Android"
      },

      {
        user_email: "user@gmail.com",

        message: "Comment installer AurX ?",

        timestamp: Date.now(),

        device: "Chrome Mobile"
      }

    ]

  });

}