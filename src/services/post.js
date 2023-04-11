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

module.exports = {
  allBlogPost,
};
