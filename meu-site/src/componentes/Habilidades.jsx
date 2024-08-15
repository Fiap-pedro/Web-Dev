function Habilidades () {

    function caixaDeHabildades(hab, nivel) {
        return (
            <>
                <h2>{hab}</h2>
                <p>Nível: {nivel}</p>
            </>
        )
    }
     return (
        <>
            <h1>Habilidades</h1>
            caixaDeHabildades('JS', 'Básico')
            caixaDeHabildades('Python', 'Avançado')
        </>
     )
    
}

export default Habilidades