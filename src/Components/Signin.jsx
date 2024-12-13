import React from 'react'
import { Link } from 'react-router-dom'

function Signin() {
  return (
    
     <div style={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <div style={{backgroundColor:'lightblue',padding:'50px'}}>
        <h3 style={{textAlign:'center'}}>SignUp</h3>
        <input placeholder='enter your name' style={{marginBottom:'10px',textAlign:'center'}}/><br/>
        <input placeholder='enter your email' style={{marginBottom:'10px',textAlign:'center'}} /><br/>
        <input placeholder='set the password' style={{marginBottom:'10px',textAlign:'center'}} /><br/>
        <div style={{display:'flex',justifyContent:'center'}}>
       <Link to='/'><button className='btn btn-success'>Submit</button></Link>   
        </div>

    </div>
    </div>
    
  )
}

export default Signin
