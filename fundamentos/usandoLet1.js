let numero = 1 // escopo global, de função e de bloco
{
    let numero = 2 // escopo de bloco
    console.log('dentro =', numero)
}
console.log('fora =', numero)