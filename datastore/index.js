
//Mongoskin
var mongo = require('mongoskin')

var collectionName_flowset = 'flowset'
var connectionString = 'mongodb://zubietaroberto:test@dogen.mongohq.com:10030/netflow_test'

var db = mongo.db(connectionString);
var flowsetCollection = db.collection(collectionName_flowset)


module.exports = {

	saveFlowset: function(data, callback){
		flowsetCollection.insert(data, callback);
	}
}