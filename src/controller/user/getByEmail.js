const {getUserByEmailRepositorio} = require('../../repositorio/user/findByEmail');
const { compare } = require('../../utils/crypto/criptografia');
const { createToken } = require('../../utils/token/create');

const getByEmailController = async (req, res) =>  {
    try {
        
        const camposValidos = validaCamposObrigatorios(req.body);
        if (!camposValidos) {
            return res.status(400).send({ message: 'Dados faltando para Cadastro' });
        }

        const { email } = req.body;

        const user = await getUserByEmailRepositorio(email)
        if (!user) {
            return res.status(200).send({ message: 'Usuário não encontrado' });
        }
        return res.status(200).send(user);

    } catch (error) {
        return res.status(500).send({ error: error });
    }
} 

const validaCamposObrigatorios = (body) => {

    const { email } = body;

    if (!email) {
        return false;
    }

    return true;
}

module.exports = { getByEmailController}
