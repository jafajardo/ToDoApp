import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { RaisedButton } from 'material-ui';

class ToDoBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemIndex: 0, 
      todoItem: ''
    }
  }

  onTodoBarChange = (event) => {
    event.preventDefault();

    this.setState({
      todoItem: event.target.value
    })
  }

  onAddTodoButtonClick = (event) => {
    event.preventDefault();

    const todo = {
      Id: ++this.state.itemIndex, 
      Done: false,
      TodoText: this.state.todoItem
    }

    this.props.AddTodoItem(todo);
    this.setState({
      todoItem : ''
    })
  }

  render () {
    return (
      <form className="input-group todoBar">
        <input className="form-control" onChange={this.onTodoBarChange} />
        <button className="btn btn-primary" type="submit" onClick={this.onAddTodoButtonClick}>Add todo</button>
        <RaisedButton 
          label="Add todo" 
          onClick={this.onAddTodoButtonClick}
        />
      </form>
    )
  }
}

export default connect(null, actions)(ToDoBar);