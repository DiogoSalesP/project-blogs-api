const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'jwt_secret';
const signature = { expiresIn: '1d', algorithm: 'HS256' };

const createToken = ({ email }) => {
  const payload = { email };
  return jwt.sign(payload, secret, signature);
};

const verifyToken = (authorization) => {
  try {
    const payload = jwt.verify(authorization, secret);
    return payload;
  } catch (err) {
    return { isError: true, err };
  }
};

module.exports = {
  createToken,
  verifyToken,
};
