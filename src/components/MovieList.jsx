import MovieData from "./MovieData.jsx";

export default function MovieList({moviesArray}) {
    return (
        <ul>
            {moviesArray.map((movie) => (
                <MovieData key={movie.id} title={movie.title} description={movie.description}/>
            ))}
        </ul>
    );
}