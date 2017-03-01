import React, { Component } from 'react';
import { Grid, Navbar, Nav, NavItem } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Navbar inverse>
        <Grid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">YouFollow</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Nav pullRight>
            <NavItem eventKey={0} href="#">Username</NavItem>
            <NavItem eventKey={1} onClick={this.props.clearAppState}>Sign out</NavItem>
          </Nav>
        </Grid>
      </Navbar>
    );
  }
}

export default Header;
