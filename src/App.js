//import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MoviePage from "./components/Movie/MoviePage";
import MovieDetails from "./components/Movie/MovieDetails";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Bienvenidos</h1>}/>
        <Route path="/movies" element = {<MoviePage/>}/>
        <Route path="/movies/:id" element = {MovieDetails}/>     
      </Routes>
    </BrowserRouter>
  );
}

export default App;






