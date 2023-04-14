const { BlogPost, User, Category } = require('../models');

const allBlogPost = async () => {
  const blogPost = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return blogPost;
};

const getBlogPostById = async (id) => {
  const blogPost = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  if (!blogPost) {
    return { isError: true, status: 404, message: 'Post does not exist' };
  }
  return { isError: false, status: 200, message: blogPost };
};

module.exports = {
  allBlogPost,
  getBlogPostById,
};
