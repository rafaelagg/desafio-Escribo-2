const mongoose = require('mongoose')

const User = mongoose.model('User', {
  name: String,
  email: String,
  senha: String,
  telefone: Number
})

module.exports = User