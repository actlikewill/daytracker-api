'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tracker = sequelize.define('Tracker', {
    activityId: {
        type: DataTypes.UUID,
        allowNull: false
      },
    trackingId: {
        type: DataTypes.UUID, 
        allowNull: false, 
        defaultValue: DataTypes.UUIDV4, 
        primaryKey: true
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: false
    },
    duration: DataTypes.STRING,
    startTime: DataTypes.STRING,
    endTime: DataTypes.STRING
  }, {});
  Tracker.associate = function(models) {
    Tracker.belongsTo(models.Activity, {
      foreignKey: 'activityId'
    });
  };
  return Tracker;
};