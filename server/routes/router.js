const router = require('express').Router();
const authentication = require('./authentication');

// define a test route
router.get('/ping', (_, res) => res.sendStatus(200));
router.use('/auth', authentication);

module.exports = router;
