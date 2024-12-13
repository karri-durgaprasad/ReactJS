import React from 'react'
import { Link } from 'react-router-dom'

function SideNav() {
  return (
    <div style={{backgroundColor:'black',color:'white',height:'100vh',position:'fixed',width:'200px'}}>
       <Link to='/home'><p>Home</p></Link>   
       <Link to='/products'><p>Products</p></Link> 
       <Link to='/cart'><p>Cart</p></Link> 
       <Link to='/support'><p>Support</p></Link> 
       <Link to='/you'><p>You</p></Link> 
    </div>
  )
}

export default SideNav