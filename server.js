var express = require('express');
var connect = require('connect');
var fs = require('fs');
var app = express();

var appServer = function(req, res, next)
{
	console.log(req.url);
	//console.log(__dirname);

	next();
}
app.use(function(req, res, next) {
        req.rawBody = '';
        req.setEncoding('utf8');
        
        req.on('data', function(chunk) {
               req.rawBody += chunk;
               });
        
        req.on('end', function() {
               next();
               });
        });

app.use(express.bodyParser());

app.post('/app', function(req, res){
	fs.writeFile('d:/rpas/GitHub/sortArray/result_after_sorting.txt', req.rawBody)
	//console.log(req.rawBody);
});




app.use(appServer);
app.use(connect.static(__dirname));

app.listen(3000);
