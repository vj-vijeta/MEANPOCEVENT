var mongoose = require('mongoose'),
    Event = require('../models/events'),
    Purchase = require('../models/purchases'),
    crypto = require('crypto');

module.exports = function() {
    return {
        single: function(req, res, next) {

			var id = req.params.id;
			if(!id) {
				return res.status(400).send([{
					msg: 'ID required',
					param: 'id'
				}]);
			}

            Event.findOne({
                _id: id
            })
			.populate('admin')
			.populate('tenant')
			.exec(function(err, event) {
                if(err) {
					if(err.kind == 'ObjectId') {
						return res.status(400).json([{
							msg: 'Event Not Found',
							param: 'id'
						}]);
					}
					return res.status(400).json([{
						msg: 'Internal error',
						param: null
					}]);
				}

				return res.status(200).json({
					event: event
				});
            });
        },
        list: function(req, res, next) {
            
			var current = req.body.current;

			var skip = req.body.skip || 0;
			var limit = req.body.limit || 10;

			var where = {};

			Event.count(where, function(err, count) {

				if(err) {
					// return done(err);
					return res.status(400).json([{
						msg: err,
						param: null
					}]);
				}

				Event.find(where)
				.skip(skip)
				.limit(limit)
				.exec(function(err, list) {
					if(err) {
						return res.status(400).send([{
							msg: 'Error',
							param: null
						}])
					}

					return res.status(200).json({
						count: count,
						list: list
					});
				});
			});
        },
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

			var purchase = new Purchase({
				event: req.body.id,
				user: current._id,
				admin: current.admin._id,
				tenant: current.tenant._id
			});
			purchase.save(function(err) {
				if (err) {
					return res.status(400).json([{
						msg: 'Internal Error',
						param: 'internal'
					}]);
				}
				
				return res.status(200).json({
					id: purchase.id
				});
			});
        }
    };
}