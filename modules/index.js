const UserRouter = require('./User');
const ActivitesRouter = require('./Activities');
const TrackActivityRouter = require('./Tracker');

const routes = [
    UserRouter,
    ActivitesRouter,
    TrackActivityRouter
    
];

module.exports = (app) => {
    routes.forEach(route => app.use('/api', route))
};