'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Products',
        'currency',
         Sequelize.STRING
       )
    ]);
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn(
      'Products',
      'currency')
  }
};