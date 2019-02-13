console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function (){
    return this.split('').reverse().join('')
}

console.log('ROMA TIBI SUBITO MOTIBUS IBIT AMOR - LAUGI ÊL'.reverse())

Array.prototype.first = function () {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

String.prototype.toString = function (){
    return 'Lascou tudo'
}

console.log('Escola COD3R'.reverse()) // o toString sobrescreveu a string utilizada no split e no join