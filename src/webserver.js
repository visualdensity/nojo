var http = require('http');

http.createServer( function(req, res) {
    res.writeHead( 200, {'Content-Type': 'text/plain'});
    res.end('Hello world!');
})
.listen(8080, '0.0.0.0');

console.log("Web server should be up and running");
