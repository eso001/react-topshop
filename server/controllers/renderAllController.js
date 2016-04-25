require('../db.js');
const mongoose = require('mongoose');
const Clothing = mongoose.model('Clothing');
// const bodyParser = require('body-parser');
const express = require('express');

const app = express();

// app.use(bodyParser());
// app.use(bodyParser.urlencoded({ extended: true }));

module.exports = {
    renderAll: {
    	get: function(req, res){
            console.log("WOW IT IS REALLY RENDERALLINGGINGG ");
    		Clothing.find({}, function(err,data){
    			if (err){
    				throw err; 
    			}
    			res.send(data);
    		})
    	},
    	post: function(req, res) {
    		res.send('test to renderAllController');
    	}
    }
}
