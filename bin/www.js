var express = require('express')
var app = express()
var morgan = require('morgan');
var apiRouter = require('../api');

//Logging middleware
app.use(morgan('dev'))

//Root route
app.get('/', function(req, res){
	res.send('Hello World!!!')
})

//Router for the API
app.use('/api', apiRouter);

//Start server
var server = app.listen(80, function(){

  var host = server.address().address
  var port = server.address().port

  console.log('Server listening at http://%s:%s', host, port)
})

