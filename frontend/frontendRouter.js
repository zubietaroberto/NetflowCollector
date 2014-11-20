
//Build the router
var express = require('express');
var router = express.Router();

//Database
var database = require('../datastore')

//Root route
router.get('/', function (req, res) {
    res.render('index.jade', { title: "Entrada" });
});

//Graph Route
router.get('/graph', function (req, res) {

	// Pass the query parameters into the driver. There is no danger of SQL Injection.
	database.findLatest(req.query, function(err, result){

		(err)?
			(res.status(500).send(err)):
			(res.render('graph.jade', {
				title: 'Gráfica',
				data: result
			}));

	})

});

// Table Route
router.get('/table', function (req, res){

	// Pass the query parameters into the driver. There is no danger of SQL Injection.
	database.findLatest(req.query, function(err, result){

		(err)?
			(res.status(500).send(err)):
			(res.render('table.jade', {
				title: 'Tabla',
				data: result
			}));

	})

});

module.exports = router;