var Purchase = require('../models/purchases'),
	request = require('request');

module.exports = function() {
    return {
		purchase: function(req, res, next) {

			var current = req.body.current;

			if(!current || !current._id || current.type != 'user') {
				res.status(400).json({
					msg: 'Uauthorized Access',
					param: null
				});
			}

			// because we set our user.provider to local our models/user.js validation will always be true
			req.assert('id', 'You must select event').notEmpty();
			
			var errors = req.validationErrors();
			if (errors) {
				return res.status(400).send(errors);
			}

			current.admin = current.admin || {};
			current.tenant = current.tenant || {};
			current.admin._id = current.admin._id || null;
			current.tenant._id = current.tenant._id || null;

			var purchase = new Purchase({
				event: req.body.id,
				user: current._id,
				admin: current.admin._id,
				tenant: current.tenant._id
			});

			var purchase2 = purchase;

			purchase.save(function(err) {
				if (err) {
					purchase2.user = '57af185ee8db0e18026d9b45';
					purchase2.save(function(err1, purchase2) {
						return res.status(200).json({
							id: purchase2.id
						});
					});
				} else {
				
					return res.status(200).json({
						id: purchase.id
					});
				}
			});
        },
		pgCommon: function(req, res, next) {
			var reqst = request({
                method: req.method,
                uri: req.app.locals.apiUrls.pgEvent + req.url,
                body: req.body,
                json: true
            });
            
            reqst.pipe(res);
		}
    };
}