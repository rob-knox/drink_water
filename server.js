var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static( __dirname + '/public/dist/public' ));

app.listen(8000, function() {
    console.log("listening on port 8000");
})