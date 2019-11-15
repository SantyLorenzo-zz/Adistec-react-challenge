import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
import App from './Components/App/App';

// const { store } = createStore();

ReactDOM.render(
  // <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // </Provider>,
  document.getElementById('root')
);
