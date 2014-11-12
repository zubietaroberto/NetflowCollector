/*
Dependencies
*/

var Collector = require('Netflow');
var Receiver = require('../parser');

var x = new Collector(function (err) {
    if(err != null) {
        console.log("ERROR ERROR \n"+err);
    }
})
.on("listening",function() { console.log("listening"); } )
.on("packet", Receiver)
.listen(8080);