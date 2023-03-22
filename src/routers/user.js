const { Router } = require('express');
const Controller = require('../controller/user');
const validateJWT = require('../middleware/validateJWT');
const { 
  validateUser,
  validateDisplayName,
  validateEmail,
  validatePassword,
} = require('../middleware/validateUser');

const user = Router();

user.get('/', validateJWT, Controller.getAll);
user.post('/',
  validateUser, validateDisplayName, validateEmail, validatePassword, Controller.createUser);

module.exports = user;
