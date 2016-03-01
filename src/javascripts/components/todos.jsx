import React from 'react';

import Todo from './todo.jsx';

const Todos = ({items, onComplete}) => {
  if (items.length > 0) {
    return (
      <section className="main">
        <ul className="todo-list">
          {items.map(todo => (
            <Todo
              {...todo}
              onComplete={onComplete}
              key={`todo-${todo.uuid}`} />
          ))}
        </ul>
      </section>
    );
  }

  return '';
}

export default Todos;
