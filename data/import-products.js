const products = require('./data/products.json');

Product.insertMany(products).then(() => {
  console.log('Produtos inseridos com sucesso!');
}).catch((err) => {
  console.error('Erro ao inserir produtos:', err);
});
