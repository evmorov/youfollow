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
      selectedFollowing: null,
      token: null
    };

    this.findToken();
  }

  findToken() {
    const codeRegex = window.location.href.match(/\?code=(.*)/);
    if (!codeRegex) return;

    const code = codeRegex[1];
    fetch(`https://youfollow.herokuapp.com/authenticate/${code}`)
      .then((response) => {
        return response.json();
      }).then((json) => {
        const token = json.token
        if (token) this.followingSearch(token)
      }).catch((ex) => {
        console.log('parsing failed', ex);
      });
  }

  followingSearch(token) {
    const octo = new Octokat({
      token: token
    });

    octo.rateLimit.fetch((err, limit) => {
      console.log(`Rate limit: ${limit.rate.limit}`);
      console.log(`Rate remaining: ${limit.rate.remaining}`);
    });

    octo.user.following.fetch((err, users) => {
      this.setState({
        token: token,
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
