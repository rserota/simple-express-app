var express = require('express')
var app = express()

app.get('/', function(req, res){
    res.send('You have reached the internet! Welcome.')
})

var port = process.env.PORT || 80
app.listen(port)