import React from 'react';
import Movie from '../../components/Movie/Movie'
import axios from 'axios';
import { useState } from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {search: ''};
    };

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();

        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d8d9fc93da62143ba1f2babedea9cc4e&language=en-US&page=1&include_adult=false&query=${this.state.search}`)
        .then(res=>(res.data.results))
        .catch(console.error)
        
    }
    render() {
        return (

            <form className='buscar'>
                <input 
                    name="search"
                    type="search" 
                    placeholder="buscar..."
                    value={this.state.search}
                    onChange={this.handleChange}
                    />
            </form>

        )
    }
}

export default SearchBar;