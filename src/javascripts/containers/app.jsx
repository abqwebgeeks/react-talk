import {connect} from 'react-redux';
import keycodes from 'keycodes';
import React, {Component} from 'react';

import Todos from '../components/todos.jsx';

import {
  addTodo,
  setAllTodosComplete,
  setTodoComplete
} from '../actions/todos';

const ENTER_KEY = keycodes('enter');
const ESCAPE_KEY = keycodes('escape');

class App extends Component {
  handleAddTodoKeyup(evt) {
    const {dispatch} = this.props;
    if (evt.which === 13) {
      dispatch(addTodo(evt.target.value));
      evt.target.value = '';
      return;
    }
    if (evt.which === 27) {
      evt.target.value = '';
      return;
    }
  }

  render() {
    const {dispatch, todos} = this.props;
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
          items={todos}
          onAllComplete={
            complete => dispatch(setAllTodosComplete(complete))}
          onComplete={
            (uuid, completed) => dispatch(setTodoComplete({uuid, completed}))} />
      </div>
    )
  }
}

export default connect(state => state)(App);
