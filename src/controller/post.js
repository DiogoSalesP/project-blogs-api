const Service = require('../services/post');

const addBlogPost = async (_req, res) => {
  const blogPost = await Service.allBlogPost();
  return res.status(200).json(blogPost);
};

module.exports = {
  addBlogPost,
};