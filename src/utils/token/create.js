const jwt = require('jsonwebtoken');

const createToken = async (userId) => {
    const secret = process.env.SECRET

    return jwt.sign({ userId: userId }, secret, { expiresIn: "30m" });
}

module.exports = { createToken }