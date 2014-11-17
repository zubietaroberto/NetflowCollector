var express = require('express')
var app = express()
var morgan = require('morgan');
var path = require('path');


    //Import Routers
var apiRouter = require('./apiRouter');
var frontendRouter = require('./frontendRouter');

    //Logging middleware
app.use(morgan('dev'));

    //Jade Configuration
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

    //Root route
app.get('/', frontendRouter);

    //Router for the API
app.use('/api', apiRouter);


//Reroute to the router
module.exports = app