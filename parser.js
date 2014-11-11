
var fieldDictionary = require('./decoder')
var database = require('./datastore')
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
					decode: dictionaryElement.decode,
					name: dictionaryElement.name,
					field_type: field.fieldType
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
function parseFlowset(flowsetObject, packetHeader, metadata){

	//Log
	console.log("Flowset " + flowsetObject.flowset_id + ": Length " + flowsetObject.length)

	//Build the reception date
	var date = new Date(0)
	date.setUTCSeconds(packetHeader.unix_secs)

	// Return the result as a structure
	var result = {}
	result.source_address = metadata.address
	result.source_id = packetHeader.source_id
	result.time = date
	result.data = new Array()

	// Get the correponding template, if it exists.
	var templateFields = templateArray[flowsetObject.flowset_id]
	if (typeof templateFields !== 'undefined'){

		var currentPosition = 0

		// Iterate through the fields
		templateFields.forEach(function(field, index, array){

			// Get the raw data corresponding to this field
			var currentBuffer = flowsetObject.flowdata.slice(currentPosition, currentPosition+field.length)

			// Parse the field, if we have a 'decode' function available
			var parsedValue = (typeof field.decode !== 'undefined')?
				field.decode(currentBuffer):
				currentBuffer;

			//Build the corresponding result object
			result.data[index] = {
				name: field.name,
				field_type: field.field_type,
				value: parsedValue
			}

			//Move the counter
			currentPosition = currentPosition + field.length
		})

		//Log the result
		console.log(result)

		//Save
		database.saveFlowset(result, function(err){

			//Display error if it exists
			(err)?
				console.log(err):
				console.log("data saved");
		})
	} else {

		//No data yet
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
	console.log("\n"+ receptionDate + ": Received packet from source (" 
		+ " id: " + packet.header.source_id 
		+ " ip: " + packet.metadata.address + ")" )

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
				parseFlowset(element, packet.header, packet.metadata)

			}
		})

	}

}


//Exporting
module.exports = mainFunction