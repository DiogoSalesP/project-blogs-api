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

const getAll = async (_req, res) => {
  const users = await Service.getAll();
  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { isError, status, message, user } = await Service.getUserById(req.params.id);
  if (isError) return res.status(status).json({ message });
  return res.status(status).json(user);
};

module.exports = {
  getUser,
  createUser,
  getAll,
  getUserById,
};
