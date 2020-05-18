const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = {
    generateToken: (userObj) => {
        const token = jwt.sign(userObj, config.get('privateKey'), { expiresIn: 86400});
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
    
}