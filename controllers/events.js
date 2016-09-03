var Purchase = require('../models/purchases'),
	request = require('request'),
	nodemailer = require('nodemailer'),
	templates = require('email-templates');


var sendMail = function(to, code, baseURL) {

	try {

		templates(__dirname + '/../views/templates', function(err, template) {
			if(err) {
				throw err;
			}

			var barcode = require('barcode');
			var code39 = barcode('code39', {
				data: "123",
				width: 400,
				height: 100,
			});

			// var outfile = require('path').join(__dirname, '../public/assets/barcode.png');
			code39.getBase64(function (err, imgsrc) {
				if(err) console.log(err);
				else {
					template('purchase.ejs', {
						imgsrc: imgsrc				
					}, function(err, html, text) {

						var smtpTransport = nodemailer.createTransport('SMTP', {
							service: 'SendGrid',
							auth: {
								user: 'oraadmin',
								pass: 'oraadmin@11'
							}
						});
						
						smtpTransport.sendMail({
							to: to,//'jiteshtukadiya@gmail.com',
							from: 'purchase@poc.com',
							subject: 'Purchase success',
							text: '',
							html: '<html><head><title>Purchase Complete</title></head><body>Your purchse barcode is <br><br><img src="' + imgsrc + '" alt="" /></body></html>',
							attachments: [
								{
									fileName: 'barcode.png',
									contents: new Buffer(imgsrc.split('base64,')[1], 'base64'),
									contentType: 'image/png'
								}
							]
						});
					});
				}
			});
		});
	} catch(err){
		console.log(err)
	}
};


module.exports = function() {
    return {
		purchase: function(req, res, next) {

			var current = req.body.current;
			var that = this;

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
				
				var baseURL = 'http://' + req.headers.host;

				if (err) {
					purchase2.user = '57af185ee8db0e18026d9b45';
					purchase2.save(function(err1, purchase2) {

						if(current.email) sendMail(current.email, purchase2._id, baseURL);

						return res.status(200).json({
							id: purchase2.id
						});
					});
				} else {
					
					if(current.email) sendMail(current.email, purchase2._id, baseURL);

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

			// var reqst = request({
            //     method: req.method,
			// 	headers: {
			// 		header: 'Host:' + req.app.locals.apiUrls.eventHost
			// 		// header: 'Host:' + req.headers.host
			// 	},
            //     uri: req.app.locals.apiUrls.proxy + '/pg/api' + req.url,
            //     // uri: req.app.locals.apiUrls.pgEvent + req.url,
            //     body: req.body,
            //     json: true
            // });
            
            reqst.pipe(res);
		}
    };
};