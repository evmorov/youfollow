import React from 'react';
import { Grid, Navbar } from 'react-bootstrap';
import HeaderUser from './HeaderUser.jsx';
import HeaderLoading from './HeaderLoading.jsx';
import HeaderGuest from './HeaderGuest.jsx';

const Header = ({ me, clearAppState, isSignedIn }) => {
  let authLinks = null;
  if (me) {
    authLinks = <HeaderUser me={me} clearAppState={clearAppState} />;
  } else if (isSignedIn) {
    authLinks = <HeaderLoading />;
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
};

export default Header;
