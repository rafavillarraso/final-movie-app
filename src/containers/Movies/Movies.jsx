import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Movies = props =>{
    const movieType = props.match.params.movieType;
    const [movies,setMovies] = useState([]);
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${movieType}?api_key=d8d9fc93da62143ba1f2babedea9cc4e`)
        .then(res=>setMovies(res.data.results))
        .catch(console.error)
    },[])
    return <div className='movies'>
        Tipo de películas: {movieType}
    </div>
}

export default Movies;