import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"

import 'ldrs/hourglass'


export default function MovieListPage(){

    const [search, setSearch] = useState("")
    const [filmes, setFilmes] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    // setTimeout(() =>{},tempo para carregar as infos )
    

        useEffect(() => {
            
            setIsLoading(true)
            setTimeout(() => {
                fetch('https://api.themoviedb.org/3/movie/popular?api_key=c360aba74614c6e9141db60a0c2102e7&language=pt-BR')
                    .then(res => res.json())
                    .then(res => setFilmes(res.results))
                    .catch(erro => console.error(erro))
                    .finally(() => setIsLoading(false))
            }, 2000)
    
        }, []) //array de dependências

            

    

    const filmesFiltrados = filmes.filter(filme => filme.title.toLowerCase().includes(search.toLowerCase()))

    // e = event

    const handleSearch = (e) => {
            setSearch(e.target.value)
            console.log(search)
    }

    

    return(
        <>
        <div className="flex flex-col items-center">
            <h1>Veja o catálogo completo de filmes</h1>
            <input 
                type="text" 
                className="text-black w-96 h-7 p-3 rounded-sm"
                name="search"
                value = {search}
                id="search" 
                placeholder="Pesquise o filme..."
                onChange={handleSearch}/>
        

            <section className="flex flex-wrap w-auto gap-5">
                {
                    isLoading?
                    <l-hourglass
                    size="40"
                    bg-opacity="0.1"
                    speed="1.75"
                    color="white" 
                    ></l-hourglass>
                    :

                    filmesFiltrados.length > 0 ?
                    
                    filmesFiltrados
                        .map(filme => (
                            <MovieCard key={filme.id} {...filme}/>
                        ))
                        :
                        <p>Filme não encontrado</p>
                }
            </section>
        </div>
        </>
    )
}