import React from 'react';
import Heading from './Heading';

const CandidateCount = ({ head, value}) => {
  return (
    <div>
      <Heading fontSize="13px" fontWeight={500} color="rgba(131, 131, 131, 1)">
        {head}
      </Heading>
      <div className={'my-2 w-40 h-[1px] bg-gray-500'}></div>
      <Heading fontSize="22px" fontWeight={600} color="rgba(44, 44, 52, 1)">
        {value}
      </Heading>
    </div>
  );
};

export default CandidateCount;
