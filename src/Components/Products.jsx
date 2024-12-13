import React from 'react'
import { Row,Col } from 'react-bootstrap'
import SideNav from './SideNav'
import Header from './Header'
import Mob from '../Viewdata/Mob'
import { Link } from 'react-router-dom'
import Lap from '../Viewdata/Lap'
import Ear from '../Viewdata/Ear'
function Products() {
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
           <Row  style={{marginTop:'70px',paddingTop:'10px'}}>
            <div>
            <Mob/>
            <div style={{display:'flex',justifyContent:'end'}}>
              <Link to='/dismob'><span>View More</span></Link>   
              </div>
            </div>
            <div>
              <Lap/>
              <div style={{display:'flex',justifyContent:'end'}}>
           <Link to='/dislap'><span>View More</span></Link>    
              </div>
            </div>
            <div>
              <Ear/>
              <div style={{display:'flex',justifyContent:'end'}}>
               <Link to='/disear'><span>View More</span></Link> 
              </div>
            </div>
           </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Products