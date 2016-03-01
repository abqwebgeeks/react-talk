import classNames from 'classnames';
import React from 'react';
import uuid from 'uuid';

const Todo = ({completed, text}) => {
  const key = `todo-${uuid.v4()}`;
  const classes = classNames({
    completed
  });

  return (
    <li className={classes} key={key}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>{text}</label>
      </div>
    </li>
  );
}

export default Todo;
