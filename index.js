const http = require('http');

const hostname = '0.0.0.0'; // Listen on all network interfaces, required for Docker
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!!!####!!\n');
  res.end('Hiiii, Brooo!!!####!!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
