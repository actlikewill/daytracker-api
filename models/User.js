module.exports = (Sequelize, DataTypes) => Sequelize.define('User', {
    name: DataTypes.STRING,
    email: {
     type: DataTypes.STRING, 
     validate: {
         isEmail: true
     }
    },
    password: DataTypes.STRING
 }
);