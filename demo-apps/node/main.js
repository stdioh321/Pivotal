var port = (process.env.PORT || 8000);
var http = require('http');
http.createServer(function (req, res) {
	var obj = {
		id: 12345,
		name: "Jaozinho",
		email: "jaozinho@gmail.com"
	};

	res.writeHead(200, { 'Content-Type': 'application/json' });
	res.end(JSON.stringify(obj));


}).listen(port, () => {
	console.log("Running Server at port: " + port);
});
