var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/*', function(req, res, next) {
	
	var angular = {
		controllers: fs.readdirSync(__dirname + '/../public/controllers'),
		modules: fs.readdirSync(__dirname + '/../public/modules'),
		factories: fs.readdirSync(__dirname + '/../public/factories'),
		directives: fs.readdirSync(__dirname + '/../public/directives'),
		// filters: fs.readdirSync(__dirname + '/../public/filters'),
	};

	res.render('index', {
		title: 'Express',
		angular: angular
	});
});

module.exports = router;
