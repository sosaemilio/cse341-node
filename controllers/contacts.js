const mongodb = require('../db/connect');

const getContacts = async function (req, res) {
  const contacts = await mongodb.getDb().db('byui').collection('contacts').find({});
  contacts.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getContactById = async function (req, res) {
  const contactId = parseInt(req.params.id);
  const contact = await mongodb.getDb().db('byui').collection('contacts').find({ _id: contactId });
  contact.toArray().then((list) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(list);
  });
};

const createContact = async function (req, res) {
  const body = req.body();
  mongodb.getDb().db('byui').collection('contacts').insertOne(body, function (err, res) {
    if (err) throw err;
    res.status(201);
  });
}

module.exports = {
  getContacts,
  getContactById,
  createContact
};
