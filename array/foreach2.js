const aprovados = ['Joao', 'Celio', 'Junior', 'Murilo']
/*
for (let i = 0; i<aprovados.length; i++){
    console.log(`indice: ${i}\nelemento: ${aprovados[i]}\narray: [${aprovados}]`)
}

for (let i in aprovados){
    console.log(`indice: ${i}\nelemento: ${aprovados[i]}\narray: [${aprovados}]`)
}
*/

Array.prototype.forEach2 = function (f){
    for (let i = 0; i < this.length; i++){
        f(this[i], i, this)
    }
}
aprovados.forEach2(function (nome, indice, array){
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})