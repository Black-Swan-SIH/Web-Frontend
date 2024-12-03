import React from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../App.css";
import "./custom.css";

<<<<<<< HEAD

function ProgressBar({value,color}) {
    return (  <>
     <CircularProgressbarWithChildren
                    value={value}
                    styles={{
                      path: {
                        stroke: color,
                        strokeWidth: 12,
                        transform: "scale(0.5) translate(-10%, -10%)",
                        transformOrigin: "center center",
                        
                      },
                      trail: {
                        stroke: `black`,
                        strokeWidth: 12,
                        transform: "scale(0.5) translate(-10%, -10%)",
                        transformOrigin: "center center",
                        
                      },
                      
                    }}
                  >
                    {/* <img
                      style={{ width: 200, marginTop: 105 }}
                      src="https://cdn-icons-png.flaticon.com/256/552/552721.png"
                      alt="doge"
                    /> */}
                    <div style={{ fontSize: 30, marginTop: 220,fontWeight:"600" }}>
                      {value}/100
                    </div>
                  </CircularProgressbarWithChildren>
    
    </>  );
}

export default ProgressBar;
=======
function ProgressBar({ value, color }) {
  return (
    <>
      <CircularProgressbarWithChildren
        value={value}
        styles={{
          path: {
            stroke: color,
            strokeWidth: 12,
            transformOrigin: "center center",
          },
          trail: {
            stroke: `rgba(39, 39, 39, 1)`,
            strokeWidth: 12,
            transformOrigin: "center center",
          },
        }}
      >
        {/* <img
          style={{ width: 250, marginTop: 105 }}
          src="https://cdn-icons-png.flaticon.com/256/552/552721.png"
          alt="doge"
        /> */}
        <div style={{ fontSize: 18}}>
          <strong>{value}</strong>
        </div>
      </CircularProgressbarWithChildren>
    </>
  );
}

export default ProgressBar;
>>>>>>> 05f1ff6e0721af58cd4da98227ac090e68f2b518
