export default async function handler(req, res) {

  // Autoriser seulement POST
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  // Récupérer données
  const { username, password } = req.body;

  // Vérification admin
  if (
    username === process.env.ADMIN_USER &&
    password === process.env.ADMIN_PASS
  ) {

    return res.status(200).json({
      token: "aurx_admin_token"
    });

  }

  // Mauvais identifiants
  return res.status(401).json({
    error: "Invalid credentials"
  });

}