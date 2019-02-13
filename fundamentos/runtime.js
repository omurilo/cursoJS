/**
 * 
 * Principios da aula: Entender o Runtime e nunca tocar no escopo global de forma direta
 * 
 * Runtimes -> browser e node
 * browser -> objeto window (escopo global) === this
 * var a = 'texto'
 * window.a -> 'Texto'
 * var a = 123
 * window.a -> 123
 * this.a -> 123
 * 
 * let b = 123
 * window.b -> undefined
 * let b = 123 -> syntaxError
 * this.b -> undefined
 * b -> 123
 * const e let não são acessiveis no window mesmo sendo de acesso global, porém, não podem ser re-definidos
 * function f1() { return this === window} -> acessiveis no escopo global
 * const f2 = () => console.log(this === window) -> não acessiveis no escopo global
 * 
 * objetos fojem do escopo global
 * let pessoa = {nome: 'Ana', falar: function(){return `Eu sou ${this.nome}}`} // template string ` ` this => pesoa
 * pessoa.falar() -> 'Eu sou Ana'
 * this.nome -> undefined
 * pessoa.verificarEscopo = function{return this === window}
 * pessoa.verificarEscopo() -> false
 * 
 * 
 * Runtime -> Node (cada arquivo é um módulo)
 * 
 * let a = 3
 * 
 * global.b = 123
 * this.c = 456
 * this.d = false
 * this.e = 'Texto'
 * 
 * console.log(a)
 * console.log(global.b)
 * console.log(this.c)
 * console.log(module.exports.c)
 * console.log(module.exports === this)
 * console.log(module.exports) // criando uma variavel maluco sem var e nem let
 * não se faz isso
 * abc = 3
 * console.log(global.abc)
 * module.exports = { e: 456, f: false, g: 'texto' } mais comumente fazemos em NODE
 * 
 * 
 */
