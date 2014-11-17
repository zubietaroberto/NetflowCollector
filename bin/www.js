var app = require('../frontend');

//Start server
var server = app.listen(80, function(){

  var host = server.address().address
  var port = server.address().port

  console.log('Server listening at http://%s:%s', host, port)
})

