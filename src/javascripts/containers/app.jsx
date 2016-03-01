import React, {Component} from 'react';

import Todos from '../components/todos.jsx';

class App extends Component {
  render() {
    const todos = [
      {
        complete: true,
        text: 'Add an input for adding todos'
      },
      {
        complete: false,
        text: 'Add a few dummy todos'
      },
      {
        complete: false,
        text: 'Implement ability to add todos'
      },
      {
        complete: false,
        text: 'Implement ability to complete todos'
      }
    ];

    return (
      <div className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?" />
        </header>
        <Todos items={todos} />
      </div>
    )
  }
}

export default App;
