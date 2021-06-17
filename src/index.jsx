import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import './index.css';

const storage = createStore(reducers);

ReactDOM.render(
  <Provider store={storage}>
    <App />
  </Provider>,
  document.getElementById('root')
);