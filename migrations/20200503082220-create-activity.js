'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Activities', {
      id: {
        allowNull: false,
        autoIncrement: true,        
        type: Sequelize.INTEGER
      },
         activity: {
        type: Sequelize.STRING,        
      },
         uuid: {
        type: Sequelize.UUID,
      },
      activityId: {
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,      
        type: Sequelize.UUID,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Activities');
  }
};