const notas = [7.4, 6.3, 9.8, 8.1, 7.7]

for (let i in notas){
    console.log(i, `Nota = ${notas[i]}`)
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 15,
    peso: 40
}

for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}