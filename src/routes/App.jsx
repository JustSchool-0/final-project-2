import {Suspense} from "react";
import MovieList from "../components/MovieList.jsx";
import ErrorBoundary from "../components/ErrorBoundary.jsx";
import fetchMovies from "../api/fetchMovies.js";
import {useNavigate} from "react-router-dom";

const movieResource = fetchMovies();

export default function App() {
    const navigate = useNavigate();
    const handleAddMovieClick = () => {
        navigate('/addmovie');
    };
    return (
        <div>
            <h1>Movies</h1>
            <button onClick={handleAddMovieClick}>Add Movie</button>
            <ErrorBoundary>
                <Suspense fallback={<p>Loading movies...</p>}>
                    <MovieList resource={movieResource}/>
                </Suspense>
            </ErrorBoundary>
        </div>
    );
}