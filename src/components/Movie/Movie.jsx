//import { Link } from "react-router-dom";

const Movie = (props) => {
   
    return (
        <li>
            <div>
               <img src = {props.Poster} alt={props.Title}/>
            </div>
            <div>
            <h2>{props.Title}</h2>
            <h3>{props.Fullplot}</h3>
            </div>
        </li>
    );
};

export default Movie;

//El componente de pelicula debe mostrar la pelicula con su respectivo **poster**,
//con el **title** debajo y la descripción **fullplot**
