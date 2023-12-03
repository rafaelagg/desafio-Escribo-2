const User = require('../../models/User');

const getUserByIdRepositorio = async (id) => {
    
    return await User.findById(id);
} 

module.exports = { getUserByIdRepositorio}