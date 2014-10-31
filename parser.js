module.exports = function (packet) {

	//Parse date
	var date = new Date(0);
	date.setUTCSeconds(packet.header.unix_secs)
	var receptionDate = date.toGMTString();

	//Show Log
	console.log(receptionDate + ": Received packet from source (id: " + packet.header.source_id + ")" );
}