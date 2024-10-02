import { useState } from "react"
import movies from "../data/movies.json"
import MovieCard from "../components/MovieCard"

export default function MovieListPage(){

    const [search, setSearch] = useState("")

    // e = event
    
    const handleSearch = (e) => {
            setSearch(e.target.value)
            console.log(search)
    }

    const filmesFiltrados = movies.filter( filme => (
        filme.titulo.toLowerCase().includes(search.toLowerCase())
    ))

    return(
        <>
            <h1>Veja o catálogo completo de filmes</h1>
            <input 
                type="text" 
                className="text-black"
                name="search"
                value = {search}
                id="search" 
                onChange={handleSearch}/>

            <section className="flex">
                {
                    filmesFiltrados.length > 0 ?

                        filmesFiltrados
                        .map(filme => (
                            <MovieCard key={filme.id} {...filme}/>
                        ))

                        :
                        
                        <p>Não existem filmes na busca.</p>
                }
            </section>
        </>
    )
}