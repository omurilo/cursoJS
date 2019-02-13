const prod1 = {}
prod1.nome = 'Produto Super Poderoso'
prod1.preco = 4998.90
prod1['Desconto legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

// não é um json, é um objeto, coleção de chaves e valores
const prod2 = {
    nome: 'Produto super foda',
    preco: 76.90
} // formato literal de objetos

// isso é um json = texto
'{"nome": "Produto super foda","preco": 76.90}'

console.log(prod2)