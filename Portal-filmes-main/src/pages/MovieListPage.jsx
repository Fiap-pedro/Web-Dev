import { useState, useEffect } from "react"


export default function MovieListPage(){

    const [search, setSearch] = useState("")
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=c360aba74614c6e9141db60a0c2102e7&language=pt-BR')
            .then(res => res.json())
            .then(res => setFilmes(res.results))
            .catch(erro => console.log(erro))
            .finally(() => console.log('Fim!'))
    }, []) //array de dependências


    // e = event

    const handleSearch = (e) => {
            setSearch(e.target.value)
            console.log(search)
    }

    

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
                   filmes.map( filme => (
                    <>
                        <h1>{filme.title}</h1>
                        <img src={`https://image.tmdb.org/t/p/w92${filme.poster_path}`}/>
                        <img src={`https://image.tmdb.org/t/p/w1280${filme.backdrop_path}`}/>
                    </>
                    
                   ))
                }
            </section>
        </>
    )
}