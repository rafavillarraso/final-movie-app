import React from 'react';
import Header from './components/Header/Header';
import Movies from './containers/Movies/Movies';
import Movie from './components/Movie/Movie';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SearchBar from './containers/SearchBar/SearchBar';
import { render } from '@testing-library/react';



class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       movies: [],
//       searchTerm:''
//     }
// }

//   handleSubmit = (event) => {
//     event.preventDefault();

//     fetch(`https://api.themoviedb.org/3/search/movie?api_key=d8d9fc93da62143ba1f2babedea9cc4e&language=en-US&page=1&include_adult=false&query=${this.state.searchTerm}`)
//     .then(data => data.json())
//     .then(data => {
//         console.log(data);
//         this.setState({movies: [...data.results]})
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
      <Switch>
        <Route path='/:movieType' component={Movies} exact/>   
      </Switch>
    </div>
    </BrowserRouter>
    </div>
  );
}
}

export default App;
