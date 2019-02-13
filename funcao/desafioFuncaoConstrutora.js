// Desafio função construtora vs class

function criarPessoa (nome){
    this.nome = nome

    this.retornaNome = function (){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const pessoa = new criarPessoa('Rosemildo')
pessoa.retornaNome()