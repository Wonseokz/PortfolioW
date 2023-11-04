module.exports = function (app) {
    //   const index = require('../controllers/index.server.controller');
    //  app.get('/', index.render);
  
    const services = require('../controllers/services.server.controller');  //**index => home */
  
    app.get('/services', (req, res, next) => {
      console.log(req.query);
      next();
    })
  
    app.get('/services', services.render);
  
  };