// pessoa -> 123 -> {...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)


// pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana'}
Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua Pedro Alvares Cabral'
delete pessoa.nome

console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'})
console.log(pessoaConstante)