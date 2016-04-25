
require('../db.js');
const mongoose = require('mongoose');
const Clothing = mongoose.model('Clothing');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = {
	addItem : {
		post: function(req, res){
			new Clothing({
				name: req.body.name,
				price: req.body.price,
				description: req.body.description,
				condition: req.body.condition,
				image: req.body.image
			}).save(function(err, data){
				console.log(data);
				res.send('save data');
			})
		},
		get: function(req, res) {
			res.send('get request success');
		}
	}

  
}
