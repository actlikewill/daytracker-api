const { User } = require('../../models');
const { generateToken } = require('../Auth');
 
class UserController {
    static getAllUsers(req, res) {
        User.findAll()
        .then(users => {
            res.json(users)
        });
    }

    static authenticateUser (req, res) {
        const { name, email, password, newUser } = req.body;
        if (newUser === 'true') {        
        User.create({ name, email, password })
        .then(userObj => {
            const user = userObj.toJSON();
            const token = generateToken(user);                
            return res.status(201).json({token, error: null});        
        })
        .catch((error) => {
            return res.status(400).json({ error: "Email already exists"});
        });
    } else {
        User.findOne({
            where : { email }
        })
        .then(user => {
            user.comparePasswords(req.body.password, (error, isMatch) => {
                if (isMatch) {  
                   const userObj = user.toJSON();
                   const token = generateToken(userObj);    
                   return  res.status(200).json({user, token, error: null});
                } else {
                    return res.json({error: "Invalid Email or Password"})
                }
            });
        })
        .catch((e) => {
            return res.status(404).json({ error: "User not found"});
        });
    }
    }
}

module.exports = UserController;