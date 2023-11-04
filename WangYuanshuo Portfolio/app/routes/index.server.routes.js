module.exports = function (app) {
  //   const index = require('../controllers/index.server.controller');
  //  app.get('/', index.render);

  const index = require('../controllers/home.server.controller');  //**index => home */

  app.get('/', (req, res, next) => {
    console.log(req.query);
    next();
  })

  app.get('/', index.render);

};