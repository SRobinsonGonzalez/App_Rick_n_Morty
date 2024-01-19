const User = require("../../Models/User");

const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    } else {
      return res.status(200).json(user);
    };
  } catch (error) {
    res.status(500).json({ message: error })
  };
};

module.exports = getUserById;