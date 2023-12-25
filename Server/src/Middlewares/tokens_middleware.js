require("dotenv").config();
const jwt = require("jsonwebtoken");

const secretKey = process.env.SECRET_KEY;
const tokensStore = {}; // Se usa para almacenar los tokens.

const generateTokens = (user) => {
  // Crear un token de acceso con la informacion del usuario y una caducidad.
  const accessToken = jwt.sign({ userId: user._id, isAdmin: user.isAdmin }, secretKey, { expiresIn: "30m" }); // "payload"(JSON) es la informacion que se inclute en el token.
  const refreshToken = jwt.sign({ userId: user._id }, secretKey, { expiresIn: "24h" }); // ".sing" se usa para generar tokens.
  tokensStore[user.id] = {
    accessToken,
    refreshToken
  };
  return { accessToken, refreshToken }; // retorna los tokens generados.
};

// Middleware para verificar los tokens (Access|Refresh).
const verifyToken = (req, res, next) => {
  // Obtener los tokens (Access|Refresh) de los headers de la solicitud.
  const accessToken = req.headers["authorization"];
  const refreshToken = req.headers["refresh-token"];
  // Verifica si el token de acceso esta en la solicitud.
  if (!accessToken) {
    return res.status(401).json({ error: "Access token not provided" });
  }
  try {
    // Verificar el token de acceso con la clave secreta.
    const decoded = jwt.verify(accessToken, secretKey);
    // Almacenar la informacion decodificada en el usuario del objeto "req" para su uso posterior.
    req.user = decoded;
    next();
  } catch (error) {
    // Maneja errores de tokens, tokens expirados y la renovacion de tokens.
    if (error.name === "TokenExpiredError" && refreshToken) {
      try {
        // Verificar el refreshToken con la clave secreta.
        jwt.verify(refreshToken, secretKey);
        // Obtener el usuario correspondiente al refreshToken desde el objeto "tokenStore"
        const user = tokensStore[req.user.id];
        // Verificar si el refreshToken almacenado coincide con el refreshToken de la solicitud.
        // Se verifica que "user" tenga un valor, y si es asi acceda al refreshToken.
        if (user && user.refreshToken === refreshToken) {
          try {
            // Generar nuevo tokens de acceso y refresh.
            const newTokens = generateTokens(user);
            // Establecer los nuevos tokens en los headers de la respuesta.
            res.setHeader("Authorization", newTokens.accessToken);
            res.setHeader("Refresh-Token", newTokens.refreshToken);
            // Decodificar el nuevo token de acceso y almacenar la informacion del usuario en "req" para su uso posterior.
            req.user = jwt.verify(newTokens.accessToken, secretKey);
            next();
          } catch (error) {
            return res.status(401).json({ error: "New tokens could not be generate" });
          };
        } else {
          return res.status(401).json({ error: "User token is undefined" });
        };
      } catch (error) {
        return res.status(401).json({ error: "Invalid refresh token" });
      };
    } else {
      return res.status(401).json({ error: "Invalid token" });
    };
  };
};

module.exports = verifyToken;