const Service = require('../services/user');

const getUser = async (req, res) => {
    const user = req.body;
    const { isError, status, message, token } = await Service.getUser(user);
    if (isError) return res.status(status).json({ message });
    return res.status(status).json({ token });
};

const createUser = async (req, res) => {
  const { isError, status, message, token } = await Service.createUser(req.body);
  if (isError) return res.status(status).json({ message });
  return res.status(status).json({ token });
};

module.exports = {
  getUser,
  createUser,
};
