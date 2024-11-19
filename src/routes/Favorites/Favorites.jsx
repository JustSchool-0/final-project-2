import "./favorites.scss";
import Navbar from "../../components/Navbar/Navbar.jsx";
import MovieList from "../../components/MovieList.jsx";
import {useEffect, useState} from "react";

export default function Favorites() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/movies')
            .then((response) => {
                if (!response.ok)
                    throw new Error('Network response was not ok');
                return response.json();
            })
            .then(json => {
                return json.filter(element => element.favorite);
            })
            .then(json => {
                setMovies(json);
            })
            .catch(err => console.log(`Error fetching movies: ${err}`));
    }, []);

    return (
        <>
            <Navbar/>
            <div className="container">
                <h1>Your Favorite Movies</h1>
                {movies && <MovieList moviesArray={movies}/>}
            </div>
        </>
    );
}