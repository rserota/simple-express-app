var express = require('express')
var app = express()

app.get('/', function(req, res){
    res.send('You have reached the internet! Welcome.')
})

app.listen(80)