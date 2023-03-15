const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'jwt_secret';
const signature = { expiresIn: '1d', algorithm: 'HS256' };

const createToken = ({ email }) => {
  const payload = { email };
  return jwt.sign(payload, secret, signature);
};

module.exports = {
  createToken,
};
