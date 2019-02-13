// usando a notação literal

const obj1 = {

}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// funções construtoras
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.1)
const p2 = new Produto('Notebook', 2149.99, 0.15)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase, 
        faltas,
        getSalario (){
            return (salarioBase/30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 1200, 2)
const f2 = criarFuncionario('Maria', 3400, 5)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Luiza'
console.log(filha)

// Uma função famosa com json.parse
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)