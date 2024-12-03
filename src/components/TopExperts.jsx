import React from 'react'
import Heading from './Heading'
import './TopExperts.css'

const TopExperts = ({imageSrc,name,expert,score}) => {
  return (
    <div className="experting">
      <div className="image-c">
        <img src={imageSrc} alt="Job Image" className="image-e" />
      </div>
      <div className="name">
        <Heading fontSize="15px" fontWeight="600" color="rgba(35, 35, 35, 1)">
          {name}
        </Heading>
        </div>
        <div className="expert">
        <Heading fontSize="12px" fontWeight="400"color="rgba(151, 151, 151, 1)">
          {expert}
        </Heading>
        </div>
        <div className="score">
        <Heading fontSize="14px" fontWeight="600" color="rgba(35, 35, 35, 1)">
          {score}
        </Heading>
        </div>
    </div>
  )
}

export default TopExperts
