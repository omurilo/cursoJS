Array.prototype.map2 = function (f){
    const arr = []
    for (let i = 0; i < this.length; i++){
        arr.push(f(this[i], i, this))    
    }
    return arr
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os preços

let resultado = carrinho.map2(e => JSON.parse(e)).map2(e => e.preco)
console.log(resultado)