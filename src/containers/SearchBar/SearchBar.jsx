import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {search: ''};
    }
    handleChange = (event) => {
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
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