import React from 'react';
import Movies from '../../containers/Movies/Movies';
import './Result';
import SearchBar from './SearchBar';

class Result extends React.Component{
    state = {
        results: [],
        usedSearch: false
    }

    handleResults = (results) => {
        this.setState ({results, usedSearch: true})
    }

    renderResults = () => {
        return this.state.results.length === 0
            ?<p>Results not found</p>
            :<Movies movies={this.state.results} />
    }

    render(){
        return(
            <div>
                <SearchBar onResults={this.handleResults}/>
                {
                    this.state.usedSearch
                    ? this.renderResults()
                    :<small></small>
                }
            </div>
            
        )
    }

}

export default Result; 