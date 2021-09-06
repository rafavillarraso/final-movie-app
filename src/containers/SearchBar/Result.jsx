// import React from 'react';
// import Movies from '../../containers/Movies/Movies';
// import './Result';
// import SearchBar from './SearchBar';

// class Result extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//           movies: [],
//           searchTerm:''
//         }
//     }
    
//       handleSubmit = (event) => {
//         event.preventDefault();
    
//         fetch(`https://api.themoviedb.org/3/search/movie?api_key=d8d9fc93da62143ba1f2babedea9cc4e&language=en-US&page=1&include_adult=false&query=${this.state.searchTerm}`)
//         .then(data => data.json())
//         .then(data => {
//             console.log(data);
//             this.setState({movies: [...data.results]})
//         })
//       }
    
//       handleChange = (event) => {
//         this.setState({ searchTerm: event.target.value})
//       }
    
//     render(){
//         return(
//             <SearchBar handleSubmit={this.handleSubmit} handleChange={this.handleChange} />    
//         )
//     }
// }

// export default Result; 