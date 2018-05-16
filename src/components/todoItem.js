import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListItem } from 'material-ui/List';
import {
  UpdateTodoItemStatus
} from '../actions';

class TodoItem extends Component {
  onClickHandle = (event) => {
    const {todoItemIndex, done, todoText} = this.props;
    
    this.props.UpdateTodoItemStatus({
      Id: todoItemIndex, 
      Done: done,
      TodoText: todoText
    })
  }

  render () {
    const {done, todoText} = this.props;
    return (
      <ListItem
        primaryText={done ? <strike>{todoText}</strike> : todoText} 
        onClick={this.onClickHandle}
      />  
    )
  }
}

const getTodoText = (done, todoText) => {
  if (done) {
    return <strike>{todoText}</strike>
  } else {
    return <span>{todoText}</span>
  }
}

export default connect(null, {UpdateTodoItemStatus})(TodoItem);