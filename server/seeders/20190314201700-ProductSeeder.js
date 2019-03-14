'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Product', [
        {
          id: 1,
          name: 'Poet Marine',
          price: 70,
          description: "Smeell Air Marine",
          available: true
        },
        {
          id: 2,
          name: 'Poet Lavender',
          price: 70,
          description: "Smeell Lavender",
          available: true
        },
        {
          id: 3,
          name: 'Poet Fresh',
          price: 70,
          description: "Smeell Fresh",
          available: true
        },
        {
          id: 4,
          name: 'Poet Forest',
          price: 70,
          description: "Smeell Forest",
          available: true
        },
        //////////
        {
          id: 5,
          name: 'Keyboard',
          price: 100,
          description: "For hackers!",
          available: true
        },
        {
          id: 6,
          name: 'Monitor',
          price: 500,
          description: "The fresh new samsung monitor",
          available: true
        },
        //////////////
        {
          id: 7,
          name: 'Shirt',
          price: 300,
          description: "Red shirt",
          available: true
        },
        {
          id: 8,
          name: 'Shoes',
          price: 1500,
          description: "From last Clein collection",
          available: true
        },
        {
          id: 9,
          name: 'Glasses',
          price: 400,
          description: "Black Ray Ban",
          available: true
        },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Product', null, {});
  }
};
