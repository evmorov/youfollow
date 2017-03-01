import React, { Component } from 'react';
import HeaderUser from './HeaderUser';
import HeaderGuest from './HeaderGuest';
import { Grid, Navbar } from 'react-bootstrap';

class Header extends Component {
  render() {
    let authLinks = null;
    if (this.props.me) {
      authLinks = <HeaderUser me={this.props.me} clearAppState={this.props.clearAppState} />
    } else {
      authLinks = <HeaderGuest />
    }

    return (
      <Navbar>
        <Grid>
          <Navbar.Header>
            <Navbar.Brand>YouFollow</Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          {authLinks}
        </Grid>
      </Navbar>
    );
  }
}

export default Header;
