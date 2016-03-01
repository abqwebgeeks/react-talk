import React, {Component} from 'react';
import uuid from 'uuid';

import Todos from '../components/todos.jsx';

const todos = [
  {
    uuid: uuid.v4(),
    completed: true,
    text: 'Add an input for adding todos'
  },
  {
    uuid: uuid.v4(),
    completed: true,
    text: 'Add a few dummy todos'
  },
  {
    uuid: uuid.v4(),
    completed: false,
    text: 'Implement ability to add todos'
  },
  {
    uuid: uuid.v4(),
    completed: false,
    text: 'Implement ability to complete todos'
  }
];

class App extends Component {
  componentWillMount() {
    this.setState({
      todos
    })
  }

  handleAddTodoKeyup(evt) {
    if (evt.which === 13) {
      this.setState({
        todos: [...this.state.todos, {
          uuid: uuid.v4(),
          complete: false,
          text: evt.target.value
        }]
      });
      return evt.target.value = '';
    }
    if (evt.which === 27) {
      return evt.target.value = '';
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
        <Todos items={this.state.todos} />
      </div>
    )
  }
}

export default App;
