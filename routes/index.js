var express = require('express');
var router = express.Router();
var request = require('request');
// var config = require('../config/config');
var bcrypt = require('bcrypt-nodejs');

// var mysql = require('mysql');
// var connection = mysql.createConnection({
//     host: config.sql.host,
//     user: config.sql.user,
//     password: config.sql.password,
//     database: config.sql.database
// });

// connection.connect();


/* GET home page. */

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

// router.get('/sign', function(req, res) {
//     res.render('sign', {});
// });

// router.get('/register', function(req, res) {
//     res.render('register', {});
// });

// router.get('/', function(req, res) {
//     res.render('cat-template', {});
// });



module.exports = router;
