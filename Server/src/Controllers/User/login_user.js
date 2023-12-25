require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../Models/User")

const secretKey = process.env.SECRET_KEY;

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid email. Please verify your email address and try again." });
    };
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid password. Please verify your password and try again" });
    };
    const accessToken = jwt.sign({ userId: user._id, isAdmin: user.isAdmin }, secretKey, { expiresIn: "30m" });
    const refreshToken = jwt.sign({ userId: user._id }, secretKey, { expiresIn: "24h" });
    res.status(200).json({
      accessToken,
      refreshToken,
      user: {
        _id: user._id,
        profileImage: user.profileImage,
        nickname: user.nickname,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        birthdate: user.birthdate,
        isAdmin: user.isAdmin,
        isActive: user.isActive,
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to login" });
  }
};

module.exports = loginUser;