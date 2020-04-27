'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: {type: DataTypes.STRING, unique: true},
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeValidate: function (user) {
        if(user.changed('password')) {
          return bcrypt.hash(user.password, 10).then(function (password) {
            user.password = password;
          });
        }
      },
    },
  });

  User.prototype.toJSON = function () {
    const userObj = Object.assign({}, this.dataValues);
    delete userObj.password;
    return userObj;
  };

  User.prototype.comparePasswords = function (password, callback) {
    bcrypt.compare(password, this.password, function(error, isMatch) {
      if(error) {
        return callback(error);
      }
      return callback(null, isMatch);
  });
  };
  
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};