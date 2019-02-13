function getInteiroAleatrioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while(opcao != -1){
    opcao = getInteiroAleatrioEntre(-1, 100)
    console.log(`Opçao escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')