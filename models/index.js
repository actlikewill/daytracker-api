const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname,'db/daytracker.db')
});

const UserModel = require('./User');
const User = UserModel(sequelize, DataTypes);
User.sync();

module.exports = { User, sequelize }