const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes/index.js');

app.use('/', routes);

app.listen(process.env.PORT || port, () => {
    console.log('Web server is listeng at port ' + (process.env.PORT || port));
});