var mainFunction = function (packet) {

	//Parse date
	var date = new Date(0)
	date.setUTCSeconds(packet.header.unix_secs)
	var receptionDate = date.toGMTString()

	//Show Log
	console.log(receptionDate + ": Received packet from source (id: " + packet.header.source_id + ")" )

	//Process the packets only if we are reading Netflow V9
	if (packet.header.version == 9){

		packet.v9Flowsets.forEach(function(element, index, array){

			if (element.flowset_id == 0){

				//Template Fields description
				element.templates.forEach(function(element2, index2, array2){
					console.log("Template for " + element2.id + ": " + element2.fields.length + " fields")
				})
			} else if (element.flowset_id == 1) {

				//Template Options
				console.log("Template Options: Length " + element.length)
			} else {

				//Data
				console.log("Flowset " + element.flowset_id + ": Length " + element.length)
			}
		})

	}

}


//Exporting
module.exports = mainFunction