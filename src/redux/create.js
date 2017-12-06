
import { createStore, combineReducers } from 'redux'


import * as reducers from './reducers'

export default function(data) {
  var reducer = combineReducers(reducers)
  var store = finalCreateStore(reducer, data)

  return store
}

// Go to ./application.jsx to learn of the first Redux binding for React: the Provider component.
