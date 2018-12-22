for (let letra of "Cod3r"){
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promisse']

for (let i in assuntosEcma){
    console.log(i)
}

for (let assunto of assuntosEcma){
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promisse', {abordado: false}]
])

for (assunto of assuntosMap){
    console.log(assunto)
}

for (let valor of assuntosMap.values()){
    console.log(valor)
}

for (let chave of assuntosMap.keys()){
    console.log(chave)
}

for (let [ch, vl] of assuntosMap.entries()){
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])

for (let valor of s){
    console.log(valor)
}