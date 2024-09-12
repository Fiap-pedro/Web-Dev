import { useParams } from "react-router-dom"


export default function MovieDetailPage(){

    const {id} = useParams()

    return(
        <>
        <h1>Movie Detail Page</h1>
        {/* Exibe detalhes de um filme específico. */}
        <p>O id do filme é {id}</p>
        </>
    )
}