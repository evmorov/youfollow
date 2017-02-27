import React, { Component } from 'react';
import Header from './components/header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      following: []
    };
  }

  followingSearch(name) {
  }

  render() {
    return (
      <div>
        <Header />
        <p>
          YouFollow content
        </p>
      </div>
    );
  }
}

export default App;
