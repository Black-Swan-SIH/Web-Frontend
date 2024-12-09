import React from 'react';
import Button from './Button';
import ExpandableDiv from './keySkills';
function CandidateCards({height}) {
    return ( 
        <>
        <div style={{height:height , marginRight:"35px", width:"320px", borderRadius:"10px", marginTop:"10px",backgroundColor:"white"
        }}>
       <div className='ml-5 pl-5'>
       <Button
        marginRight="10px"
        
        bgcolor="lightGrey"
        marginTop="15px"
        width="70px"
        height="20px"
        borderRadius="20px"
        color="black"
        
        children="closed"
        />
        <h1 className='mt-5 pt-5' style={{fontWeight:"550",fontSize:"16px"}}>Advertisement No. 1717</h1>
        <h1 className='mt-3' style={{fontWeight:"500",fontSize:"13px"}}><strong>Status</strong>: Result Declared</h1>
        <hr className='my-5'></hr>
        <ul>
                                    <li> <ExpandableDiv name="Core development" content="content"
                                    borderRadius="8px"
                                    padding="8px"
                                    paddingLeft="5px"
                                    position="relative"
                                    backgroundColor="#9CAFB7"
                                    cursor="pointer"
                                  width="270px" 
                                    minWidth="270px"
                                    fontSize="15px"
                                    fontSize1="10px"
                                    /></li>
                                    
                                </ul>
       </div>
      
        </div>
        </>
     );
}

export default CandidateCards;