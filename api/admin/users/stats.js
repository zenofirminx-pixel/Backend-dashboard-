export default async function handler(req, res) {

  // Vérification token
  const auth = req.headers.authorization;

  if (auth !== "Bearer aurx_admin_token") {
    return res.status(401).json({
      error: "Unauthorized"
    });
  }

  // Réponse compatible frontend
  return res.status(200).json({

    total: 124,

    new_7d: 18,

    active_24h: 42,

    recent: [
      {
        id: 1,
        email: "firmin@aurx.ai",
        created_at: Date.now(),
        active: true
      },

      {
        id: 2,
        email: "user@gmail.com",
        created_at: Date.now(),
        active: false
      }
    ]

  });

}