import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import SideNav from './SideNav';
import Header from './Header';

// Define inline styles for better readability
const styles = {
  pageTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333',
    marginTop: '70px',
  },
  sectionTitle: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  faqItem: {
    marginBottom: '15px',
  },
  card: {
    marginBottom: '20px',
  },
};

function Support() {
  return (
    <div>
      <Row>
        <Col sm={2} style={{ padding: '0 ',marginLeft:'11px'}}>
          <SideNav />
        </Col>
        <Col sm={10} style={{ padding: 0 }}>
          <Row>
            <Header />
          </Row>
          
          <Row style={{ marginTop: '120px' }}>
            <h1 style={styles.pageTitle}>Support Page</h1>
          </Row>

          {/* FAQs Section */}
          <Row style={{marginLeft:'250px'}}>
            <h2 style={styles.sectionTitle}>Frequently Asked Questions (FAQs)</h2>
            <Col md={6}>
              <div style={styles.faqItem}>
                <h5>How do I track my order?</h5>
                <p>You can track your order by logging into your account and going to the "My Orders" section.</p>
              </div>
              <div style={styles.faqItem}>
                <h5>What is your return policy?</h5>
                <p>We accept returns within 30 days of purchase. Please refer to our return policy page for more details.</p>
              </div>
              <div style={styles.faqItem}>
                <h5>How can I contact customer service?</h5>
                <p>You can reach out to us via email at support@shoppingstore.com or call us at 123-456-7890.</p>
              </div>
            </Col>
            <Col md={6}>
              <div style={styles.faqItem}>
                <h5>Can I change my order after placing it?</h5>
                <p>Once an order is placed, it cannot be changed. However, you can contact us to cancel the order before it's shipped.</p>
              </div>
              <div style={styles.faqItem}>
                <h5>What payment methods do you accept?</h5>
                <p>We accept major credit cards, PayPal, and other secure payment options available at checkout.</p>
              </div>
              <div style={styles.faqItem}>
                <h5>Do you offer international shipping?</h5>
                <p>Yes, we offer international shipping to select countries. Check the shipping page for more information.</p>
              </div>
            </Col>
          </Row>

          {/* Contact Us Section */}
          <Row style={{ marginTop: '40px' ,marginLeft:'250px'}}>
            <h2 style={styles.sectionTitle}>Contact Us</h2>
            <Col md={12}>
              <Card style={styles.card}>
                <Card.Body>
                  <Card.Title>Reach Our Customer Service</Card.Title>
                  <Card.Text>
                    If you have any questions or need assistance, please don't hesitate to contact us. We are here to help!
                  </Card.Text>
                  <Button variant="primary" href="mailto:support@shoppingstore.com">Email Us</Button>
                  <Button variant="secondary" style={{ marginLeft: '10px' }} href="tel:+1234567890">Call Us</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Help Resources Section */}
          <Row style={{ marginTop: '40px' ,marginLeft:'250px'}}>
            <h2 style={styles.sectionTitle}>Help Resources</h2>
            <Col md={4}>
              <Card style={styles.card}>
                <Card.Body>
                  <Card.Title>Order Tracking</Card.Title>
                  <Card.Text>Learn how to track your order after purchase. Stay updated with shipping and delivery status.</Card.Text>
                  <Button variant="primary" href="/track-order">Track My Order</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={styles.card}>
                <Card.Body>
                  <Card.Title>Return and Refund Policy</Card.Title>
                  <Card.Text>Read our return and refund policy to understand how we handle returns and refunds.</Card.Text>
                  <Button variant="primary" href="/return-policy">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={styles.card}>
                <Card.Body>
                  <Card.Title>Shipping Information</Card.Title>
                  <Card.Text>Find out more about our shipping options, delivery times, and fees.</Card.Text>
                  <Button variant="primary" href="/shipping-info">Shipping Info</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Support;
