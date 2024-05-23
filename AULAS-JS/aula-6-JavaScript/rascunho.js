// para criar lista (const)
// const pessoas = ['Fulano', 'Ciclano', 'Beltrano']

//Adiciona um elemento
// pessoas.push('Caio')

//Remove o último elemento do array
// pessoas.pop()

//Adiciona um elemento no início do array
// pessoas.unshift('Caio') 

//Remove o primeiro elemento do array
// pessoas.shift

//Remove um valor no array
// pessoas[1] = 'Caio'

// para escolher um elemento da lista
// console.log(pessoas) 

// Para modificar os elementos da lista (forEach)
// Precisa ter uma função dentro da função forEach, assim como algumas outras
// "pessoa" é um paramêtro para ser referenciado
// .toLowerCase() == deixa tudo minúsculo
// pessoas.forEach(
//     function rodarArray(pessoa){
//         console.log(pessoa.toLowerCase())
//     }
// )

// tudo o que esta em cima, porém encurtado usando arrow function
// pessoas.forEach(pessoa => console.log(pessoa.toLowerCase()))

//Devolve uma cópia modificada da array, sem mudar a array principal
// const pessoasModificado =  pessoas.map(pessoa => console.log(pessoa.toLowerCase()))

// criando uma função
// function modificarPessoas(array){
//     return array.map(pessoa => pessoa.toLowerCase())
// }

// console.log(modificarPessoas(pessoas))

// pessoas [0] | pessoas = Fulano

// const numeros = [1, 2, 3, 4]

// function dobrandoNumeros(numeros) {
//     return numeros.map(numero => numero * 2)
// }

// console.log(numeros)
// console.log(dobrandoNumeros(numeros))

// const frases = ['oi', 'tudo', 'bem?']

// criando a função
// deixandoMaiusculo == nome que executa a função
// (frases) == é o paramêtro para ser modificado dentrro da função
// function deixandoMaiusculo(frases) {
//     return frases.map(frase => frase.toUpperCase())
// }

// console.log(frases)
// console.log(deixandoMaiusculo(frases))