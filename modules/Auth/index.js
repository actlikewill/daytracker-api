const jwt = require('jsonwebtoken');
const config = require('config');
const { Activity, Tracker } = require('../../models');
 
module.exports = {
    generateToken: (userObj) => {
        const token = jwt.sign(userObj, config.get('privateKey'), { expiresIn: '24h'});
        return token;
    },
    authorizeUserMiddleWare: (req, res, next) => {
        const token = req.headers["x-access-token"] || req.headers["authorization"];
        if(!token) return res.status(401).json({error: "Access Denied. No token provided."});
        try {
            const decoded = jwt.verify(token, config.get('privateKey'));
            req.body.user = decoded;
            next();
        } catch (e) {
            return res.status(400).json({error: "Invalid Token"});
        }
    },
    checkifUserAllowedToAccessActivity: async (req, res, next) => {                
        const {activityId, user : {uuid}} = req.body;
        await Activity.findOne({where: {activityId, uuid}})
            .then(activity => {
                if(activity.dataValues) {
                    req.body.activity = activity;
                    next();
                }
            })
            .catch(() => {
                return res.status(400).json({error: 'Activity Access Error.'})
            });
    },
    checkifUserAllowedToAccessTracker: async (req, res, next) => {                
        const {trackingId, user : {uuid}} = req.body;
        await Tracker.findOne({where: {trackingId, uuid}})
            .then(tracker => {
                if (tracker.dataValues) {
                    req.body.tracker = tracker;
                    next();    
                } 
            })
            .catch(() => { return res.status(400).json({ error: 'Tracker Access Error.'})});
                           
        
    }    
}