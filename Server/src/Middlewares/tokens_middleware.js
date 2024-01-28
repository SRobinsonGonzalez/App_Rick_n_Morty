require("dotenv").config();
const jwt = require("jsonwebtoken");

const secretKey = process.env.SECRET_KEY;
const tokensStore = {}; // Almacena los tokens de usuario.

// Función para generar tokens de acceso y refresh.
const generateTokens = (user) => {
  const accessToken = jwt.sign({ userId: user._id, isAdmin: user.isAdmin }, secretKey, { expiresIn: "30m" });
  const refreshToken = jwt.sign({ userId: user._id }, secretKey, { expiresIn: "7d" });
  tokensStore[user.id] = { accessToken, refreshToken };
  return { accessToken, refreshToken };
};

// Middleware para verificar los tokens (Access|Refresh).
const verifyToken = async (req, res, next) => {
  try {
    // Obtener los tokens (Access|Refresh) de los headers de la solicitud.
    const accessToken = req.headers["Authorization"];

    // Verificar si el token de acceso está presente.
    if (!accessToken) {
      return res.status(401).json({ error: "Access token not provided" });
    }

    // Verificar el token de acceso con la clave secreta.
    const decodedAccessToken = jwt.verify(accessToken, secretKey);

    // Almacenar la información decodificada en el objeto "req" para su uso posterior.
    req.user = decodedAccessToken;

    // Continuar con la siguiente función del middleware.
    next();
  } catch (error) {
    // Manejar errores de tokens.
    if (error.name === "TokenExpiredError" && refreshToken) {
      try {
        // Verificar el refreshToken con la clave secreta.
        const decodedRefreshToken = jwt.verify(refreshToken, secretKey);
        const storedTokens = tokensStore[decodedRefreshToken.userId];

        // Verificar si el refreshToken almacenado coincide con el refreshToken de la solicitud.
        if (storedTokens && storedTokens.refreshToken === refreshToken) {
          // Generar nuevos tokens de acceso y refresh.
          const newTokens = generateTokens({ _id: decodedRefreshToken.userId, isAdmin: decodedRefreshToken.isAdmin });

          // Establecer los nuevos tokens en los headers de la respuesta.
          res.setHeader("Authorization", newTokens.accessToken);
          res.setHeader("Refresh-Token", newTokens.refreshToken);

          // Decodificar el nuevo token de acceso y almacenar la información del usuario en "req" para su uso posterior.
          req.user = jwt.verify(newTokens.accessToken, secretKey);

          // Continuar con la siguiente función del middleware.
          next();
        } else {
          return res.status(401).json({ error: "User token is undefined or mismatched" });
        }
      } catch (error) {
        return res.status(401).json({ error: "Invalid refresh token" });
      }
    } else {
      return res.status(401).json({ error: "Invalid token" });
    }
  }
};

module.exports = verifyToken;