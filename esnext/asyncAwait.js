// ES8
// Objetivo simplificar o código de Promise
const http = require('http')

const getTurmaPromise = (letra) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try{
                    resolve(JSON.parse(resultado))
                } catch (e){
                    reject(e)
                }
            })
        })
    })
}

let obterAlunos = async () => { // Só usa await em uma função marcada como async
    const tA = await getTurmaPromise('A')
    const tB = await getTurmaPromise('B')
    const tC = await getTurmaPromise('C')
    return [].concat(tA, tB, tC)
    
} // retorna um Objeto AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
