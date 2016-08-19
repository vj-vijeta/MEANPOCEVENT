var express = require('express');
var router = express.Router();
var fs = require('fs');
var users = require('../controllers/users')();
var events = require('../controllers/events')();
var twitter = require('../controllers/twitter')(router);

router.post('/user/login', users.login);

router.get('/twitter/login', twitter.login);
router.get('/twitter/callback', twitter.callback);
router.post('/twitter/validate', twitter.validate);

router.get('/event/single/:id', events.common);
router.post('/event/listpublic', events.common);
router.post('/event/purchase', events.purchase);

module.exports = router;