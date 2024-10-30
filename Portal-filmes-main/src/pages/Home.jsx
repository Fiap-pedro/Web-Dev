import { useEffect, useState } from "react";
import CardContainer from "../components/CardContainer"
import MovieCard from "../components/MovieCard";

export default function Home(){

    const [filmesPopulares, setFilmesPopulares] = useState([])
    const [filmesTrending, setFilmesTrending] = useState([])
    const [filmesUpcoming, setFilmesUpcoming] = useState([])

    const fetchMovies = async () => {
        try{

            // Juntando todos os fetchs
            const [respostaPopulares, respostaTrending, respostaUpcoming] = await Promise.all(
                [
                    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=pt-BR`),
                    fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${import.meta.env.VITE_API_KEY}&language=pt-BR`),
                    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}&language=pt-BR`)
                ]
            )

            // Convertendo para JSON
            const popularData = await respostaPopulares.json()
            const trendingData = await respostaTrending.json()
            const upcomingData = await respostaUpcoming.json()

            // Atualizar o estado
            setFilmesPopulares(popularData.results)
            setFilmesTrending(trendingData.results)
            setFilmesUpcoming(upcomingData.results)

        }
        catch{}    
    }

    useEffect(() => {
        fetchMovies();
    },[])

    return(
        <>
        <section className="flex flex-wrap justify-around">
            <CardContainer titulo = "Populares">
                {
                    filmesPopulares
                    .map(filme => (
                        <MovieCard key={filme.id} {...filme}/>
                    ))
                }
            </CardContainer>
        </section>

        <section className="flex flex-wrap justify-around">
            <CardContainer titulo = "Trending">
                {
                    filmesTrending
                    .map(filme => (
                        <MovieCard key={filme.id} {...filme}/>
                    ))
                }
            </CardContainer>
        </section>

        <section className="flex flex-wrap justify-around">
            <CardContainer titulo = "Em Breve">
                {
                    filmesUpcoming
                    .map(filme => (
                        <MovieCard key={filme.id} {...filme}/>
                    ))
                }
            </CardContainer>
        </section>

        </>
    )
}