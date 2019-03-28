var express = require('express');
var app =express();
var path = require ('path');
var PORT = process.env.PORT || 4000;

app.use(express.static (path.join(__dirname + '/dist')));

app.get('/', function (req, res) {
    res.render('index');
  });

app.listen(PORT, function() {
    console.log('app listening on port' + ' ' + PORT)
  });
