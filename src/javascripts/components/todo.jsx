import classNames from 'classnames';
import React from 'react';


const Todo = ({completed, text}) => (
  <li className={classNames({completed})}>
    <div className="view">
      <input className="toggle" type="checkbox" />
      <label>{text}</label>
    </div>
  </li>
)

export default Todo;
