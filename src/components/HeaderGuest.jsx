import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';

const HeaderGuest = ({me, clearAppState}) => {
  return (
    <Nav pullRight>
      <NavItem
        eventKey={0}
        href="https://github.com/login/oauth/authorize?client_id=c13f1ec202a0b58d4d02&redirect_uri=http://127.0.0.1:3000">
        Sign in with Github
      </NavItem>
    </Nav>
  );
}

export default HeaderGuest;
