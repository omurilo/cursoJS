// com turma
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

let nomes = []
// getTurmaPromise('A').then(alunos => {
//     nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
//     getTurmaPromise('B').then(alunos => {
//         nomes = nomes.concat(alunos.map(b => `B: ${b.nome}`))
//         getTurmaPromise('C').then(alunos => {
//             nomes = nomes.concat(alunos.map(c => `C: ${c.nome}`))
//             console.log(nomes)
//         })
//     })
// })

Promise.all([getTurmaPromise('A'), getTurmaPromise('B'), getTurmaPromise('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))

getTurmaPromise('D').catch(e => console.log(e.message))