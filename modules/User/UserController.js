const { User } = require('../../models');
 
class UserController {
    static getAllUsers(req, res) {
        User.findAll()
        .then(users => {
            res.json(users)
        });
    }

    static authenticateUser (req, res) {
        const { name, email, password, newUser } = req.body;
        console.log({newUser});
        if (newUser === 'true') {        
        User.create({ name, email, password })
        .then(user => {          
            return res.status(201).json({user, error: null});        
        });
    } else {
        User.findOne({
            where : { email }
        })
        .then(user => {
            user.comparePasswords(req.body.password, (error, isMatch) => {
                if (isMatch) {
                   return  res.status(200).json({user, error: null});
                } else {
                    return res.json({error: "Invalid Email or Password"})
                }
            });
        });
    }
    }
}

module.exports = UserController;