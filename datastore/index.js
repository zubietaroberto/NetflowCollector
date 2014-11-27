
//Mongoskin
var mongo = require('mongoskin')

var collectionName_flowset = 'flowset'
var connectionString = 'mongodb://zubietaroberto:test@dogen.mongohq.com:10030/netflow_test'

var db = mongo.db(connectionString);
var flowsetCollection = db.collection(collectionName_flowset)


module.exports = {

	saveFlowset: function(data, callback){
		flowsetCollection.insert(data, callback);
	},

	findLatest: function(data, callback){
	    flowsetCollection.find(data).toArray(callback);
    },

    findDistinct: function (fieldname, callback) {
        flowsetCollection.distinct(fieldname, callback);
    },

    countBytesByField: function (field_name, callback) {
        var field = "$" + field_name;
        var data = ([
            { $group :  { _id : field, count: { $sum : "$IN_BYTES" } } },
            { $sort:    { _id: 1 }}
        ]);
        flowsetCollection.aggregate(data, callback);
    }
}