require('../db.js');
const mongoose = require('mongoose');
const Clothing = mongoose.model('Clothing');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = {
	":id" : {
		post: function(req, res){
			res.send("successful post to displayItem");
		},
		get: function(req, res) {
			Clothing.findById(req.params.id, function(err, data){
				if(err){
					throw err;
				} else {
					res.send(data);
				}
			})
		}
	}

  
}
