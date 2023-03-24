const { Category } = require('../models');

const addNewCategory = async (name) => {
  const category = await Category.create({ name });
  return category;
};

const getAllCategory = async () => {
  const category = await Category.findAll();
  return category;
};

module.exports = {
  addNewCategory,
  getAllCategory,
};
