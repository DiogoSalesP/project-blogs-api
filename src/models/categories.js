module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('Categories', {
    id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'categories',
    underscore: false,
  });
  return categories;
};
