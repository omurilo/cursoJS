// estrutura não indexada e não aceita repetições
const times = new Set()
times.add('Flamengo')
times.add('Vasco').add('São Paulo').add('Corinthians').add('Palmeiras')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('São Paulo')
console.log(times.has('São Paulo'))


const nomes = ['Raquel', 'Gabriela', 'Leonardo', 'Julia']
const nomesSet = new Set(nomes)
console.log(nomesSet)