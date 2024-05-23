function escolhaComp() {

    const jokeipo = ['Pedra', 'Papel', 'Tesoura']
    let numeroAleatorio = Math.floor(Math.random() * jokeipo.length) 
    return jokeipo[numeroAleatorio]
    
}

function jogar(escolhaDoUsuario) {

    let escolhaPc = escolhaComp()

    if (escolhaPc === escolhaDoUsuario) {
        resultado = 'Empatou!'
    }



    else if (escolhaPc === 'Pedra' && escolhaDoUsuario == 'Papel') {
        resultado = 'Você venceu!'

    }

    else if (escolhaPc === 'Pedra' && escolhaDoUsuario === 'Tesoura') {
        resultado = 'Você perdeu!'

    }

    else if (escolhaPc === 'Papel' && escolhaDoUsuario == 'Tesoura') {
        resultado = 'Você venceu!'

    }

    else if (escolhaPc === 'Papel' && escolhaDoUsuario === 'Pedra') {
        resultado = 'Você perdeu!'

    }

    else if (escolhaPc === 'Tesoura' && escolhaDoUsuario == 'Pedra') {
        resultado = 'Você venceu!'

    }

    else if (escolhaPc === 'Tesoura' && escolhaDoUsuario === 'Papel') {
        resultado = 'Você perdeu!'

    }



    document.getElementById('resultado').innerText = resultado + ' Computador escolheu: ' + escolhaPc
}