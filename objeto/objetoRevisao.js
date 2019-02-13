// coleção dinâmica de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    preco: 89000.00,
    proprietario: {
        nome: 'Murilo Henrique',
        idade: 22,
        endereco: {
            logradouro: 'Rua Bernardo cerro',
            numero: 100,
            complemento: 'Qd19, Lt20',
            cep: '74425-290',
            cidade: 'Goiânia',
            estado: 'Goiás'
        }
    },
    condutores: [{
        nome: 'Murilo Henrique',
        idade: '22',
        habilitacao: 'AB'
    }, {
        nome: 'Gabriela Fernandes',
        idade: '23',
        habilitacao: 'AB'
    }],
    calcularValorSeguro: function(){
        // ...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Rua Bernarco Cerro'
console.log(carro)

//delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)