import {Suspense} from "react";
import MovieList from "../components/MovieList.jsx";
import ErrorBoundary from "../components/ErrorBoundary.jsx";
import {useNavigate} from "react-router-dom";

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
                    <MovieList/>
                </Suspense>
            </ErrorBoundary>
            <button onClick={() => navigate('/credits')}>Website Credits</button>
        </div>
    );
}