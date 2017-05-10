import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { App } from './App'
import appReducers from './reducers'

it('renders without crashing', () => {

  const store = createStore(appReducers)

  const div = document.createElement('div')
  ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, div)
})
