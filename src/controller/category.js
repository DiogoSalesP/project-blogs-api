const Service = require('../services/category');

const addNewCategory = async (req, res) => {
  const category = await Service.addNewCategory(req.body.name);
  return res.status(201).json(category);
};

const getAllCategory = async (_req, res) => {
  const category = await Service.getAllCategory();
  return res.status(200).json(category);
};

module.exports = {
  addNewCategory,
  getAllCategory,
};
