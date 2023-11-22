import './App.css';
import { useState } from 'react';
import {Link} from 'react-router-dom'


const Movie = (props) => {
    const [constador, setContador] = useState(0); 
    
    return (
        <li>
            <div>
                <div>
                    <img src={props.Picture} />
                </div>
                <div>
                    <h2>{props.MovieName}</h2>
                    <h3>{props.Description}</h3>
                </div>

            </div>


        </li>
    );
};
