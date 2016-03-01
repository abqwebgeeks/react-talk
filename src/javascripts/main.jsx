import React from 'react';
import ReactDOM from 'react-dom';

import '../stylesheets/main.scss'

const HelloWorld = () => (
  <h1>Hello World!!</h1>
);

ReactDOM.render(<HelloWorld />, document.getElementById('todo-app'));
