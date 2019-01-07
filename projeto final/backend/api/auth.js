const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const signin = async (req, res) => {
        const email = req.body.email
        const password = req.body.password
        if(!email || !password){
            return res.status(400).send('Informe um usuário e senha!')
        }

        const user = await app.db('users')
            .where({ email: email})
            .whereNull('deletedAt')
            .first()
        
        if(!user) return res.status(400).send('Usuário não encontrado!')

        const isMatch = bcrypt.compareSync(password, user.password)
        if(!isMatch) return res.status(401).send('Email/Senha inválidos!')

        const now = Math.floor(Date.now()/1000)

        const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            admin: user.admin,
            iat: now,
            exp: now + (60 * 60 * 24 * 3)
        }

        res.json({
            ...payload,
            token: jwt.encode(payload, authSecret)
        })
    }

    const validateToken = async (req, res) => {
        const userData = req.body || null
        try {
            if(userData){
                const token = jwt.decode(userData.token, authSecret)
                if(new Date(token.exp * 1000) > new Date()){
                    return res.send(true)
                }
            }
        } catch(e) {
            //problema com token
            res.status(401).send('Seu token não foi validado!')
        }

        res.send(false)
    }

    const validateAdmin = async (req, res) => {
        const userData = req.body || null
        try {
            const token = jwt.decode(userData.token, authSecret)
            const user = await app.db('users')
                .where({ email: token.email})
                .whereNull('deletedAt')
                .first()
            if(user.admin && token.admin){
                return res.send(true)
            }
        } catch(e) {
            res.status(401).send('Você não tem permissão para acessar esta página!')
        }
        
        res.send(false)
    }

    return { signin, validateToken, validateAdmin }
}