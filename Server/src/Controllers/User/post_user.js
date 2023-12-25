const User = require("../../Models/User");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  try {
    const {
      nickname,
      firstName,
      lastName,
      email,
      password,
      birthdate,
      googleId
    } = req.body;

    const existingNickname = await User.findOne({ nickname });
    if (existingNickname) {
      return res.status(409).json({ error: "The nickname already exist" });
    };

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(409).json({ error: "The email already exist" });
    };

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      nickname,
      firstName,
      lastName,
      email,
      birthdate,
      profileImage,
      isAdmin: false,
      isActive: true,
      googleId
    });

    if (hashedPassword) {
      newUser.password = hashedPassword;
    };

    await newUser.save();

    res.status(201).json({
      message: "User registered successfully",
      newUser: {
        _id: newUser._id,
        nickname: newUser.nickname,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        birthdate: newUser.birthdate,
        isAdmin: newUser.isAdmin,
        isActive: newUser.isActive,
      }
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "User could not be registered" });
  };
};

module.exports = registerUser;