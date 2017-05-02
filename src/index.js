import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux'
import { compose, createStore } from 'redux'
import {persistStore, autoRehydrate} from 'redux-persist'
import appReducers from './reducers'

const initialState = {}

let store = createStore(
  appReducers,
  initialState,
  compose(
    autoRehydrate(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

persistStore(store)

ReactDOM.render(
  <Provider store={store}>
  	<App />
  </Provider>,
  document.getElementById('root')
);
