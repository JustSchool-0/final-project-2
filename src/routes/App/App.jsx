import {useEffect, useState} from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import "./app.scss";
import {Outlet} from "react-router-dom";

export default function App() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/movies')
            .then((response) => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(json => {
                setMovies(json);
            })
            .catch(err => console.log(`Error fetching movies: ${err}`));
    }, []);

    function addMovie(newMovie) {
        setMovies([...movies, newMovie]);
    }

    return (
        <>
            <Navbar/>
            <div className="container">

                <Outlet context={{movies, addMovie}}/>
            </div>
        </>
    );
}