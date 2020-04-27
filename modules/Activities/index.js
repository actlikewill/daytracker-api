const express = require('express');
const { authorizeUserMiddleWare } = require('../Auth');
const { addNewActivity } = require('./ActivitiesController');
const ActivitiesRouter = express.Router();

ActivitiesRouter.route('/activities')
    .get(authorizeUserMiddleWare, addNewActivity)

module.exports = ActivitiesRouter;