const http = require('http');
const fs = require('fs');
const express = require('express')
const app = express()

//app.use(express.static('public'))

http.createServer(function(req, res) {
    //Open a file on the server and return its content:
    fs.readFile('index.html', function(err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });

}).listen(8080);