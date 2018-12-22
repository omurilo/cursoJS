const imprimirResultado = function(nota){
    if(nota >= 7){
        console.log('Aprovado!')
    }else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') // cuidado com linguagem fracamanete tipada, faça um teste do valor numerico