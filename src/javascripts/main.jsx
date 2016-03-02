import React from 'react';
import ReactDOM from 'react-dom';

import '../stylesheets/main.scss';

class HelloWorld extends Component {
  render() {
    return (
      <div className="todoapp">
        <h1>Hello World!!</h1>
      </div>
    );
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById('app-container'));
