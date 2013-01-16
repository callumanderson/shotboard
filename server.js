var express = require('express');
var app = express();

app.get('/', function(req, res) {
	var homePage =  '<div class="home">'+
			'<h1>Shotboard</h1>'+
			'</div>'
	res.send(homePage);
});


app.listen(8888);
console.log('Listening on 8888');
