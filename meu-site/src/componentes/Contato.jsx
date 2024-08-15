function Contato() {
    function caixaDeInput(texto) {
        return (
            <input>{texto}</input>
        )
    }
    
    return (
        <>
            <h1>Entre em contato</h1>
            caixaDeInput('Nome')
            caixaDeInput('Email')
            caixaDeInput('Mensagem')
            <button>Enviar</button>
        </>
    )
}

export default Contato