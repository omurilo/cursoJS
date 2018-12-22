Array.prototype.reduce2 = function (f, inicial){
    const valorInicial = inicial ? 0 : 1
    let contador = inicial || this[0]
    for (let i = valorInicial; i < this.length; i++){
        contador = f(contador, this[i], i, this)
    }
    return contador
}

const soma = (acumulador, atual) => acumulador+atual
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma, 21))