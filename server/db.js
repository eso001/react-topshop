const mongoose = require('mongoose');
const dbUrl = 'mongodb://localhost/store';
const db = mongoose.connection;

const Schema = mongoose.Schema;

var ClothingSchema = new Schema({
  name: String,
  price: String,
  description: String,
  condition: String,
  image: String
});

var Clothing = mongoose.model('Clothing', ClothingSchema);

mongoose.connect(dbUrl);

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
  console.log('Connected to database');
});
