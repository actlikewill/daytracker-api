'use strict';

module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define('Activity', {      
    uuid: { type: DataTypes.UUID, allowNull: false},    
    activity: {type: DataTypes.STRING, allowNull: false},
    activityId: {
        type: DataTypes.UUID, 
        allowNull: false, 
        defaultValue: DataTypes.UUIDV4, 
        primaryKey: true
      }
  }, {});
  Activity.associate = function(models) {
    Activity.belongsTo(models.User, {
      foreignKey: 'uuid'
    });
    Activity.hasMany(models.Tracker, {
      foreignKey: 'activityId'
    });
  };
  return Activity;
};