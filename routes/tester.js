var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('../config/config');
var bcrypt = require('bcrypt-nodejs');


var mysql = require('mysql');

var connection = mysql.createConnection({
    host: config.serverInfo.host,
    user: config.serverInfo.user,
    password: config.serverInfo.password,
    database: config.serverInfo.database
});

connection.connect();



/* GET home page. */

router.get('/', function(req, res, next) {
   res.render('cat-template', { title: 'Express' });
});


router.get('/sign', function(req, res) {
    res.render('sign', {});
});


router.get('/cat-template', function(req, res) {
    res.render('cat-template', {});
});




router.get('/cat-template', function(req, res) {
    res.render('cat-template', {});
});




module.exports = router;