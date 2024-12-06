import React from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../App.css";
import "./custom.css";
import Details from "./Details";
import Skills from "./Skills";
import { RecoilRoot } from "recoil";
import TopSkills from "./topSkills";
import Cards from "./Card";

function Profile({ value, color, userId }) {
  return (
    <RecoilRoot>
      <ProfilePage value={value} color={color} userId={userId} />
    </RecoilRoot>
  );
}

function ProfilePage({ value, color, userId }) {
  return (
    <>
      <div
        className="conatiner ml-5 pl-5"
        style={{ marginLeft: "140px", width: "1200px" }}
      >
        {/* Header Section */}
        <div className="container mt-5 pt-5" style={{ marginLeft: "60px" }}>
          <div className="container row mt-5 pt-5 ">
            <div
              className="col-md-4 mt-5 pt-5 mb-5 pb-5"
              style={{
                border: "1px black solid",
                borderRadius: "20px",
                width: "200px",
                backgroundColor: "grey",
                marginTop: "100px",
                marginLeft: "20px",
              }}
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/008/306/791/non_2x/square-with-round-corner-glyph-black-icon-vector.jpg"
                alt="doge"
              />
            </div>
            <div
              className="mb-4 col-md-8 mt-5 pt-5 mb-5 pb-5"
              style={{ marginTop: "30px" }}
            >
              <div
                className="ml-5 pl-5"
                style={{ marginTop: "47px", marginLeft: "30px" }}
              >
                <button
                  className="mt-5 mb-5"
                  style={{
                    border: "1px solid black",
                    backgroundColor: "white",
                    marginTop: "15px",
                    width: "70px",
                    height: "20px",
                    borderRadius: "20px",
                    color: "grey",
                    borderColor: "grey",
                  }}
                >
                  verified
                </button>
                <Details userId={userId}></Details>

                <button
                  className="mt-5"
                  style={{
                    color: "white",
                    backgroundColor: "black",
                    marginTop: "15px",
                    width: "120px",
                    height: "30px",
                    borderRadius: "10px",
                  }}
                >
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container row g-4 ml-5 pl-5">
          <div className="px-5 container ml-5 pl-5">
            <div
              className="col-md-5 pl-5 pr-5 pt-5"
              style={{ marginLeft: "0px" }}
            >
              <div className="px-5 mx-5">
                <h4
                  style={{
                    fontSize: "30px",
                    fontWeight: "600",
                    marginBottom: "10px",
                  }}
                >
                  Top Skills
                </h4>
                <p className="text-muted">
                  Key Skill &nbsp;.{" "}
                  <span style={{ color: "black" }}>
                    &nbsp;&nbsp;Node.js Developer
                  </span>
                </p>
                <ul className="mr-5 pr-5">
                  <li style={{ marginBottom: "15px", marginTop: "15px" }}>
                    <TopSkills value={80} skill="Docker" />
                  </li>
                  <li style={{ marginBottom: "15px" }}>
                    <TopSkills value={70} skill="Node.js" />
                  </li>
                  <li style={{ marginBottom: "15px" }}>
                    <TopSkills value={50} skill="TypeScript" />
                  </li>
                  <li style={{ marginBottom: "15px" }}>
                    <TopSkills value={90} skill="Next.js" />
                  </li>
                  <li style={{ marginBottom: "15px" }}>
                    <TopSkills value={100} skill="Flutter" />
                  </li>
                </ul>
              </div>
              <div className="px-5 mx-5 mt-3">
                <h1
                  style={{
                    fontSize: "30px",
                    fontWeight: "600",
                    marginBottom: "10px",
                    marginTop: "10px",
                  }}
                >
                  Reviews
                </h1>
                <p className="text-muted">
                  4.8 / 5 &nbsp;
                  <span style={{ color: "black" }}>
                    <i class="fa-solid fa-star"></i>
                  </span>
                </p>

                <ul className="pt-5">
                  <li>
                    <p>Jordan k.</p>
                    <p className="text-muted" style={{ maxWidth: "300px" }}>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Illum{" "}
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Center Section */}
            <div className="col-md-4">
              <div
                className=""
                style={{ marginRight: "10px", marginLeft: "-50px" }}
              >
                <h4
                  style={{
                    fontSize: "30px",
                    fontWeight: "600",
                    marginTop: "5px",
                    marginBottom: "15px",
                  }}
                >
                  Scheduled Interviews
                </h4>
                <ul>
                  <li style={{ marginBottom: "13px" }}>
                    <Cards title="Node.js Developer" />
                  </li>
                  <li style={{ marginBottom: "13px" }}>
                    <Cards title="Node.js Developer" />
                  </li>
                  <li style={{ marginBottom: "13px" }}>
                    <Cards title="Node.js Developer" />
                  </li>
                </ul>

                <a href="/" className="text-primary">
                  View All
                </a>
              </div>
            </div>

            <div className="col-md-3">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "-5px",
                  marginLeft: "15px",
                }}
              >
                <h4
                  style={{
                    marginBottom: "-15px",
                    fontSize: "35px",
                    fontWeight: "600",
                    marginRight: "15px",
                  }}
                >
                  Profile Score
                </h4>
                {/* <ProgressBar value={value} color="#fa8072"/>
                 */}
                <div style={{ transform: "scale(0.7)" }}>
                  <CircularProgressbarWithChildren
                    value={value}
                    styles={{
                      path: {
                        stroke: "#fa8072",
                        strokeWidth: 8,
                        transformOrigin: "center center",
                      },
                      trail: {
                        stroke: `var(--text-color7)`,
                        strokeWidth: 8,
                        transformOrigin: "center center",
                      },
                    }}
                  >
                    {/* <img
          style={{ width: 250, marginTop: 105 }}
          src="https://cdn-icons-png.flaticon.com/256/552/552721.png"
          alt="doge"
        /> */}
                    <div style={{ fontSize: 36, marginTop: "340px" }}>
                      <strong>{value} / 100</strong>
                    </div>
                  </CircularProgressbarWithChildren>
                </div>
              </div>
              <hr style={{ marginTop: "25px", fontWeight: "600" }}></hr>
              <p
                style={{ textAlign: "center", marginTop: "15px" }}
                className="text-muted"
              >
                Best Interviewer for
              </p>
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: "500",
                }}
              >
                Flutter Developer
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;
