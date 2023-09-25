const router = require('express').Router();

router.use('/contacts', require('./contacts.js'));

module.exports = router;