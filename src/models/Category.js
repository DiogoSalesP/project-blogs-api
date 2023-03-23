module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('Category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'categories',
    underscored: false,
  });
  return categories;
};
