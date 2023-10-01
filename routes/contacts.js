const router = require('express').Router();
const contactController = require('../controllers/contacts');

// Get all the contacts
router.get('/', contactController.getContacts);

// Add Contact
router.post('/', contactController.addContact);

//Get contact by Id
router.get('/:id', contactController.getContactById);

// Update Contact
router.put('/:id', contactController.updateContact);

module.exports = router;
