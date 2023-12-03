const {getUserByIdRepositorio} = require('../../repositorio/user/findById');
const { compare } = require('../../utils/crypto/criptografia');
const { createToken } = require('../../utils/token/create');

const getByIdController = async (req, res) =>  {
    try {
        
        const id = req.params.id;
        if (!id) {
            return res.status(400).send({ message: 'Dados faltando para Cadastro' });
        }

        const user = await getUserByIdRepositorio(id)
        if (!user) {
            return res.status(200).send({ message: 'Usuario não encontrado' });
        }

        return res.status(200).send(user);

    } catch (error) {
        return res.status(500).send({ error: error });
    }
} 

module.exports = { getByIdController}
