var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');


//app.use(bodyParser());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended : true
}));

// parse application/json
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


app.listen(8888, function(){
    console.log('Server started at port 8888');
});
