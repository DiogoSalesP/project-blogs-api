const { Router } = require('express');
const Controller = require('../controller/post');
const validateJWT = require('../middleware/validateJWT');

const post = Router();

post.get('/', validateJWT, Controller.addBlogPost);

module.exports = post;