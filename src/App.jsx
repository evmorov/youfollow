import React, { Component } from 'react';
import Octokat from 'octokat';
import Header from './components/Header';
import Login from './components/Login';
import FollowingList from './components/FollowingList';
import FollowingDetail from './components/FollowingDetail';

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
        followings: users.items,
        selectedFollowing: users.items[0]
      });
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Login />
        <FollowingList
          onFollowingSelect={selectedFollowing => this.setState({selectedFollowing}) }
          followings={this.state.followings}
          />
        <FollowingDetail following={this.state.selectedFollowing} />
      </div>
    );
  }
}

export default App;
