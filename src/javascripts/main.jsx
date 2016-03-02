import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';

import '../stylesheets/main.scss'

import todos from './reducers/todos';

import App from './containers/app.jsx';

const rootReducer = combineReducers({todos});
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app-container'));
