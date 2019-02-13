function salvar(req, res){
    res.send('Usuario > salvar')
}

function obter(req, res){
    res.send('Usuário > obter')
}

module.exports = { obter, salvar }