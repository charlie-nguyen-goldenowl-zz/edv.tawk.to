const express = require('express');

const router = express.Router();
const tawktoController = require('../../controllers/tawkto.controller');

router.get('/webhook', tawktoController.webhook);

module.exports = router;
