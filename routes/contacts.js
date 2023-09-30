const router = require('express').Router();
const contactController = require('../controllers/contacts');

router.get('/', contactController.getContacts);
router.post('/', contactController.createContact);

router.get('/:id', contactController.getContactById);

module.exports = router;
