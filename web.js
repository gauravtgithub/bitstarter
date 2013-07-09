var fs = require('fs');
var out = fs.readFileSync('index.html');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  buffer = new Buffer(256);
  buffer.write(out);
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
