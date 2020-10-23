import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { createStore, combineReducers } from 'redux';
import reducers from '../reducers';

const initialState = {}
const middleware = [thunk]
const store = createStore(reducers,initialState, 
  applyMiddleware(...middleware));
export default store;