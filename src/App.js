import React from 'react';
import Header from './components/Header/Header';
import Movies from './containers/Movies/Movies';
import Result from './containers/SearchBar/Result';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/:movieType' component={Movies} exact/>
      </Switch>
      <Switch>
        <Route path='/:movieType' component={Result} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
