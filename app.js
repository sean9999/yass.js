const fs = require('fs');
const http = require('http');
const baseDir = __dirname + '/files';
const hostname = '127.0.0.1';
const port = 6422;

const server = http.createServer( (req,res) => {
    fs.readFile(baseDir + '/index.html', (err,data) => {
        if (err) throw err;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end('\n');
    });
}).listen(port,hostname, () => {
    console.log(`server running at http://${hostname}:${port}`)
});
