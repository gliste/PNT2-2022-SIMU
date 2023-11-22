
import Movie from "./Movie";

export default function MovieList(props) {
    return (
        <ul >
            {props.Movie.map(movie => {
                return (
                    <Movie
                        Id={movie["_id"]}
                        Picture={movie.poster}
                        MovieName={movie.title}
                        Description={movie.fullplot}

                    />

                );
            })}
        </ul>
    );
}