const { createToken } = require('../middleware/auth');
const { User } = require('../models');

const getUser = async ({ email, password }) => {
  const user = await User.findOne({ where: { email, password } });
  if (!user) return { isError: true, status: 400, message: 'Invalid fields' };
  const token = createToken(user);
  return { isError: false, status: 200, token };
};

module.exports = {
  getUser,
};
