// var express = require('express');
// var app = express();

// app.get('/', function(req, res) {
//     res.send('Hello World!');
// });

// app.get('/another', function(req, res) {
//     res.send('Another !');
// });

// app.get('/hello', (req, res) => {
//     res.send('HELLOHELLOOOOOO!!!!');
// });

// app.post('/post', (req, res) => {
//     res.send({ "id": 12345, "name": "John" });
// });


// app.listen(8080, function() {
//     console.log('Example app listening on port 3000!');
// });


var port = (process.env.PORT || 8000);

var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ "id": 123456, "name": "Jaozinho" }));
    res.end();
}).listen(port);


// console.log("Hello");
