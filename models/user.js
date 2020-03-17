'use strict';
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    instanceMethods: {
      comparePasswords (password, callback) {
        bcrypt.compare(password, this.password, function(error, isMatch) {
          if(error) {
            console.log('Hey not cool!!');
            return callback(error);
          }
          return callback(null, isMatch);
        });
      },
    },
    hooks: {
      beforeValidate: function (user) {
        console.log('hashing password');
        if(user.changed('password')) {
          return bcrypt.hash(user.password, 10).then(function (password) {
            user.password = password;
          });
        }
      },
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};