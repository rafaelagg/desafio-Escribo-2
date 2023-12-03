const User = require('../../models/User');

const getAllRepositorio = async (id) => {
    
    return await User.find();
} 

module.exports = { getAllRepositorio}