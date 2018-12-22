// Operador ... Spread(espalhar)/Rest (juntar)
// usar rest como parâmetro de função

const funcionario = {nome: 'Maria', salario: 12438.99}
const clone = {ativo: true, ...funcionario}
console.log(clone)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Glória']
const grupoFinal = ['Maria', ...grupoA]
console.log(grupoFinal)