'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Users', [{
     id:1, 
     name: 'John Doe',
     email: 'john@email.com',
     password: 'password123',
     uuid: '3c2c037f-a884-4e0b-b8c7-1b0b86580096',
     createdAt: new Date(),
     updatedAt: new Date()
   }]);
  },

  down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('Users', null, {});
  }
};
