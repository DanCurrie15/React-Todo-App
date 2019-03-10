import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem.js';
import todosData from './todosData.js';

class App extends Component {

  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo
      });
      return {
        todos: updatedTodos
      }
    });
  }

  render() {
    const todoComponent = this.state.todos.map(item => <TodoItem key={item.id}  todoInfo={item}
      handleChange={this.handleChange}/>);
    return (
      <div className="todo-list">
        {todoComponent}
      </div>
    );
  }
}

export default App;
