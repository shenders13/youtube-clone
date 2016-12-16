var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, './client')));

app.listen(process.env.PORT || 3000, function () {
  console.log('process.env.PORT: ', process.env.PORT || 3000);
});