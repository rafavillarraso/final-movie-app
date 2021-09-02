import React from 'react';
import Header from './components/Header/Header';
import Movies from './containers/Movies/Movies';
import Result from './containers/SearchBar/Result';
import SearchBar from './containers/SearchBar/SearchBar';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/:movieType' component={Movies} exact/>    
        {/* <Route path='/:movieTitle' component={Result} /> */}
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
