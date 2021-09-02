import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Movie from '../../components/Movie/Movie';
import './Result';

const Result = props => {
    const movieTitle = props.match.params.query;
    const [movies,setMovies] = useState([]);
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d8d9fc93da62143ba1f2babedea9cc4e&language=en-US&page=1&include_adult=false&${movieTitle}`)
        .then(res=>setMovies(res.data.results))
        .catch(console.error)
    },[movieTitle])
    return <div className='movies'>
        {movies.map(movie=><Movie key={movie.id} movie={movie} />)}
        </div>
};

export default Result; 