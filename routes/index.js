var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('../config/config');
var bcrypt = require('bcrypt-nodejs');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
});


connection.connect();
/* GET home page. */
router.get('/', function(req, res, next) {
   res.render('index', { title: 'Express' });

});

// Getting the Coming-Soon Page
router.get('/construction', function(req,res){
    res.render('construction',{

    })
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
		var selectQuery = "SELECT * FROM Categories WHERE Category = 'film'";
		connection.query(selectQuery,(error,results)=>{
			console.log(results)
		//showing message and results for FILM category template page
    	res.render('cat-template', {
    		message:message,
    		searchArray:results,
    		category: "film",
            title: "FILM"
    	});
    });

});
//getting the culture results and displaying them in template
router.get('/culture', function(req, res){
    var message = req.query.msg;
        //if results not found in database, create message to show on template page, else display no message
        if(message == "sorryfestivalnotfound"){
            message="Sorry, festival not found!"    
        }else if (message == null){
            message = " "
        }
        //selecting everything from culture in table Categories 
        var selectQuery = "SELECT * FROM Categories WHERE Category = 'culture'";
        connection.query(selectQuery,(error,results)=>{
            console.log(results)
        //showing message and results for Culture category template page
        res.render('cat-template', {
            message:message,
            searchArray:results,
            category: "culture",
            title: "CULTURE"
        });
    });

});
//getting the music results and displaying them in template
router.get('/music', function(req, res){
    var message = req.query.msg;
        //if results not found in database, create message to show on template page, else display no message
        if(message == "sorryfestivalnotfound"){
            message="Sorry, festival not found!"    
        }else if (message == null){
            message = " "
        }
        //selecting everything from FILM in table Categories 
        var selectQuery = "SELECT * FROM Categories WHERE Category = 'music'";
        connection.query(selectQuery,(error,results)=>{
            console.log(results)
        //showing message and results for FILM category template page
        res.render('cat-template', {
            message:message,
            searchArray:results,
            category: "music",
            title:"MUSIC"
        });
    });

});

//searching for all festivals
router.post('/search', function(req, res){
    // console.log(req.body);
    //getting input data and turning them into variables to simplify search and pass into query  
    var name = req.body.name;
    var category = req.body.category;
    var date = req.body.date;
    var family = req.body.family;
    var free = req.body.free;



    // if ( free != 1){
    //     free = 0;
    // }
    var queryString = [];

    if (name != ''){
        queryString.push(" AND Name = '"+name+"'");
    }
    if (date != ''){
        queryString.push(" AND Date = "+date);
    }
    if (family != undefined){
        queryString.push(" AND Family = "+family);
    }
    if (free != undefined){
        queryString.push(" AND Free = "+free);

    }

    var queryArray = queryString.toString().replace(',','');
    console.log(queryString);
    console.log(queryArray);
    //selecting specific data from table Categories in our database 
    // var selectQuery = "SELECT * FROM Categories WHERE Name = ? OR Date = ? OR Family = ?";
    var selectQuery ="SELECT * FROM Categories WHERE Category = ?" + queryArray;
    // var selectQuery = "SELECT * FROM Categories WHERE Category = ? AND Name = ? OR Date = ? OR Family = ? OR Free = ?";
    // console.log(free);
    // console.log(category)
    console.log(selectQuery);
    connection.query(selectQuery,[category,name,date,family,free],(error,results)=>{
        //if results are not found in the database, redirect to page w/ message > not found
        if(results.length == 0){
            res.redirect('/'+category+'?msg=sorryfestivalnotfound')
        }else{
            // console.log(category)
            res.render('cat-template', {
                //creating keys to display in category template page 
                message: null,
                searchArray: results,
                category: category,
                title: category
            })
        }
    });
});

//getting art results and displaying them in template
router.get('/art', function(req, res){
	var message = req.query.msg;
    	//if results not found in database, create message to show on template page, else display no message
    	if(message == "sorryfestivalnotfound"){
    		message="Sorry, festival not found!"
            	
    	}else if (message == null){
    		message = " "
    	}
    	//selecting everything from ART in table Categories 
		var selectQuery = "SELECT * FROM Categories WHERE Category = 'Art'";
		connection.query(selectQuery,(error,results)=>{
			// console.log(results)
		//showing message and results for ART category template page
    	res.render('cat-template', {
    		message:message,
    		searchArray:results,
    		category: "art",
            title:"Art"
    	});
    });

});
//getting food results and displaying them in template
router.get('/food', function(req, res){
    var message = req.query.msg;
        //if results not found in database, create message to show on template page, else display no message
        if(message == "sorryfestivalnotfound"){
            message="Sorry, festival not found!"    
        }else if (message == null){
            message = " "
        }
        //selecting everything from Food in table Categories 
        var selectQuery = "SELECT * FROM Categories WHERE Category = 'food'";
        connection.query(selectQuery,(error,results)=>{
            console.log(results)
        //showing message and results for FILM category template page
        res.render('cat-template', {
            message:message,
            searchArray:results,
            category: "food",
            title:"FOOD"
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
    		searchArray:results,
            category: "music"
    	});
    });
});

//front page search ONLY
router.post('/search', function(req, res){
	//getting input data and turning them into variables to simplify search and pass into query  
	var category = req.body.category;
    var name = req.body.name;
	var date = req.body.date;
	var family = req.body.family;
    var free = req.body.free;

	//selecting specific data from table Categories in our database 
	// var selectQuery = "SELECT * FROM Categories WHERE Name = ? OR Date = ? OR Family = ?";
    var selectQuery = "SELECT * FROM Categories WHERE Name = ? OR Date = ? OR Family = ? OR Free = ?";
	connection.query(selectQuery,[name,date,family,free],(error,results)=>{
		//if results are not found in the database, redirect to page w/ message > not found
		if(results.length == 0){
			res.redirect('/cat-template?msg=sorryfestivalnotfound')
		}else{
			res.render('cat-template', {
				//creating keys to display in category template page 
				message: null,
				searchArray: results,
                category: category
            })
		}
	});
});




module.exports = router;
