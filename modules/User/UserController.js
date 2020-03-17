const { User } = require('../../models');
 
class UserController {
    static getAllUsers(req, res) {
        User.findAll()
        .then(users => {
            res.json(users)
        });
    }

    static authenticateUser (req, res) {
        User.findOrCreate({
            where: {
                email: req.body.email
            },
            defaults: {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }
        })
        .then(([user, newUser]) => {
            if(!newUser) {
                console.log(user)
            }
            res.json(user);
        })
    }
}

module.exports = UserController;