const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log('Sincrona:', conteudo)

// assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`Assíncrona: ${config.db.host}:${config.db.port}`)
})

const arquivo = require('./arquivo.json')
console.log('Require:', arquivo)


fs.readdir(__dirname, (err, pastas) => {
    console.log('Conteúdo da pasta...')
    console.log(pastas)
})