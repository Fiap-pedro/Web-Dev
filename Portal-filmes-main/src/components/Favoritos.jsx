import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"

export default function Favoritos(){

    const [favoritos, setFavoritos] = useState([])

    useEffect(() => {
        const favoritos = JSON.parse(localStorage.getItem('favorites')) || []
        setFavoritos(favoritos)        
    }, [])

    return(
        <>
        <div className="flex flex-wrap justify-center items-center">
            {
                favoritos.map(filme => (
                    <MovieCard key={filme.id} {...filme}/>
                ))
            }
        </div>
        </>
    )
}