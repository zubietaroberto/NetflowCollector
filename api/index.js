
//Build the router
var express = require('express');
var router = express.Router();

//Routes
router.get('/', function(req, res){
	res.send('Hello World from API router!');
})

module.exports = router;

