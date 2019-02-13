const produtos = [
    {nome: "Notebook", preco: 2499, fragil: true},
    {nome: "iPad Pro", preco: 4999, fragil: true},
    {nome: "Copo de Vidro", preco: 14.99, fragil: true},
    {nome: "Copo de Plástico", preco: 9.99, fragil: false},
]

console.log(produtos.filter(function (e){
    return false
}))
const caro = e => e.preco > 500
const fragil = e => e.fragil

const listaFinal = produtos.filter(caro).filter(fragil)
console.log(listaFinal)