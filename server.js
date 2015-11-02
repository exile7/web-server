var express = require('express');
var app = express();
var PORT = 8080;

var middleware = require('./middleware.js');


app.use(middleware.logger);
//app.use(middleware.requireAuthentication);

app.get('/about', middleware.requireAuthentication, function(req, res) {
    res.send('About Us');
});

app.use(express.static(__dirname +'/public'));
//console.log(__dirname);
app.listen(PORT, function() {
    console.log('Web Server started on port: '+ PORT);
});