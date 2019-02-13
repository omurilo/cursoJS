function saudacao(nome){
    return function(req, resp, next){
        console.log(`Seja bem vindo ${nome}!`)
        next()
    }
}

module.exports = saudacao