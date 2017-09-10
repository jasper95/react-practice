import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'
import { reducer } from './reducer'

const store = createStore(reducer)

const AppWithStore = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(AppWithStore, document.getElementById('root'))
registerServiceWorker()
