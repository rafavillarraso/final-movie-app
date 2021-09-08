import React from 'react';
import Header from './components/Header/Header';
import Movies from './components/Movies/Movies';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar/SearchBar';
import Inicio from './components/Inicio/Inicio';
import MoviesResults from './components/Results/MoviesResults';
import { render } from '@testing-library/react';
import Movie from './components/Movie/Movie';

class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       movies: [],
//       searchTerm:''
//     };
// }
  
//   handleSubmit = (event) => {
//     event.preventDefault();

//     fetch(`https://api.themoviedb.org/3/search/movie?api_key=d8d9fc93da62143ba1f2babedea9cc4e&language=en-US&page=1&include_adult=false&query=${this.state.searchTerm}`)
//     .then(data => data.json())
//     .then(data => {
//         console.log(data);
//         // this.state.movies=data;
//         // this.state.movies.map(movie=><Movie key={movie.id} movie={movie} />)
//     })
//   }

//   handleChange = (event) => {
//     this.setState({ searchTerm: event.target.value})
//   }

 
  render(){
  return (
    <div>
    <BrowserRouter>
    <div>
      <Header />
      <SearchBar />
      <Switch>
        <Route path='/' component={Inicio} exact/>
        <Route path='/:movieType' component={Movies} exact/>
        <Route path='/:searchTerm' component={MoviesResults} />
        
      </Switch>
    </div>
    </BrowserRouter>
    </div>
  );
}
}

export default App;
