import React from 'react';
import { Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import SideNav from './SideNav';
import Header from './Header';

// Inline styling
const styles = {
  headerFixed: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 999, // Ensure the header is on top of other content
    backgroundColor: 'white', // Add background to prevent content from showing through
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)', // Optional: for a subtle shadow effect on the header
  },
  mainContent: {
    marginTop: '100px', // Add space below the header for content (adjust as needed)
  },
  cartTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333',
  },
  cartItem: {
    marginBottom: '20px',
  },
  summaryCard: {
    marginTop: '30px',
    padding: '20px',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  image: {
    maxHeight: '200px',  // Use maxHeight to prevent the image from being cut
    objectFit: 'contain', // Make sure the entire image is visible without stretching
    width: '100%', // The image takes the full width of its container
  },
};

function Cart() {
  // Sample cart items, this could be dynamic based on the user's cart data
  const cartItems = [
    {
      id: 1,
      name: 'Product 1',
      price: 29.99,
      quantity: 2,
      imageUrl: 'https://m.media-amazon.com/images/I/41T2+zcSoaL._SY300_SX300_.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 49.99,
      quantity: 1,
      imageUrl: 'https://m.media-amazon.com/images/I/51EZx2f589L._AC_UY327_FMwebp_QL65_.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 19.99,
      quantity: 3,
      imageUrl: 'https://m.media-amazon.com/images/I/51+e7yrgPpL._AC_UY327_FMwebp_QL65_.jpg',
    },
  ];

  // Calculate the total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      {/* Fixed Header Row */}
      <Row style={styles.headerFixed}>
        <Header />
      </Row>

      <Row>
        <Col sm={2}>
          <SideNav />
        </Col>
        <Col sm={10}>
          {/* Main Content Area with space for the fixed header */}
          <Row style={styles.mainContent}>
            <h1 style={styles.cartTitle}>Your Cart</h1>
          </Row>

          {/* Cart Items Section */}
          <Row>
            {cartItems.map(item => (
              <Col key={item.id} md={4}>
                <Card style={styles.cartItem}>
                  <Card.Img variant="top" src={item.imageUrl} style={styles.image} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      Price: ${item.price} x {item.quantity}
                    </Card.Text>
                    <Button variant="danger">Remove</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Cart Summary */}
          <Row>
            <Col md={4} style={styles.summaryCard}>
              <Card>
                <Card.Body>
                  <Card.Title>Cart Summary</Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <strong>Total Items:</strong> {cartItems.reduce((total, item) => total + item.quantity, 0)}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Total Price:</strong> ${totalPrice.toFixed(2)}
                    </ListGroup.Item>
                  </ListGroup>
                  <div style={styles.buttonGroup}>
                    <Button variant="secondary">Continue Shopping</Button>
                    <Button variant="primary">Proceed to Checkout</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Cart;
