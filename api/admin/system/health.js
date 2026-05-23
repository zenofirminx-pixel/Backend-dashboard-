export default async function handler(req, res) {

  // Vérification token
  const auth = req.headers.authorization;

  if (auth !== "Bearer aurx_admin_token") {
    return res.status(401).json({
      error: "Unauthorized"
    });
  }

  // Données système
  return res.status(200).json({

    requests_24h: 12847,

    errors_24h: 3,

    recent_errors: [

      {
        timestamp: Date.now(),

        type: "API",

        message: "Timeout request"
      },

      {
        timestamp: Date.now(),

        type: "AUTH",

        message: "Invalid token"
      }

    ]

  });

}