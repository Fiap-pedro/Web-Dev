 //ENTRADA

 //PROCESSAMENTO
 function calcular() {
    var qtd = parseInt(document.getElementById('qtd').value)
    if(qtd >= 7 ){
        preco = qtd * 15
        alert(`O preço dos ${qtd} livros fica R$${preco}`)
    }
    else{
        preco = qtd * 22
        alert(`O preço dos ${qtd} livros fica R$${preco}`)
    }
}



 //SAÍDA