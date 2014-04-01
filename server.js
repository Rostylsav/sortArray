// Copy this file to a folder at C: \ Users \ your user

var fs = require('fs');
var text = '';
fs.readFile('D:/rpas/GitHub/sortArray/data.txt', function (err, logData) {
  	if (err) throw err;

  	text = logData.toString();
  	console.log(text);
	var http = require('http');
	http.createServer(function (req, res) {
  		res.writeHead(200, {'Content-Type': 'text/plain'});
 		 res.end(text);
	}).listen(1337, '127.0.0.1');
	console.log('Server running at http://127.0.0.1:1337/');
});







