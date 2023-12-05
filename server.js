const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
app.use(bodyParser.json());

// Conexão com o banco de dados MongoDB
mongoose.connect('mongodb://localhost:27017/minha_base_de_dados', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Usar as rotas definidas
app.use('/books', bookRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
