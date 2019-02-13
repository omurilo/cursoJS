let dobro = function (a){
    return 2 * a
}

const dois = dobro = (a) => {
    return 2 * a
}

const tres = dobro = a => 2 * a // return implícito

console.log(dobro(Math.PI))
console.log(dois(2))
console.log(tres(4))

let ola = function (){
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui o parâmetro _
console.log(ola())