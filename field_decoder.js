module.exports = {

	// Transforms a Buffer to an IP Address
	decodeIPv4: function(dataBuffer){
		var octet1 = dataBuffer.readUInt8(0)
		var octet2 = dataBuffer.readUInt8(1)
		var octet3 = dataBuffer.readUInt8(2)
		var octet4 = dataBuffer.readUInt8(3)

		return octet1 + "." + octet2 + "." + octet3 + "." + octet4
	}
}