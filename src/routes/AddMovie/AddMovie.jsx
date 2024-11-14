import "./add-movie.scss";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useMovieResource} from "../../context/MovieResourceContext.jsx";

export default function AddMovie() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const {addMovie} = useMovieResource();

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

    const navigate = useNavigate();
    return (
        <div className="page-container">
            <button onClick={() => navigate('/')}>Back</button>
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