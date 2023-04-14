const { Router } = require('express');
const Controller = require('../controller/post');
const validateJWT = require('../middleware/validateJWT');
const { validatePost } = require('../middleware/validatePost');

const post = Router();

post.get('/', validateJWT, Controller.addBlogPost);
post.get('/:id', validateJWT, Controller.getBlogPostById);
post.put('/:id', validateJWT, validatePost, Controller.updateBlogPost);

module.exports = post;