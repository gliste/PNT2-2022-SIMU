
import Movie from "./Movie";

export default function MovieList(props) {
    return (
        <ul >
            {props.Movies.map(movie => {
                return (
                    <Movie 
                    Id = {movie._id}
                    Poster = {movie.poster}
                    MovieName = {movie.title}
                    Description = {movie.fullplot}
                    />

                );
            })}
        </ul>
    );
}


