var express = require('express');
var app =express();
var path = ('path');
var PORT = process.env.PORT || 4000;

app.use(express.static (path.join(__dirname + '/dist')));

app.listen(PORT, function() {
    console.log('app listening on port' + ' ' + PORT)
  });