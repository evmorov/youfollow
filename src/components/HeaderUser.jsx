import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';

const HeaderUser = ({ me, clearAppState }) => (
  <Nav pullRight>
    <NavItem eventKey={0} href={me.htmlUrl} target="_blank">{me.login}</NavItem>
    <NavItem eventKey={1} href="/" onClick={clearAppState}>Sign out</NavItem>
  </Nav>
);

export default HeaderUser;
