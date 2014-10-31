var Collector=require("Netflow");
var x = new Collector(function (err) {
    if(err != null) {
        console.log("ERROR ERROR \n"+err);
    }
})
.on("listening",function() { console.log("listening"); } )
.on("packet",

	function (packet) {

		//Parse date
		var date = new Date(0);
		date.setUTCSeconds(packet.header.unix_secs)
		var receptionDate = date.toGMTString();

		//Show Log
		console.log(receptionDate + ": Received packet from source (id: " + packet.header.source_id + ")" );
	} 

)
.listen(8080);