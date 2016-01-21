/* globals describe,it */

"use strict";
const assert = require("chai").assert;
const app = require("../../app");
const request = require("supertest").agent(app);

describe("acceptance: users routes", function(){

	it("GET Many /users", function(done){
		request.get('/api/v1/users').expect(200)
			.end(function(err,res){
				assert.equal(null, err);
				const jsonRes = JSON.parse(res.text);
				assert.notStrictEqual(jsonRes.users, undefined);
				assert.equal(jsonRes.users.length, 1);
				done();
			});
	});	  	

});