import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div style={{backgroundColor:'lightpink',color:'blue',height:'70px',position:'fixed',left:'200px', display:'flex',justifyContent:'center',alignItems:'center',width:'100%'}}>
        <div>
      <Link to='/home'><span  style={{margin:'100px',marginLeft:'50px'}}>Home</span></Link> 
    <Link to='/products'><span style={{margin:'100px'}}>Products</span></Link> 
    <Link to='/cart'><span style={{margin:'100px'}}>Cart</span></Link>   
    <Link to='/support'><span style={{margin:'100px'}}>Support</span></Link>  
    <Link to='/you'><span style={{margin:'100px'}}>You</span></Link>  
    </div>
    </div>
  )
}

export default Header