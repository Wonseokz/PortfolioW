const config = require('./config');

const express = require('express');

const morgan = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');

module.exports = function() {
 const app = express();

 if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production') {
    app.use(compress());
    }
    app.use(bodyParser.urlencoded({
    extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
        }));
    app.set('views', './app/views');
 app.set('view engine', 'ejs');

 require('../app/routes/index.server.routes.js')(app);
 // new added for home and about me page
 require('../app/routes/home.server.routes.js')(app);
 require('../app/routes/aboutme.server.routes.js')(app);
 require('../app/routes/projects.server.routes.js')(app);
 require('../app/routes/contact.server.routes.js')(app);
 require('../app/routes/services.server.routes.js')(app);
 

 app.use(express.static('./public'));

 return app;
};