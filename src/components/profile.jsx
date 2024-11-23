import React from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../App.css";
import "react-circular-progressbar/dist/styles.css";
import "./custom.css";
import Details from "./Details";
import Skills from "./Skills";
import { RecoilRoot } from "recoil";
function Profile({ value, color,userId }) {
  return (
    <RecoilRoot>
      <ProfilePage value={value} color={color} userId={userId}/>
    </RecoilRoot>
  );
}

function ProfilePage({value,color,userId}) {
  return (
    <>
      <div className="container mt-5 pt-5 ml-5 mp-5">
        <div className="container mt-5 pt-5 ml-5 mp-5">
          <div className="row m-4 p-5"></div>
          <div className="row m-4 p-5"></div>
          <div className="row m-4 p-5"></div>
          <div className="row m-4 p-5"></div>
          <div className="container mt-5 pt-5 ml-5 mp-5">
            <div className="row align-items-center mt-5 pt-5 ml-5 mp-5">
              <div className="col-md-6 mt-5 pt-5 d-flex justify-content-start">
                <div style={{ maxWidth: "300px", width: "100%" }}>
                  <CircularProgressbarWithChildren
                    value={value}
                    circleRatio={0.75}
                    styles={{
                      path: {
                        stroke: color,
                        strokeWidth: 4,
                        transform: "rotate(-135deg)",
                        transformOrigin: "center center",
                      },
                      trail: {
                        stroke: `#d6d6d6`,
                        strokeWidth: 4,
                        transform: "rotate(-135deg)", // Align the trail with the path
                        transformOrigin: "center center",
                      },
                    }}
                  >
                    <img
                      style={{ width: 250, marginTop: 105}}
                      src="https://cdn-icons-png.flaticon.com/256/552/552721.png"
                      alt="doge"
                    />
                    <div style={{ fontSize: 30, marginTop: 60 }}>
                      <strong>{value}/100</strong>
                    </div>
                  </CircularProgressbarWithChildren>
                </div>
              </div>

              {/* Second Column in First Row */}
              <div className="col-md-6">
                <Details userId={userId}></Details>
              </div>
            </div>
            <div className="row m-4 p-5"></div>
            <div className="row m-4 p-5"></div>
            <div className="row m-4 p-5"></div>
            <div className="row m-4 p-5"></div>
            <div className="row m-4 p-5"></div>
            <Skills userId={userId}></Skills>
            <div className="row m-4 p-5">
              <p>
                The circular progress bar above demonstrates a visual
                representation of progress for a given task. In this example,
                the progress value is set dynamically using React props, making
                it versatile and reusable. The progress bar displays an 80/100
                score, indicating 80% completion. This type of visualization is
                commonly used in dashboards, performance tracking systems, or
                any application that requires progress monitoring.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;
