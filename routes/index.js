var express = require('express');
var router = express.Router();
var request = require('request');
// var config = require('../config/config');
var bcrypt = require('bcrypt-nodejs');

<<<<<<< HEAD
// // var mysqpl = require('mysql');
// =======
// var mysql = require('mysql');

=======
// var mysql = require('mysql');
>>>>>>> e15ca772357282978e358905226cd3487b41dcd1
// var connection = mysql.createConnection({
//     host: config.sql.host,
//     user: config.sql.user,
//     password: config.sql.password,
//     database: config.sql.database
// });

// connection.connect();



<<<<<<< HEAD
// //GET home page. 

=======
>>>>>>> e15ca772357282978e358905226cd3487b41dcd1
/* GET home page. */

router.get('/', function(req, res, next) {
   res.render('cat-template', { title: 'Express' });
});

<<<<<<< HEAD

// router.get('sign', function(req, res) {
//     res.render('sign', {});
// });

// router.get('/sign', function(req, res) {
//     res.render('sign', {});
// });
=======
router.get('/sign', function(req, res) {
    res.render('sign', {});
});
>>>>>>> e15ca772357282978e358905226cd3487b41dcd1

router.get('/register', function(req, res) {
    res.render('register', {});
});

<<<<<<< HEAD
// router.get('/', function(req, res,next) {
//     res.render('cat-template', {});
// });

=======
router.get('/cat-template', function(req, res) {
    res.render('cat-template', {});
});
>>>>>>> e15ca772357282978e358905226cd3487b41dcd1



module.exports = router;
