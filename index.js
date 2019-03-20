var express = require('express');
var app = express();
 
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/pages/index.html');
});
 
app.listen(3000);

console.log("Application listening on port 3000");