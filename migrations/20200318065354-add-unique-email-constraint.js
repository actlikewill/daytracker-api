'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.addConstraint('Users', ['email'], {
    type: 'unique',
    name: 'email-constraint'
  });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
