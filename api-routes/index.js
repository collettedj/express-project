"use strict";
const fs = require('fs');
const path = require('path');
const basename = path.basename(module.filename);

module.exports =  function(app, passport){
	fs.readdirSync(__dirname)
		.filter(function(file) {
		  	return (file.indexOf('.') !== 0) && (file !== basename);
		})
		.forEach(function(file) {
		    const basename = path.basename(file, '.js');
		    const router = require('./' + basename);
		    app.use('/api/v1/' + basename, router);
		});
};
