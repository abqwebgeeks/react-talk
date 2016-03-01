import React from 'react';
import ReactDOM from 'react-dom';

import '../stylesheets/main.scss'

const HelloWorld = () => (
  <div className="todoapp">
    <h1>Hello World!!</h1>
  </div>
);

ReactDOM.render(<HelloWorld />, document.getElementById('app-container'));
