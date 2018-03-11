import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';

const HeaderGuest = ({ me, clearAppState }) => {
  return (
    <Nav pullRight>
      <NavItem
        eventKey={0}
        href={`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_OAUTH_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_OAUTH_REDIRECT_URI}`}
      >
        Sign in with Github
      </NavItem>
    </Nav>
  );
};

export default HeaderGuest;
