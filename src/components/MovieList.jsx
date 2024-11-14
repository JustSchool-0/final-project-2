import MovieData from "./MovieData.jsx";
import {useMovieResource} from "../context/MovieResourceContext.jsx";

export default function MovieList() {
    const {movieResource} = useMovieResource();
    const movies = movieResource.read();

    return (
        <ul>
            {movies.map((movie) => (
                <MovieData key={movie.id} title={movie.title} description={movie.description}/>
            ))}
        </ul>
    );
}