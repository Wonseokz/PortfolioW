module.exports = function (app) {
    //   const index = require('../controllers/index.server.controller');
    //  app.get('/', index.render);
  
    const contact = require('../controllers/contact.server.controller');  //**index => contact */
  
    app.get('/contact', (req, res, next) => {
      console.log(req.query);
      next();
    })
  
    app.get('/contact', contact.render);
  
  };