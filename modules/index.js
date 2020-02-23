const UserRouter = require('./User');

const routes = [
    UserRouter,
];

module.exports = (app) => {
    routes.forEach(route => app.use('/api', route))
};