module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, altoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    user_id: { type: DataTypes.STRING, foreignKey: true },
    published: DataTypes.Date,
    updated: DataTypes.Date,
  },
  {
    timestamps: false,
    tableName: 'blog_posts',
    underscore: true,
  })

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
  };

  return BlogPost;
}