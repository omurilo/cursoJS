console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Murilo'
// obj1['nome'] = 'Murilo2' seria a mesma coisa
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome // atributo público
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')

const obj3 = new Obj('Mesa')

console.log(obj2.nome) // notação ponto para acessar atributos definidos em um objeto
console.log(obj3.nome)
obj3.exec()