var http = require('http');
var fs = require('fs');
var index = 'index.html';
var requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!\n');
}

var server = http.createServer(requestListener);
server.listen(8080);
