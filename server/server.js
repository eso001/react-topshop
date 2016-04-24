require('./db.js');

const express = require('express');
const port = 8080;

const app = express();


app.listen(port, function () {
  console.log(`Listening on port ${port}...`);
});