const Service = require('../services/post');

const addBlogPost = async (_req, res) => {
  const blogPost = await Service.allBlogPost();
  return res.status(200).json(blogPost);
};

const getBlogPostById = async (req, res) => {
  console.log(req.params);
  const { isError, status, message } = await Service.getBlogPostById(req.params.id);
  if (isError) return res.status(status).json({ message });
  return res.status(status).json(message);
};

module.exports = {
  addBlogPost,
  getBlogPostById,
};