const express = require('express');

// server logging
const path = require('path');

// set environment variable port or set 3000 as default
const PORT = process.env.PORT || 3000;

const app = express();

// npm morgan; create log directory

// handle url encoded data; parse json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// make public static
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// handlebars

// start server and listen for client requests
app.listen(PORT, function() {
  // log (server-side) when server has started
  console.log(`Server listening on: http://localhost:${PORT}`);
});
