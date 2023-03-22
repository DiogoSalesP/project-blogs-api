const { verifyToken } = require('./auth');

module.exports = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Token not found' });
  try {
    const decoded = verifyToken(token);
    if (decoded.isError) return res.status(401).json({ message: 'Expired or invalid token' });
    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};
