Array.prototype.filter2 = function (f){
    const arr = []
    for (let i = 0; i < this.length; i++){
        if(f(this[i], i, this)){
            arr.push(this[i])
        }      
    }
    return arr
}

const produtos = [
    {nome: "Notebook", preco: 2499, fragil: true},
    {nome: "iPad Pro", preco: 4999, fragil: true},
    {nome: "Copo de Vidro", preco: 14.99, fragil: true},
    {nome: "Copo de Plástico", preco: 9.99, fragil: false},
]

const caro = e => e.preco >= 500
const fragil = e => e.fragil

let z = produtos.filter2(caro).filter2(fragil)
console.log(z)