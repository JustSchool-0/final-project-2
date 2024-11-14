import "./add-movie.scss";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function AddMovie() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:3000/movies", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({title, description}),
        }).then(r => {
            setTitle("");
            setDescription("");
        });
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