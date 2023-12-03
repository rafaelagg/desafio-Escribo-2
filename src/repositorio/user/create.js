const User = require('../../models/User');

const createUserRepositorio = async (name, email, senha, telefone) => {
    
    const usuario = {
        name,
        email,
        senha,
        telefone
    };

    await User.create(usuario);
} 

module.exports = { createUserRepositorio}