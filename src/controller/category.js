const Service = require('../services/category');

const addNewCategory = async (req, res) => {
  const category = await Service.addNewCategory(req.body.name);
  return res.status(201).json(category);
};

module.exports = {
  addNewCategory,
};
