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

const updateBlogPost = async (id, { title, content }) => {
  const consulta = await getBlogPostById(id);
  if (consulta.isError) return consulta;
  await BlogPost.update({ title, content }, { where: { id } });
  const resultAtualizada = await getBlogPostById(id);
  return resultAtualizada;
};

module.exports = {
  allBlogPost,
  getBlogPostById,
  updateBlogPost,
};
