import React from 'react'
import { EarbudsData } from '../Data/Earbuds'
import { Link } from 'react-router-dom';
function Ear() {
    const ShortData = EarbudsData.slice(0,6);
  return (
    <div style={{display:'flex',flexWrap:'wrap',gap:'10px'}}>
        {
            ShortData.map((e)=>{
                return(
                    <Link to={`/detailear/${e.id}`}>
                    <div style={{border:'solid 1px black'}}>
                         <img src={e.image} alt='' style={{height:'100px',width:'200px'}}/>
                    <p style={{margin:'0px',textAlign:'center'}}>id:{e.id}</p>
                    <p style={{margin:'0px',textAlign:'center'}}>Brand:{e.brand}</p>
                    <p style={{margin:'0px',textAlign:'center'}}>Model:{e.model}</p>
                    <p style={{margin:'0px',textAlign:'center'}}>Price:{e.price}</p>
                    <div style={{display:'flex',justifyContent:'center',paddingBottom:'10px'}}>
                    <button className='btn btn-warning' style={{fontSize:'13px'}}>Add to Cart</button>
                    </div>
                   </div>
                   </Link>
                )
            })
        }
    </div>
  )
}

export default Ear