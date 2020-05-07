const { User } = require('../../models');
const { errorHandler } = require('../Errors');
const { generateToken } = require('../Auth');
 
class UserController {
    static getAllUsers(req, res) {
        User.findAll()
        .then(users => res.json(users))
        .catch(e => errorHandler(e, res))
    }

    static authenticateUser (req, res) { 
        const { name, email, password } = req.body;       
        User.findOrCreate({
            where : { email },
            defaults: { name, password}

        })
        .then(result => {
            const user = result[0].toJSON();
            const token = generateToken(user);
            if (result[1] === true) {                
                return res.status(201).json({ user, token, newUser:true })
            } else {
            result[0].comparePasswords(password, (error, isMatch) => {
                if (isMatch) {                      
                    return  res.status(200).json({user, token, newUser: false});
                } else {
                    return res.json({error: "Invalid Email or Password"})
                }
                });
            }           
        })
        .catch(e => errorHandler(e, res));    
    }
}

module.exports = UserController;