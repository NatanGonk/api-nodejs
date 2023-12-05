const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  // Adicione mais campos conforme necessário para sua entidade
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
