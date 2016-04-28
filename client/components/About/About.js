import React from 'react';
import { createHistory } from 'history';

const history = createHistory();

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (<div>
      About
      <a href="#" onClick={() => history.goBack()} >ddasd </a>
    </div>);
  }
}

export default About;
