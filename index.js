var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var SMSReceiver = require('./lib/SMSReceiver');

var app = express();

// // where the root (server) is located. Needed when including stylesheets and scripts in jade file.
// app.use(express.static(path.join(__dirname, '/')));

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

startServer();

// Index route
app.post('/', function(req, res, next) {
  // console.log(req.body);
  var receiver = new SMSReceiver.SMS(req.body);

  console.log(receiver.getAddress());
  res.status(200).send(req.body);
});

function startServer(){
  var server = app.listen(8899,function(){
    var port = server.address().port;
    console.log('Listening on port '+ port);
  })
}