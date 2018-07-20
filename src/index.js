let http = require('http');
let fs = require('fs');

http.createServer(function (req, res) {
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Im a bird');



}).listen(process.env.PORT || 3000);