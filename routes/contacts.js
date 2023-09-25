const router = require('express').Router();
const contactController = require('../controllers/contacts.js');

router.get('/', contactController.getContacts);

router.get('/:id', contactController.getContactById);

module.exports = router;