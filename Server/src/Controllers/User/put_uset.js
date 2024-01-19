const User = require('../../Models/User');
const bcrypt = require('bcrypt');

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const userData = req.body;
    const newImage = Array.isArray(req.imagesURL) ? req.imagesURL[0] : req.imagesURL;
    if (newImage) {
      userData.profileImage = newImage
    }
    const password = req.body.password;
    let hashedPassword = null;
    if (password) {
      hashedPassword = await bcrypt.hash(password, 10);
      userData.password = hashedPassword;
    }
    user.set(userData);
    await user.save();
    res.status(200).json({ message: 'User successfully updated' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user' });
  };
};

module.exports = updateUser;