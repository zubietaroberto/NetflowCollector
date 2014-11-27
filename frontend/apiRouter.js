
//Build the router
var express = require('express');
var router = express.Router();

//Database
var database = require('../datastore')

//GET all flowsets
router.get('/', function (req, res) {

    // Pass the query parameters into the driver. There is no danger of SQL Injection.
	database.findLatest(req.query, function(err, result){

		(err)?
			(res.status(500).send(err)):
			(res.json(result))

	})
});

//GET total Bytes per Field
router.get('/count_bytes', function (req, res) {

    // Get the field name
    var fieldName = req.query.field_name;

    if (typeof fieldName == 'undefined') {
        
        //Bad Request
        res.status(400).send('field_name must be defined');
    } else {
        
        //Request from the database
        database.countBytesByField(fieldName, function (err, data) {

            (err)?
                (res.status(500).sen(err)):
                (res.json(data));
        });
    }
});

//GET disctinct values of a field
router.get('/distinct', function (req, res) {

    // Get the field name
    var fieldName = req.query.field_name;
    
    if (typeof fieldName == 'undefined') {
        
        //Bad Request
        res.status(400).send('field_name must be defined');
    } else {
        
        //Request from the database
        database.findDistinct(fieldName, function (err, data) {
            
            (err)?
                (res.status(500).sen(err)):
                (res.json(data));
        });
    }


});

module.exports = router;