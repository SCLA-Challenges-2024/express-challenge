const express = require('express');
const path = require('path');

const app = express();
const port = 4005;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// })

app.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/about', function(req, res) {
  res.sendFile(path.join(__dirname, '/about.html'));
});

app.get('/contact', function(req, res) {
  res.sendFile(path.join(__dirname, '/contact.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});