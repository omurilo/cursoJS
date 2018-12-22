const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
]

// Desafio 1: Todos os alunos são bolsistas?
const allBolsistas = alunos.map(a => a.bolsista).reduce(function (acumulador, atual){
    atual == true ? 1 : 0
    console.log(acumulador, atual)
    const soma = acumulador + atual
    return soma
}, 0)
console.log(allBolsistas == alunos.length ? 'Todos são bolsistas' : `Não! Somente ${allBolsistas} alunos são bolsistas`)
// Desafio 2: Algum aluno é bolsista?
const anyBolsistas = alunos.map(a => a.bolsista).reduce(function (acumulador, atual){
    atual == true ? 1 : 0
    console.log(acumulador, atual)
    const soma = acumulador + atual
    return soma
}, 0)
console.log(anyBolsistas > 0 ? `Sim, ${anyBolsistas} alunos são bolsistas` : 'Não!')

// Formas de resolução mais simples

// Desafio 1
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Desafio 2
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))