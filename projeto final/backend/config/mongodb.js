const mongoose = require('mongoose')
const { db } = require('../.env')

mongoose.connect(db.mongo.url, { useNewUrlParser: true })
    .catch(e => {
        const msg = 'ERRO: Não foi possível conectar com o MongoDB!'
        console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
    })