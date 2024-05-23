const btnClicar = document.querySelector('#btnClicar')
const listaFilmes = document.querySelector('#listaFilmes')
const inputUsuario = document.querySelector('#inputUsuario')

const filmes = [
    {
        nome: "Poderoso Chefão",
        diretor: "Copolla",
        ano: 1972,
        sinopse: "Lorem Ipsum Dolor Sit Ame"
    }, 
    {
        nome: "Meninas Malvadas",
        diretor: "Michele Obama",
        ano: 2004,
        sinopse: "Bla Bkla Bla"
    },
    {
        nome: "Os trapalhões",
        diretor: "Didi Mocó",
        ano: 1962,
        sinopse: "auauauauaua"
    }]

btnClicar.addEventListener('click', criarFilme())

//CREATE
function criarFilme(infosDoEvento){
    let novoFilme ={
        nome: inputUsuario.value,
        diretor: inputDiretor.value,
        ano: inputAno.value,
        sinopse: inputSinopse.value
    }

    filmes.unshift(novoFilme)
    renderizarNaTela()
    inputUsuario.value = ""

}
window.onload = renderizarNaTela()


//READ
function renderizarNaTela(){

    listaFilmes.innerHTML = ""

    filmes.forEach(
        filme => {
            let novoFilme = document.createElement('li');
            novoFilme.innerText = filme.nome

            filmes.indexOf(filme)

            listaFilmes.append(novoFilme);
        }
    )
}

//UPDATE
function atualizarFilme(idFilme){

}

//DELETE
function removerFilme(idFilme){

    filmes.splice(idFilme, 1)

}