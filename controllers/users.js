var mongoose = require('mongoose'),
    User = require('../models/users'),
    crypto = require('crypto'),
    request = require('request');

module.exports = function() {
    return {
        login: function(req, res) {

            var reqst = request({
                method: req.method,
                uri: req.app.locals.apiUrls.user + req.url,
                body: req.body,
                json: true
            });
            
            reqst.pipe(res);
        }
    };
};