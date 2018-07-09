let http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Im a bird');
}).listen(process.env.PORT || 3000);