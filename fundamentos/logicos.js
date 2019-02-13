/* Tabela Verdade
*  v e v -> v
*  v e f -> f
*  f e ? -> f
*/

/*
* v ou ? -> v
* f ou v -> v
* f ou f -> f
*
* v xor v -> f
* v xor f -> v
* f xor v -> v
* f xor f -> f
*
*
* !v -> f
* !f -> v
*/

function compras(trab1, trab2){
    const comprarSorvete = trab1 || trab2
    const comprarTv50 = trab1 && trab2
    // const comprarTv32 = !!(trab1 ^ trab2) // bitwise xor
    const comprarTv32 = trab1 != trab2 // diferença == xor
    const manterSaudavel = !comprarSorvete //operador unário
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel } // par nome/valor implicitamente
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))