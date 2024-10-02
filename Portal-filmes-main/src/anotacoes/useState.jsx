import { useState } from "react"

export default function MovieListPage(){

    const [contador, setContador] = useState(0)

    const [textoBotao, setTextoBotao] = useState('OLA')

    const handleClick = () => {
        setContador((prev) => (
            prev + 1
        ))
    }

    const handleClick2 = () => {
        setContador((prev) => (
            prev - 1
        )) 
    }
    
    const handleClick3 = () => {
        setContador(0)
    }

    const handleTexto = () => {
        setTextoBotao((prev) => (
            prev == 'OLA' ? 'ALO' : 'OLA'
        ))
    }

    return(
        <>
            <p>{contador}</p>
            <button onClick={handleClick}>Aumentar</button>
            <button onClick={handleClick2}>Diminuir</button>
            <button onClick={handleClick3}>Zerar</button>

            <button onClick={handleTexto}>{textoBotao}</button>
        </>
    )
}