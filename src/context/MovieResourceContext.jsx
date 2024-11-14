import React, {createContext, useState} from "react";
import fetchMovies from "../api/fetchMovies.js";

const MovieResourceContext = createContext();

export function MovieResourceProvider({children}) {
    const [movies, setMovies] = useState([]);
    const movieResource = fetchMovies();

    // Update the movie list with the new movie
    const addMovie = (movie) => {
        setMovies((prevMovies) => [...prevMovies, movie]);
    };

    return (
        <MovieResourceContext.Provider value={{movieResource, addMovie}}>
            {children}
        </MovieResourceContext.Provider>
    );
}

export function useMovieResource() {
    return React.useContext(MovieResourceContext);
}