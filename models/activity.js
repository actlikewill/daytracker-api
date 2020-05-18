'use strict';

module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define('Activity', {      
    uuid: { type: DataTypes.UUID, allowNull: false},    
    activity: {type: DataTypes.STRING, allowNull: false}
  }, {});
  Activity.associate = function(models) {
    Activity.belongsTo(models.User, {
      foreignKey: 'uuid'
    });
  };
  return Activity;
};