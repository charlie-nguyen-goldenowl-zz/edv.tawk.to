const express = require('express');

const router = express.Router();
const tawktoController = require('../../controllers/tawkto.controller');

router.get('/:projectId', tawktoController.webhook);
router.post('/:projectId', tawktoController.postwebhook);

module.exports = router;
