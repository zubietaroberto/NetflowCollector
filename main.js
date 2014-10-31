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
		packet.header.formatted_date = date.toGMTString();

		//Parse running time
		//Source: http://stackoverflow.com/questions/9763441/milliseconds-to-time-in-javascript
		var s = packet.header.sys_uptime;
		var ms = s % 1000;
		s = (s - ms) / 1000;
		var secs = s % 60;
		s = (s - secs) / 60;
		var mins = s % 60;
		var hrs = (s - mins) / 60;
		packet.header.formatted_uptime = hrs + 'H ' + mins + 'M ' + secs + 'S ' + ms + " ms";

		console.log(packet);
	} 

)
.listen(8080);