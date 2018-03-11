import React, { Component } from 'react';
import Octokat from 'octokat';
import { Grid } from 'react-bootstrap';
import HttpsRedirect from 'react-https-redirect';
import Header from './components/Header.jsx';
import FollowingList from './components/FollowingList.jsx';
import Following from './components/Following.jsx';
import BodyNotLoggedIn from './components/BodyNotLoggedIn.jsx';
import Footer from './components/Footer.jsx';

function getCode() {
  return window.location.href.match(/\?code=(.*)/);
}

class App extends Component {
  constructor(props) {
    super(props);
    const token = window.localStorage.getItem('token');

    this.state = {
      octo: null,
      followings: [],
      selectedFollowing: null,
      activeIndex: 0,
      me: null,
      isSignedIn: (token || getCode()),
    };

    token ? (this.getData(token)) : (this.getTokenAndData());
  }

  getTokenAndData() {
    const code = getCode();
    if (!code) return;

    fetch(`${process.env.REACT_APP_OAUTH_SERVER}/authenticate/${code[1]}`)
      .then(response => response.json())
      .then((json) => {
        const { token } = json;
        if (token) {
          window.localStorage.setItem('token', token);
          this.getData(token);
        } else {
          console.error(`There is no token in the json response. Error: '${json.error}'`);
        }
      })
      .catch(ex => console.error(`Failed to change the code ${code[1]}. Exception '${ex}'`));
  }

  getData(token) {
    const octo = new Octokat({ token });

    octo.user.following.fetch((err, users) => {
      if (err && err.message.includes('Bad credentials')) {
        console.error(err.message);
        this.clearAppState();
        return;
      }

      this.setState({
        octo,
        followings: users.items,
        selectedFollowing: users.items[0],
      });
    });

    octo.user.fetch((err, me) => this.setState({ me }));
  }

  clearAppState() {
    window.history.pushState({}, null, '/');
    window.localStorage.clear();
    this.setState({
      octo: null,
      followings: [],
      selectedFollowing: null,
      activeIndex: 0,
      me: null,
      isSignedIn: false,
    });
  }

  render() {
    let content = null;
    if (this.state.isSignedIn) {
      content = (
        <div>
          <FollowingList
            followings={this.state.followings}
            onFollowingSelect={(selectedFollowing, activeIndex) => {
              this.setState({ selectedFollowing, activeIndex });
            }}
            activeIndex={this.state.activeIndex}
          />
          <Following
            octo={this.state.octo}
            following={this.state.selectedFollowing}
          />
        </div>
      );
    } else {
      content = <BodyNotLoggedIn />;
    }

    return (
      <HttpsRedirect>
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
      </HttpsRedirect>
    );
  }
}

export default App;
