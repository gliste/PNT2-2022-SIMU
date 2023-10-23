import { useState, useEffect } from "react";
import MovieList from "../MovieList";

const MoviePage = (props) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`https://mflixbackend.azurewebsites.net/api/movies?pageSize=${pageSize}&page=${page}`)
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