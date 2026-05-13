const http = require('http');

const app = http.createServer((requete, reponse) => {
  reponse.writeHead(200, { 'Content-Type': 'text/plain' });
  reponse.end('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;
