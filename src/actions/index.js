import {
  ADD_TODO_ITEM, 
  UPDATE_TODO_ITEM
} from './types';

export function AddTodoItem(todoItem) {
  return dispatch => {
    dispatch({
      type: ADD_TODO_ITEM,
      payload: todoItem
    })
  }
}

export function UpdateTodoItemStatus(todoItem) {
  return dispatch => {
    dispatch({
      type: UPDATE_TODO_ITEM, 
      payload: todoItem
    })
  }
}