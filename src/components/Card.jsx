import { border } from '@mui/system';
import React from 'react';


function Cards({title}) {
    return ( <>
        <div clasName="card mb-3" style={{border:"1px #96DBC2 solid",width:"370px",height:"100px",borderRadius:"10px",backgroundColor:"#96DBC2"}}>
  <div className="row" style={{}}>
    <div className="col-md-4" style={{border:"1px #E6E6E6 solid",height:"80px",marginTop:"9px",width:"80px",marginLeft:"25px",borderRadius:"8px", backgroundColor:"#E6E6E6"}}>
      {/* <img src="https://static.vecteezy.com/system/resources/previews/008/306/791/non_2x/square-with-round-corner-glyph-black-icon-vector.jpg" class="img-fluid rounded-start" alt="dog" style={{height:"80px",width:"90px"}}/> */}
    </div>
    <div className="col-md-8" >
      <div className="card-body mt-5 pt-2">
        <h5 className="card-title" style={{fontSize:"20px",fontWeight:"600"}}>{title}</h5>
        <p className="card-text mt-2">Application : 101</p>
        <p className="card-text text-muted mt-2" style={{fontSize:"10px"}}><p className="text-body-secondary"></p>Last updated 3 mins ago</p>
      </div>
    </div>
  </div>
</div>
    </>
);
}

export default Cards;