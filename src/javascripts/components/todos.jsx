import React from 'react';

import Todo from './todo.jsx';

const Todos = ({items, onAllComplete, onComplete}) => {
  const allComplete = items.every(todo => todo.completed);

  if (items.length > 0) {
    return (
      <section className="main">
        <input
          className="toggle-all"
          type="checkbox"
          checked={allComplete}
          onClick={evt => onAllComplete(evt.target.checked)} />
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
