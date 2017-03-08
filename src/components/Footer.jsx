import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <Grid className="footer">
      <Row className="show-grid">
        <Col md={6} className="text-right">
          <a href="https://github.com/evmorov/youfollow">Source</a>
        </Col>
        <Col md={6}>
          <a href={`https://github.com/settings/connections/applications/${process.env.REACT_APP_OAUTH_CLIENT_ID}`}>Revoke access</a>
        </Col>
      </Row>
    </Grid>
  )
}

export default Footer;
