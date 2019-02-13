// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec(){
    const saudacao = 'Falaaaa' // contexto léxico 2
    return saudacao
}
// Não é gerado conflito pois estão em contextos diferentes, do menor (mais perto) pro maior (mais longe)

// Objetos são grupos de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)