const express = require('express');
const { authorizeUserMiddleWare } = require('../Auth');
const { addNewActivity, getActivity } = require('./ActivitiesController');
const ActivitiesRouter = express.Router();

ActivitiesRouter.route('/fetch-activity')
    .post(authorizeUserMiddleWare, getActivity);
ActivitiesRouter.route('/activities')
    .post(authorizeUserMiddleWare, addNewActivity);

module.exports = ActivitiesRouter;