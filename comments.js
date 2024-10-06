// Create web server
// Create a web server with Express.js, a Node.js web application framework. The server listens on port 3000 and serves the HTML file index.html.
// The server also serves the static files in the public directory. The server responds with the comment data in the comments.js file when a GET request is sent to the /comments URL.

var express = require('express');
var app = express();
var fs = require('fs');

app.get('/comments', function(req, res) {
  fs.readFile('comments.js', function(err, data) {
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});