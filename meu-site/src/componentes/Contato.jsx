function Contato() {

    function caixaDeEntrada(texto) {
        return (
            <>{texto}</>
        )
    }
    
    return (
        <>
            <h1>Entre em contato</h1>
            <input type="text" />
            <button>Enviar</button>
        </>
    )
}

export default Contato