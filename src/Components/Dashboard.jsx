import React from 'react'
import { Row,Col } from 'react-bootstrap'
import SideNav from './SideNav'
import Header from './Header'


function Dashboard() {
  return (
    <div>
        <Row>
          <Col sm={2}>
          <SideNav/>
          </Col>
          <Col sm={10}>
              <Row>
                <Header/>
                
              </Row>
             
              
          </Col>
        </Row>
    </div>
  )
}

export default Dashboard