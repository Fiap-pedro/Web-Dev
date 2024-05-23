const alunos = [
    {
        nome: 'Diogo', 
        media: 5.5
    },
    {
        nome:'Julia',
        media: 9.5
    },
    {
        nome:'Igor',
        media: 1.5
    },
    {
        nome:'Kelly',
        media: 7.0
    }
]
function filtrarAprovação(medias){
    return medias.filter(estudantes => estudantes.media >= 7.0 )
} 


console.log(filtrarAprovação(alunos))
