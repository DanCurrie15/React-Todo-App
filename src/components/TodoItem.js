import React, { Component } from 'react';

class TodoItem extends Component {

  render() {
    return(
      <div className="todo-item">
        <input type="checkbox"
               checked={this.props.todoInfo.completed}
               onChange={() => this.props.handleChange(this.props.todoInfo.id)}
            />
        <p className={this.props.todoInfo.completed ? "completedStyle": null}>{this.props.todoInfo.text}</p>
      </div>
    );
  }
}

export default TodoItem;
