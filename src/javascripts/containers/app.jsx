import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
      <div className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?" />
        </header>
      </div>
    )
  }
}

export default App;
