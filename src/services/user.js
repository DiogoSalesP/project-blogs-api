const { createToken } = require('../middleware/auth');
const { User } = require('../models');

const getUser = async ({ email, password }) => {
  const user = await User.findOne({ where: { email, password } });
  if (!user) return { isError: true, status: 400, message: 'Invalid fields' };
  const token = createToken(user);
  return { isError: false, status: 200, token };
};

const getUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const createUser = async ({ displayName, email, password, image }) => {
  const isExistUser = await getUserByEmail(email);
  if (isExistUser) {
    return { isError: true, status: 409, message: 'User already registered' };
  } 
  const user = await User.create({ displayName, email, password, image });
  const token = createToken(user);
  return { isError: false, status: 201, token };
};

module.exports = {
  getUser,
  createUser,
};
