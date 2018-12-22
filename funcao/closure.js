// Closure é o escopo criando quando a função é declarada
// Esse escopo permite a funçao acessar e manipular variáveis externas a função

// Contexto léxico em ação!
const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao()) // Local