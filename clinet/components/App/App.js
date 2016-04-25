import React from 'react';
import { Link } from 'react-router'

class App extends React.Component {
  render() {
    return (
      <div>
        hello word!
        <div><Link to="/about">About</Link></div>
        <div><Link to="/contact">Contact</Link></div>
        { this.props.children }
      </div>
    );
  }
}

export default App;
