var express = require('express');
var router = express.Router();
var request = require('request');
// var config = require('../config/config');
var bcrypt = require('bcrypt-nodejs');


// var mysql = require('mysql');



// // var mysqpl = require('mysql');
// =======
// var mysql = require('mysql');


// var mysql = require('mysql');

// var connection = mysql.createConnection({
//     host: config.sql.host,
//     user: config.sql.user,
//     password: config.sql.password,
//     database: config.sql.database
// });

// connection.connect();




// //GET home page. 



/* GET home page. */

router.get('/', function(req, res, next) {
   res.render('index', { title: 'Express' });
<<<<<<< HEAD
=======
});


router.get('/sign', function(req, res) {
    res.render('sign', {});
>>>>>>> d68ab931b35c70b6642f84cc8b85ed43cec34563
});


// router.get('sign', function(req, res) {
//     res.render('sign', {});
// });

// router.get('/sign', function(req, res) {
//     res.render('sign', {});
// });

router.get('/sign', function(req, res) {
    res.render('sign', {});
});



router.get('/register', function(req, res) {
    res.render('register', {});
});


router.get('/cat-template', function(req, res) {
    res.render('cat-template', {});
});


// router.get('/', function(req, res,next) {
//     res.render('cat-template', {});
// });


router.get('/cat-template', function(req, res) {
    res.render('cat-template', {});
});




module.exports = router;
