import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App/App';
import uiReducer from './reducers/uiReducer'; // Adjust the path as necessary
import './index.css';

// Create the Redux store with the uiReducer
const store = createStore(uiReducer);

// Implement the provider passing the store to the main App component
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
