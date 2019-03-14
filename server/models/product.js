/*'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};*/
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
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    available: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
  }
  , {
      hooks: {
        beforeCreate: (product) => {
          let currency_ar = product.price.includes("ARS");
          let currency_change = 40;
          currency_ar ? product.price*currency_change : product.price 
        }
      }
    }
  , {
      truncateDescription: {
          shortDescription: function () {
            let length = 20;
            let myString = this.getDataValue('description');
            let myTruncatedString = myString.substring(0,length) + "...";
            // The value of myTruncatedString is "ABC"
            return myTruncatedString
          }
      },
  });

  Product.associate = (models) => {
    Product.belongsTo(models.Category, {
      foreignKey: 'categoryId',
      onDelete: 'CASCADE',
    });
  };

  return Product;
};