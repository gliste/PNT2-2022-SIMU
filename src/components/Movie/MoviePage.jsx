import { useState, useEffect } from "react";
import MovieList from "./MovieList";

const MoviePage = (props) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/api/movies')
            .then(response => response.json())
            .then(data => {
                setMovies(data);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <MovieList Movies={movies} />
        </div>
    )
}

export default MoviePage;

