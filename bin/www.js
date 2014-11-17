var express = require('express')
var app = express()
var morgan = require('morgan');
var path = require('path');

//Frontend-related variables
var frontendLocation = '../frontend';
var frontendDirectory = path.resolve(__dirname, frontendLocation);

//Import Routers
var apiRouter = require('../api');
var frontendRouter = require(frontendLocation);

//Logging middleware
app.use(morgan('dev'));

//Jade Configuration
app.set('views', path.join(frontendDirectory, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(frontendDirectory, 'public')));

//Root route
app.get('/', frontendRouter);

//Router for the API
app.use('/api', apiRouter);

//Start server
var server = app.listen(80, function(){

  var host = server.address().address
  var port = server.address().port

  console.log('Server listening at http://%s:%s', host, port)
})

