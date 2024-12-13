import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import SideNav from './SideNav';
import Header from './Header';

function You() {
  return (
    <div>
      <Row>
        <Col sm={2}>
          <SideNav />
        </Col>
        <Col sm={10}>
          <Row>
            <Header />
          </Row>
          <Row style={{ marginTop: '70px' }}>
            <h1>Welcome to Your Account</h1>
          </Row>
          <Row style={{ marginTop: '40px' }}>
            <Col>
              <h3>Your Orders</h3>
              <p>View your order history and track the status of your purchases.</p>
              <Button variant="primary">View Orders</Button>
            </Col>
          </Row>
          <Row style={{ marginTop: '30px' }}>
            <Col>
              <h3>Your Wishlist</h3>
              <p>Check out your saved items and purchase them later.</p>
              <Button variant="success">View Wishlist</Button>
            </Col>
          </Row>
          <Row style={{ marginTop: '30px' }}>
            <Col>
              <h3>Account Settings</h3>
              <p>Manage your personal details, payment options, and more.</p>
              <Button variant="warning">Edit Profile</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default You;
