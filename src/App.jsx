import React, { Component } from 'react';
import Octokat from 'octokat';
import Header from './components/Header';
import FollowingList from './components/FollowingList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      following: [],
      selectedFollowing: null
    };
    this.followingSearch();
  }

  followingSearch() {
    const octo = new Octokat({
      username: 'evmorov',
      password: 'password'
    });

    octo.rateLimit.fetch((err, limit) => {
      console.log(`Rate limit: ${limit.rate.limit}`);
      console.log(`Rate remaining: ${limit.rate.remaining}`);
    });

    octo.user.following.fetch((err, users) => {
      this.setState({
        followings: users.items
      });
    });
  }

  render() {
    return (
      <div>
        <Header />
        <FollowingList
          followings={this.state.followings}
          />
      </div>
    );
  }
}

export default App;
