
/*
Templates
*/
function parseTemplates(templateObject){
	templateObject.templates.forEach(function(element, index, array){
		console.log("Template for " + element.id + ": " + element.fields.length + " fields")
	})
}

/*
Options
*/
function parseOptions(optionsObject){
	console.log("Template Options: Length " + optionsObject.length)
}

/*
Flowset Data
*/
function parseFlowset(flowsetObject){
	console.log("Flowset " + flowsetObject.flowset_id + ": Length " + flowsetObject.length)
}


/*
Entry function
*/
function mainFunction(packet) {

	//Parse date
	var date = new Date(0)
	date.setUTCSeconds(packet.header.unix_secs)
	var receptionDate = date.toGMTString()

	//Show Log
	console.log("\n"+ receptionDate + ": Received packet from source (id: " + packet.header.source_id + ")" )

	//Process the packets only if we are reading Netflow V9
	if (packet.header.version == 9){

		packet.v9Flowsets.forEach(function(element, index, array){

			if (element.flowset_id == 0){

				//Template Fields description
				parseTemplates(element)
			} else if (element.flowset_id == 1) {

				//Template Options
				parseOptions(element)
			} else {

				//Data
				parseFlowset(element)

			}
		})

	}

}


//Exporting
module.exports = mainFunction