const jwt = require('jsonwebtoken');

const validationToken = (req, res, next) => {
    try{
    const { authorization } = req.headers

    if(!authorization){
        return res.status(401).send({ message: 'Usuário não autorizado' })
    }
    
    const parts = authorization.split(" ");
    if(parts.length !== 2){
        return res.status(401).send({ message: 'Usuário não autorizado' })
    }

    const [schema, token] = parts;
    if(schema !== "Bearer"){
        return res.status(401).send({ message: 'Usuário não autorizado' })
    }

    const secret = process.env.SECRET

    jwt.verify(token, secret, (error, decoded) => {
        if(error){
            return res.status(401).send({ message: 'Usuário não autorizado' })
        }
        next();
    })
    
    }catch(error){
        return res.status(500).send({ error: error });
    }
}

module.exports = { validationToken }