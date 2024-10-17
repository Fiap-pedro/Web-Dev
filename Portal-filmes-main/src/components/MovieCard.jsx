import { Link } from "react-router-dom";

export default function MovieCard({id, title, poster_path}) {
    return(
        <>
        <div className="flex justify-between flex-col items-center">
            <h2>{title}</h2>

            <img className="w-28 h36" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />

            <Link to={`/movies/${id}`}>Saiba mais</Link>
        </div>
        
        </>
    )

}