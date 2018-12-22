class Lancamento {
    constructor(nome, valor){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salário', 2500)
const luz = new Lancamento('Luz', -220)
const contas = new CicloFinanceiro(06, 2018)
contas.addLancamentos(salario, luz)
console.log(contas)
console.log(`O resultado deste mês é: ${contas.sumario()}`)