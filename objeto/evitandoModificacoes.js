// Object.preventExtensions() - Modifica os valores e deleta, mas não acrescenta
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log(Object.isExtensible(produto))
produto.nome = 'ProdutoModificado'
produto.descricao = 'A descrição do produto que não vai fazer efeito nenhuma, pois, não existia'
delete produto.tag
console.log(produto)

// Object.seal() - Deixa modificar os valores, mas não acrescenta e nem deleta
const pessoa = {
    nome: 'Murilo', idade: 23, roupa: 'Azul'
}
Object.seal(pessoa)

pessoa.nome = 'Murilão'
pessoa.sobrenome = 'Henrique'
delete pessoa.roupa
console.log(pessoa)

//Object.freeze() = Objeto selado (Object.seal) com valores estáticos - Ou seja, não pode mudar, não pode nada, somente ler