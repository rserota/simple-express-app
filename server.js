var express = require('express')
var app = express()
// http and https, and fs are built in. they must be required, but don't need to be installed
var HTTP = require('http')
var HTTPS = require('https')
var fs = require('fs')

app.get('/', function(req, res){
    res.send('You have reached the internet! Welcome.')
})

try {
    
    httpsConfig = {
        key: fs.readFileSync('/etc/letsencrypt/live/thepasswordisdragons.com/privkey.pem'),
        cert: fs.readFileSync('/etc/letsencrypt/live/thepasswordisdragons.com/cert.pem'),
    }
    var httpsServer = HTTPS.createServer(httpsConfig, app)
    httpsServer.listen(443)
}
catch(e){
    console.log(e)
    console.log('could not start HTTPS server')
}

var port = process.env.PORT || 80
var httpServer = HTTP.createServer(app)
httpServer.listen(port)