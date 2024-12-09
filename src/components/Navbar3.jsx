import React from 'react';
import racImage from '../assets/rac1.png';
import racImage1 from '../assets/rac.png';
import Button from './Button';
function Navbar3() {
    return ( 
        <>
     <nav className="navbar fixed-top bg-body-tertiary" style={{width:"100vw"}}>
  <div className="container-fluid" style={{height:"110px", width:"100vw" }}>
   <div style={{display:"flex"}}>
   <img src={racImage} alt="dog" style={{height:"60px", margin:"8px", marginTop:"25px", marginLeft:"15px"}}/>
   <img src={racImage1} alt="dog" style={{height:"70px", marginLeft:"400px",
    marginTop:"20px"
   }}/>
   <ul style={{display:"flex", marginTop:"35px",marginLeft:"400px"}}>
  <li style={{fontSize:"15px",marginTop:"8px"}}><strong>हिन्दी</strong></li> 
  <li style={{marginLeft:"30px", marginBottom:"30px"}}><Button
   width="80px"
   bgcolor="black"
   color="white"
   children="Login"
   borderRadius="7px"
   borderColor="black"
   marginBottom="10px"
   fontWeight="400"
   fontSize="15px"
   marginRight="10px"
  
   height="35px"
  /></li>

<li style={{marginLeft:"10px", marginBottom:"30px"}}><Button
   width="120px"
   bgcolor="black"
   color="white"
   children="Contact Us"
   borderRadius="7px"
   borderColor="black"
   marginBottom="10px"
   fontWeight="400"
   fontSize="15px"
   marginRight="10px"
   height="35px"
  /></li>
   </ul>
   </div>
  </div>


    <div className="container-fluid" style={{ height:"60px",width:"100vw",backgroundColor:"lightGrey"}}>
   <div style={{display:"flex", backgroundColor:"lightGrey"}}>
   
   <ul style={{display:"flex",marginLeft:"30px", marginTop:"18px",fontSize:"13px"}}>
  <li style={{fontWeight:"500"}}>Home</li> 
  <li  style={{marginLeft:"20px",fontWeight:"500"}}>About RAC</li>
<li style={{marginLeft:"20px",fontWeight:"500"}}>Programmes</li>
<li style={{marginLeft:"20px",fontWeight:"500"}}>Career Opportunity</li>
<li style={{marginLeft:"20px",fontWeight:"500"}}>DRDS</li>
<li style={{marginLeft:"20px",fontWeight:"500"}}>FAQs</li>
<li style={{marginLeft:"20px",fontWeight:"500"}}><strong>गृहपत्रिका</strong></li>
   </ul>
   <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"  style={{borderRadius:"5px",backgroundColor:"grey", height:"27px", marginTop:"15px",marginLeft:"600px", width:"170px"}}/>
        
      </form>
      <i class="fa-solid fa-magnifying-glass" 
        style={{marginTop:"23px"}}
        ></i>
   </div>
  </div>
</nav>

        </>
     );
}

export default Navbar3;