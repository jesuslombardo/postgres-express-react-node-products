'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CategoryProduct', [
      {
        productId: 1,
        categoryId: 1
      },
      {
        productId: 2,
        categoryId: 1
      },
      {
        productId: 3,
        categoryId: 1
      },
      {
        productId: 4,
        categoryId: 1
      },
      {
        productId: 3,
        categoryId: 4
      },
      /////////
      {
        productId: 5,
        categoryId: 2
      },
      {
        productId: 6,
        categoryId: 2
      },
      {
        productId: 5,
        categoryId: 4
      },
      /////////
      {
        productId: 7,
        categoryId: 3
      },
      {
        productId: 8,
        categoryId: 3
      },
      {
        productId: 9,
        categoryId: 3
      },
      {
        productId: 8,
        categoryId: 4
      },
      {
        productId: 9,
        categoryId: 4
      },
      //////
      {
        productId: 10,
        categoryId: 5
      },
      {
        productId: 11,
        categoryId: 5
      },
      {
        productId: 11,
        categoryId: 4
      },
      {
        productId: 12,
        categoryId: 5
      },
      {
        productId: 13,
        categoryId: 6
      },
      {
        productId: 14,
        categoryId: 6
      },
      {
        productId: 14,
        categoryId: 4
      },
      {
        productId: 15,
        categoryId: 6
      },

  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CategoryProduct', null, {});
  }
};