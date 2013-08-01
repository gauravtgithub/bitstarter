var fs = require('fs');
var out = fs.readFileSync('index.html');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
   response.send(out.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
