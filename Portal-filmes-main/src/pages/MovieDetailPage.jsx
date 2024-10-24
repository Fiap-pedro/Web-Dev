import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export default function MovieDetailPage(){

    const {id} = useParams()
    const [movie, setMovie] = useState({})

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c360aba74614c6e9141db60a0c2102e7&language=pt-BR`)
            .then(response => response.json())
            .then(data => setMovie(data))
            .catch(err => console.error(err))
            .finally(() => console.log('fetch finalizado'))
    }, [])

    return(
        <>
            {
                movie ?
                    <div 
                    className="h-screen"
                    style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`
                    }}>
                        <div className="">
                            {id}
                            <h2>{movie.title}</h2>
                        </div>
                        
                    </div>
                :
                <p>Filme não encontrado</p>
            }
        </>
    )
}