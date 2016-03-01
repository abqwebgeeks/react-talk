import classNames from 'classnames';
import React from 'react';


const Todo = ({completed, text, uuid, onComplete}) => (
  <li className={classNames({completed})}>
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        onClick={(evt) => onComplete(uuid, evt.target.checked)} />
      <label>{text}</label>
    </div>
  </li>
)

export default Todo;
