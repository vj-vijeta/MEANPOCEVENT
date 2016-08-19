var express = require('express');
var router = express.Router();
var fs = require('fs');
var users = require('../controllers/users')();
var events = require('../controllers/events')();

router.post('/user/login', users.login);

router.get('/event/single/:id', events.common);
router.post('/event/listpublic', events.common);
router.post('/event/purchase', events.purchase);

module.exports = router;