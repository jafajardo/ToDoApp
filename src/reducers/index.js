import { combineReducers } from 'redux';

import TodoReducer from './reducer-todo';

export default combineReducers({
  todoReducer : TodoReducer
})