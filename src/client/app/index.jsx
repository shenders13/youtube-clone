import React from 'react';
import {render} from 'react-dom';
import App from './containers/App.jsx'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

let store = createStore(reducers)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
   document.getElementById('app')
);
