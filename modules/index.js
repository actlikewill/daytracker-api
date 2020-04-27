const UserRouter = require('./User');
const ActivitesRouter = require('./Activities');

const routes = [
    UserRouter,
    ActivitesRouter
];

module.exports = (app) => {
    routes.forEach(route => app.use('/api', route))
};