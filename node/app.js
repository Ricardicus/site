/* Interactive shell */

/*
*
* In order for this program to work,
* ric-script interpretor must be placed
* in the path.
*
* This will not work on a Windows machine.
*
*/

var express = require('express')

const { spawn } = require('child_process');
var app = express();
var fs = require('fs');
var bodyParser  = require('body-parser');
var http = require('http').createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

/* BASH is used */
var shell = "bash";

/* Output index file */
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/style/*', function(req, res) {
    res.sendFile(__dirname + req.originalUrl);
});

app.get('/doc', function(req, res) {
    res.sendFile(__dirname + '/doc/index.html');
});

app.get('/favicon.ico', function(req, res) {
    res.sendFile(__dirname + '/favicon.ico');
});

app.get('/doc/*', function(req, res) {
    if ( req.originalUrl.includes("?") ) {
        res.sendFile(__dirname + req.originalUrl.split("?")[0]);
    } else {
        res.sendFile(__dirname + req.originalUrl);
    }

});

app.get('/images/*', function(req, res) {
    res.sendFile(__dirname + req.originalUrl);
});

child = null;

/* Redirect the rest to index */
app.get('*', function(req, res) {
    res.redirect('/');
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
