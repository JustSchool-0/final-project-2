import {useEffect, useState} from "react";
import MovieList from "../../components/MovieList.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import "./app.scss";

export default function App() {
    const [movies, setMovies] = useState([]);

    function addMovie(newMovie) {
        setMovies([...movies, newMovie]);
    }

    const [title, setTitle] = useState("");
    const [synopsis, setSynopsis] = useState("");
    const [fav, setFav] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/movies')
            .then((response) => {
                if (!response.ok)
                    throw new Error('Network response was not ok');
                return response.json();
            })
            .then(json => {
                setMovies(json);
            })
            .catch(err => console.log(`Error fetching movies: ${err}`));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !synopsis) {
            return;
        }

        fetch("http://localhost:3000/movies", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({title, synopsis, favorite: fav}),
        })
            .then(res => res.json())
            .then(json => {
                addMovie(json);
                setTitle("");
                setSynopsis("");
            })
            .catch(err => console.log(`Error adding movie: ${err}`));
    };

    return (
        <>
            <Navbar/>
            <div>
                <div className="container">
                    <h1>Your Movies</h1>
                    {movies && <MovieList moviesArray={movies}/>}
                </div>
                <div className="container">
                    <h2>Add a Movie</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Title</label>
                            <input type="text"
                                   placeholder="movie title"
                                   value={title}
                                   onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Synopsis</label>
                            <textarea
                                placeholder="write a brief synopsis"
                                value={synopsis}
                                onChange={(e) => setSynopsis(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="favorite">Favorite</label>
                            <input type="checkbox"
                                   defaultChecked={false}
                                   alt="is_favorite?"
                                   id="favorite"
                                   onChange={(e) => setFav(e.target.checked)}
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}