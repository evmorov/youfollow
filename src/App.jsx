import React, { Component } from 'react';
import Octokat from 'octokat';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      following: []
    };
    this.followingSearch('');
  }

  followingSearch(name) {
    const octo = new Octokat({
      username: 'evmorov',
      password: 'password'
    });

    octo.rateLimit.fetch((err, limit) => {
      console.log(`Rate limit: ${limit.rate.limit}`);
      console.log(`Rate remaining: ${limit.rate.remaining}`);
    });

    octo.user.following.fetch((err, users) => {
      console.log("Users you're following:");
      users.items.forEach((user) => {
        console.log(`${user.login} ${user.htmlUrl}`);
      });
    });
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
