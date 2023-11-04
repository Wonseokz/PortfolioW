module.exports = function (app) {

   const aboutme = require('../controllers/aboutme.server.controller');

   app.get('/aboutme', aboutme.render);
};