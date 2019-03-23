import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem.js';
import todosData from './todosData.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      todos: todosData
    }
  }

  handleChange = (id, type, value) => {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id && type === "checkbox") {
          todo.completed = !todo.completed;
        }
        if (todo.id === id && type === "text") {
          todo.text = value;
        }
        return todo;
      });
      return {
        todos: updatedTodos
      }
    });
  }

  handleClick = (id) => {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.filter(todo => {
        if (todo.id !== id ) {
          return todo;
        }
        return null
      });
      return {
        todos: updatedTodos
      }
    });
  }

  render() {
    const todoComponent = this.state.todos.map(item => <TodoItem key={item.id}  todoInfo={item}
      handleChange={this.handleChange} handleClick={this.handleClick}/>);
    return (
      <div className="todo-list">
        {todoComponent}
      </div>
    );
  }
}

export default App;
