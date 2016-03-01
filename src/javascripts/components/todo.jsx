import React from 'react';

const Todo = ({text}) => (
  <div className="view">
    <input className="toggle" type="checkbox" />
    <label>{text}</label>
  </div>
);

export default Todo;
