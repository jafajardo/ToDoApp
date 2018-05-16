import {
  ADD_TODO_ITEM, 
  UPDATE_TODO_ITEM
} from '../actions/types';

const INITIAL_STATE = {
  todoList: []
}

export default (status = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO_ITEM: {
      return {...status, todoList: [...status.todoList, action.payload]}
    }
    case UPDATE_TODO_ITEM: {
      const todoItemIndex = status.todoList.findIndex(todoItem => todoItem.Id === action.payload.Id);
      
      if (todoItemIndex > -1) {       
        const newTodoItem = {
          Id: action.payload.Id, 
          Done: !action.payload.Done, 
          TodoText: action.payload.TodoText
        }
        return {...status, todoList: [...status.todoList.slice(0, todoItemIndex), newTodoItem, ...status.todoList.slice(todoItemIndex + 1)]}
      }
      return status;
    }
  }
  return status;
}