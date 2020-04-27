
class ActivitiesController {
    static addNewActivity (req, res) {
        return res.status(200).json({ message: "valid user!"})
    }
}

module.exports = ActivitiesController;