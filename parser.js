
var fieldDictionary = require('./dictionary.js')
var templateArray = new Array()

/*
Templates
*/
function parseTemplates(templateObject){
	templateObject.templates.forEach(function(element, index, array){

		//Logging
		console.log("Template for " + element.id + ": " + element.fields.length + " fields")

		//Build the template object
		var templateFields = new Array()

		// Iterate through the fields in the original packet and transform them into fieldType Objects
		element.fields.forEach(function(field, index2, array2){

			//Get a reference to the dictionary's object
			var dictionaryElement = fieldDictionary[field.fieldType]

			// null protection, in case of propietary fields we can't parse
			if (typeof dictionaryElement !== 'undefined'){

				//Add to the array a new object, a copy of the dictionary's one.
				templateFields[index2] = {
					length: field.fieldLength,
					type: field.fieldType,
					name: dictionaryElement.name
				}
			}
		})

		//Save to templateArray
		templateArray[element.id] = templateFields

		// Log Results
		console.log(templateFields)
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

	// Get the correponding template, if it exists.
	var templateFields = templateArray[flowsetObject.flowset_id]
	if (typeof templateFields !== 'undefined'){
		console.log(templateFields)
	} else {
		console.log("template not found")
	}
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