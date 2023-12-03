const bcrypt = require('bcrypt');

const criptografar = async (value) => {
    return await bcrypt.hash(value, 10);
}

const compare = async (value, oldValue) => {
    return await bcrypt.compare(value, oldValue);
}

module.exports = { criptografar, compare }