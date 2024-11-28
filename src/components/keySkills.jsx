import React, { useState } from 'react';

const ExpandableDiv = ({name,content}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
   

    <div
    style={{
      borderRadius: "8px",
      padding: "16px",
      paddingLeft:"10px",
      position: "relative", // For positioning the + sign
      
      cursor: "pointer",
      width: isExpanded ? "fit-content" : "700px", // Wider when collapsed
      minWidth: "700px", // Ensures the div remains wide
      transition: "all 0.3s ease-in-out",
      ...(isExpanded && { backgroundColor: 'lightgrey', })
    }}
    onClick={toggleExpand}
  >
  
    <div
    className='text-muted'
      style={{ fontWeight:"600",
        fontSize: "25px",
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
          fontSize: "16px",
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
