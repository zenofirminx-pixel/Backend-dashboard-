export default async function handler(req, res) {

  // Vérification token
  const auth = req.headers.authorization;

  if (auth !== "Bearer aurx_admin_token") {
    return res.status(401).json({
      error: "Unauthorized"
    });
  }

  // Données PWA
  return res.status(200).json({

    installs: 84,

    active_sessions: 21,

    cache_hit_rate: 97

  });

}