module.exports = (sequelize, DataTypes) => {
  const PostCategories = sequelize.define('PostCategories', {
    postId: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
    categoryId: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
  },
  {
    timestamp: false,
    tableName: 'post_categories',
    underscored: true,
  });

  PostCategories.associate = (models) => {
    models.Categories.belongsToMany(models.BlogPost, {
      as: 'blog_posts',
      through: PostCategories,
      foreignKey: 'post_id',
      otherKey: 'category_id',
    });

    models.BlogPost.belongsToMany(models.Categories, {
      as: 'categories',
      through: PostCategories,
      foreignKey: 'category_id',
      otherKey: 'post_id',
    });
  }

  return PostCategories;
};
