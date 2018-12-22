function soma(){
    let somando = 0
    for (let i in arguments){
        somando += arguments[i]
    }
    return somando
}

console.log(soma(2, 3, 4, 5, 6, 7, 8, 9))
console.log(soma(0))
console.log(soma(1))
console.log(soma(1.1, 2.2, 'Teste'))
console.log(soma('a', 'b', 'c'))