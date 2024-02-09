import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

import { Provider as ReduxProvider } from 'react-redux';

import configureStore from './redux/configureStore'
const store = configureStore();



ReactDOM.render(
  <ReduxProvider store={store}>
  <Router>
    <App />
  </Router>
  </ReduxProvider>,
  document.getElementById('root')
);





