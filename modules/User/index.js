const express = require('express');
const { authenticateUser, getAllUsers } = require('./UserController');
const UserRouter = express.Router();

UserRouter.route('/users')
    .get(getAllUsers);
UserRouter.route('/authenticate')
    .post(authenticateUser)

module.exports = UserRouter;