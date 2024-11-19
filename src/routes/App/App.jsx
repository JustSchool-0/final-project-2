import {useEffect, useState} from "react";
import MovieList from "../../components/MovieList.jsx";
import Navbar from "../../components/Navbar.jsx";
import "./app.scss";

export default function App() {
    const [movies, setMovies] = useState([]);

    function addMovie(newMovie) {
        setMovies([...movies, newMovie]);
    }

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

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

        if (title.length === 0 || description.length === 0) {
            return;
        }

        fetch("http://localhost:3000/movies", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({title, description}),
        })
            .then(res => res.json())
            .then(json => {
                addMovie(json);
                setTitle("");
                setDescription("");
            })
            .catch(err => console.log(`Error adding movie: ${err}`));
    };

    return (
        <div>
            <Navbar/>
            <div className="container">
                <h1>Movies</h1>
                {movies && <MovieList moviesArray={movies}/>}
            </div>
            <div className="container">
                <h1>Add a Movie</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text"
                               placeholder="movie name"
                               value={title}
                               onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Synopsis</label>
                        <textarea
                            placeholder="movie synopsis"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}