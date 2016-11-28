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
    this.checkKey = this.checkKey.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  handleOnChange(e) {
    this.setState({
      todo: e.target.value,
    });
  }

  addTodo() {
    if(!this.state.todo) {
        return;
    }

    this.setState({
      todos: [...this.state.todos, this.state.todo],
      todo: ''
    });
  }

  checkKey(e) {
      if(e.key === 'Enter') {
          this.addTodo();
      }
  }

  removeTodo(index) {
    //[...this.state.todos]로 했을 경우 setState에서 반영이 되지 않음.
    //this.state.todos로 하면 state가 변경은 되나 view에는 반영 되지 않음.

    const todos = this.state.todos;
    todos.splice(index, 1);
    
    // splice의 return값은 삭제된 item이고, 실제 array가 변경됨
    this.setState({ todos });
  }

  render() {
    return (
      <div>
        <header>
          <input type="text" value={this.state.todo} onChange={this.handleOnChange} onKeyUp={this.checkKey}/>
          <button onClick={this.addTodo}>Add</button>
        </header>
        {
          this.state.todos.map((todo, index) => (
            <div key={index}>
                {todo} <button onClick={() => this.removeTodo(index)}>X</button>
            </div>
          ))
        }
      </div>
    );
  }
}

export default Todo;
