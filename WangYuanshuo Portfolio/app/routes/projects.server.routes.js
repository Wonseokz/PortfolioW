module.exports = function (app) {
    //   const index = require('../controllers/index.server.controller');
    //  app.get('/', index.render);
  
    const projects = require('../controllers/projects.server.controller');  //**index => home */
  
    app.get('/projects', (req, res, next) => {
      console.log(req.query);
      next();
    })
  
    app.get('/projects', projects.render);
  
  };