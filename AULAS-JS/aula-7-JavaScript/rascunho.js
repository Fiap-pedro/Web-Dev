// ============================================================================================
// querySelector ==> pega o elemento do html 
const btnClicar = document.querySelector('#btnClicar')


// Para escutar um evento, e dentro do () coloca o que será escutado elogo em seguida a função que será executada
// infosDoEvento.preventDefault() ==> para prevenir o comportamento padrão do formulário de apagar o que está sendo registrado no input

// console.log(infosDoEvento.target.id)
// .target ==> mostra qual botão foi clicado
// .target.id ==> o id do botão digitado

// console.log(infosDoEvento.target.parentNode)
// Para acessar qual a div pai do botão clicado
btnClicar.addEventListener('click', function(infosDoEvento){
    infosDoEvento.preventDefault()
    console.log(infosDoEvento.target.id)
})

// ============================================================================================

// let novoFilme = document.createElement('li') ==> para criar um novo elemento
// novoFilme.innerText = inputUsuario.value ==> vai adicionar o novo valor que digitei e adicionar na lista de filmes

//addEventListener('click', function(infosDoEvento) ==> toda vez que clicar (por conta do click) no botão essa funçao será executada (a função que estiver dentro do function)

// .toggle ==> muda a cor de fundo e volta como estava antes ao clicar novamente no botão

const btnClicar = document.querySelector('#btnClicar')
const listaFilmes = document.querySelector('#listaFilmes')
const inputUsuario = document.querySelector('#inputUsuario')

btnClicar.addEventListener('click', function(infosDoEvento){
    infosDoEvento.preventDefault()

    let novoFilme = document.createElement('li')
    novoFilme.innerText = inputUsuario.value

    let btnEditar = document.createElement('button')
    btnEditar.innerText = "Editar"
    btnEditar.addEventListener('click', function(){
        novoFilme.style.color = "red"
        novoFilme.classList.toggle('fundo-preto')

    })

    novoFilme.append(btnEditar)

    listaFilmes.append(novoFilme)

    inputUsuario.value = ""
})