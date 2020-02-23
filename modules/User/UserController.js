const { User } = require('../../models');
 
class UserController {
    static getAllUsers(req, res) {
        User.findAll()
        .then(users => {
            res.json(users)
        });
    }
}

module.exports = UserController;