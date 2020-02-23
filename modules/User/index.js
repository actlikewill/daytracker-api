const express = require('express');
const UserController = require('./UserController');
const UserRouter = express.Router();

UserRouter.route('/users')
    .get(UserController.getAllUsers);

module.exports = UserRouter;