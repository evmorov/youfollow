import React, { Component } from 'react';
import Octokat from 'octokat';
import Header from './components/Header';
import FollowingList from './components/FollowingList';
import Following from './components/Following';
import BodyNotLoggedIn from './components/BodyNotLoggedIn';
import Footer from './components/Footer';
import { Grid } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.clearAppState = this.clearAppState.bind(this)

    const token = localStorage.getItem('token');

    this.state = {
      octo: null,
      followings: [],
      selectedFollowing: null,
      activeIndex: 0,
      me: null,
      isSignedIn: (token || this.getCode())
    };

    token ? (this.getData(token)) : (this.getTokenAndData());
  }

  getCode() {
    return window.location.href.match(/\?code=(.*)/);
  }

  getTokenAndData() {
    const code = this.getCode();
    if (!code) return;

    fetch(`${process.env.REACT_APP_OAUTH_SERVER}/authenticate/${code[1]}`)
      .then((response) => {
        return response.json();
      }).then((json) => {
        const token = json.token
        if (token) {
          localStorage.setItem('token', token);
          this.getData(token)
        } else {
          console.log('ooops, something went wrong');
        }
      }).catch((ex) => {
        console.log('parsing failed', ex);
      });
  }

  getData(token) {
    const octo = new Octokat({ token });

    octo.user.following.fetch((err, users) => {
      this.setState({
        octo: octo,
        followings: users.items,
        selectedFollowing: users.items[0]
      });
    });

    octo.user.fetch((err, me) => this.setState({ me }) );
  }

  clearAppState() {
    localStorage.clear();
    this.setState({
      octo: null,
      followings: [],
      selectedFollowing: null,
      activeIndex: 0,
      me: null,
      isSignedIn: false
    });
  }

  render() {
    let content = null;
    if (this.state.isSignedIn) {
      content =
        <div>
          <FollowingList
            followings={this.state.followings}
            onFollowingSelect={(selectedFollowing, activeIndex) => {
              this.setState({selectedFollowing, activeIndex})
            }}
            activeIndex={this.state.activeIndex}
          />
          <Following
            octo={this.state.octo}
            following={this.state.selectedFollowing} />
        </div>;
    } else {
      content = <BodyNotLoggedIn />
    }

    return (
      <div>
        <Header
          me={this.state.me}
          clearAppState={this.clearAppState}
          isSignedIn={this.state.isSignedIn}
        />
        <Grid>
          {content}
        </Grid>
        <Footer />
      </div>
    );
  }
}

export default App;
