import React from 'react';

import Todo from './todo.jsx';

const Todos = ({items}) => {
  const todoListItems = items.map((todo, i) => (
    <li key={`todo-${i}`}>
      <Todo {...todo} />
    </li>
  ));

  if (items.length > 0) {
    return (
      <section className="main">
        <ul className="todo-list">
          {todoListItems}
        </ul>
      </section>
    );
  }

  return '';
}

export default Todos;
