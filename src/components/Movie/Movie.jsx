import React from 'react';
import './Movie.scss';
import '../../../src/colors.scss'

const Movie = ({movie}) => {
    return <div className='movie'>
        <h3>{movie.title}</h3>
        <img src={'http://image.tmdb.org/t/p/w300'+movie.poster_path} alt=''/>
        <div className='valoracion'> <p><small>Valoración: </small><bold>{movie.vote_average}</bold></p></div>
        <div className='movieover'> 
        <p><h4>Overview</h4></p>
        <p>{movie.overview}</p>
        </div>
    </div>
}

export default Movie;