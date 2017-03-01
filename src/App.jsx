import React, { Component } from 'react';
import Octokat from 'octokat';
import Header from './components/Header';
import FollowingList from './components/FollowingList';
import FollowingDetail from './components/FollowingDetail';
import Footer from './components/Footer';
import { Grid } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.clearAppState = this.clearAppState.bind(this)

    this.state = {
      octo: null,
      followings: [],
      selectedFollowing: null,
      activeIndex: 0,
      me: null
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
      followings: null,
      selectedFollowing: null,
      me: null
    });
  }

  render() {
    return (
      <div>
        <Header
          me={this.state.me}
          clearAppState={this.clearAppState} />
        <Grid>
          <FollowingList
            followings={this.state.followings}
            onFollowingSelect={(selectedFollowing, activeIndex) => {
              this.setState({selectedFollowing, activeIndex})
            }}
            activeIndex={this.state.activeIndex}
          />
          <FollowingDetail
            octo={this.state.octo}
            following={this.state.selectedFollowing} />
        </Grid>
        <Footer />
      </div>
    );
  }

  componentDidUpdate() {
    const octo = this.state.octo;
    if (!octo) return null;

    this.state.octo.rateLimit.fetch((err, limit) => {
      console.log(`Requests to GitHub remaining: ${limit.rate.remaining} / ${limit.rate.limit}`);
    });
  }
}

export default App;
