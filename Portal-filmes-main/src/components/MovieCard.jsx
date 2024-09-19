import { Link } from "react-router-dom";

export default function MovieCard({id, titulo, imagem_destaque}) {
    return(
        <>
        <div className="flex justify-between flex-col items-center">
            <h2>{titulo}</h2>

            <img className="w-28 h36" src={imagem_destaque} alt="imagem do filme" />

            <Link to={`/movies/${id}`}>Saiba mais</Link>
        </div>
        
        </>
    )

}