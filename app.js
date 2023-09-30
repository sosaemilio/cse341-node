const express = require('express');
const routes = require('./routes/index');
const mongodb = require('./db/connect');

const app = express();
const port = 3000;

app.use('/', routes);

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(process.env.PORT || port, () => {
      console.log(`Web server is listeng at port ${process.env.PORT || port}`);
    });
  }
});
