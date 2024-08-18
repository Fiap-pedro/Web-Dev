function Habilidades () {

    function caixaDeHabildades(hab, nivel) {
        return (
            <div className="skill-card">
                <h2>{hab}</h2>
                <p>Nível: {nivel}</p>
            </div>
        )
    }
     return (
        <div className="skills">
            <h1>Habilidades</h1>
            {caixaDeHabildades('JS', 'Básico')}
            {caixaDeHabildades('Python', 'Avançado')}
            {caixaDeHabildades('Java', 'Básico')}
        </div>
     )
    
}

export default Habilidades