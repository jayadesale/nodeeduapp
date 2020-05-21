var http = require('http');

var server = http.createServer(function(req,res){
    res.write('<h1>Welcome to Edureka</h1>')
    res.end()
})

const port = process.env.PORT || '3046';


server.listen(port)