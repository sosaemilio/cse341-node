const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes/index.js');
const mongodb = require('./db/connect.js');

app.use('/', routes);

mongodb.initDb((err, mongodb ) => {
    if (err) {
      console.log(err);
    } else {
        app.listen(process.env.PORT || port, () => {
            console.log('Web server is listeng at port ' + (process.env.PORT || port));
        });
    }
  });

