const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')
const usuarioApi = require('./api/usario')
require('./api/produto')(app, 'com params!')

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(saudacao('Murilo'))

app.use((req, res, next) => {
    console.log('Antes...')
    next()
})

app.get('/clientes/relatorio', (req, res) => {
    res.send(`Clientes Relatórios: Completo = ${req.query.completo} & Ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
    // let corpo = ''
    // req.on('data', function(parte){
    //     corpo += parte
    // })

    // req.on('end', function(){
    //     res.send(corpo)
    // })
    res.send(req.body)
})

app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})

app.get('/opa', (req, res, next) => {
    console.log('Durante...')
    res.json({
        data: [
            {id: 7, name: 'Carla', position: 1},
            {id: 32, name: 'Bia', position: 2},
            {id: 64, name: 'Murilo', position: 3}
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })

    next()

    // res.json({
    //     name: 'iPad 64GB',
    //     price: 3545.99,
    //     discount: 0.12
    // })
    // res.send('Estou <b>BEM!</b>'
})

app.use((req, res) => {
    console.log('Depois...')
})

app.listen(3000, () => {console.log("O servidor está rodando na porta: 3000")})