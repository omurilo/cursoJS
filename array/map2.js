const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os preços

let resultado = carrinho.map(e => JSON.parse(e).preco)
console.log(resultado)

// Ou simplesmente
console.log(carrinho.map(e => JSON.parse(e).preco))