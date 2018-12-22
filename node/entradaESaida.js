const anonimo = process.argv.indexOf('-a') !== -1

if(anonimo){
    process.stdout.write('Fala Anonimo!!\n')
    process.exit()
}else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}