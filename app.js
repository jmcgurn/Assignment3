var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var router = express.Router();



var players = [];

// create application/json parser
app.use(bodyParser.json());
 // create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/highscores', function(req, res){
    console.log(req.body);
    players.push(req.body);
    console.log(players);
    res.json(players);
});

//get route using express handlebars
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+"/index.html"));
});

app.use('/', router);

app.listen(3000, function(){
    console.log("Game Library running on port 3000");
});