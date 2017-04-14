var express = require("express")
var app = express()

var port = process.env.PORT || 8080;

app.get('/', function(req, res){
  res.send("Please go to the following pathname /api/whoami")
})

app.get('/api/whoami', function(req, res){
  if (req.url === '/favicon.ico') return;
  res.json({
    ipaddress: req.headers['x-forwarded-for'] ||
               req.connection.remoteAddress,
    language: req.headers["accept-language"].split(',')[0],
    software: req.headers["user-agent"].match(/\((.*?)\)/)[1]
  })
  
})

app.listen(port, function(){
  console.log("Listening on port: " + port)
})