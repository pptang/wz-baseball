require('rootpath')();

var express = require('express');
var http = require('http');
var mongoose = require('mongoose');
var passport = require('passport');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var config = require('server/config/main');
var app = express();
var server = http.createServer(app);

mongoose.connect(config.dbUrl);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator(require('server/validators/custom')));
app.use(express.static(__dirname + '/client'));
app.use(passport.initialize());

server.listen(config.port, function() {
    console.log('WZ Baseball');
});