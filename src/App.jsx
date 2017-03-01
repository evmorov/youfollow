import React, { Component } from 'react';
import Octokat from 'octokat';
import Header from './components/Header';
import Login from './components/Login';
import FollowingList from './components/FollowingList';
import FollowingDetail from './components/FollowingDetail';

class App extends Component {
  constructor(props) {
    super(props);
    this.clearAppState = this.clearAppState.bind(this)

    this.state = {
      following: [],
      selectedFollowing: null
    };

    const token = localStorage.getItem('token');
    token ? (this.getData(token)) : (this.getTokenAndData());
  }

  getTokenAndData() {
    const code = window.location.href.match(/\?code=(.*)/);
    if (!code) return;

    fetch(`https://youfollow.herokuapp.com/authenticate/${code[1]}`)
      .then((response) => {
        return response.json();
      }).then((json) => {
        const token = json.token
        if (token) {
          localStorage.setItem('token', token);
          this.getData(token)
        }
      }).catch((ex) => {
        console.log('parsing failed', ex);
      });
  }

  getData(token) {
    const octo = new Octokat({ token: token });

    octo.rateLimit.fetch((err, limit) => {
      console.log(`Requests to GitHub remaining: ${limit.rate.remaining} / ${limit.rate.limit}`);
    });

    octo.user.following.fetch((err, users) => {
      this.setState({
        followings: users.items,
        selectedFollowing: users.items[0]
      });
    });
  }

  clearAppState() {
    localStorage.clear();
    this.setState({
      followings: null,
      selectedFollowing: null,
    });
  }

  render() {
    return (
      <div>
        <Header clearAppState={this.clearAppState} />
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
