console.log('01)', '1' == 1) // não leva em consideração o tipo (string e number)
console.log('02)', '1' === 1) // leva em consideração o tipo string != number
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3>= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2) // como compara endereços de memória sempre vai dar false
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime()) // comparação do número em ms (time) vão ser iguais, pois, mesmo tipo e mesmo valor

console.log('12)', undefined == null) // os dois não possuem valor então são iguais
console.log('13)', undefined === null) // os dois não possuem valor, mas um é vazio e outro é inexistente