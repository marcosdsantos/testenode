const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');

const app = express();

// Configurações do servidor
const port = 3001 || process.env.PORT;

// Conexão com o banco de dados
mongoose.connect('mongodb://localhost/loja-online', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conectado ao banco de dados');
}).catch((err) => {
  console.error('Erro ao conectar ao banco de dados:', err);
});

// Definição do modelo de produto
const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  imageUrl: String
});

const Product = mongoose.model('Product', ProductSchema);

// Rotas do servidor
app.get('/', async (req, res) => {
  const products = await Product.find();
  res.render('index', { products });
});

// Configuração do view engine
app.set('view engine', 'ejs');

// Inicialização do servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
