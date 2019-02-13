// Função factory personalizada

function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: preco * 0.15
    }
}

console.log(criarProduto('Produto 1', 300))