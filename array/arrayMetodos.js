const pilotos = ['Murilo', 'Joao', 'Pedro', 'Silva']
pilotos.pop() // Silva quebrou :D
console.log(pilotos)

pilotos.push('Terubino') // adiciona ao último
console.log(pilotos)

pilotos.shift() // retira o primeiro (eu quebrei :/)
console.log(pilotos)

pilotos.unshift('Trezegue') // adiciona ao primeiro
console.log(pilotos)

// splice pode adicionar e remover elementos do array

// adicionar

pilotos.splice(2, 0, 'Pirobinha', 'Mandraque')
console.log(pilotos)

// remover
pilotos.splice(1, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // cria um novo array a partir de uma posição (no caso 2 -> Mandraque)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // cria um novo array da posição 1 até a 4 mas não inclui a 4
console.log(algunsPilotos2)