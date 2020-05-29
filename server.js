var http = require('http');

var server = http.createServer(function(req,res){
    res.write('<h1>Welcome to Simpli Node App</h1>')
    res.write('<h2>This is my first pipeline</h2>')
    res.write('<h3>Isn\'t it nice?</h3>')
    res.end()
})

const port = process.env.PORT || '3046';


server.listen(port)

