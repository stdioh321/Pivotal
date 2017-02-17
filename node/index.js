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


// // app.listen(8080, function() {
// //     console.log('Example app listening on port 3000!');
// // });

// app.listen(port, ip);

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 9999;
var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
var http = require("http");

var options = { host: "attendee-service-gyrose-palometa.local.pcfdev.io", path: "/attendees" }


var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    show = process.env || {};
    res.write("Node_V1");
    // res.write(JSON.stringify(show));
    res.end();
}).listen(port, () => {
    console.log("Running on port: " + port);    
});




// console.log("Hello");
