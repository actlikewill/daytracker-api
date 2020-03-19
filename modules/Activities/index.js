const express = require('express');
const ActivitiesController = require('./ActivitiesController');
const ActivitiesRouter = express.Router();

ActivitiesRouter.route('/activities')
    .get(ActivitiesController)