'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Trackers', {
      id: {
        allowNull: false,
        autoIncrement: true,        
        type: Sequelize.INTEGER
      },
      trackingId: {
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,      
        type: Sequelize.UUID,
      },
      activityId: {
        type: Sequelize.UUID
      },
      uuid: {
        type: Sequelize.UUID
      },
      duration: {
        type: Sequelize.STRING
      },
      startTime: {
        type: Sequelize.STRING
      },
      endTime: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Trackers');
  }
};