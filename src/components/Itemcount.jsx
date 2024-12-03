import React from 'react'
import Heading from './Heading'

const Itemcount = ({head,value}) => {
  return (
    <div>
      <Heading fontSize="14px" fontWeight={500} color="rgba(131, 131, 131, 1)">{head}</Heading>
      <div className='my-1 w-56 h-0.5 bg-gray-500'></div>
      <Heading fontSize="30px" fontWeight={600} color="rgba(44, 44, 52, 1)">{value}</Heading>
    </div>
  )
}

export default Itemcount
