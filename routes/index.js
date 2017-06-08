var express = require('express');
var router = express.Router();
var request = require('request');
// var config = require('../config/config');
var bcrypt = require('bcrypt-nodejs');

<<<<<<< HEAD
// var mysqpl = require('mysql');
=======
// var mysql = require('mysql');
>>>>>>> 312bca93457da68ccb79a342ed00d6a6d46e0078
// var connection = mysql.createConnection({
//     host: config.sql.host,
//     user: config.sql.user,
//     password: config.sql.password,
//     database: config.sql.database
// });

// connection.connect();


<<<<<<< HEAD
//GET home page. 
=======
/* GET home page. */

>>>>>>> 312bca93457da68ccb79a342ed00d6a6d46e0078
router.get('/', function(req, res, next) {
   res.render('index', { title: 'Express' });
});

<<<<<<< HEAD
router.get('sign', function(req, res) {
    res.render('sign', {});
});
=======
// router.get('/sign', function(req, res) {
//     res.render('sign', {});
// });

// router.get('/register', function(req, res) {
//     res.render('register', {});
// });

// router.get('/', function(req, res) {
//     res.render('cat-template', {});
// });
>>>>>>> 312bca93457da68ccb79a342ed00d6a6d46e0078



module.exports = router;
