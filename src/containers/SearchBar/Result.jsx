import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from '../../components/Movie/Movie';
import Movies from '../../containers/Movies/Movies';
import './Result';
import SearchBar from './SearchBar';

const Result = props =>{
  const searchTerm = props.match.params.searchTerm;
  const [movies,setMovies] = useState([]);
  useEffect(()=>{
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d8d9fc93da62143ba1f2babedea9cc4e&language=en-US&page=1&include_adult=false&query=${searchTerm}`)
      .then(res=>setMovies(res.data.results))
      .catch(console.error)
  },[searchTerm])
  return <div className='movies'>
      {movies.map(movie=><Movie key={movie.id} movie={movie} />)}
  </div>
}
export default Result; 