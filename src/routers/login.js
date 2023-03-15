const { Router } = require('express');
const Controller = require('../controller/user');
const validateLogin = require('../middleware/validateLogin');

const login = Router();

login.post('/', validateLogin, Controller.getUser);

module.exports = login;