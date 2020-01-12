/*
 * Plain Hello World web server
 */

 var http = require('http');
 var portid = 8080;

 http.createServer(function(req, res) {
     res.write('Hello World!');
     res.end();
 }).listen(portid);
 console.log('listening on port ', portid);
 