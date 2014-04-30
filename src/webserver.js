#! /usr/bin/env node

var http = require('http');

var server = http.createServer();

server.on('request', function(req, res) {
    res.writeHead( 200, {'Content-Type': 'text/plain'});
    res.end('Hello world, fuckas!');
})
.listen(8080, '0.0.0.0');

console.log("Web server should be up and running");
