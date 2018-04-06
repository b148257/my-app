var express = require('express');
var path = require('path');
var ejs = require('ejs');

var app = express();

app.use(express.static(path.join(__dirname, '/build')));

app.use('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

var server = app.listen(3000, function(){
	var host = server.address().address;
    var port = server.address().port;
    console.log('Listening at http://%s:%s', host, port);
})


