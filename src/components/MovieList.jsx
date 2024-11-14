import MovieData from "./MovieData.jsx";

function MovieList({resource}) {
    const movies = resource.read();

    return (
        <ul>
            {movies.map((movie) => (
                <MovieData key={movie.id} title={movie.title} description={movie.description}/>
            ))}
        </ul>
    );
}

export default MovieList;