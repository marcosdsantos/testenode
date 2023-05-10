const express = require('express');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 3000;

// Configuração do banco de dados
const db = mysql.createConnection({
  host: 'localhost',
  user: 'meuuser',
  password: 'minhasenha',
  database: 'dbsite'
});

// Conexão com o banco de dados
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conexão com o banco de dados MySQL estabelecida.');
});

// Rota para listar todos os produtos
app.get('/produtos', (req, res) => {
  const sql = 'SELECT * FROM produtos';
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

// Inicialização do servidor
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}.`);
});
