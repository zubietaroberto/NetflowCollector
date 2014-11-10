
// Snippet Source: https://gist.github.com/amorri40/3430429
var hexChar = ["0", "1", "2", "3", "4", "5", "6", "7","8", "9", "A", "B", "C", "D", "E", "F"];
function byteToHex(b) {
  return hexChar[(b >> 4) & 0x0f] + hexChar[b & 0x0f];
}


module.exports = {

	// Transforms a Buffer to an IPv4 Address String
	decodeIPv4: function(dataBuffer){

		//Protection against invalid addresses
		if (dataBuffer.length != '4'){
			return "invalid"
		}

		var octet1 = dataBuffer.readUInt8(0)
		var octet2 = dataBuffer.readUInt8(1)
		var octet3 = dataBuffer.readUInt8(2)
		var octet4 = dataBuffer.readUInt8(3)

		return octet1 + "." + octet2 + "." + octet3 + "." + octet4
	}, 

	// Transforms 16 bytes to a IPv6 Address String
	decodeIPv6: function(dataBuffer){

		//Protection against invalid addresses
		if (dataBuffer.length != '16'){
			return "invalid"
		}

		var result = ''
		for (var i = 0; i < dataBuffer.length; i++) {
			var value = dataBuffer[i]
			result = result + byteToHex(value)

			// Add the colon for certain addresses,
			// only every four characters, not including the last
			if ((((i+1)%2) == 0) && ((i+1) != dataBuffer.length)){
				result = result + ":"
			}
		}

		return result
	},

	//Transforms an array of bytes into it's Hex representation
	decodeToHex: function(dataBuffer){

		// Hex strings are identified by 0x
		return '0x' + dataBuffer.toString('hex')
	},

	//Transforms 6 bytes into a Mac Address
	decodeToMACAddress: function(dataBuffer){

		var result = ''

		for (var i = 0; i < dataBuffer.length; i++) {
			var value = dataBuffer[i]

			//Add a dash before each decoded byte, except the first
			result = (i == '0')?
				result + byteToHex(value):
				result + "-" + byteToHex(value);

		};

		return result
	},

	//Transform a single byte to an UInt
	decodeUInt8: function(dataBuffer){
		return dataBuffer.readUInt8(0)
	},

	//Transform two bytes into an UInt
	decodeUInt16: function(dataBuffer){
		return dataBuffer.readUInt16BE(0)
	},

	//Transforms four bytes into an UInt
	decodeUInt32: function(dataBuffer){
		return dataBuffer.readUInt32BE(0)
	},

	//Transform a byte into the TOS
	decodeTOS: function(dataBuffer){
		var decimal = dataBuffer.readUInt8(0)

		//Source for a possible implementation:
		// https://en.wikipedia.org/wiki/Type_of_service#DSCP_and_ECN
		return decimal
	},

	//Transform into the BGP AS - Can be 2 bytes or 4 bytes, but we will decode anything there
	decodeBGP_AS: function(dataBuffer, size){

		if (size >= 4){
			return dataBuffer.readUInt32BE(0)
		} else {
			return dataBuffer.readUInt16BE(0)
		}
	},

	//Decodes into time coming from UNIX Epoch
	decodeTime: function(dataBuffer){
		var date = new Date(0)
		date.setUTCSeconds(dataBuffer.readUInt32BE(0))
		return date
	},

	//Decodes bytes to an ASCII String
	decodeToASCII: function(dataBuffer){
		return dataBuffer.toString('ascii')
	},

	//Decodes a byte to TCP flags
	decodeTCPFlags: function(dataBuffer){

		//Requires a custom implementation for the individual bits...+
		return decodeToHex(dataBuffer)
	}

}