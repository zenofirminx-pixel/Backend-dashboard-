export default async function handler(req, res) {

  const auth = req.headers.authorization;

  if (auth !== "Bearer aurx_admin_token") {
    return res.status(401).json({
      error: "Unauthorized"
    });
  }

  try {

    // 🔥 connexion au backend AurX
    const response = await fetch(
      process.env.AURX_SERVER + "/api/admin/users"
    );

    const data = await response.json();

    return res.status(200).json(data);

  } catch (err) {

    return res.status(500).json({
      error: "AurX server offline"
    });

  }

}