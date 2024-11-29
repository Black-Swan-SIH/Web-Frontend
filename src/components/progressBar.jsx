import React from 'react';
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../App.css";
import "./custom.css";


function progressBar() {
    return (  <>
     <CircularProgressbarWithChildren
                    value={value}
                    styles={{
                      path: {
                        stroke: color,
                        strokeWidth: 4,
                        transformOrigin: "center center",
                      },
                      trail: {
                        stroke: `#d6d6d6`,
                        strokeWidth: 4,

                        transformOrigin: "center center",
                      },
                    }}
                  >
                    <img
                      style={{ width: 250, marginTop: 105 }}
                      src="https://cdn-icons-png.flaticon.com/256/552/552721.png"
                      alt="doge"
                    />
                    <div style={{ fontSize: 30, marginTop: 60 }}>
                      <strong>{value}/100</strong>
                    </div>
                  </CircularProgressbarWithChildren>
    
    </>  );
}

export default progressBar;