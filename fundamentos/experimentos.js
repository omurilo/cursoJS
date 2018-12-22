let a = 3

global.b = 123
this.c = 456
this.d = false
this.e = 'texto'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// criando uma variavel maluco sem var e nem let
// não se faz isso
abc = 3
console.log(global.abc)
// module.exports = { e: 456, f: false, g: 'texto' } mais comumente fazemos em NODE