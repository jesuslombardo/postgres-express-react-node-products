module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

 Category.associate = (models) => {
  Category.belongsToMany(models.Product, {
      through: 'CategoryProduct',
      as: 'products',
      foreignKey: 'categoryId',
      otherKey: 'productId'
    });
  };
  
  return Category;
};