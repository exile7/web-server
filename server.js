var express = require('express');
var app = express();
var PORT = 8080;

var middleware = {
    requireAuthentication: function(req, res, next) {
        console.log('Private route hit');
        next();
    },
    logger: function(req, res, next) {
        console.log('Request: ' + new Date().toString() + ' - ' + req.method + ' ' + req.originalUrl);
        next();
    }
};

app.use(middleware.logger);
//app.use(middleware.requireAuthentication);

app.get('/about', middleware.requireAuthentication, function(req, res) {
    res.send('About us page');
});

app.use(express.static(__dirname +'/public'));
//console.log(__dirname);
app.listen(PORT, function() {
    console.log('Web Server started on port: '+ PORT);
});