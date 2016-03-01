import React from 'react';

import Todo from './todo.jsx';

const Todos = ({items}) => {
  if (items.length > 0) {
    return (
      <section className="main">
        <ul className="todo-list">
          {items.map(todo => <Todo {...todo} />)}
        </ul>
      </section>
    );
  }

  return '';
}

export default Todos;
