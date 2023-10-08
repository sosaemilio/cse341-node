const { ObjectId } = require('mongodb');
const mongodb = require('../db/connect');

const getContacts = async function (req, res) {
  const contacts = await mongodb.getDb().db('byui').collection('contacts').find({});
  contacts.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getContactById = async function (req, res) {
  const contactId = new ObjectId(req.params.id);
  const contact = await mongodb.getDb().db('byui').collection('contacts').find({ _id: contactId });
  contact.toArray().then((list) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(list);
  });
};

const addContact = async function (req, res) {
  /* #swagger.parameters['body'] = { 
      in: 'body', 
      '@schema': { 
          "required": ["firstName"], 
          "properties": { 
            "firstName": { 
              "type": "string", 
            },
            "lastName": {
              "type": "string",
            },
            "email": { 
              "type": "string", 
            },
            "birthday": {
              "type": "string",
            },
            "favoriteColor": {
              "type": "string",
            }
          }
      } 
  } */

  const newContact = req.body;
  const result = await mongodb
    .getDb()
    .db('byui')
    .collection('contacts')
    .insertOne(newContact, (err) => {
      if (err) res.status(500).send(err);
    });

  if (result) res.status(201).json(result);
};

const updateContact = async function (req, res) {
  /* #swagger.parameters['body'] = { 
      in: 'body', 
      '@schema': { 
          "required": ["firstName"], 
          "properties": { 
            "firstName": { 
              "type": "string", 
            },
            "lastName": {
              "type": "string",
            },
            "email": { 
              "type": "string", 
            },
            "birthday": {
              "type": "string",
            },
            "favoriteColor": {
              "type": "string",
            }
          }
      } 
  } */
  const contactId = new ObjectId(req.params.id);
  const data = req.body;
  const result = await mongodb
    .getDb()
    .db('byui')
    .collection('contacts')
    .updateOne({ _id: contactId }, { $set: data });
  if (result) res.status(204).json(result);
};

const deleteContact = async function (req, res) {
  const contactId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db('byui')
    .collection('contacts')
    .deleteOne({ _id: contactId });
  if (result) res.status(200).json(result);
};

module.exports = {
  getContacts,
  getContactById,
  addContact,
  updateContact,
  deleteContact
};
