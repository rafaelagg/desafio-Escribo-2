const {getAllRepositorio} = require('../../repositorio/user/getAll');
const { compare } = require('../../utils/crypto/criptografia');
const { createToken } = require('../../utils/token/create');

const getAllController = async (req, res) =>  {
    try {
        const user = await getAllRepositorio()
        if (!user) {
            return res.status(200).send({ message: 'Usuario não encontrado' });
        }

        return res.status(200).send(user);

    } catch (error) {
        return res.status(500).send({ error: error });
    }
} 

module.exports = { getAllController}
