const {getUserByEmailRepositorio} = require('../../repositorio/user/findByEmail');
const { compare } = require('../../utils/crypto/criptografia');
const { createToken } = require('../../utils/token/create');

const signInController = async (req, res) =>  {
    try {
        const camposValidos = validaCamposObrigatorios(req.body);
        if (!camposValidos) {
            return res.status(400).send({ message: 'Dados faltando para Cadastro' });
        }

        const { email, senha } = req.body;

        const user = await getUserByEmailRepositorio(email)
        if(!user){
            return res.status(400).send({ message: 'Usuário não encontrado' });
        }

        const senhaCorreta = await compare(senha, user.senha);
        if (!senhaCorreta) {
            return res.status(401).send({ error: 'Senha incorreta' });
        } 

        const token = await createToken(user._id);
        return res.status(200).send({ message: 'Login bem-sucedido', token: token });

    } catch (error) {
        return res.status(500).send({ error: error });
    }
} 

const validaCamposObrigatorios = (body) => {

    const { email, senha } = body;

    if (!email || !senha) {
        return false;
    }

    return true;
}


module.exports = { signInController}
//export { createUserController }