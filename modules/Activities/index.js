const express = require('express');
const { authorizeUserMiddleWare } = require('../Auth');
const { findOrCreateActivity, getAllActivities } = require('./ActivitiesController');
const ActivitiesRouter = express.Router();

ActivitiesRouter.route('/activities')
    .get(authorizeUserMiddleWare, getAllActivities);
ActivitiesRouter.route('/activity')
    .post(authorizeUserMiddleWare, findOrCreateActivity);

module.exports = ActivitiesRouter;