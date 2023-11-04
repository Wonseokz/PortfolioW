module.exports = function (app) {

    const home = require('../controllers/home.server.controller');

    app.route('/home').get(home.render);
    //app.get('/home', home.render);
};