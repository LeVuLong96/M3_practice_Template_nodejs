const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        fs.readFile('views/index.html', 'utf8', function(err, data) {
            if (err) {
                res.writeFile(404, {'Content-Type': 'text/html'});
                res.end('404 not found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            }
        })

    } else {

    }
})

server.listen( 8000, 'localhost', function() {
    console.log("server running at http://localhost:8000")
})