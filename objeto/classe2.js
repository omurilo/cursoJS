class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor'){
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(nome, sobrenome, profissao){
        super(sobrenome, profissao)
        this.nome = nome
    }
}

const filho = new Filho('José', 'Medeiros', 'Pintor')
console.log(filho)