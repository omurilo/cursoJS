// Arrow Function
const soma = (a, b) => a + b
console.log(soma(1, 3))

// Arrow Function this
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})

lexico1()
lexico2()

// parametro default
function log(texto = 'Node'){
    console.log(texto)
}

log()
log('Sou mais forte')

// operador rest
function total (...nums){
    let total = 0
    nums.forEach(n => total += n)
    return total
}

console.log(total(1, 2, 3, 4))