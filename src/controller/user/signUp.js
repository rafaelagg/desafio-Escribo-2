const {createUserRepositorio} = require('../../repositorio/user/create');
const {getUserByEmailRepositorio} = require('../../repositorio/user/findByEmail');
const { criptografar } = require('../../utils/crypto/criptografia');

const createUserController = async (req, res) => { 
    try { 
        
        const camposValidos = validaCamposObrigatoriosCreateUser(req.body); 
        if (!camposValidos) {
            return res.status(400).send({ message: 'Dados faltando para Cadastro' });
        }

        const { name, email, senha, telefone } = req.body; 

        const user = await getUserByEmailRepositorio(email)
        if(user){
            return res.status(400).send({ message: 'Usuário já cadastrado' });
        }
        
        const hashedSenha = await criptografar(senha );

        await createUserRepositorio(name, email, hashedSenha, telefone)
        
        return res.status(201).send({ message: 'Cadastro feito com sucesso' });
    } catch (error) {
        return res.status(500).send({ error: error });
    }
} 

const validaCamposObrigatoriosCreateUser = (body) => {

    const { name, email, senha, telefone } = body;

    if (!name || !email || !senha || !telefone) {
        return false;
    }

    return true;
}


module.exports = { createUserController}
