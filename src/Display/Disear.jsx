import React from 'react'
import { EarbudsData } from '../Data/Earbuds'
import { Link } from 'react-router-dom'
import { Row,Col } from 'react-bootstrap'
import SideNav from '../Components/SideNav'
import Header from '../Components/Header'
function Disear() {
    
  return (
    <div>
      <Row>
        <Col sm={2}>
            <SideNav/>
        </Col>
        <Col sm={10}>
           <div>
              <Header/>
           </div>
           <div style={{marginTop:'70px'}}>
     <Link to='/products'><span>View Less</span></Link>  
    <div style={{display:'flex',flexWrap:'wrap',gap:'10px',padding:'10px',paddingLeft:'10px'}}>
        {
          EarbudsData.map((e)=>{
                return(
                  <Link to={`/detailear/${e.id}`}>
                    <div style={{border:'solid 1px black'}}>
                         <img src={e.image} alt='' style={{height:'300px',width:'300px'}}/>
                    <p style={{margin:'0px',textAlign:'center'}}>id:{e.id}</p>
                    <p style={{margin:'0px',textAlign:'center'}}>Brand:{e.brand}</p>
                    <p style={{margin:'0px',textAlign:'center'}}>Model:{e.model}</p>
                    <p style={{margin:'0px',textAlign:'center'}}>Price:{e.price}</p>
                    <div style={{display:'flex',justifyContent:'center',paddingBottom:'10px'}}>
                    <button className='btn btn-warning'>Add to Cart</button>
                    </div>
                   </div>
                   </Link>
                )
            })
        }
    </div>
    </div>
        </Col>
      </Row>
  
    </div>
   
  )
}

export default Disear