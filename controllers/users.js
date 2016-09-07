var mongoose = require('mongoose'),
    User = require('../models/users'),
    crypto = require('crypto'),
    request = require('request'),
    emitter = require('../emitter');

module.exports = function() {
    return {
        login: function(req, res) {

            var reqst = request({
                method: req.method,
                uri: req.app.locals.apiUrls.user + req.url,
                body: req.body,
                json: true
            });

            // var reqst = request({
            //     method: req.method,
			// 	headers: {
			// 		header: 'Host:' + req.app.locals.apiUrls.userHost
			// 		// header: 'Host:' + req.headers.host
			// 	},
            //     uri: req.app.locals.apiUrls.proxy + '/api' + req.url,
            //     // uri: req.app.locals.apiUrls.pgEvent + req.url,
            //     body: req.body,
            //     json: true
            // });
            
            emitter.emit('pgUser', reqst);
            reqst.pipe(res);
        }
    };
};