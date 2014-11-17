
//Build the router
var express = require('express');
var router = express.Router();

//Routes
router.get('/', function (req, res) {
    res.render('index.jade', { title: "jejejeje" });
});

module.exports = router;