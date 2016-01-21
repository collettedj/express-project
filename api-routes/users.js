"use strict";

const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
	var models = req.app.get('models');
	var users = models.User.findAll()
		.then(function(users){
			res.json({
				users: users
			});
		});	
});

module.exports = router;
