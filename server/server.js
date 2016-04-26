const express = require('express');
const port = 8123;

const addItem = require('./routes/addItemRoute.js');
const deleteItem = require('./routes/deleteItemRoute.js');
const displayItem = require('./routes/displayItemRoute.js');
const renderAll = require('./routes/renderAllRoute.js');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
app.use(cors());
// app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api/render', renderAll);
// app.use(cors());
app.use('/api/', addItem);
app.use('/api/deleteItem', deleteItem);
app.use('/api/displayItem', displayItem);


app.listen(port, function () {
  console.log(`Listening on port ${port}...`);
});