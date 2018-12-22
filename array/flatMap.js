const escola = [{
    nome: 'Tuma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 9.3
    },{
        nome: 'Ana',
        nota: 7.9
    }]
}, {
    nome: 'Tuma M2',
    alunos: [{
        nome: 'João',
        nota: 7.3
    },{
        nome: 'Tereza',
        nota: 9.9
    }]
}]

const getNotaAluno = aluno => aluno.nota
const getNotaDaTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotaDaTurma)
console.log(notas1)

Array.prototype.flatMap = function (callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotaDaTurma)
console.log(notas2)
