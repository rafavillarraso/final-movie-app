import React from 'react';
import './Movie.scss';
import '../../../src/colors.scss'

const Movie = ({movie}) => {
    return <div className='movie'>
        <h3>{movie.title}</h3>
        <img src={'http://image.tmdb.org/t/p/w300'+movie.poster_path} alt=''/>
        <p>Valoración: <bold>{movie.vote_average}</bold></p>
    </div>
}

export default Movie;