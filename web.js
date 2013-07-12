var express = require('express');

var app = express.createServer(express.logger());
var Iconv = require('iconv').Iconv;
var fs = require('fs');

app.get('/', function(request, response) {
	
	var content = fs.readFileSync(index.html);
	var iconv = new Iconv(encoding, 'UTF-8');
    	var buffer = iconv.convert(content);
	
  return buffer.toString('utf8');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
