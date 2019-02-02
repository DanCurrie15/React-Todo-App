import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem.js';

class App extends Component {
  render() {
    return (
      <div className="todo-list">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    );
  }
}

export default App;
