import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import Reducer from './components/Reducers/Reducer';
import ReactDOM from 'react-dom';
import App from './App';

// let store = createStore(Reducer)

ReactDOM.render(
  // <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // </Provider>,
  document.getElementById('root')
);
