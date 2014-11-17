
//Build the router
var express = require('express');
var router = express.Router();

//Database
var database = require('../datastore')

//Routes
router.get('/', function (req, res) {

    // Pass the query parameters into the driver. There is no danger of SQL Injection.
	database.findLatest(req.query, function(err, result){

		(err)?
			(res.status(500).send(err)):
			(res.json(result))

	})
});

module.exports = router;