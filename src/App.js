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

  addItem = () => {
    this.setState(prevState => {
      const updatedTodos = prevState.todos;
      let nextId = Math.max.apply(Math,updatedTodos.map(todo => {
        return todo.id;
      })) + 1;
      if (nextId < 1) {
        nextId = 1;
      }
      updatedTodos.push({id: nextId, text: "", completed: false});
      console.log(updatedTodos);
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
        <button onClick= {() => this.addItem()}>Add Item</button>
      </div>
    );
  }
}

export default App;
