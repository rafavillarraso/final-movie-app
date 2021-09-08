import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Movie from '../../components/Movie/Movie';
import './Movies.scss';
import { useParams } from 'react-router-dom';
import Inicio from '../Inicio/Inicio';

<Inicio />

const Movies = ({searchData}) =>{
    
    const movieType = useParams().movieType;
    const [movies,setMovies] = useState([]);
    useEffect(()=>{
        if(!searchData.searchTerm) {
            axios.get(`https://api.themoviedb.org/3/movie/${movieType}?api_key=d8d9fc93da62143ba1f2babedea9cc4e`)
            .then(res=>setMovies(res.data.results))
            .catch(console.error)
        } else {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d8d9fc93da62143ba1f2babedea9cc4e&language=en-US&page=1&include_adult=false&query=${searchData.searchTerm}`)
            .then(res=>setMovies(res.data.results))
            .catch(console.error)
        }
    },[movieType, searchData.searchTerm])

    if(movies.length > 0) {
        return <div className='movies'>
            {movies.map(movie=><Movie key={movie.id} movie={movie} />)}
        </div>
    } else {
        return <div className='movies'>
            No se han encontrado películas
        </div>
    }
}

export default Movies;   

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import Movie from '../../components/Movie/Movie';
// import './Movies.scss';

// const Movies = (props) =>{
//     const movieType = props.match.params.movieType;
//     const [movies,setMovies] = useState([]);
    
//         useEffect(()=>{
//         axios.get(`https://api.themoviedb.org/3/movie/${movieType}?api_key=d8d9fc93da62143ba1f2babedea9cc4e`)
//         .then(res=>setMovies(res.data.results))
//         .catch(console.error)
//     },[movieType])
    
//     return <div className='movies'>
//         {movies.map(movie=><Movie key={movie.id} movie={movie} />)}
//     </div>
// }

// export default Movies;   