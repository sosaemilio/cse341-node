const mongodb = require('../db/connect.js'); 

const getContacts = async function(req, res, next) {
    const contacts = await mongodb.getDb().db('byui').collection('contacts').find({});
    contacts.toArray().then( (lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    })
    
}

const getContactById = async function(req, res) {
    const contactId = parseInt(req.params.id);
    const contact = await mongodb.getDb().db('byui').collection('contacts').find({"_id": contactId});
    contact.toArray().then((list) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(list);
    })

}

module.exports = {
    getContacts,
    getContactById
}