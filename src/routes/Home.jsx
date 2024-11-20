import MovieList from "../components/MovieList.jsx";
import MovieForm from "../components/MovieForm.jsx";
import {useOutletContext} from "react-router-dom";

export default function Home() {
    const {movies, addMovie} = useOutletContext();
    return (
        <>
            <h1>Your Movies</h1>
            {movies && <MovieList moviesArray={movies}/>}
            <h2>Add a Movie</h2>
            <MovieForm addMovie={addMovie}/>
        </>
    );
}