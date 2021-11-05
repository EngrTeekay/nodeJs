/*creating http server in nodejs
const http = require('http');
const host = "localhost";
const port = 8000;
//server should respond here
const requestlistener = function(req, res){
    res.writeHead(200);
    res.end("My first server is live!");
};

//live server here
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log("my server is running on http://${host}:${port}");
});*/

//local host server runs here on port 8080
var http = require('http');
http.createServer(function(req, res){
    res.write("Hellow world, welcome to my http server!");
    res.end();
}).listen(8080);
