// Ce fichier crée un serveur HTTP qui répond avec un message HTML lorsque quelqu'un visite http://localhost:3000.
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Bonjour Node!!!!</h1>\n");
});

server.listen(3000);
