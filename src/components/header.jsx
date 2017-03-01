import React, { Component } from 'react';
import { Grid, Navbar, Nav, NavItem } from 'react-bootstrap';

class Header extends Component {
  render() {
    let authLinks = null;
    if (this.props.me) {
      authLinks =
        <Nav pullRight>
          <NavItem eventKey={0} href={this.props.me.htmlUrl}>{this.props.me.login}</NavItem>
          <NavItem eventKey={1} onClick={this.props.clearAppState}>Sign out</NavItem>
        </Nav>;
    } else {
      authLinks =
        <Nav pullRight>
          <NavItem eventKey={0}>Not signed in</NavItem>
        </Nav>;
    }

    return (
      <Navbar inverse>
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
