import React from 'react';
import { Grid, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
      <Navbar inverse>
        <Grid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">YouFollow</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Grid>
      </Navbar>
    </div>
  );
};

export default Header;
