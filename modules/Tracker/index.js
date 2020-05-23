const express = require('express');
const { 
        authorizeUserMiddleWare,
        checkifUserAllowedToAccessActivity,
        checkifUserAllowedToAccessTracker
    
    } = require('../Auth');
const { 
    startTrackingActivity,
    stopTrackingActivity,
    getAllTrackers
     } = require('./TrackerController');
const TrackerControllerRouter = express.Router();

TrackerControllerRouter.route('/start_tracking')
    .post(authorizeUserMiddleWare, checkifUserAllowedToAccessActivity, startTrackingActivity);
TrackerControllerRouter.route('/stop_tracking')
    .post(authorizeUserMiddleWare, checkifUserAllowedToAccessTracker, stopTrackingActivity);
TrackerControllerRouter.route('/get_trackers')
    .post(authorizeUserMiddleWare, checkifUserAllowedToAccessActivity, getAllTrackers);


module.exports = TrackerControllerRouter;