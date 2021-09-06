import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom'; 
import SearchBar from '../../containers/SearchBar/SearchBar';
import Result from '../../containers/SearchBar/Result';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Movie from '../../components/Movie/Movie';


class Header extends React.Component {
    // constructor() {
    //     super()
    //     this.state = {
    //       movies: ([]),
    //       searchTerm:('')
    //     }
    // }
    // handleSubmit = (event) => {
    //     event.preventDefault();
    
    //     fetch(`https://api.themoviedb.org/3/search/movie?api_key=d8d9fc93da62143ba1f2babedea9cc4e&language=en-US&page=1&include_adult=false&query=${this.state.searchTerm}`)
    //     .then(data => data.json())
    //     .then(data => {
    //         console.log(data);
    //         this.setState({movies: [...data.results]})                
    //     })
    //   }
    
    //   handleChange = (event) => {
    //     this.setState({ searchTerm: event.target.value })
    //   }
    
render () 
    {return (<header>
        <NavLink to='/popular'>
            <span className="popular">Peliculas populares</span>
        </NavLink>

        <NavLink to='/now_playing'>
            <span className="now_playing">Hoy en cartelera</span>
        </NavLink>

        <NavLink to='/upcoming'>
            <span className="upcoming">Próximos estrenos</span>
        </NavLink>

        <NavLink to='/top_rated'>
            <span className="top_rated">Peliculas más votadas</span>
        </NavLink>
        {/* <SearchBar handleSubmit={this.handleSubmit} handleChange={this.handleChange} /> */}
     
    </header>
    )
    
}
}

export default Header;