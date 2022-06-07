const http = require('http');
const server = http.createServer((req, res) => { res.writeHead(200); res.end('Hello, Galvanize!'); })
const port = 3002, host = 'localhost';
server.listen(port, host, () => console.log(`Server is running on ${host}:${port}`))