
//Build the router
var express = require('express');
var router = express.Router();

//Database
var database = require('../datastore')

//Routes
router.get('/', function(req, res){
	database.findLatest({}, function(err, result){

		(err)?
			(res.status(500).send(err)):
			(res.json(result))

	})
});

module.exports = router;