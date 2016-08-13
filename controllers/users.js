var mongoose = require('mongoose'),
    User = require('../models/users'),
    crypto = require('crypto');

module.exports = function() {
    return {
        login: function(req, res) {

            req.assert('email', 'You must enter a valid email address').isEmail();
            req.assert('password', 'Password Can not be empty').notEmpty();

            var errors = req.validationErrors();
            if (errors) {
                return res.status(400).send(errors);
            }

            var email = req.body.email;
            var password = req.body.password;

            User.findOne({
                email: email,
                type: 'user'
            })
            .populate('admin')
            .populate('tenant')
            .exec(function (err, user) {
                if(err) {
                    // return done(err);
                    return res.status(400).json([{
                        msg: err,
                        param: null
                    }]);
                }
                if (!user) {
                    return res.status(400).json([{
                        msg: 'Unknown Email',
                        param: 'email'
                    }]);
                }
                
                if(!user.authenticate(password)) {
                    return res.status(400).json([{
                        msg: 'Invalid Password',
                        param: 'password'
                    }]);
                }

                var resData = {
                    user: user
                };
                resData.user.id = user.id;

                res.status(200).json(resData);
            });
        }
    };
}