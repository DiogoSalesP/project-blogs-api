module.exports = (sequelize, DataTypes) => {
  const PostCategories = sequelize.define('PostCategories', {
    post_id: { type: DataTypes.INTEGER, primaryKey: true },
    category_id: { type: DataTypes.INTEGER, primaryKey: true },
  },
  {
    timestamp: false,
    tableName: 'post_categories'
  });

  PostCategories.associate = (models) => {
    models.Categories.belongsToMany(models.BlogPost, {
      as: 'blog_posts',
      through: PostCategories,
      foreignKey: 'post_id',
      otherKey: 'categories_id',
    });

    models.BlogPost.belongsToMany(models.Categories, {
      as: 'categories_id',
      through: PostCategories,
      foreignKey: 'categories_id',
      otherKey: 'post_id',
    });
  }

  return PostCategories;
};
