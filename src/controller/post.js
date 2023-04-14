const Service = require('../services/post');

const addBlogPost = async (_req, res) => {
  const blogPost = await Service.allBlogPost();
  return res.status(200).json(blogPost);
};

const getBlogPostById = async (req, res) => {
  const { isError, status, message } = await Service.getBlogPostById(req.params.id);
  if (isError) return res.status(status).json({ message });
  return res.status(status).json(message);
};

const updateBlogPost = async (req, res) => {
  const { id } = req.params;
  const post = req.body;
  const { isError, status, message } = await Service.updateBlogPost(id, post);
  if (isError) return res.status(status).json({ message });
  return res.status(status).json(message);
};

module.exports = {
  addBlogPost,
  getBlogPostById,
  updateBlogPost,
};