import { Link } from "react-router-dom";

export default function MovieCard({id, title, poster_path}) {

    const handleFavorite = (id) => {

        let favoritos = JSON.parse(localStorage.getItem('favorites')) || []

        const isFavorite = favoritos.some( filme => filme.id === id)

        if (isFavorite) {
            favoritos = favoritos.filter(filme => filme.id !== id)
        } else {
            favoritos.push(id)
        }

        localStorage.setItem('favorites', JSON.stringify(favoritos))

    }

    return(
        <>
        <div className="flex flex-col justify-center items-center text-center">

            <img className="w-28 h36" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />

            <button onClick={() => handleFavorite({id, title, poster_path})}>Adicionar Favorito</button>

            <Link to={`/movies/${id}`}>Saiba mais</Link>
        </div>
        
        </>
    )

}