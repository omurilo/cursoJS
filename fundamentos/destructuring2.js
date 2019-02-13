const [a] = [10]  // Operador Destructuring const [], definindo array => const a = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0 ] = [10, 7, 9, 8]

console.log(n1, n3, n5, n6) // ignora os elementos 2 e 4 e o 5 elemento não existe, o sexto foi denifido 0 como valor padrão

// desestruturação aninhada em arrays
const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)