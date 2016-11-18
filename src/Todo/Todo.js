import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      todo: '',
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleOnChange(e) {
    this.setState({
      todo: e.target.value,
    });
  }

  addTodo() {
    this.setState({
      todos: [...this.state.todos, this.state.todo],
    });
  }

  render() {
    return (
      <div>
        <header>
          <input type="text" value={this.state.todo} onChange={this.handleOnChange} />
          <button onClick={this.addTodo}>Add</button>
        </header>
        {
          this.state.todos.map(todo => (
            <div key={todo}>{todo}</div>
          ))
        }
      </div>
    );
  }
}

export default Todo;
