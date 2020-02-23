'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Users', [{
     name: 'John Doe',
     email: 'john@email.com',
     password: 'password123',
     createdAt: new Date(),
     updatedAt: new Date()
   }]);
  },

  down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('Users', null, {});
  }
};
