import React from 'react';
import { Link } from 'react-router'
import { createHistory } from 'history'

const history = createHistory();

class Home extends React.Component {
  handleClick = () => {
    history.push('/about');
  }
  render() {
    return (
      <div>
        <div><Link to="/about">About</Link></div>
        <div><Link to="/contact">Contact</Link></div>
        <a href="#" onClick={this.handleClick} >sdasd </a>
      </div>
    );
  }
}

export default Home;
