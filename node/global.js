// console.log(global)
global.MinhaApp = Object.freeze({ // forma de evitar que ele possa ser reatribuido
    saudacao() {
        return 'Estou em todos os lugares'
    },
    nome: 'Sistema Legal'
})