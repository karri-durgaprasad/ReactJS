import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import SideNav from './SideNav';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

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
    marginTop: '120px', // Adjust space below the fixed header for content
  },
  homePageTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginTop: '30px',
    marginBottom: '20px',
  },
  sectionContent: {
    marginBottom: '40px',
  },
  logoutButton: {
    marginTop: '20px',
    marginBottom: '40px', // Ensure some space at the bottom
    display: 'block', // Center the button
    width: '200px', // Set a fixed width for the button
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Example logout logic: clear localStorage or any session data
    localStorage.removeItem('user'); // or any other logout logic

    // Redirect to the login page
    navigate('/');
  };

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
            <h1 style={styles.homePageTitle}>Welcome to Our Shopping Site</h1>
          </Row>

          {/* Featured Products Section */}
          <Row style={styles.sectionContent}>
            <h2 style={styles.sectionTitle}>Featured Products</h2>
            {/* Add product cards here */}
            <p>Here you can display featured products.</p>
          </Row>

          {/* Categories Section */}
          <Row style={styles.sectionContent}>
            <h2 style={styles.sectionTitle}>Shop by Categories</h2>
            {/* Add category links or cards here */}
            <p>Here you can display categories like "Clothing", "Electronics", etc.</p>
          </Row>

          {/* Special Offers Section */}
          <Row style={styles.sectionContent}>
            <h2 style={styles.sectionTitle}>Special Offers</h2>
            {/* Add offers or promotions here */}
            <p>Here you can display special offers or discounts.</p>
          </Row>

          {/* Logout Button Below Special Offers */}
          <Button 
            variant="danger" 
            onClick={handleLogout} 
            style={styles.logoutButton}
          >
            Logout
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
