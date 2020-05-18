const { User, Activity } = require('../../models');
const { errorHandler } = require("../Errors");
class ActivitiesController {
    static async findOrCreateActivity (req, res) {
        const { user :{ uuid }, activity } = req.body;        
        Activity.findOrCreate({
            where: {
                uuid,
                activity
            },
            include: User,
        })
        .then(activity => { 
            const isNewRecord = activity[1];
            activity[1] = {isNewRecord};
            if (isNewRecord) {
                return res.status(201).json({activity});
            }  else {
                return res.status(200).json({activity});
            }         
            
        })       
        .catch(e => errorHandler(e, res));           
    }
    static async getAllActivities (req, res) {
        const { user: { uuid } } = req.body;        
        const currentUser = await User.findByPk(uuid);
        console.log({currentUser});
            currentUser.getActivities()
            .then(activities => res.status(200).json({activities}))
            .catch(e => errorHandler(e, res));    
    }
}

module.exports = ActivitiesController;