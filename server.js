const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  res.end("Hellow World");
});

const PORT = 3500;
const Host = "localhost";

server.listen(PORT, Host, () => {
  console.log(`Server running at http://${Host}: ${PORT}/`);
});
