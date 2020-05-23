const moment = require('moment');
const { errorHandler } = require('../Errors');

class TrackerController {
    static async startTrackingActivity (req, res) {
        const { activity, user :{ uuid } } = req.body;          
        const startTime = moment().format();
        await activity.createTracker({startTime, uuid})
        .then(tracker => {
            return res.status(201).json({tracker, activity})
        })
        .catch((e) => errorHandler(e, res));     
    }   
    

    static async stopTrackingActivity (req, res) {        
        const { tracker } = req.body;                  
        const { startTime, endTime } = tracker;
        if (!endTime) {
            const stopTracking = moment().format();
            const duration = moment.duration(moment(startTime).diff(stopTracking)).toISOString();
            tracker.endTime = stopTracking;
            tracker.duration = duration;
            await tracker.save();
            const updatedTracker = await tracker.reload();
            return res.status(200).json({ updatedTracker });
        } else {
            return res.status(400).json({error: 'You have stopped tracking this activity. Please start again'})
        }           
    }

    static async getAllTrackers (req, res) {
        const { activity } = req.body;        
        const trackers = await activity.getTrackers({include: 'Activity'});
        return res.status(200).json({trackers});      
    }
}

module.exports = TrackerController;
