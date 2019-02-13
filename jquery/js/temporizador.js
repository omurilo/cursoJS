(function($){
    $.fn.temporizador = function(opcoes){
        const opcoesFinais = $.extend({
            mensagem: 'Em breve um novo site!',
            horario: '23:59:50'
        }, opcoes)

        const horaDezena = $('<span class="digito">').html('0')
        const horaUnidade = $('<span class="digito">').html('0')
        const minutoDezena = $('<span class="digito">').html('0')
        const minutoUnidade = $('<span class="digito">').html('0')
        const segundosDezena = $('<span class="digito">').html('0')
        const segundosUnidade = $('<span class="digito">').html('0')

        const separadorHora = $('<span class="digito">').html(':')
        const separadorMinuto = $('<span class="digito">').html(':')
        const mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem)

        $(this).addClass('temporizador')
        $(this).append(horaDezena, horaUnidade, separadorHora, 
            minutoDezena, minutoUnidade, separadorMinuto, 
            segundosDezena, segundosUnidade, mensagem)

        const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/)
        const horarioAlvo = regex.exec(opcoesFinais.horario)
        
        let temporizador = setInterval(() => {
            const agora = new Date()
            const alvo = new Date()
            alvo.setHours(horarioAlvo[1])
            alvo.setMinutes(horarioAlvo[2])
            alvo.setSeconds(horarioAlvo[3])

            const diferencaEmMili = alvo.getTime() - agora.getTime()
            if(diferencaEmMili >= 0){
                const diferenca = regex.exec(new Date(diferencaEmMili).toISOString())

                horaDezena.html(diferenca[1][0])
                horaUnidade.html(diferenca[1][1])
                minutoDezena.html(diferenca[2][0])
                minutoUnidade.html(diferenca[2][1])
                segundosDezena.html(diferenca[3][0])
                segundosUnidade.html(diferenca[3][1])
            }else{
                clearInterval(temporizador)
            }

        }, 1000)


        return this
    }
})(jQuery)