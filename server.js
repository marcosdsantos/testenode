const http = require('http');

const server = http.createServer((req, res) => {
  // Define o cabeçalho da resposta HTTP
  res.writeHead(200, {'Content-Type': 'text/html'});

  // Define o corpo da resposta HTTP
  res.write('<h1>Olá, mundo!</h1>');

  // Finaliza a resposta HTTP
  res.end();
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
