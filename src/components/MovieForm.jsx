import {useState} from "react";

export default function MovieForm({addMovie}) {
    const [title, setTitle] = useState("");
    const [synopsis, setSynopsis] = useState("");
    const [fav, setFav] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title) {
            setError("No Title Provided!");
            return;
        } else if (!synopsis) {
            setError("No Synopsis Provided!");
            return;
        } else {
            setError("");
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
            <h3 className="error">{error}</h3>
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
        </>
    );
}