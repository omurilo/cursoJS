const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json' // json remoto, poderia ser um WebService
const axios = require('axios')

const chineses = p => p.pais === "China"
const mulheres = g => g.genero === "F"
const menorSalario = function (func, funcAtual){
    return func.salario < funcAtual.salario ? func : funcAtual
} 

// function procura (array){
//     let indice = 0
//     for (let i = 0; i < array.length; i++){
//         let a = array[0].salario
//         if(array[i].salario < a){
//             a = array[i].salario
//             indice = i
//         }
//     }
//     return indice
// }

axios.get(url).then(response => { 
    const funcionarios = response.data

    //console.log(chinesas[procura(chinesas)])
    const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)
    console.log(func)
})

// Exercício -> mostrar a mulher chinesas com menor salário

// objeto é da seguinte forma 
// {"id":1,"nome":"Feodor","sobrenome":"Pheby","email":"fpheby0@163.com","g":"M","cidade":"Bal’shavik","p":"Belarus","empresa":"Dabjam","s":2401.69}

