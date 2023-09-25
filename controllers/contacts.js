const mongodb = require('../db/connect.js'); 

const getContacts = async function(req, res, next) {
    const contacts = await mongodb.getDb().db('byui').collection('contacts').find({});
    contacts.toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
    })
    
}

const getContactById = function(req, res) {
    const contactId = req.params.id;
}

module.exports = {
    getContacts,
    getContactById
}