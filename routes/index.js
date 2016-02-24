var express = require('express');
var app = require('express')();
var router = express.Router();




/* GET home page. */
router.get('/', function(req, res){
	  res.sendFile(__dirname + '/client.html');
	});

module.exports = router;
