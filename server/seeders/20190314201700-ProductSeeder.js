'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Product', [
        //////CLEANING////
        {
          id: 0,
          name: 'Poet Marine',
          price: 70,
          currency:'USD',
          description: "Smeell Air Marine",
          available: true
        },
        {
          id: 1,
          name: 'Poet Lavender',
          price: 70,
          currency:'USD',
          description: "Smeell Lavender",
          available: true
        },
        {
          id: 2,
          name: 'Poet Fresh',
          price: 70,
          currency:'USD',
          description: "Smeell Fresh",
          available: true
        },
        {
          id: 3,
          name: 'Poet Forest',
          price: 70,
          currency:'USD',
          description: "Smeell Forest",
          available: true
        },
        //////ELECTRONICS////
        {
          id: 4,
          name: 'Keyboard',
          price: 100,
          currency:'USD',
          description: "For hackers!",
          available: true
        },
        {
          id: 5,
          name: 'Monitor',
          price: 500,
          currency:'USD',
          description: "The fresh new samsung monitor",
          available: true
        },
        ///////CLOTH///////
        {
          id: 6,
          name: 'Shirt',
          price: 300,
          currency:'USD',
          description: "Red shirt",
          available: true
        },
        {
          id: 7,
          name: 'Shoes',
          price: 1500,
          currency:'USD',
          description: "From last Clein collection",
          available: true
        },
        {
          id: 8,
          name: 'Glasses',
          price: 400,
          currency:'USD',
          description: "Black Ray Ban",
          available: true
        },
        ///////Books///////
        {
          id: 9,
          name: 'Harry Potter and the Goblet of Fire',
          price: 300,
          currency:'USD',
          description: "A young wizard finds himself competing in a hazardous tournament between rival schools of magic, but he is distracted by recurring nightmares.",
          available: true
        },
        {
          id: 10,
          name: 'Harry Potter and the Prisoner of Azkaban',
          price: 500,
          currency:'USD',
          description: "It's Harry's third year at Hogwarts; not only does he have a new 'Defense Against the Dark Arts' teacher, but there is also trouble brewing. Convicted murderer Sirius Black has escaped the Wizards' Prison and is coming after Harry.",
          available: true
        },
        {
          id: 11,
          name: 'The Lord of the Rings',
          price: 900,
          currency:'USD',
          description: "The Lord of the Rings is an epic high fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into a much larger work",
          available: true
        },
        ///////MOVIES///////
        {
          id: 12,
          name: 'Neverending story',
          price: 100,
          currency:'USD',
          description: "Nice ost song",
          available: true
        },
        {
          id: 13,
          name: 'Terminator 2',
          price: 100,
          currency:'USD',
          description: "The best terminator movie",
          available: true
        },
        {
          id: 14,
          name: 'Alien',
          price: 100,
          currency:'USD',
          description: "Great movie and great director!",
          available: true
        },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Product', null, {});
  }
};
