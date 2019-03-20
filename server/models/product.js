module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', 
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    currency: {
      type: DataTypes.STRING,
      defaultValue: 'USD',
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    available: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    
  });

 Product.associate = (models) => {
  Product.belongsToMany(models.Category, {
      through: 'CategoryProduct',
      as: 'categories',
      foreignKey: 'productId',
      otherKey: 'categoryId'
    });
  };

  
  Product.prototype.truncateDescription = function() {
    let desc = this.description;
    return desc.length > 20 ? desc.substr(0,20) + "..." : desc;
  }
  
  Product.beforeCreate((product) => {
    let currency_change = 40;
    product.price = (product.currency === "ARS") ? Math.round(product.price/currency_change) : product.price;
    product.currency = 'USD';
  })  

  return Product;
};