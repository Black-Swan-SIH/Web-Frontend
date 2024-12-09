import { borderRadius, fontSize, minWidth, padding } from '@mui/system';
import React, { useState } from 'react';

const ExpandableDiv = ({name,content,borderRadius,padding,paddingLeft,position,cursor,width,minWidth,fontSize,backgroundColor,fontSize1}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
    style={{
      borderRadius: borderRadius,
      padding: padding,
      paddingLeft: paddingLeft,
      position: position,
      
      cursor: cursor,
      width: isExpanded ? "fit-content" : width, // Wider when collapsed
      minWidth: minWidth, // Ensures the div remains wide
      transition: "all 0.3s ease-in-out",
      ...(isExpanded && { backgroundColor: backgroundColor })
    }}
    onClick={toggleExpand}
  >
  
    <div
    className='text-muted'
      style={{ fontWeight:"600",
        fontSize: fontSize,
      }}
    >
      {/* Core Development */}
      {name}
    </div>

  
    <div
      onClick={toggleExpand}
      style={{
        position: "absolute",
        top: "8px",
        right: "8px",
        fontSize: "24px",
        fontWeight: "bold",
        transform: isExpanded ? "rotate(45deg)" : "rotate(0deg)",
        transition: "transform 0.3s ease",
        cursor: "pointer",
      }}
    >
      +
    </div>

   
    {isExpanded && (
      <div
        style={{
          marginTop: "16px",
          fontSize1: fontSize1,
        }}
      >
         {/* expanded content  */}
      {content}
      </div>
    )}
  </div>
  );
};

export default ExpandableDiv;
