import React from 'react';
import './Movie.scss';
import '../../../src/colors.scss'

const Movie = ({movie, overview}) => {
    return <div className='movie'>
        <h3>{movie.title}</h3>
        <img src={'http://image.tmdb.org/t/p/w300'+movie.poster_path} alt=''/>
        <p><small>Valoración: </small><bold>{movie.vote_average}</bold></p>
        <div className='movieover'> 
        <p><h4>Overview</h4></p>
        <p>{movie.overview}</p>
        </div>
        {/* <p><button> <a href="https://api.themoviedb.org/3/movie/{movie_id}/reviews?d8d9fc93da62143ba1f2babedea9cc4e&language=en-US&page=1">Ver review</a></button></p> */}
    </div>
}

export default Movie;