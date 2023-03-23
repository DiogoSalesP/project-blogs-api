const { Router } = require('express');
const Controller = require('../controller/category');
const { validateName } = require('../middleware/validateCategories');
const validateJWT = require('../middleware/validateJWT');

const categories = Router();

categories.post('/', validateJWT, validateName, Controller.addNewCategory);

module.exports = categories;