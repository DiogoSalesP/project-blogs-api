const { Router } = require('express');
const Controller = require('../controller/category');
const { validateName } = require('../middleware/validateCategories');
const validateJWT = require('../middleware/validateJWT');

const categories = Router();

categories.get('/', validateJWT, Controller.getAllCategory);
categories.post('/', validateJWT, validateName, Controller.addNewCategory);

module.exports = categories;