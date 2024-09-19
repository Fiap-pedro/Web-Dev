import CardContainer from "../components/CardContainer";
import MovieCard from "../components/MovieCard";
import movies from '../data/movies.json'

export default function Home(){
    console.log(movies)
    return(
        <>
            <CardContainer titulo= "Filmes antigos">
                {
                    movies
                    .filter(filme => filme.ano_lancamento < 2000) //para filtrar os filmes antigos
                    .map( filme => (
                        <MovieCard key={filme.id} {...filme}/>
                    ))
                }
                
            </CardContainer>

            <CardContainer titulo= "Melhor avaliados">
                {
                    movies
                    .filter(filme => filme.avaliacao > 9) //para filtrar os filmes com melhor avaliação
                    .map( filme => (
                        <MovieCard key={filme.id} {...filme}/>
                    ))
                }
                
            </CardContainer>
        </>
    )
}