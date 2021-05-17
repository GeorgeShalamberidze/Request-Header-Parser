require('dotenv').config();
var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200})); 
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/hello", (req, res) => {
  res.json({greeting: 'hello API'});
});

app.get('/api/whoami', (req, res) => {
  res.send({
    ipadress: req.ip,
    language: req.headers['accept-language'],
    software: req.headers['user-agent']
  })
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});