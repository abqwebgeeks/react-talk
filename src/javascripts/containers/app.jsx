import keycodes from 'keycodes';
import React, {Component} from 'react';
import uuid from 'uuid';

import Todos from '../components/todos.jsx';

const todos = [
  {
    uuid: uuid.v4(),
    completed: true,
    editing: true,
    text: 'Add an input for adding todos'
  },
  {
    uuid: uuid.v4(),
    completed: true,
    editing: true,
    text: 'Add a few dummy todos'
  },
  {
    uuid: uuid.v4(),
    completed: false,
    editing: true,
    text: 'Implement ability to add todos'
  },
  {
    uuid: uuid.v4(),
    completed: false,
    editing: true,
    text: 'Implement ability to complete todos'
  }
];

const ENTER_KEY = keycodes('enter');
const ESCAPE_KEY = keycodes('escape');

class App extends Component {
  componentWillMount() {
    this.setState({
      todos
    })
  }

  handleAddTodoKeyup(evt) {
    if (evt.which === ENTER_KEY) {
      this.setState({
        todos: [...this.state.todos, {
          uuid: uuid.v4(),
          complete: false,
          text: evt.target.value
        }]
      });
      return evt.target.value = '';
    }
    if (evt.which === ESCAPE_KEY) {
      return evt.target.value = '';
    }
  }

  handleTodoCompleteToggle(uuid, completed) {
    const {todos} = this.state;
    const index = todos.findIndex(todo => todo.uuid === uuid);
    if (index !== -1) {
      // Return a new object with `completed` flipped
      const todo = todos[index];
      const toggledTodo = Object.assign({}, todo, {completed});

      // Return a new array, replacing the selected index
      this.setState({
        todos: [
          ...todos.slice(0, index),
          toggledTodo,
          ...todos.slice(index + 1)
        ]
      });
    }
  }

  render() {
    return (
      <div className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            onKeyUp={this.handleAddTodoKeyup.bind(this)} />
        </header>
        <Todos
          items={this.state.todos}
          onComplete={this.handleTodoCompleteToggle.bind(this)} />
      </div>
    )
  }
}

export default App;
