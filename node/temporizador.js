const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 03 * * 2', function (){
    console.log('Executando tarefa 1!', new Date().getSeconds())
})

setTimeout(function (){
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)

// setImmediate
// setInterval

// Exemplo de execução em horário agendado (agendar post instagram)
const dataPost = {
    data: "05/06/2018",
    horario: "03:50:00"
}
const ano = dataPost.data.split('/', 3)[2]
const mes = dataPost.data.split('/', 3)[1]
const dia = dataPost.data.split('/', 3)[0]
const hora = dataPost.horario.split(':', 3)[0]
const min = dataPost.horario.split(':', 3)[1]
const seg = dataPost.horario.split(':', 3)[2]
const date = new Date(ano, mes-1, dia, hora, min, seg)

const tarefa2 = schedule.scheduleJob(date, function (){
    console.log('Executando a tarefa 2!', new Date().getSeconds())
})