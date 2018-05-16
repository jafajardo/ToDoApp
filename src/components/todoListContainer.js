import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'material-ui/List';

import TodoItem from './todoItem';

class TodoListContainer extends Component {
  renderTodoList = (todoList) => {
    return (
      todoList.map((todoItem, index) => {
        return (
          <TodoItem 
            key={index} 
            todoItemIndex={todoItem.Id}
            done={todoItem.Done} 
            todoText={todoItem.TodoText}
          />
        )
      })
    )
  }

  render = () => {
    return (
      <List>
        {this.renderTodoList(this.props.todoList)}
      </List>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todoList: state.todoReducer.todoList
  }
}

export default connect(mapStateToProps)(TodoListContainer);