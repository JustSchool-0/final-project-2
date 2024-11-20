import "./favorites.scss";
import MovieList from "../../components/MovieList.jsx";
import {useOutletContext} from "react-router-dom";

export default function Favorites() {
    const {movies} = useOutletContext();
    const favoriteMovies = movies.filter(element => element.favorite);

    return (
        <>
            <h1>Your Favorite Movies</h1>
            {favoriteMovies && <MovieList moviesArray={favoriteMovies}/>}
        </>
    );
}