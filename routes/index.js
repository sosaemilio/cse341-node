const routes = require('express').Router();
const controllers = require('../controllers/index.js');

routes.get('/', controllers.nameRoute);

module.exports = routes;