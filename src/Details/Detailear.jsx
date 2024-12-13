import React from 'react'
import {EarbudsData} from '../Data/Earbuds'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { Row,Col } from 'react-bootstrap';
import SideNav from '../Components/SideNav';
import Header from '../Components/Header';
function Detailear() {
    const {id} = useParams();
    const item = EarbudsData.find((e)=>e.id===Number(id))
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
               <Row style={{marginTop:'70px'}}>
                <div>
                        <Link to='/disear'><span style={{display:'block'}}>More Products</span></Link>
                        <img src={item.image} alt=""  style={{height:'500px',width:'300px'}}/>
                        <p>{item.brand}</p>
                        <p>{item.model}</p>
                        <p>{item.price}</p>
                        <button className='btn btn-warning'>Add to Cart</button>
                </div>
               </Row>
            </Col>
        </Row>
     
    </div>
  )
}

export default Detailear
