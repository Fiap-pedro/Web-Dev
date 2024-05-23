// .value pega o valor inserido pelo usuário

    //Entrada 
function clicarSoma(){
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var resultado = document.getElementById('resultado');

    // Processamento
    
    var soma = numero1 + numero2
    
    // Saída
    console.log(numero1);
    console.log(numero2);
    resultado.innerText = `O resultado da soma é ${soma}`; 
    
}

function clicarSub(){
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var resultado = document.getElementById('resultado');


    var subtração = numero1 - numero2

    resultado.innerText = `O resultado da subtração é ${subtração}`;

}

function clicarDiv(){
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var resultado = document.getElementById('resultado');

    
    if (numero2 === 0) {
        resultado.innerText = 'Erro: divisão por zero'
    }

    else {
        var divisão = numero1 / numero2
        resultado.innerText = `O resultado da divisão é ${divisão}`;
}

}

function clicarMult(){
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var resultado = document.getElementById('resultado');

    var multiplicação = numero1 * numero2

    resultado.innerText = `O resultado da multiplicação é ${multiplicação}`

}