// Recurso introduzido no ECMA6 (ES2015)

const pessoa = {
    nome: 'Ana',
    idade: 18,
    endereco: {
        logradouro: 'Rua da alegria',
        numero: 120
    }
}

const { nome, idade} = pessoa
console.log(nome, idade)

const { nome: n, idade:i } = pessoa
console.log(n, i)

const {sobrenome = null, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco:{ logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

// const { conta: { ag, num } } = pessoa // Não deve desestruturar um dado aninhado onde não ocorreu a criação do dado anteriormente
// Uma forma mais fácil
// const { ag, num } = pessoa.conta // utilizando a notação Ponto