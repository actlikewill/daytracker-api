const { User, Activity } = require('../../models');
class ActivitiesController {
    static async addNewActivity (req, res) {
        const { data } = req.body;
        const activities = await Activity.create(data)
            .then(activity => {
                console.log(activity);
            })
        return res.status(200).json({ message: "valid user!"})
    }
    static async getActivity (req, res) {
        const { activity, userId } = req.body;
        const activitiy = await Activity.findOne({
            where: {
                activity: activity,
                userId: userId
            }
        });
        const user = await activitiy.getUser();
        console.log({user})
        return res.status(200).json({ message: "valid user!"})
    }
}

module.exports = ActivitiesController;