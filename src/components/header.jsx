import React from 'react';
import HeaderUser from './HeaderUser';
import HeaderGuest from './HeaderGuest';
import { Grid, Navbar } from 'react-bootstrap';

const Header = ({ me, clearAppState }) => {
  let authLinks = null;
  if (me) {
    authLinks = <HeaderUser me={me} clearAppState={clearAppState} />;
  } else {
    authLinks = <HeaderGuest />;
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

export default Header;
