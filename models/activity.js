'use strict';
module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define('Activity', {
    userId: DataTypes.STRING,
    activity: DataTypes.STRING
  }, {});
  Activity.associate = function(models) {
    Activity.belongsTo(models.User, {
      foreignKey: 'userId',
      targetKey: 'id'
    });
  };
  return Activity;
};