const User = require('../../models/User');

const getUserByEmailRepositorio = async (email) => {
    
    return await User.findOne({ email: email });
} 

module.exports = { getUserByEmailRepositorio}