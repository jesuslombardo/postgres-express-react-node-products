'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Category', [
      {
        id: 1,
        name: 'Cleaning',
      },
      {
        id: 2,
        name: 'Electronics',
      },
      {
        id: 3,
        name: 'Cloth',
      },
      {
        id: 4,
        name: 'BlackFriday',
      },
      {
        id: 5,
        name: 'Books',
      },
      {
        id: 6,
        name: 'Movies',
      },

  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Category', null, {});
  }
};
