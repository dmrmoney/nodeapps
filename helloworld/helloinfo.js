/*
 * Plain Hello World web server
 * show info with /osinfo subdir path in url
 */

 const http = require('http');
 const util = require('util');
 const url = require('url');
 const os = require('os');

 var portid = 8080;

 const server = http.createServer();
 server.on('request', (req, res) => {
    var requrl = url.parse(req.url, true);
    if (requrl.pathname === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`<html><head><title>Hello</title></head>
        <body><h1>Hello World!</h1>
        <p><a href='/osinfo'>Info</a></p>
        </body></html>`);
    } else if (requrl.pathname === '/osinfo') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`<html><head><title>Info</title></head>
        <body><h1>System Info</h1>
        <p>Host Name: ${os.hostname()}</p>
        <p>Network: ${util.inspect(os.networkInterfaces())}</p> 
        </body></htmls>`);
    } else {
        res.end('bad URL ' + req.url);
    }
 });

 server.listen(portid);
 console.log('listening on port ', portid);
 