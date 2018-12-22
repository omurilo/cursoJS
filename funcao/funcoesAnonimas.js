const soma = function (x, y){
    return x + y
}

const ImprimirSoma = function (a, b, operacao = soma){
    console.log(operacao(a, b))
}

ImprimirSoma(3, 4)
ImprimirSoma(3, 4, soma)
ImprimirSoma(3, 4, function (x, y){
    return x - y
})
ImprimirSoma(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function (){
        console.log('Opa!')
    }
}

pessoa.falar()