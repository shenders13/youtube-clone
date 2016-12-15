import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer';

const mainReducer = combineReducers({
  exampleReducer: exampleReducer
});

export default mainReducer;