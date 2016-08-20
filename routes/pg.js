var express = require('express');
var router = express.Router();
var fs = require('fs');
var users = require('../controllers/users')();
var events = require('../controllers/events')();
var twitter = require('../controllers/twitter')(router);

router.get('/event/single/:id', events.pgCommon);
router.post('/event/listpublic', events.pgCommon);
router.post('/event/purchase', events.purchase);

module.exports = router;