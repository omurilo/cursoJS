const aprovados = ['Ana', 'Raquel', 'Brandão', 'Gisele']

aprovados.forEach(function (nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach((nome, indice) => console.log(`${indice} - ${nome}`))

const listaAprovados = nome => console.log(nome)
aprovados.forEach(listaAprovados)

// o forEach recebe uma função callback que contém até 3 parametros de um array, que são: elemento, indice e o proprio array