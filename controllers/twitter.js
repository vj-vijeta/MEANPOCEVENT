var Twitter = require('node-twitter-api'),
    config = require('../config'),
    emitter = require('../emitter');

module.exports = function(router) {
    var twitter = new Twitter({
        consumerKey: config.twitter.consumerKey,
        consumerSecret: config.twitter.consumerSecret,
        callback: config.twitter.callback
    });

    return {
        login: function(req, res) {

            var twitter = new Twitter({
                consumerKey: config.twitter.consumerKey,
                consumerSecret: config.twitter.consumerSecret,
                callback: 'http://' + req.headers.host + config.twitter.callback
            });
            
            twitter.getRequestToken(function (err, requestToken, requestSecret) {

                if(err) {
                    
                   return res.status(400).send([{
                        msg: 'Internal Error',
                        param: null
                    }])
                } else {
                   
                   emitter.emit('twitterRequestToken', requestToken, requestSecret);

                   return res.status(200).json({
                        token: requestToken,
                        secret: requestSecret
					});
                }
            });
        },
        callback: function(req, res) {
            
            if(req.query.denied || !req.query.oauth_token || !req.query.oauth_verifier) {
                res.redirect('/?status="Twitter Cancelled"');
            }

            var requestToken = req.query.oauth_token,
                verifier = req.query.oauth_verifier;

            emitter.emit('twitterCallback', req.query);

            res.render('twitter', {
                token: requestToken,
                verifier: verifier
            });
        },
        validate: function(req, res) {

            req.assert('token', 'OAuth Token is required').notEmpty();
            req.assert('secret', 'Secret is required').notEmpty();
            req.assert('verifier', 'OAuth Verifier is required').notEmpty();

            twitter.getAccessToken(req.body.token, req.body.secret, req.body.verifier, function (err, accessToken, accessSecret) {
                if (err)
                    return res.redirect('/');
                else {

                    emitter.emit('twitterAccessToken', accessToken, accessSecret);
                    
                    twitter.verifyCredentials(accessToken, accessSecret, function (err, user) {
                        if (err)
                            return res.redirect('/');
                        else {

                            emitter.emit('twitterSuccessFulLogin', user);

                            return res.json({
                                user: {
                                    id: user.id_str,
                                    _id: user.id_str,
                                    name: user.name,
                                    admin: null,
                                    tenant: null,
                                    type: 'user'
                                }
                            })
                        }
                    });
                }
            });
        }
    }
};