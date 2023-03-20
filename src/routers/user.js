const { Router } = require('express');
const Controller = require('../controller/user');
const { 
  validateUser,
  validateDisplayName,
  validateEmail,
  validatePassword,
} = require('../middleware/validateUser');

const user = Router();

user.post('/',
  validateUser, validateDisplayName, validateEmail, validatePassword, Controller.createUser);

module.exports = user;
