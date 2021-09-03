import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Movie from '../../components/Movie/Movie';
import './Movies.scss';

const Movies = props =>{
    const movieType = props.match.params.movieType;
    const [movies,setMovies] = useState([]);
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${movieType}?api_key=d8d9fc93da62143ba1f2babedea9cc4e`)
        .then(res=>setMovies(res.data.results))
        .catch(console.error)
    },[movieType])
    return <div className='movies'>
        {movies.map(movie=><Movie key={movie.id} movie={movie} />)}
    </div>
}

export default Movies;   