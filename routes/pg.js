var express = require('express');
var router = express.Router();
var events = require('../controllers/events')();

router.get('/event/single/:id', events.pgCommon);
router.post('/event/listpublic', events.pgCommon);
router.post('/event/purchase', events.purchase);

module.exports = router;