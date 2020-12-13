const newsRoutes = require('./news');
const siteRouters = require('./site');

function router(app) {
    app.use('/news', newsRoutes);
    app.use('/', siteRouters);

}
module.exports = router;