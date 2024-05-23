 //ENTRADA
 function calcular() {
    var quantidade = parseInt(document.getElementById('quantidade').value)
    var resultado = document.getElementById('resultado')
 //PROCESSAMENTO
 
    if(quantidade >= 7 ){
        preco = quantidade * 15
    }
    else{
        preco = quantidade * 22
    }

//SAÍDA
    resultado.innerText = `O preço dos ${quantidade} livros fica R$${preco}`
}



 