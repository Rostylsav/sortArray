var express = require('express');
var connect = require('connect');
var app = express();

var appServer = function(req, res, next)
{
	console.log(req.url);
	//console.log(__dirname);

	next();
}

app.post('/app', function(req, res){
	console.log(req.body);
});


app.use(appServer);
app.use(connect.static(__dirname));

app.listen(3000);
