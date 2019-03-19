import React, { Component } from 'react';

class TodoItem extends Component {

  render() {
    return(
      <div className="todo-item">
        <input type="checkbox"
               checked={this.props.todoInfo.completed}
               onChange={() => this.props.handleChange(this.props.todoInfo.id, "checkbox")}
            />
        <input type="text"
               className={this.props.todoInfo.completed ? "completedStyle": null}
               value= {this.props.todoInfo.text}
               onChange={(event) => this.props.handleChange(this.props.todoInfo.id, "text", event.target.value)}
            />
      </div>
    );
  }
}

export default TodoItem;
