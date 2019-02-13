function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 1990.00,
    desc: 0.15,
    getPreco
}

console.log(produto.getPreco())

const carro = {preco: 35990.00, desc: 0.2}

console.log(getPreco.apply(carro))
console.log(getPreco.call(carro))

console.log(getPreco.apply(carro, [0.17, '$'])) // objeto a ser validado, [imposto, moeda]
console.log(getPreco.call(carro, 0.16, '$'))


