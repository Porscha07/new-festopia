var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('../config/config');
var bcrypt = require('bcrypt-nodejs');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: config.sql.host,
    user: config.sql.user,
    password: config.sql.password,
    database: config.sql.database
});


connection.connect();


/* GET home page. */
router.get('/', function(req, res, next) {
   res.render('index', { title: 'Express' });

});

//getting the sign-in page
router.get('/sign', function(req, res) {
    res.render('sign', {
    });
});

//getting the register page
router.get('/register', function(req, res) {
    res.render('register', {});
});

//getting film results and displaying them in template
router.get('/film', function(req, res){
	var message = req.query.msg;
    	//if results not found in database, create message to show on template page, else display no message
    	if(message == "sorryfestivalnotfound"){
    		message="Sorry, festival not found!"	
    	}else if (message == null){
    		message = " "
    	}
    	//selecting everything from FILM in table Categories 
		var selectQuery = "SELECT * FROM Categories WHERE Category = 'Film'";
		connection.query(selectQuery,(error,results)=>{
			console.log(results)
		//showing message and results for FILM category template page
    	res.render('cat-template', {
    		message:message,
    		searchArray:results,
    		category: "film"
    	});
    });

});

//getting film results and displaying them in template
router.get('/art', function(req, res){
	var message = req.query.msg;
    	//if results not found in database, create message to show on template page, else display no message
    	if(message == "sorryfestivalnotfound"){
    		message="Sorry, festival not found!"	
    	}else if (message == null){
    		message = " "
    	}
    	//selecting everything from FILM in table Categories 
		var selectQuery = "SELECT * FROM Categories WHERE Category = 'Art'";
		connection.query(selectQuery,(error,results)=>{
			console.log(results)
		//showing message and results for FILM category template page
    	res.render('cat-template', {
    		message:message,
    		searchArray:results,
    		category: "art"
    	});
    });

});



// getting the template for the five categories 
router.get('/cat-template', function(req, res){
    	var message = req.query.msg;
    	//if results not found in database, create message to show on template page, else display no message
    	if(message == "sorryfestivalnotfound"){
    		message="Sorry, festival not found!"	
    	}else if (message == null){
    		message = " "
    	}
    	//selecting everything from table Categories 
		var selectQuery = "SELECT * FROM Categories";
		connection.query(selectQuery,(error,results)=>{
			//showing message and results on category template page
    	res.render('cat-template', {
    		message:message,
    		searchArray:results
    	});
    });
});

router.post('/search', function(req, res){
	//getting input data and turning them into variables to simplify search and pass into query  
	var name = req.body.name;
	var date = req.body.date;
	var family = req.body.family;

    
	//selecting specific data from table Categories in our database 
	var selectQuery = "SELECT * FROM Categories WHERE Name = ? OR Date = ? OR Family = ?";
	connection.query(selectQuery,[name,date,family],(error,results)=>{
		//if results are not found in the database, redirect to page w/ message > not found
		if(results.length == 0){
			res.redirect('/cat-template?msg=sorryfestivalnotfound')
		}else{
			res.render('cat-template', {
				//creating keys to display in category template page 
				message: null,
				searchArray: results})
		}
	});
});



module.exports = router;
